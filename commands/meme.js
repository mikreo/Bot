module.exports = {
  name: "meme",
  description:"Gives a random meme in an embed.",
  execute(message,args){
    function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)}

var  randNum = randomInt(1,9)

  switch (randomNum) {
    case 1:
      message.channel.send("https://cdn.discordapp.com/attachments/463478570853859330/507795794225528832/image9.jpg");
      break;

    case 2:
      message.channel.send("https://cdn.discordapp.com/attachments/463478570853859330/507795798411575311/image3.jpg");
      break;

    case 3:
      message.channel.send("https://cdn.discordapp.com/attachments/463478570853859330/507900869036212244/image0.jpg");
      break;

    case 4:
      message.channel.send("https://cdn.discordapp.com/attachments/463478570853859330/508301294012989462/image0.jpg");
      break;

    case 5:
      message.channel.send("https://cdn.discordapp.com/attachments/463478570853859330/506647909823938569/image0.jpg");
      break;

    case 6:
      message.channel.send("https://media.discordapp.net/attachments/463478570853859330/506601243070693396/image0.jpg");
      break;

    case 7:
      message.channel.send("https://cdn.discordapp.com/attachments/305794496140935168/512741634543452197/Z.png");
      break;

    case 8:
      message.channel.send("https://cdn.discordapp.com/attachments/305794496140935168/512741735806271498/images.png");
      break;

    case 9:
      message.channel.send("https://cdn.discordapp.com/attachments/305794496140935168/512741953608220702/images.png")


  }













  }




  }
