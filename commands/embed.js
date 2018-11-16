const Discord = require('discord.js');
module.exports = {
  name: "embed",
  description: "Debug. Do not use.",
  execute(message,args){
    const Embeded = new Discord.RichEmbed()
    .setColor('#00ffcc')
    .setTitle('Here is your meme!')

    message.channel.send(Embeded)


  }
}
