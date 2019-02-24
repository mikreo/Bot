const Discord = require('discord.js')
module.exports = {
  name: "meme",
  description:"Gives a random meme in an embed.",
  execute(message,args){
    function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)}

  var randNum = randomInt(1,11)
  const Embed = new Discord.RichEmbed()
  .setColor('#00ffcc')
  .setTitle('Here is your meme!')


  switch (randNum) {
    case 1:
      Embed.setImage('https://cdn.discordapp.com/attachments/463478570853859330/507795794225528832/image9.jpg')
      return message.channel.send(Embed)

    case 2:
      Embed.setImage('https://cdn.discordapp.com/attachments/463478570853859330/507795798411575311/image3.jpg')
      return message.channel.send(Embed);
      break;

    case 3:
      Embed.setImage('https://cdn.discordapp.com/attachments/463478570853859330/507900869036212244/image0.jpg')
      return message.channel.send(Embed);
      break;

    case 4:
      Embed.setImage('https://cdn.discordapp.com/attachments/463478570853859330/508301294012989462/image0.jpg')
      return message.channel.send(Embed);
      break;

    case 5:
      Embed.setImage('https://cdn.discordapp.com/attachments/463478570853859330/506647909823938569/image0.jpg')
      return message.channel.send(Embed);
      break;

    case 6:
      Embed.setImage('https://media.discordapp.net/attachments/463478570853859330/506601243070693396/image0.jpg')
      return message.channel.send(Embed);
      break;

    case 7:
      Embed.setImage('https://cdn.discordapp.com/attachments/305794496140935168/512741634543452197/Z.png')
      return message.channel.send(Embed);
      break;

    case 8:
      Embed.setImage('https://cdn.discordapp.com/attachments/305794496140935168/512741735806271498/images.png')
      return message.channel.send(Embed);
      break;

    case 9:
      Embed.setImage('https://cdn.discordapp.com/attachments/305794496140935168/512741953608220702/images.png')
      return message.channel.send(Embed)
    case 10:
      Embed.setImage('https://cdn.discordapp.com/attachments/463478570853859330/545389510536724510/image0.jpg')
      return message.channel.send(Embed)
    case 11:
      Embed.setImage('https://i.redd.it/fqb3zyx3dbi21.jpg')
      return message.channel.send(Embed);
    default:
      return message.channel.send('Somthing went wrong!')
  }













  }




  }
