# Types Reference

## Constants

### Events
```typescript
enum Events {
  // Node events
  NODE_READY = 'nodeReady',
  NODE_ERROR = 'nodeError',
  NODE_CLOSED = 'nodeClosed',
  NODE_RECONNECT = 'nodeReconnect',
  NODE_STATS = 'nodeStats',
  NODE_EVENT = 'nodeEvent',

  // Player events
  PLAYER_CREATE = 'playerCreate',
  PLAYER_DESTROY = 'playerDestroy',
  PLAYER_UPDATE = 'playerUpdate',
  
  // Track events
  TRACK_START = 'trackStart',
  TRACK_END = 'trackEnd',
  TRACK_ERROR = 'trackError',
  TRACK_STUCK = 'trackStuck',
  
  // Voice events
  VOICE_CONNECTED = 'voiceConnected',
  VOICE_DISCONNECTED = 'voiceDisconnected',
  VOICE_STATE_UPDATE = 'voiceStateUpdate',
  VOICE_SERVER_UPDATE = 'voiceServerUpdate',
  
  // WebSocket events
  WS_CLOSED = 'wsClosed',
  WS_ERROR = 'wsError',
  WS_OPEN = 'wsOpen'
}
```

### LoadTypes
```typescript
enum LoadTypes {
  TRACK_LOADED = 'track',
  PLAYLIST_LOADED = 'playlist',
  SEARCH_RESULT = 'search',
  NO_MATCHES = 'empty',
  LOAD_FAILED = 'error'
}
```

### State
```typescript
enum State {
  CONNECTING = 0,
  CONNECTED = 1,
  DISCONNECTING = 2,
  DISCONNECTED = 3,
  RECONNECTING = 4
}
```

### PlayerStates
```typescript
enum PlayerStates {
  PLAYING = 'playing',
  PAUSED = 'paused',
  IDLE = 'idle'
}
```

## Configuration Interfaces

### ConnectorOptions
```typescript
interface ConnectorOptions {
  client: Client;
  name?: string;
  host?: string;
  port?: number | string;
  url?: string;
  auth: string;
  secure?: boolean;
  version?: string;
  sessionId?: string;
  debug?: boolean;
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
  textChannelId?: string;
  voiceChannelId: string;
  deaf?: boolean;
  mute?: boolean;
  volume?: number;
  queueOptions?: QueueOptions;
}
```

### QueueOptions
```typescript
interface QueueOptions {
  maxSize?: number;
  defaultVolume?: number;
  durationType?: "ms" | "s";
}
```

### RestOptions
```typescript
interface RestOptions {
  url: string;
  auth: string;
  secure?: boolean;
  timeout?: number;
  version?: string;
  debug?: boolean;
}
```

## Filter Interfaces

### FilterOptions
```typescript
interface FilterOptions {
  volume?: number;
  equalizer?: EqualizerBand[];
  karaoke?: KaraokeOptions;
  timescale?: TimescaleOptions;
  tremolo?: FrequencyDepthOptions;
  vibrato?: FrequencyDepthOptions;
  rotation?: RotationOptions;
  distortion?: DistortionOptions;
  channelMix?: ChannelMixOptions;
  lowPass?: LowPassOptions;
}
```

### EqualizerBand
```typescript
interface EqualizerBand {
  band: number;
  gain: number;
}
```

### KaraokeOptions
```typescript
interface KaraokeOptions {
  level?: number;
  monoLevel?: number;
  filterBand?: number;
  filterWidth?: number;
}
```

### TimescaleOptions
```typescript
interface TimescaleOptions {
  speed?: number;
  pitch?: number;
  rate?: number;
}
```

### FrequencyDepthOptions
```typescript
interface FrequencyDepthOptions {
  frequency?: number;
  depth?: number;
}
```

### RotationOptions
```typescript
interface RotationOptions {
  rotationHz?: number;
}
```

### DistortionOptions
```typescript
interface DistortionOptions {
  sinOffset?: number;
  sinScale?: number;
  cosOffset?: number;
  cosScale?: number;
  tanOffset?: number;
  tanScale?: number;
  offset?: number;
  scale?: number;
}
```

### ChannelMixOptions
```typescript
interface ChannelMixOptions {
  leftToLeft?: number;
  leftToRight?: number;
  rightToLeft?: number;
  rightToRight?: number;
}
```

### LowPassOptions
```typescript
interface LowPassOptions {
  smoothing?: number;
}
```

## Track Related Types

### Track
```typescript
interface Track {
  encoded: string;
  info: TrackInfo;
}
```

### TrackInfo
```typescript
interface TrackInfo {
  identifier: string;
  isSeekable: boolean;
  author: string;
  length: number;
  isStream: boolean;
  position: number;
  title: string;
  uri?: string;
  artworkUrl?: string | null;
  sourceName?: string;
  requester?: string;
}
```

### LoadTrackResponse
```typescript
interface LoadTrackResponse {
  loadType: string;
  data: Track[] | null;
  playlistInfo?: {
    name: string;
    selectedTrack?: number;
  };
  exception?: {
    message: string;
    severity: string;
  };
}
```

## Event Types

### LavalinkEvent
```typescript
interface LavalinkEvent {
  op: string;
  type?: string;
  guildId: string;
  [key: string]: any;
}
```

### NodeStats
```typescript
interface NodeStats {
  players: number;
  playingPlayers: number;
  uptime: number;
  memory: {
    free: number;
    used: number;
    allocated: number;
    reservable: number;
  };
  cpu: {
    cores: number;
    systemLoad: number;
    lavalinkLoad: number;
  };
  frameStats?: {
    sent: number;
    nulled: number;
    deficit: number;
  };
}