# API Reference

Yukino's API is organized into several main components:

## Core Components

### [YukinoClient](./yukino-client.md)
The main client class that handles connection to Lavalink and player management.
```typescript
import { YukinoClient } from 'yukino';
```

### [Node](../core/node.md)
Manages the WebSocket connection to Lavalink and handles events.
```typescript
import { Node } from 'yukino';
```

### [Player](../core/player.md)
Handles playback control and audio manipulation for a guild.
```typescript
import { Player } from 'yukino';
```

### [Queue](../core/queue.md)
Manages track queues for players.
```typescript
import { Queue } from 'yukino';
```

### [Rest](./rest.md)
Handles HTTP communication with the Lavalink server.
```typescript
import { Rest } from 'yukino';
```

## Connectors

### [Connector](./connectors.md#base-connector)
Base class for platform-specific connectors.
```typescript
import { Connector } from 'yukino';
```

### [DiscordJSConnector](./connectors.md#discordjs-connector)
Discord.js-specific implementation.
```typescript
import { DiscordJSConnector } from 'yukino';
```

## Filters & Effects

### [FilterUtil](../features/filters.md)
Utility class for audio filters and effects.
```typescript
import { FilterUtil } from 'yukino';
```

## Types & Interfaces

### [Events](./types.md#events)
Event constants used throughout the library.
```typescript
import { Events } from 'yukino';
```

### [LoadTypes](./types.md#load-types)
Track loading result types.
```typescript
import { LoadTypes } from 'yukino';
```

### [State](./types.md#state)
Connection state constants.
```typescript
import { State } from 'yukino';
```

### [PlayerStates](./types.md#player-states)
Player state constants.
```typescript
import { PlayerStates } from 'yukino';
```

### Configuration Interfaces
- [ConnectorOptions](./types.md#connector-options)
- [NodeOptions](./types.md#node-options)
- [PlayerOptions](./types.md#player-options)
- [QueueOptions](./types.md#queue-options)
- [RestOptions](./types.md#rest-options)

### Filter Interfaces
- [FilterOptions](./types.md#filter-options)
- [EqualizerBand](./types.md#equalizer-band)
- [KaraokeOptions](./types.md#karaoke-options)
- [TimescaleOptions](./types.md#timescale-options)
- [FrequencyDepthOptions](./types.md#frequency-depth-options)
- [RotationOptions](./types.md#rotation-options)
- [DistortionOptions](./types.md#distortion-options)
- [ChannelMixOptions](./types.md#channel-mix-options)
- [LowPassOptions](./types.md#low-pass-options)

### Track Related
- [Track](./types.md#track)
- [TrackInfo](./types.md#track-info)
- [LoadTrackResponse](./types.md#load-track-response)

### Utility Types
- [LavalinkEvent](./types.md#lavalink-event)
- [NodeStats](./types.md#node-stats)