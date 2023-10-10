require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'TOKEN', // your discord bot token
  prefix: process.env.PREFIX || '$', // bot prefix
  owner: process.env.OWNERID || ['665165194850336778'], //your discord id
  SpotifyID: process.env.SPOTIFYID || '6c31645ffb004ab8b44d06f7b96d1b66', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '3618fdc0b4824cfd91a8d425dac32987', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://rlx:rlx@rlx1.qqf2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || '#2B2928', // embed colour
  logs: process.env.LOGS || '1161185802982801420', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/s7SeG7jQXQ',
    invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1148829424796569792&permissions=8&scope=bot%20applications.commands',
    vote: process.env.VOTE || 'none',
    bg: process.env.BG || 'http://media.discordapp.net/attachments/571068093493805067/1158261860995436624/images_1_20.jpg?ex=651b9aeb&is=651a496b&hm=e0d45a9854097986a51c40d24b139edbc00d4cf27496aab6ea036785d17d6ea6&'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'narco.buses.rocks:2269',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'glasshost1984',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value) {
  if (typeof (value) === 'string') {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
