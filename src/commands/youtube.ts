import { Client } from 'tmi.js';
import { Command } from './command';

let cmd:Command = {
    name:"discord",
    alias:["dc"],
    handle(target:string, context:any, msg:string, client:Client) {
        client.say(target, "Trete dem Discord-Server bei: https://discord.gg/7fVXR2g7DG")
    },
}

module.exports = cmd;