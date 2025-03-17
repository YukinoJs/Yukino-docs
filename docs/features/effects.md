# Effects

Yukino provides a powerful effects system that allows you to modify audio playback in real-time using Lavalink's audio filtering capabilities.

## Basic Usage

### Applying Effects

```typescript
// Apply a single effect
player.effects.apply('bassboost');

// Apply multiple effects
player.effects.applyMany(['nightcore', 'echo']);

// Apply with custom parameters
player.effects.apply('tremolo', {
  frequency: 2.0,
  depth: 0.5
});
```

### Removing Effects

```typescript
// Remove a single effect
player.effects.remove('bassboost');

// Remove multiple effects
player.effects.removeMany(['nightcore', 'echo']);

// Clear all effects
player.effects.clear();
```

## Built-in Effects

### Bass Boost
```typescript
// Default bass boost
player.effects.apply('bassboost');

// Custom bass boost levels
player.effects.apply('bassboost', {
  level: 0.5,    // 0.0 to 1.0
  frequency: 100 // Bass frequency to boost
});
```

### Nightcore
```typescript
// Default nightcore
player.effects.apply('nightcore');

// Custom nightcore settings
player.effects.apply('nightcore', {
  pitch: 1.3,  // Pitch multiplier
  speed: 1.2   // Speed multiplier
});
```

### Vaporwave
```typescript
// Default vaporwave
player.effects.apply('vaporwave');

// Custom vaporwave settings
player.effects.apply('vaporwave', {
  pitch: 0.8,  // Pitch multiplier
  speed: 0.8   // Speed multiplier
});
```

### Echo
```typescript
// Default echo
player.effects.apply('echo');

// Custom echo settings
player.effects.apply('echo', {
  delay: 0.5,     // Delay in seconds
  decay: 0.5,     // Echo decay
  feedback: 0.75  // Echo feedback
});
```

### Tremolo
```typescript
// Default tremolo
player.effects.apply('tremolo');

// Custom tremolo settings
player.effects.apply('tremolo', {
  frequency: 4.0, // Oscillation frequency
  depth: 0.5     // Effect depth
});
```

### Vibrato
```typescript
// Default vibrato
player.effects.apply('vibrato');

// Custom vibrato settings
player.effects.apply('vibrato', {
  frequency: 2.0, // Oscillation frequency
  depth: 0.5     // Effect depth
});
```

## Effect Chains

### Creating Effect Chains
```typescript
// Create a chain of effects
player.effects.chain()
  .add('bassboost', { level: 0.6 })
  .add('echo', { delay: 0.3 })
  .add('tremolo')
  .apply();

// Create and save a chain
const chain = player.effects.chain()
  .add('nightcore')
  .add('echo');

// Apply saved chain later
chain.apply();
```

### Managing Chains
```typescript
// Remove specific effect from chain
chain.remove('echo');

// Clear chain
chain.clear();

// Check chain contents
console.log(chain.effects);
```

## Custom Effects

### Creating Custom Effects
```typescript
// Define custom effect
const customEffect = {
  name: 'customBoost',
  parameters: {
    frequency: 150,
    gain: 0.5
  },
  apply: (player, params) => {
    // Implementation
    player.setEqualizerBand(0, params.gain);
  }
};

// Register custom effect
player.effects.register(customEffect);

// Use custom effect
player.effects.apply('customBoost', {
  frequency: 200,
  gain: 0.7
});
```

### Effect Presets
```typescript
// Create effect preset
const preset = {
  name: 'party',
  effects: [
    ['bassboost', { level: 0.7 }],
    ['tremolo', { frequency: 3.0 }],
    ['echo', { delay: 0.2 }]
  ]
};

// Register preset
player.effects.registerPreset(preset);

// Apply preset
player.effects.applyPreset('party');
```

## Real-time Control

### Dynamic Parameters
```typescript
// Update effect parameters in real-time
player.effects.update('tremolo', {
  frequency: 5.0,
  depth: 0.8
});

// Smoothly transition parameters
player.effects.transition('tremolo', {
  frequency: 6.0,
  depth: 0.9
}, 2000); // Duration in ms
```

### Effect States
```typescript
// Check if effect is active
console.log(player.effects.isActive('bassboost'));

// Get active effects
console.log(player.effects.active);

// Get effect parameters
const params = player.effects.getParameters('echo');
```

## Performance Considerations

### Memory Usage
```typescript
// Clear unused effects
player.effects.cleanup();

// Optimize chain processing
player.effects.optimize();
```

### CPU Usage
```typescript
// Get effect CPU usage
const usage = player.effects.getUsage();

// Set processing limits
player.effects.setLimit({
  maxEffects: 5,
  maxChainLength: 3
});
```

## Events

### Effect Events
```typescript
// Effect applied
player.effects.on('effectApply', (effect, params) => {
  console.log(`Applied ${effect} with:`, params);
});

// Effect removed
player.effects.on('effectRemove', (effect) => {
  console.log(`Removed ${effect}`);
});

// Parameters updated
player.effects.on('effectUpdate', (effect, params) => {
  console.log(`Updated ${effect} with:`, params);
});
```

### Error Handling
```typescript
// Handle effect errors
player.effects.on('error', (error, effect) => {
  console.error(`Error in ${effect}:`, error);
});

// Validate effect parameters
try {
  player.effects.validate('tremolo', params);
} catch (error) {
  console.error('Invalid parameters:', error);
}
```