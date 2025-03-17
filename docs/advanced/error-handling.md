# Error Handling

Learn how to properly handle errors and implement error recovery in Yukino.

## Common Error Types

### Node Errors
```typescript
yukino.node.on('nodeError', (node, error) => {
  console.error(`Node ${node.name} encountered an error:`, error);
  // Implement recovery logic
});

yukino.node.on('nodeClosed', (node, code, reason) => {
  console.error(`Node ${node.name} closed with code ${code}:`, reason);
  // Handle unexpected disconnects
});
```

### Track Errors
```typescript
yukino.node.on('trackError', (player, track, error) => {
  console.error('Track playback failed:', {
    track: track.info.title,
    error: error.message
  });
  
  // Skip to next track
  player.skip().catch(console.error);
});

yukino.node.on('trackStuck', (player, track, thresholdMs) => {
  console.warn('Track got stuck:', {
    track: track.info.title,
    threshold: thresholdMs
  });
  
  // Skip or retry playback
  player.seek(player.position + 1000).catch(() => player.skip());
});
```

## Practical Error Recovery

### Auto Reconnection
```typescript
// Handle WebSocket disconnects
client.yukino.node.on('wsClosed', (player, data) => {
  if (data?.code === 4006) {
    // Session invalid - attempt reconnect
    setTimeout(() => {
      if (player?.options.voiceChannelId) {
        player.connect().catch(console.error);
      }
    }, 2000);
  }
});
```

### Track Recovery
```typescript
class TrackRecovery {
  private attempts = new Map<string, number>();

  async handleError(player: Player, track: Track) {
    const id = track.encoded;
    const count = (this.attempts.get(id) || 0) + 1;
    this.attempts.set(id, count);

    if (count < 3) {
      // Retry playback from last position
      await player.play({ 
        track, 
        options: { startTime: player.position } 
      });
    } else {
      // Skip after 3 failures
      await player.skip();
      this.attempts.delete(id);
    }
  }
}
```

## Best Practices

1. Implement retry with backoff:
```typescript
async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts = 3,
  baseDelay = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      await new Promise(r => setTimeout(r, baseDelay * Math.pow(2, attempt - 1)));
    }
  }
  throw new Error('Should not reach here');
}
```

2. Handle cleanup properly:
```typescript
process.on('SIGINT', async () => {
  // Gracefully stop all players
  for (const [_, player] of yukino.players) {
    await player.destroy().catch(console.error);
  }
  
  // Disconnect nodes
  for (const [_, node] of yukino.connector.nodes) {
    await node.destroy().catch(console.error);
  }
  
  process.exit(0);
});