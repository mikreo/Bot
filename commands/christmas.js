module.exports = {
  name: 'christmas',
  description:'Gives christmasy things.',
  args: true,
  execute(message,args){
    let D = Date()
    let Month = D.getMonth()
    return message.channel.send(Month);}
}
