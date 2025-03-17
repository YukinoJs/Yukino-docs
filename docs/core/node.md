# Node

A Node in Yukino represents a connection to a Lavalink server. It handles track loading, audio processing, and manages the WebSocket connection to the Lavalink server.

## Node Configuration

```typescript
interface NodeOptions {
  name: string;          // Unique identifier for the node
  url: string;          // URL of the Lavalink server
  auth: string;         // Password for the Lavalink server
  secure?: boolean;     // Whether to use WSS/HTTPS
  group?: string;       // Group identifier for region-based routing
  retryAmount?: number; // Number of reconnection attempts
  retryDelay?: number;  // Delay between retries in milliseconds
  reconnectOptions?: {  // Enhanced reconnection settings
    maxRetryAttempts: number; // Maximum number of retry attempts
    retryDelayInMs: number;   // Delay between retries
  }
}
```

## Node States

A node can be in one of these states:
- `CONNECTING` - Initial connection attempt
- `CONNECTED` - Successfully connected
- `DISCONNECTED` - Connection lost
- `RECONNECTING` - Attempting to reconnect
- `DESTROYED` - Node has been destroyed

## Connection Management

### Manual Connection
```typescript
// Connect to a node
await node.connect();

// Disconnect from a node
await node.disconnect();

// Destroy a node (permanent disconnect)
await node.destroy();
```

### Auto-Reconnection
Nodes automatically attempt to reconnect when disconnected:
```typescript
// Configure reconnection behavior
const node = yukino.addNode({
  name: 'main',
  url: 'localhost:2333',
  auth: 'password',
  retryAmount: 5,    // Try 5 times
  retryDelay: 5000   // Wait 5 seconds between attempts
});

// Listen for reconnection attempts
node.on('reconnecting', (attempt) => {
  console.log(`Reconnection attempt ${attempt}`);
});
```

## Track Loading

### Load Tracks
```typescript
// Load a single track
const track = await node.loadTrack('youtube:dQw4w9WgXcQ');

// Load a playlist
const playlist = await node.loadTrack('youtube:PLplaylist_id');

// Search for tracks
const results = await node.loadTrack('ytsearch:never gonna give you up');
```

### Track Loading Response
```typescript
interface LoadTrackResponse {
  loadType: 'TRACK_LOADED' | 'PLAYLIST_LOADED' | 'SEARCH_RESULT' | 'NO_MATCHES' | 'LOAD_FAILED';
  playlistInfo?: {
    name: string;
    selectedTrack: number;
  };
  tracks: Track[];
  exception?: {
    message: string;
    severity: 'COMMON' | 'SUSPICIOUS' | 'FAULT';
  };
}
```

## Resource Management

### Memory Management
```typescript
// Get node stats
const stats = await node.getStats();
console.log('Memory used:', stats.memory.used);
console.log('Memory allocated:', stats.memory.allocated);
console.log('Memory reservable:', stats.memory.reservable);

// Monitor memory usage
node.on('stats', (stats) => {
  const memoryUsage = (stats.memory.used / stats.memory.allocated) * 100;
  if (memoryUsage > 90) {
    console.warn(`High memory usage on node ${node.name}: ${memoryUsage}%`);
  }
});
```

### CPU Management
```typescript
// Get CPU stats
const stats = await node.getStats();
console.log('CPU cores:', stats.cpu.cores);
console.log('System load:', stats.cpu.systemLoad);
console.log('Lavalink load:', stats.cpu.lavalinkLoad);

// Monitor CPU usage
node.on('stats', (stats) => {
  if (stats.cpu.systemLoad > 80) {
    console.warn(`High CPU usage on node ${node.name}`);
  }
});
```

## Error Handling

### Connection Errors
```typescript
node.on('error', (error) => {
  if (error.code === 'ECONNREFUSED') {
    console.error('Failed to connect to Lavalink server');
  } else if (error.code === 'AUTHENTICATION_FAILED') {
    console.error('Invalid password');
  }
});
```

### Track Load Errors
```typescript
try {
  const result = await node.loadTrack('invalid:url');
} catch (error) {
  if (error.loadType === 'LOAD_FAILED') {
    console.error('Failed to load track:', error.exception.message);
  }
}
```

## Performance Monitoring

### Frame Statistics
```typescript
node.on('stats', (stats) => {
  // Monitor frame statistics
  console.log('Frames sent:', stats.frames.sent);
  console.log('Frames nulled:', stats.frames.nulled);
  console.log('Frames deficit:', stats.frames.deficit);
});
```

### Player Statistics
```typescript
node.on('stats', (stats) => {
  // Monitor player counts
  console.log('Total players:', stats.players);
  console.log('Playing players:', stats.playingPlayers);
});
```

## Advanced Features

### Custom REST Routes
```typescript
// Define custom REST route
node.defineRoute({
  method: 'GET',
  path: '/custom/route',
  handler: async () => {
    // Custom logic
    return { status: 'ok' };
  }
});

// Use custom route
const response = await node.makeRequest('/custom/route');
```

### Version Compatibility
```typescript
// Check Lavalink version
const version = await node.getVersion();
console.log('Lavalink version:', version);

// Check version compatibility
if (version.major < 3) {
  console.warn('This version of Lavalink is not fully supported');
}
```

### Load Balancing
```typescript
// Get node penalties
const penalties = node.penalties;
console.log('CPU penalty:', penalties.cpu);
console.log('Memory penalty:', penalties.memory);
console.log('Deficit penalty:', penalties.deficit);
console.log('Total penalty:', penalties.total);

// Custom penalty calculation
node.setPenaltyProvider(() => {
  const stats = node.stats;
  return (stats.cpu.systemLoad * 0.6) + (stats.memory.used / stats.memory.allocated * 0.4);
});
```