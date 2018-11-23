const Discord = require('discord.js')
module.exports = {
  name: "meme",
  description:"Gives a random meme in an embed.",
  execute(message,args){
    function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)}

  var randNum = randomInt(1,9)
  const Embeded = new Discord.RichEmbed()
  .setColor('#00ffcc')
  .setTitle('Here is your meme!')


  switch (randNum) {
    case 1:
      Embeded.setImage('https://cdn.discordapp.com/attachments/463478570853859330/507795794225528832/image9.jpg')
      return message.channel.send(Embeded)

    case 2:
      Embeded.setImage('https://cdn.discordapp.com/attachments/463478570853859330/507795798411575311/image3.jpg')
      return message.channel.send(Embeded);
      break;

    case 3:
      Embeded.setImage('https://cdn.discordapp.com/attachments/463478570853859330/507900869036212244/image0.jpg')
      return message.channel.send(Embeded);
      break;

    case 4:
      Embebed.setImage('https://cdn.discordapp.com/attachments/463478570853859330/508301294012989462/image0.jpg')
      return message.channel.send(Embeded);
      break;

    case 5:
      Embeded.setImage('https://cdn.discordapp.com/attachments/463478570853859330/506647909823938569/image0.jpg')
      return message.channel.send(Embeded);
      break;

    case 6:
      Embeded.setImage('https://media.discordapp.net/attachments/463478570853859330/506601243070693396/image0.jpg')
      return message.channel.send(Embebed);
      break;

    case 7:
      Embeded.setImage('https://cdn.discordapp.com/attachments/305794496140935168/512741634543452197/Z.png')
      return message.channel.send(Embeded);
      break;

    case 8:
      Embeded.setImage('https://cdn.discordapp.com/attachments/305794496140935168/512741735806271498/images.png')
      return message.channel.send(Embeded);
      break;

    case 9:
      Embeded.setImage('https://cdn.discordapp.com/attachments/305794496140935168/512741953608220702/images.png')
      return message.channel.send(Embeded)

    default:
      return message.channel.send('Somthing went wrong!')
  }













  }




  }
