const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ('.')

bot.on('ready', function() {
    bot.user.setGame('se faire péter le cul par LaBase');
    console.log('Connected');
});

bot.login('NDY5NjkzMDc5MDYzMTAxNDQ0.DjLhhA.Nxg2ER_V3PMFDpjs1EgI0nK7Eb0')

bot.on('ready', function() {
    bot.user.setGame('se faire péter le cul par LaBase')    
})

bot.on('message', function (message) {
    if (message.content === '.ping') {
        message.channel.send('Pong dans la chatte à ta daronne')
    }
})
