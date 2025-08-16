const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    const commands = client.commands.map(cmd => cmd.data.toJSON());
    for (const guild of client.guilds.cache.values()) {
      await guild.commands.set([]);
      await guild.commands.set(commands);
    }
    console.log(
      `Ready! Logged in as ${client.user.tag} in ${client.guilds.cache.size} guild(s)`
    );
  },
};
