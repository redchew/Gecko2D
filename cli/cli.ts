import * as colors from 'colors';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as C from './const';
import {commands} from './commands';

const inputArgs = process.argv.slice(2);
let commandList:{[key:string]:Command} = {};

export type ActionCallback = (err:Error, args?:string[])=>void;

export interface Command {
    name:string
    alias?:string[]
    usage:string
    action:(args:string[], cb:ActionCallback)=>void
}

export function run(){
    commands.forEach(registerCommand);

    if(!inputArgs.length){
        _showHelp();
        return;
    }

    _processArgs();
}

export function registerCommand(command:Command) {
    commandList[command.name] = command;
    if(command.alias && command.alias.length) {
        command.alias.forEach(cmd => {
            commandList[cmd] = command;
        });
    }
}

function _processArgs(){
    let args = inputArgs;
    _consumeArgs(args);
}

function _consumeArgs(args:string[]){
    if(args.length){
        let cmd = args.shift();
        _runCommand(cmd, args, (err, args)=>{
            if(err){
                console.error(colors.red(err.message));
                if(err.message === "Invalid command."){
                    _showHelp();
                }
                return;
            }

            _consumeArgs(args);
        });
    }
}

function _showHelp() {
    _runCommand("help", [], (err)=>{
        if(err){
            console.error(colors.red(err.message));
        }
    });
}

function _runCommand(cmd:string, args:string[], cb:ActionCallback) {
    let command = commandList[cmd];
    if(!command){
        return cb(new Error("Invalid command."));
    }

    command.action(args, cb);
}