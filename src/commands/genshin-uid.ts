import { Client } from 'tmi.js';
import { Command } from './command';

let cmd:Command = {
    name:"genshin",
    alias:["genshinimpact"],
    handle(target:string, context:any, msg:string, client:Client) {
        client.say(target, "Kikis UID: ")
    },
}

module.exports = cmd;