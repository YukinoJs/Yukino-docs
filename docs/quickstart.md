# Quick Start Guide

This guide will help you get a basic music bot up and running with Yukino in just a few minutes.

## Prerequisites

Make sure you have:
1. Installed Yukino and Discord.js (`npm install yukino discord.js`)
2. Set up Lavalink (see [Installation Guide](./installation))
3. Created a Discord bot with required intents

## Basic Setup

Create a new file `bot.js` or `bot.ts`:

```typescript
import { Client, GatewayIntentBits } from 'discord.js';
import { YukinoClient } from 'yukino';

// Create Discord.js client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages
  ]
});

// Configure Yukino connection options
const connectorOptions = {
  client,
  host: 'localhost',
  port: 2333,
  auth: 'youshallnotpass',
  secure: false,
  version: 'v4',
  debug: false  // Enable for voice state tracking
};

const nodeOptions = {
  name: 'MainNode',
  url: 'localhost:2333',
  auth: 'youshallnotpass',
  reconnectOptions: {
    maxRetryAttempts: 10,
    retryDelayInMs: 5000
  }
};

// Create Yukino client with enhanced options
const yukino = new YukinoClient(client, connectorOptions, nodeOptions);

// Connect when ready
client.once('ready', () => {
  console.log('Bot is ready!');
  yukino.connect();
});

// Basic error handling
yukino.node.on('nodeError', (error) => {
  console.error('[Lavalink] Node error:', error);
});

yukino.node.on('nodeReady', () => {
  console.log('[Lavalink] Node is ready!');
});

// Login
client.login('YOUR_BOT_TOKEN');
```

## Basic Commands

Add these command handlers to your bot:

```typescript
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  // Play Command
  if (commandName === 'play') {
    const query = interaction.options.getString('song', true);
    const voiceChannel = interaction.member.voice.channel;
    
    if (!voiceChannel) {
      return interaction.reply('You need to be in a voice channel!');
    }
    
    try {
      // Get or create player
      let player = yukino.getPlayer(interaction.guildId);
      
      if (!player) {
        player = await yukino.createPlayer({
          guildId: interaction.guildId,
          voiceChannelId: voiceChannel.id,
          textChannelId: interaction.channelId
        });
      }
      
      // Search for track
      const result = await yukino.loadTrack(query);
      
      if (result.data.length === 0) {
        return interaction.reply('No results found!');
      }
      
      // Add to queue and play
      const track = result.data[0];
      player.queue.add(track);
      
      if (!player.playing) {
        await player.play();
      }
      
      await interaction.reply(
        `Added **${track.info.title}** to the queue!`
      );
    } catch (error) {
      console.error('Play command error:', error);
      await interaction.reply('An error occurred!');
    }
  }
  
  // Pause Command
  if (commandName === 'pause') {
    const player = yukino.getPlayer(interaction.guildId);
    
    if (!player) {
      return interaction.reply('Nothing is playing!');
    }
    
    await player.pause(!player.paused);
    await interaction.reply(
      player.paused ? 'Paused!' : 'Resumed!'
    );
  }
  
  // Skip Command
  if (commandName === 'skip') {
    const player = yukino.getPlayer(interaction.guildId);
    
    if (!player) {
      return interaction.reply('Nothing is playing!');
    }
    
    await player.skip();
    await interaction.reply('Skipped!');
  }
  
  // Stop Command
  if (commandName === 'stop') {
    const player = yukino.getPlayer(interaction.guildId);
    
    if (!player) {
      return interaction.reply('Nothing is playing!');
    }
    
    await player.destroy();
    await interaction.reply('Stopped playback!');
  }
  
  // Queue Command
  if (commandName === 'queue') {
    const player = yukino.getPlayer(interaction.guildId);
    
    if (!player) {
      return interaction.reply('Queue is empty!');
    }
    
    const current = player.current;
    const queue = player.queue.tracks;
    
    let response = '**Now Playing:**\n';
    response += current ? `${current.info.title}\n\n` : 'Nothing\n\n';
    
    if (queue.length > 0) {
      response += '**Queue:**\n';
      response += queue
        .slice(0, 10)
        .map((track, i) => `${i + 1}. ${track.info.title}`)
        .join('\n');
      
      if (queue.length > 10) {
        response += `\n...and ${queue.length - 10} more`;
      }
    }
    
    await interaction.reply(response);
  }
});
```

## Register Slash Commands

Create and register your slash commands:

```typescript
import { REST, Routes, SlashCommandBuilder } from 'discord.js';

const commands = [
  new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play a song')
    .addStringOption(option =>
      option
        .setName('song')
        .setDescription('Song name or URL')
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName('pause')
    .setDescription('Pause/resume playback'),
  new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skip current song'),
  new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stop playback'),
  new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Show current queue')
];

const rest = new REST({ version: '10' }).setToken('YOUR_BOT_TOKEN');

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands('YOUR_CLIENT_ID'),
      { body: commands }
    );
    console.log('Commands registered!');
  } catch (error) {
    console.error('Failed to register commands:', error);
  }
})();
```

## Better Event Handling

Add comprehensive event handlers:

```typescript
// Track events with error handling
yukino.node.on('trackStart', (player, track) => {
  console.log(`[Player] Now playing: ${track.info.title} in guild ${player.guildId}`);
});

yukino.node.on('trackEnd', (player, track, reason) => {
  console.log(
    `[Player] Track ended: ${track.info.title} in guild ${player.guildId} (${reason})`
  );

  // Handle track ending with queue progression
  if (reason !== "REPLACED" && reason !== "STOPPED") {
    const nextTrack = player.queue.next();
    if (nextTrack) {
      player
        .play({ track: nextTrack })
        .catch((err) => console.error("Error playing next track:", err));
    }
  }
});

// WebSocket connection handling
yukino.node.on('wsClosed', (player, data) => {
  console.log(
    `[Voice] WebSocket closed for guild ${player.guildId}: Code ${data?.code}, 
    Reason: ${data?.reason || "Unknown"}`
  );

  // Handle session invalid error
  if (data?.code === 4006) {
    setTimeout(() => {
      if (player?.options.voiceChannelId) {
        player
          .connect()
          .catch((err) => console.error("Reconnection failed:", err));
      }
    }, 2000);
  }
});
```

## Voice State Handling

Add voice state update handling:

```typescript
client.on("voiceStateUpdate", async (oldState, newState) => {
  // Only handle bot events
  if (oldState.member?.user.id !== client.user?.id) return;

  const player = yukino.getPlayer(oldState.guild.id);
  if (!player) return;

  // Bot disconnected
  if (oldState.channelId && !newState.channelId) {
    if (player.playing) {
      await player.connect().catch(() => player.destroy());
    } else {
      await player.destroy();
    }
  }
  // Bot moved
  else if (oldState.channelId !== newState.channelId) {
    player.voiceChannelId = newState.channelId;
  }
});
```

## Run the Bot

1. Start Lavalink:
```bash
java -jar Lavalink.jar
```

2. Start your bot:
```bash
node bot.js
# or with TypeScript
ts-node bot.ts
```

## Next Steps

Now that you have a basic music bot running, you can:

- Add more commands (volume, seek, filters, etc.)
- Implement queue management features
- Add error handling
- Explore advanced features

Check out these guides for more:
- [Core Concepts](./core/client) for detailed API understanding
- [Features](./features/filters) for advanced functionality
- [Advanced Topics](./advanced/custom-filters) for complex use cases