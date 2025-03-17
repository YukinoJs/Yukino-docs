# YukinoClient API

The `YukinoClient` class is the main entry point for interacting with Yukino. It integrates with Discord.js and manages connections to Lavalink.

## Constructor

```typescript
constructor(client: Client, options: ConnectorOptions, nodeOptions: NodeOptions)
```

### Parameters

- `client`: Discord.js Client instance
- `options`: [ConnectorOptions](#connector-options) for configuring the connection
- `nodeOptions`: [NodeOptions](#node-options) for configuring the Lavalink node

### Example

```typescript
import { Client } from 'discord.js';
import { YukinoClient } from 'yukino';

const client = new Client({...});
const yukino = new YukinoClient(client, {
  client,
  auth: 'your-password',
  debug: true
}, {
  name: 'main',
  url: 'localhost:2333',
  auth: 'your-password'
});
```

## Properties

### `connector`
- Type: `Connector`
- Description: The connector instance used for voice state management

### `node`
- Type: `Node`
- Description: The Lavalink node instance

### `players`
- Type: `Map<string, Player>`
- Description: Map of all active players, keyed by guild ID
- Read-only

### `isReady`
- Type: `boolean`
- Description: Whether the Lavalink node is connected and ready
- Read-only

## Methods

### `connect()`
- Returns: `void`
- Description: Connects to the Lavalink node

```typescript
yukino.connect();
```

### `createPlayer(options: PlayerOptions)`
- Returns: `Player`
- Description: Creates a new player for a guild
- Throws: Error if node is not ready

```typescript
const player = yukino.createPlayer({
  guildId: 'guild-id',
  voiceChannelId: 'channel-id',
  textChannelId: 'text-channel-id'
});
```

### `getPlayer(guildId: string)`
- Returns: `Player | undefined`
- Description: Gets an existing player for a guild

```typescript
const player = yukino.getPlayer('guild-id');
if (player) {
  await player.play({...});
}
```

### `getQueue(guildId: string)`
- Returns: `Queue | undefined`
- Description: Gets the queue for a guild's player

```typescript
const queue = yukino.getQueue('guild-id');
if (queue) {
  console.log('Queue size:', queue.size);
}
```

### `loadTrack(query: string)`
- Returns: `Promise<LoadTrackResponse>`
- Description: Loads a track or playlist from a URL or search query

```typescript
const result = await yukino.loadTrack('https://youtube.com/watch?v=...');
if (result.loadType === 'track') {
  await player.play({ track: result.data[0] });
}
```

### `destroy()`
- Returns: `void`
- Description: Destroys all players and disconnects from Lavalink

```typescript
yukino.destroy();
```

## Events

Events are emitted through the node instance:

```typescript
yukino.node.on('nodeReady', () => {
  console.log('Connected to Lavalink!');
});

yukino.node.on('trackStart', (player, track) => {
  console.log(`Now playing: ${track.info.title}`);
});

yukino.node.on('trackEnd', (player, track, reason) => {
  console.log(`Track ended: ${track.info.title}`);
});
```

See [Node Events](../core/node.md#events) for a complete list of events.

## Type Definitions

### ConnectorOptions
```typescript
interface ConnectorOptions {
  client: Client;
  auth: string;
  debug?: boolean;
  name?: string;
  host?: string;
  port?: number | string;
  url?: string;
  secure?: boolean;
  version?: string;
  sessionId?: string;
}
```

### NodeOptions
```typescript
interface NodeOptions {
  name: string;
  url: string;
  auth: string;
  secure?: boolean;
  group?: string;
  reconnectInterval?: number;
  reconnectTries?: number;
  resumeKey?: string | null;
  resumeTimeout?: number;
  version?: string;
  debug?: boolean;
}
```

### PlayerOptions
```typescript
interface PlayerOptions {
  guildId: string;
  voiceChannelId: string;
  textChannelId?: string;
  deaf?: boolean;
  mute?: boolean;
  volume?: number;
  queueOptions?: QueueOptions;
}
```

## TypeScript Integration

YukinoClient adds type definitions to Discord.js's Client:

```typescript
declare module 'discord.js' {
  interface Client {
    yukino: YukinoClient;
  }
}
```

## Debug Mode

When debug is enabled in the options:
- Connection state changes are logged
- Track loading information is displayed
- Voice state updates are tracked
- Errors are logged with stack traces

Example with debug enabled:
```typescript
const yukino = new YukinoClient(client, {
  client,
  auth: 'password',
  debug: true  // Enable debug logging
}, {
  name: 'main',
  url: 'localhost:2333',
  auth: 'password'
});