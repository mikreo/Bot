const fetch = require('node-fetch');
module.exports = {

  name:'cat',
  execute(message, args) {
  const { body } = fetch('https://aws.random.cat/meow').then(response => response.json());
  console.log(body  )
	return message.channel.send(body.file);}










}
