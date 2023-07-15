import * as tmi from 'tmi.js';
import env from './config';
import * as fs from 'fs';

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

const commands:Map<string, any> = new Map();

fs.readdir(__dirname+'/commands', (err, files) => {
    if(err) console.log(err);
    let JSFiles = files.filter(f => f.split(".").pop() === "js");

    if(JSFiles.length <= 0) {
        console.log(`Could not find any loadable commands`);
    }

    console.log(`Loading ${JSFiles.length} Commands`);

    JSFiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${props.name} was successfully loaded`)
        commands.set(props.name, props);
    });

})

const onMessageHandler = (target:string, context:any, msg:string, self:boolean) => {
    if(self) return;
    const cmdName = msg.trim().slice(1);
    let cmdFile = commands.get(cmdName);
    if(!cmdFile) return;
    cmdFile.handle(target, context, msg, client);
}

function onConnectedHandler (addr:any, port:any) {
    console.log(`* Connected to ${addr}:${port}`);
}

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

//git@github.com:MaukiNet/MaukiBotTV.git