module.exports = {
	name: 'joke',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		if (args[0] === '1') {
			return message.channel.send('How does the man on the moon cut his hair?\n Eclipse it!');
		}

		message.channel.send('Which joke do you want?');
	},
};
