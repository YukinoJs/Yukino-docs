# Logger

The Logger utility class provides consistent logging format and debug mode control across Yukino.

## Creating a Logger

```typescript
// Basic logger creation
const logger = new Logger('[MyComponent]', true);  // debug mode enabled

// Using static create method
const logger = Logger.create('MyComponent', true);

// Create child logger
const childLogger = logger.createChildLogger('[SubComponent]');
```

## Logging Methods

### Debug Messages
Only logged when debug mode is enabled:
```typescript
logger.debug('Connecting to voice channel...');
logger.debug('Player state changed:', { playing: true, volume: 100 });
```

### Info Messages
Always logged:
```typescript
logger.info('Track started playing:', track.title);
logger.info('Queue updated - tracks:', queue.length);
```

### Warning Messages
Always logged:
```typescript
logger.warn('Voice connection unstable');
logger.warn('High resource usage:', { cpu: '80%', memory: '1GB' });
```

### Error Messages
Always logged:
```typescript
logger.error('Failed to load track:', error);
logger.error('Connection failed:', { code: 4006, reason: 'Session invalid' });
```

## Practical Examples

### Component Logger
```typescript
class VoiceManager {
  private logger: Logger;

  constructor(debug: boolean = false) {
    this.logger = Logger.create('VoiceManager', debug);
  }

  async connect(channelId: string) {
    this.logger.debug('Connecting to channel:', channelId);
    try {
      // Connection logic...
      this.logger.info('Successfully connected to voice channel');
    } catch (error) {
      this.logger.error('Failed to connect:', error);
      throw error;
    }
  }
}
```

### Hierarchical Logging
```typescript
// Parent logger
const mainLogger = Logger.create('Player', true);

// Child loggers for specific features
const voiceLogger = mainLogger.createChildLogger('[Voice]');
const queueLogger = mainLogger.createChildLogger('[Queue]');

voiceLogger.info('Connected to channel');  // Logs: [Player][Voice] Connected to channel
queueLogger.debug('Added track');          // Logs: [Player][Queue] Added track
```

### Debug Mode Control
```typescript
const logger = Logger.create('AudioEngine', process.env.DEBUG === 'true');

// Only logs in debug mode
logger.debug('Filter processing:', { type: 'bassboost', gain: 0.5 });

// Always logs
logger.info('Audio processing completed');

// Check debug status
if (logger.isDebug()) {
  // Perform additional debug operations
}
```

## Best Practices

1. Create loggers at component initialization:
```typescript
class AudioPlayer {
  private logger: Logger;

  constructor(options: PlayerOptions) {
    this.logger = Logger.create('Player', options.debug);
  }
}
```

2. Use appropriate log levels:
```typescript
// Debug for detailed diagnostics
logger.debug('Track buffer status:', bufferState);

// Info for normal operations
logger.info('Track started playing:', trackTitle);

// Warn for concerning but non-fatal issues
logger.warn('Voice packet loss detected');

// Error for failures
logger.error('Failed to decode audio stream:', error);
```

3. Include context in log messages:
```typescript
logger.info('Track added to queue:', {
  title: track.title,
  duration: track.duration,
  position: queuePosition
});
```

4. Use child loggers for subsystems:
```typescript
class AudioSystem {
  private mainLogger: Logger;
  private playerLogger: Logger;
  private filterLogger: Logger;

  constructor(debug: boolean) {
    this.mainLogger = Logger.create('Audio', debug);
    this.playerLogger = this.mainLogger.createChildLogger('[Player]');
    this.filterLogger = this.mainLogger.createChildLogger('[Filters]');
  }
}
```