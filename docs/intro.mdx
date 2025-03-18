# Introduction

Welcome to Yukino - a modern, feature-rich Lavalink client for Discord.js. Yukino makes it easy to add high-quality audio playback to your Discord bot with minimal setup and maximum flexibility.

## What is Yukino?

Yukino is a TypeScript library that connects your Discord.js bot to a Lavalink server, providing:

- 🎵 High-quality audio streaming
- 🎚️ Advanced audio filters and effects
- 📊 Queue management and track control
- 🔄 Automatic voice state handling
- ⚡ Excellent performance and stability
- 🛡️ Full TypeScript support

## Why Yukino?

### Easy to Use
```typescript
import { Client, GatewayIntentBits } from 'discord.js';
import { YukinoClient } from 'yukino';

// Create Discord.js client with required intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

// Configure Yukino with enhanced options
const connectorOptions = {
  client,
  host: 'localhost',
  port: 2333,
  auth: 'youshallnotpass',
  version: 'v4',
  debug: false
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

// Create Yukino client with resilient configuration
const yukino = new YukinoClient(client, connectorOptions, nodeOptions);

// Create a player and play music
const player = await yukino.createPlayer({
  guildId: 'guild-id',
  voiceChannelId: 'channel-id',
  autoReconnect: true
});

// Search and play with error handling
try {
  const result = await yukino.loadTrack('song name');
  if (result.data[0]) {
    await player.play({ track: result.data[0] });
  }
} catch (error) {
  console.error('Error playing track:', error);
}
```

### Feature Rich
- Load tracks from various sources (YouTube, SoundCloud, etc.)
- Apply real-time audio filters
- Manage queues and playlists
- Handle voice state changes automatically
- Monitor track and player events

### Type Safe
```typescript
// Get full TypeScript support
interface PlayerOptions {
  guildId: string;
  voiceChannelId: string;
  textChannelId?: string;
}

const player = await yukino.createPlayer({
  guildId,      // Type checked!
  voiceChannelId // Type checked!
});
```

### Powerful Audio Control
```typescript
// Apply audio filters
await player.setFilters({
  equalizer: [
    { band: 0, gain: 0.3 },
    { band: 1, gain: 0.2 }
  ],
  volume: 100,
  timescale: {
    speed: 1.2,
    pitch: 1.1
  }
});

// Control playback
await player.pause();
await player.resume();
await player.seek(60000); // Seek to 1 minute
```

### Queue Management
```typescript
// Add tracks to queue
player.queue.add(track);
player.queue.addMany(tracks);

// Control queue
player.queue.shuffle();
player.queue.clear();
player.queue.remove(0);

// Loop modes
player.setLoop('track');   // Loop current track
player.setLoop('queue');   // Loop entire queue
player.setLoop('none');    // Disable looping
```

## Key Concepts

### YukinoClient
The main client that manages the connection to Lavalink and creates players. Configure it with:
- Connector options for basic connection settings
- Node options for advanced features like auto-reconnection
- Debug mode for detailed logging

### Node
Represents a connection to a Lavalink server. Handles:
- Track loading and audio processing
- Connection resilience with retry logic
- Load balancing and failover

### Player
Manages playback for a specific voice channel:
- Auto-reconnection on disconnects
- Voice state tracking
- Queue management
- Audio filter control

### Queue
Handles track organization and playback order for a player.

## Getting Started

Ready to add music to your Discord bot? Follow our [Installation Guide](./installation) to get started!

## Example Bot

Here's a complete example of a simple music bot using Yukino:

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

// Configure Yukino options
const connectorOptions = {
  client,
  host: 'localhost',
  port: 2333,
  auth: 'youshallnotpass',
  version: 'v4',
  debug: false
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

// Create Yukino client
const yukino = new YukinoClient(client, connectorOptions, nodeOptions);

// Error handling
yukino.node.on('nodeError', (error) => {
  console.error('[Lavalink] Node error:', error);
});

yukino.node.on('nodeReady', () => {
  console.log('[Lavalink] Node is ready!');
});

// Handle voice state updates
client.on('voiceStateUpdate', async (oldState, newState) => {
  if (oldState.member?.user.id !== client.user?.id) return;
  
  const player = yukino.getPlayer(oldState.guild.id);
  if (!player) return;

  if (oldState.channelId && !newState.channelId) {
    // Bot was disconnected
    if (player.playing) {
      await player.connect().catch(() => player.destroy());
    } else {
      await player.destroy();
    }
  }
});

// Connect when ready
client.once('ready', () => {
  console.log('Bot is ready!');
  yukino.connect();
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  switch (interaction.commandName) {
    case 'play': {
      const query = interaction.options.getString('song', true);
      const voiceChannel = interaction.member.voice.channel;
      
      if (!voiceChannel) {
        return interaction.reply('Join a voice channel first!');
      }
      
      try {
        // Get or create player
        const player = yukino.getPlayer(interaction.guildId) ||
          await yukino.createPlayer({
            guildId: interaction.guildId,
            voiceChannelId: voiceChannel.id,
            textChannelId: interaction.channelId,
            autoReconnect: true
          });
        
        // Search and play
        const result = await yukino.loadTrack(query);
        if (result.data[0]) {
          if (!player.playing) {
            await player.play({ track: result.data[0] });
            await interaction.reply(
              `Now playing: ${result.data[0].info.title}`
            );
          } else {
            player.queue.add(result.data[0]);
            await interaction.reply(
              `Added to queue: ${result.data[0].info.title}`
            );
          }
        }
      } catch (error) {
        console.error('Play error:', error);
        await interaction.reply('Failed to play track!');
      }
      break;
    }
    
    case 'stop': {
      const player = yukino.getPlayer(interaction.guildId);
      if (player) {
        await player.destroy();
        await interaction.reply('Stopped playback!');
      }
      break;
    }
  }
});

client.login('your-token');
```

## Next Steps

- Follow the [Installation Guide](./installation) to set up Yukino
- Check out the [Quick Start Guide](./quickstart) for basic usage
- Explore [Core Concepts](./core/client) for in-depth understanding
- Browse the [API Reference](./api) for detailed documentation