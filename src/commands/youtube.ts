import { Client } from 'tmi.js';
import { Command } from './command';

let cmd:Command = {
    name:"youtube",
    alias:["yt"],
    handle(target:string, context:any, msg:string, client:Client) {
        client.say(target, "Schau' dir Kikis YouTube-Kanal an: https://www.youtube.com/@kikiyt")
    },
}

module.exports = cmd;