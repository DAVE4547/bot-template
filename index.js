const fs = require('fs'); // file system
const Discord = require('discord.js'); // discord.js
const { prefix, id, token} = require('./settings.json'); // settings from config file
const mysql = require('mysql'); // mysql

const client = new Discord.Client(); // create discord client
client.commands = new Discord.Collection();

// command handler
const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: [prefix]
});

// trigger on startup
client.once('ready', () => {
    console.log('system ready...\n');
        client.user.setPresence({
            game: { 
				name: `text`,
                type: 'WATCHING'
            }
    	})
    client.user.setStatus('dnd')

})

// commands
client.on("message", (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;
 
    try{
        cmd.run(client,message,args,mysql,con,id)
    }catch(e){
        console.log(e)
	}
 
});


/////////////////////////////////////////////////////////////////////////////
client.login(token);
/////////////////////////////////////////////////////////////////////////////
