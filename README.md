# OPBot

Simple Discord bot built with Node.js and discord.js. Uses slash commands and a modular file structure. Slash commands are registered for each guild on startup so outdated commands are removed automatically.

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file based on `.env.example` and set `DISCORD_TOKEN` and `OWNER_ID`.
3. Start the bot:
   ```
   node index.js
   ```

## Structure

- `commands/` – categorized slash commands (`mod`, `fun`, `admin`, `botowner`)
- `events/` – event handlers like `ready`
- `interaction/` – interaction handler for executing commands
