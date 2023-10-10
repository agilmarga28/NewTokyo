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
        .setURL('https://discord.gg/Eka8GPdgfY'),
      new MessageButton().setLabel('Anonim').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'TokyoMusic',
        iconURL:
          'https://media.discordapp.net/attachments/828997286628556851/1158611410201366548/images_1_13.jpg?ex=651ce076&is=651b8ef6&hm=d10d2d0e478d83848f6f9d1f22dd116eed95eda0fc1c095e09c042e5d43a4d68&',
      })
      .setThumbnail(
        'https://media.discordapp.net/attachments/828997286628556851/1158611410201366548/images_1_13.jpg?ex=651ce076&is=651b8ef6&hm=d10d2d0e478d83848f6f9d1f22dd116eed95eda0fc1c095e09c042e5d43a4d68&',
      )
      .setColor('#303236')
      .addField(
        'Creator',
        '[Anonim]',
        true,
      )
      .addField('Organization', '[Anonim]', true)
      .addField('Repository', '[Here](https://discord.gg/Eka8GPdgfY)', true)
      .addField(
        '\u200b',
        `[Tokyo-music](https://discord.gg/Eka8GPdgfY) is [Rich Music](https://discord.gg/Eka8GPdgfY)'s Was created by Anonim. He really wants to make his first open source project ever. Because he wants more for coding experience. In this project, he was challenged to make project with less bugs. Hope you enjoy using Tokyo-Music!`,
      );
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};