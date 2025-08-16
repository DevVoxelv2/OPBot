const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('eval')
    .setDescription('Evaluates JavaScript code (bot owner only)')
    .addStringOption(option =>
      option.setName('code').setDescription('The code to evaluate').setRequired(true)
    ),
  async execute(interaction) {
    if (interaction.user.id !== process.env.OWNER_ID) {
      return interaction.reply({ content: 'You cannot use this command.', ephemeral: true });
    }
    const code = interaction.options.getString('code');
    try {
      const result = eval(code);
      await interaction.reply({ content: `Result: ${result}`, ephemeral: true });
    } catch (err) {
      await interaction.reply({ content: `Error: ${err}`, ephemeral: true });
    }
  },
};
