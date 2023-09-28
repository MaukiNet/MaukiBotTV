import * as tmi from 'tmi.js';
import * as fs from 'fs';
import env from './config';

import { isServer } from './config';
import { Command } from './commands/command';

const startup_time = new Date();
const log_name = `${startup_time.getFullYear()}.${startup_time.getMonth()}.${startup_time.getDay()}_${startup_time.getHours()}-${startup_time.getMinutes()}-${startup_time.getSeconds()}`

if(!fs.existsSync(__dirname.replace(`${isServer() ? "/MaukiBotTV/dist" : "\\dist"}`, "/logs"))) {
    fs.mkdirSync(__dirname.replace(`${isServer() ? "/MaukiBotTV/dist" : "\\dist"}`, "/logs"));
}
fs.writeFileSync(__dirname.replace(`${isServer() ? "/MaukiBotTV/dist" : "\\dist"}`, "/logs/latest.txt"), "");

export function log(str: string): void {
    const current_date = new Date();
    var new_string = `[${current_date.getHours()}:${current_date.getMinutes()}:${current_date.getSeconds()}] ${str}\n`;

    fs.appendFileSync(__dirname.replace(`${isServer() ? "/MaukiBotTV/dist" : "\\dist"}`, "/logs/"+log_name+".txt"), new_string);
    fs.appendFileSync(__dirname.replace(`${isServer() ? "/MaukiBotTV/dist" : "\\dist"}`, "/logs/"+"latest.txt"), new_string);
    console.log(str);
}

if(typeof env.PASSWORD != 'string') process.exit(0);

const opts = {
    identity: {
        username: 'maukibottv',
        password: env.PASSWORD
    },
    channels: [
        'kikiyt90'
    ]
}

const client = new tmi.client(opts);

const commands:Map<string, Command> = new Map();

fs.readdir(__dirname+'/commands', (err, files) => {
    if(err) log(err.message);
    let JSFiles = files.filter(f => f.split(".").pop() === "js");

    if(JSFiles.length <= 0) {
        log(`Could not find any loadable commands`);
    }

    log(`Loading ${JSFiles.length} Commands`);

    JSFiles.forEach((f, i) => {
        if(f == "command.js") return;
        let props:Command = require(`./commands/${f}`);
        log(`${props.name} was successfully loaded`)
        commands.set(props.name, props);
        if(props.alias == null) return;
        props.alias.forEach((alias) => {
            commands.set(alias, props);
        })
    });

})

function onMessageHandler(target:string, context:any, msg:string, self:boolean): void {
    if(self) return;
    const cmdName = msg.trim().slice(1);
    let cmdFile = commands.get(cmdName);
    if(!cmdFile) return;
    cmdFile.handle(target, context, msg, client);
}

function onConnectedHandler(addr:any, port:any): void {
    log(`* Connected to ${addr}:${port}`);
}

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();