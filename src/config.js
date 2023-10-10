require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'TOKEN', // your discord bot token
  prefix: process.env.PREFIX || 'PREFIX', // bot prefix
  owner: process.env.OWNERID || ['665165194850336778'], //your discord id
  SpotifyID: process.env.SPOTIFYID || 'cb41529dc3bd4d8f8a240dbee0fff4e8', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || 'bcca82f42930498aa385a8289fdf276b', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://rlx:rlx@rlx1.qqf2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || '#2B2928', // embed colour
  logs: process.env.LOGS || 'CHANNEL_ID', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://dsc.gg/tec-yt',
    invite: process.env.INVITE || 'https://dsc.gg/tec-yt',
    vote: process.env.VOTE || 'https://dsc.gg/tec-yt',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/1028936089555193887/1029023341312487505/musicplayer-home.png'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lava.horizxon.xyz:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'horizxon.xyz',
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
