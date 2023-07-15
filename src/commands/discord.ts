import * as tmi from 'tmi.js';

module.exports.handle = (target:string, context:any, msg:string, client:tmi.Client) => {
    client.say(target, "Trete dem Discord-Server bei: https://discord.gg/7fVXR2g7DG")
}

module.exports.name = 'discord';