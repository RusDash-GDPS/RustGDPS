const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log('RusDash Бот Готов Служить Клиентам!');
})

client.login("MTA3MzUwNTQ2NDY0NzY5NjQzNA.GiHr_P.ifoqSg-m33KlT7Kdxin3ALtz1UyWhVGFCQrwV8");
