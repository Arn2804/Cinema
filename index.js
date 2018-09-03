const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "."

client.login("NDg0NDU3ODIwNjM3NjI2Mzk4.DmiTrQ.XNeoA5AGSZ8IGwF3bGTAsgU0n4M");

client.on("ready", () => {
    console.log("Démarrage reussi.")
});

client.on('message', msg => {
    if (msg.content === 'Bonjour') {
        msg.reply('Comment va tu ?')
    }
});

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "general").send(`**Bienvenue ${member}.**`)
});

client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
});
