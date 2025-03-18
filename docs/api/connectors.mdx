# Connectors

Connectors handle the integration between Yukino and Discord client libraries. They manage voice state updates and server updates.

## Base Connector

The `Connector` class is the base class for platform-specific implementations.

### Properties

```typescript
abstract class Connector extends EventEmitter {
  public clientId: string;
  public nodes: Map<string, Node>;
  public voiceStates: Map<string, any>;
  public voiceServers: Map<string, any>;
  protected options: Required<ConnectorOptions>;
}
```

### Methods

#### `createNode(options: NodeOptions)`
Creates a new Lavalink node instance.
```typescript
const node = connector.createNode({
  name: 'main',
  url: 'localhost:2333',
  auth: 'password'
});
```

#### `destroyNode(node: Node)`
Destroys and removes a node instance.
```typescript
connector.destroyNode(node);
```

#### `createPlayer(options: PlayerOptions)`
Creates a new player instance.
```typescript
const player = connector.createPlayer({
  guildId: 'guild-id',
  voiceChannelId: 'channel-id'
});
```

#### `destroyPlayer(player: Player)`
Destroys and cleans up a player instance.
```typescript
await connector.destroyPlayer(player);
```

#### `loadTrack(query: string)`
Loads a track from a URL or search query.
```typescript
const result = await connector.loadTrack('search query');
```

## DiscordJSConnector

The `DiscordJSConnector` class implements the base `Connector` for Discord.js.

### Constructor
```typescript
import { Client } from 'discord.js';
import { DiscordJSConnector } from 'yukino';

const connector = new DiscordJSConnector({
  client: client,
  auth: 'password',
  debug: true
});
```

### Voice State Management

The connector automatically handles voice state and server updates from Discord:

```typescript
// These are handled internally
client.on('voiceStateUpdate', (oldState, newState) => {
  connector.handleVoiceStateUpdate(newState);
});

client.on('voiceServerUpdate', (data) => {
  connector.handleVoiceServerUpdate(data);
});
```

### Voice Connection

#### `sendVoiceUpdate(guildId: string, channelId: string | null, mute?: boolean, deaf?: boolean)`
Sends voice state updates to Discord.
```typescript
// Join a voice channel
await connector.sendVoiceUpdate('guild-id', 'channel-id', false, false);

// Leave a voice channel
await connector.sendVoiceUpdate('guild-id', null);
```

## Creating Custom Connectors

You can create custom connectors for other Discord library implementations by extending the base `Connector` class:

```typescript
import { Connector } from 'yukino';

class CustomConnector extends Connector {
  constructor(options: ConnectorOptions) {
    super(options);
    // Initialize your custom connector
  }

  public async sendVoiceUpdate(
    guildId: string,
    channelId: string | null,
    mute?: boolean,
    deaf?: boolean
  ): Promise<void> {
    // Implement voice state update logic for your library
  }
}
```

### Required Implementations

Custom connectors must implement:

1. Voice state update handling
2. Voice server update handling
3. Client ID management
4. Voice channel connection/disconnection

### Example: Minimal Custom Connector

```typescript
class MinimalConnector extends Connector {
  private client: any; // Your client type

  constructor(options: ConnectorOptions) {
    super(options);
    this.client = options.client;
    
    // Set up event listeners
    this.client.on('voiceStateUpdate', this.onVoiceStateUpdate.bind(this));
    this.client.on('voiceServerUpdate', this.onVoiceServerUpdate.bind(this));
  }

  private onVoiceStateUpdate(data: any): void {
    this.voiceStates.set(data.guild_id, {
      sessionId: data.session_id,
      channelId: data.channel_id,
      userId: data.user_id
    });
    
    this.updateVoiceState(data.guild_id);
  }

  private onVoiceServerUpdate(data: any): void {
    this.voiceServers.set(data.guild_id, {
      token: data.token,
      endpoint: data.endpoint
    });
    
    this.updateVoiceState(data.guild_id);
  }

  private updateVoiceState(guildId: string): void {
    const state = this.voiceStates.get(guildId);
    const server = this.voiceServers.get(guildId);
    
    if (state && server) {
      // Update the node with new voice state
      const node = this.nodes.values().next().value;
      if (node) {
        node.updateVoiceState(guildId, state, server);
      }
    }
  }

  public async sendVoiceUpdate(
    guildId: string,
    channelId: string | null,
    mute = false,
    deaf = false
  ): Promise<void> {
    await this.client.updateVoiceState({
      guild_id: guildId,
      channel_id: channelId,
      self_mute: mute,
      self_deaf: deaf
    });
  }
}
```

## Best Practices

1. Handle voice state cleanup:
```typescript
class BetterConnector extends Connector {
  public destroy(): void {
    this.voiceStates.clear();
    this.voiceServers.clear();
    this.nodes.clear();
  }
}
```

2. Implement error handling:
```typescript
class RobustConnector extends Connector {
  public async sendVoiceUpdate(...args): Promise<void> {
    try {
      await super.sendVoiceUpdate(...args);
    } catch (error) {
      this.emit('error', error);
      throw error;
    }
  }
}
```

3. Add debug logging:
```typescript
class DebugConnector extends Connector {
  private logger: Logger;

  constructor(options: ConnectorOptions) {
    super(options);
    this.logger = Logger.create('Connector', options.debug || false);
  }

  protected onVoiceStateUpdate(data: any): void {
    this.logger.debug('Voice state update:', data);
    super.onVoiceStateUpdate(data);
  }
}