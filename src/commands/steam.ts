import { Client } from 'tmi.js';
import { Command } from './command';

let cmd:Command = {
    name:"steam",
    alias:[],
    handle(target:string, context:any, msg:string, client:Client) {
        client.say(target, "Kikis Steam Freundescode: 1052093715")
    },
}

module.exports = cmd;