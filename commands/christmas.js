module.exports = {
  name: 'christmas',
  description:'Gives christmasy things.',
  execute(message,args){
    let D = Date()
    let Month = D.getMonth()
    return message.channel.send(Month);}
}
