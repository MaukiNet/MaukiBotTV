import * as tmi from 'tmi.js';

export interface Command {
    name: string,
    alias: string[]
    handle(target:string, context:any, msg:string, client:tmi.Client): void;
}