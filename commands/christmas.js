module.exports = {
  name: 'christmas',
  description:'Gives christmasy things.',
  args: true,
  execute(message,args){
    let D = new Date()
    let Month = D.getMonth()
    if (Month == 11) {
      if (args[0]=='joke') {
        switch (args[1]) {
          case '1':
            return message.channel.send('What do you call an old snowman?\nWater!')
            break;
          default:

        }
      }



    } else {
      return message.channel.send('It\'s not even december.')
    }
  }
}
