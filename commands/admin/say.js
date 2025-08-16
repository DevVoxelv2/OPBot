const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Replies with your input.')
    .addStringOption(option =>
      option.setName('message').setDescription('The message to send').setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const message = interaction.options.getString('message');
    await interaction.reply({ content: message });
  },
};
