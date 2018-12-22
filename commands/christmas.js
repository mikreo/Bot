module.exports = {
  name: 'christmas',
  description:'Gives christmasy things.',
  execute(message,args){
    let D = new Date()
    let Month = D.getMonth()
    return message.channel.send(Month);}
}
