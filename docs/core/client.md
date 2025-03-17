# Client

The `YukinoClient` is the core class that manages your bot's connection to Lavalink and handles all audio operations.

## Creating a Client

```typescript
import { Client } from 'discord.js';
import { YukinoClient } from 'yukino';

const yukino = new YukinoClient(client, {
  auth: 'your-password',
  debug: true,
  // Custom options
  reconnectInterval: 5000,
  reconnectTries: 3
});
```

## Configuration Options

### Required Options
- `auth` - The password for your Lavalink server
- `client` - Your Discord.js client instance

### Optional Options
- `debug` - Enable debug logging (default: false)
- `reconnectInterval` - Time between reconnect attempts in ms (default: 5000)
- `reconnectTries` - Number of reconnect attempts (default: 3)
- `defaultSearchPlatform` - Platform to search on when no source is specified (default: 'youtube')
- `userAgent` - Custom user agent for REST requests

## Node Management

### Adding Nodes
```typescript
// Add a single node
yukino.addNode({
  name: 'main',
  url: 'localhost:2333',
  auth: 'your-password',
  secure: false
});

// Add multiple nodes
yukino.addNodes([
  {
    name: 'node1',
    url: 'node1.example.com:2333',
    auth: 'password1',
    secure: true
  },
  {
    name: 'node2',
    url: 'node2.example.com:2333',
    auth: 'password2',
    secure: true
  }
]);
```

### Node Selection
Yukino automatically selects the best node for each player based on:
- Load balancing
- Node status
- Node penalty (calculated from CPU/memory usage)

You can customize node selection:
```typescript
yukino.setNodeSelector((nodes, guildId) => {
  // Custom node selection logic
  return nodes.sort((a, b) => 
    (a.stats.cpu / a.stats.memory) - (b.stats.cpu / b.stats.memory)
  )[0];
});
```

## Player Management

### Creating Players
```typescript
const player = await yukino.createPlayer({
  guildId: 'guild-id',
  voiceChannelId: 'channel-id',
  textChannelId: 'text-channel-id', // Optional
  deaf: true,  // Whether to deafen the bot
  mute: false,  // Whether to mute the bot
  autoReconnect: true  // Automatically reconnect on disconnect
});
```

### Getting Players
```typescript
// Get a specific player
const player = yukino.getPlayer('guild-id');

// Get all players
const players = yukino.players;

// Check if a guild has a player
const hasPlayer = yukino.hasPlayer('guild-id');
```

### Destroying Players
```typescript
// Destroy a specific player
await yukino.destroyPlayer('guild-id');

// Destroy all players
await yukino.destroyAllPlayers();
```

## Track Loading

### Loading Tracks
```typescript
// Load a track by search query
const result = await yukino.loadTrack('never gonna give you up');

// Load a track by URL
const result = await yukino.loadTrack('https://youtube.com/watch?v=dQw4w9WgXcQ');

// Load a playlist
const result = await yukino.loadTrack('https://youtube.com/playlist?list=...');
```

### Search Options
```typescript
const result = await yukino.loadTrack('your query', {
  // Specify search source
  source: 'youtube', // 'youtube', 'soundcloud', etc.
  
  // Add additional context
  context: {
    requester: 'user-id',
    guild: 'guild-id'
  }
});
```

## Event Handling

### Node Events
```typescript
// Node connected
yukino.node.on('nodeConnect', (node) => {
  console.log(`Node ${node.name} connected`);
});

// Node disconnected
yukino.node.on('nodeDisconnect', (node, reason) => {
  console.log(`Node ${node.name} disconnected:`, reason);
});

// Node error
yukino.node.on('nodeError', (node, error) => {
  console.error(`Node ${node.name} error:`, error);
});
```

### Track Events
```typescript
// Track started
yukino.node.on('trackStart', (player, track) => {
  console.log(`Playing ${track.info.title}`);
});

// Track ended
yukino.node.on('trackEnd', (player, track) => {
  console.log(`Finished ${track.info.title}`);
});

// Track stuck
yukino.node.on('trackStuck', (player, track, thresholdMs) => {
  console.warn(`Track ${track.info.title} stuck for ${thresholdMs}ms`);
});

// Track error
yukino.node.on('trackError', (player, track, error) => {
  console.error(`Error playing ${track.info.title}:`, error);
});
```

### Voice Events
```typescript
// Voice state update
yukino.node.on('voiceStateUpdate', (state) => {
  console.log('Voice state updated:', state);
});

// Voice server update
yukino.node.on('voiceServerUpdate', (server) => {
  console.log('Voice server updated:', server);
});
```

## Error Handling

### Client Level Error Handling
```typescript
yukino.on('error', (error) => {
  console.error('Client error:', error);
});

yukino.on('warn', (warning) => {
  console.warn('Client warning:', warning);
});

// Handle specific errors
yukino.on('nodeError', (node, error) => {
  if (error.code === 'ECONNREFUSED') {
    console.error(`Failed to connect to node ${node.name}`);
  }
});
```

### Player Level Error Handling
```typescript
const player = await yukino.createPlayer({
  guildId: 'guild-id',
  voiceChannelId: 'channel-id'
});

player.on('error', (error) => {
  console.error('Player error:', error);
});

// Handle track errors
player.on('trackError', (track, error) => {
  console.error(`Error playing ${track.info.title}:`, error);
  // Skip to next track
  player.skip().catch(console.error);
});
```

## Advanced Usage

### Custom REST Options
```typescript
const yukino = new YukinoClient(client, {
  auth: 'your-password',
  rest: {
    timeout: 10000,
    retries: 3,
    headers: {
      'User-Agent': 'MyBot/1.0.0'
    }
  }
});
```

### Node Groups
```typescript
// Create node groups for different regions
yukino.addNodes([
  {
    name: 'us-east',
    url: 'us1.example.com:2333',
    group: 'us'
  },
  {
    name: 'us-west',
    url: 'us2.example.com:2333',
    group: 'us'
  },
  {
    name: 'eu-central',
    url: 'eu1.example.com:2333',
    group: 'eu'
  }
]);

// Select nodes by group
yukino.setNodeSelector((nodes, guildId) => {
  const guild = client.guilds.cache.get(guildId);
  const region = guild.preferredLocale.includes('en-US') ? 'us' : 'eu';
  
  return nodes
    .filter(node => node.group === region)
    .sort((a, b) => a.penalties - b.penalties)[0];
});
```

### State Management
```typescript
// Get client state
console.log('Version:', yukino.version);
console.log('Connected:', yukino.isReady);
console.log('Total players:', yukino.players.size);
console.log('Total nodes:', yukino.nodes.size);

// Get detailed stats
const stats = yukino.getLavaStats();
console.log('Players:', stats.players);
console.log('Playing players:', stats.playingPlayers);
console.log('Uptime:', stats.uptime);
console.log('Memory usage:', stats.memory);
console.log('CPU usage:', stats.cpu);
```