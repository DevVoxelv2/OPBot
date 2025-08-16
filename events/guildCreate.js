const { Events } = require('discord.js');

module.exports = {
  name: Events.GuildCreate,
  async execute(guild, client) {
    const commands = client.commands.map(cmd => cmd.data.toJSON());
    await guild.commands.set([]);
    await guild.commands.set(commands);
    console.log(`Registered commands for new guild ${guild.name}`);
  },
};
