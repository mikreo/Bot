const fs = require('fs')
const {prefix, token} = require('./config.json')
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
});




client.on('message', message => {
  if (message.content=='Memes diss me.'){
    message.channel.send(`${message.author}, you have an alien hairline.`)}



  if (!message.content.startsWith(prefix)||message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
try {
    command.execute(message, args);
}
catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command!');}});








client.login(token);
