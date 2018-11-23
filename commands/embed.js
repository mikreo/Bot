const Discord = require('discord.js');
module.exports = {
  name: "embed",
  description: "Debug.",
  execute(message,args){
    const Embeded = new Discord.RichEmbed()
    .setColor('#00ffcc')
    .setTitle('Here is your meme!')
    .setImage('https://cdn.discordapp.com/attachments/463478570853859330/507795794225528832/image9.jpg')
    message.channel.send(Embeded)


  }
}
