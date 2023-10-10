const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'about',
  category: 'Information',
  aliases: ['botinfo'],
  description: 'See description about this project',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Tokyo-Bot').setStyle('LINK').setURL(client.config.links.invite),
      new MessageButton()
        .setLabel('Community')
        .setStyle('LINK')
        .setURL('https://discord.gg/s7SeG7jQXQ'),
      new MessageButton().setLabel('Anonim').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'TokyoMusic',
        iconURL:
        'https://media.discordapp.net/attachments/571068093493805067/1161183666857328640/20231008_161949.jpg?ex=65375f8f&is=6524ea8f&hm=b3c092a5ae2c6556bbb77733e2c0d4321a2c0796c1a676232b7a9545661d9071&',
      })
      .setThumbnail(
        'https://media.discordapp.net/attachments/571068093493805067/1161183666857328640/20231008_161949.jpg?ex=65375f8f&is=6524ea8f&hm=b3c092a5ae2c6556bbb77733e2c0d4321a2c0796c1a676232b7a9545661d9071&',
      )
      .setColor('#303236')
      .addField(
        'Creator',
        '[Anonim]',
        true,
      )
      .addField('Organization', '[Anonim]', true)
      .addField('Repository', '[Here](https://discord.gg/s7SeG7jQXQ)', true)
      .addField(
        '\u200b',
        `[Tokyo-music](https://discord.gg/s7SeG7jQXQ) is [Rich Music](https://discord.gg/s7SeG7jQXQ)'s Was created by Anonim. He really wants to make his first open source project ever. Because he wants more for coding experience. In this project, he was challenged to make project with less bugs. Hope you enjoy using Tokyo-Music!`,
      );
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};
