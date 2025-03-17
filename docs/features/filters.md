# Audio Filters

Yukino supports all of Lavalink v4's audio filters, allowing you to modify the audio output in real-time.

## Equalizer

The equalizer allows you to adjust the gain of 15 different frequency bands:

```typescript
// Each band represents a frequency range:
// Band 0: 25Hz    Band 8: 1000Hz
// Band 1: 40Hz    Band 9: 1600Hz
// Band 2: 63Hz    Band 10: 2500Hz
// Band 3: 100Hz   Band 11: 4000Hz
// Band 4: 160Hz   Band 12: 6300Hz
// Band 5: 250Hz   Band 13: 10000Hz
// Band 6: 400Hz   Band 14: 16000Hz
// Band 7: 630Hz

await player.setEqualizer([
  { band: 0, gain: 0.6 },  // Boost bass
  { band: 1, gain: 0.7 },
  { band: 2, gain: 0.8 },
  { band: 3, gain: 0.5 }
]);
```

### Preset Equalizers

Yukino provides some preset equalizers through the FilterUtil:

```typescript
import { FilterUtil } from 'yukino';

// Bass boost preset
const bassBoostEQ = FilterUtil.createBassBoostEQ(0.5);
await player.setEqualizer(bassBoostEQ);

// Flat equalizer (reset)
const flatEQ = FilterUtil.createFlatEQ();
await player.setEqualizer(flatEQ);
```

## Karaoke

The karaoke filter can remove vocals from tracks:

```typescript
await player.setKaraoke({
  level: 1.0,       // Main karaoke level
  monoLevel: 1.0,   // Mono channel level
  filterBand: 220.0, // Band to filter (Hz)
  filterWidth: 100.0 // Filter width
});

// Remove karaoke filter
await player.clearKaraoke();
```

## Timescale

Modify the speed, pitch, and rate of the audio:

```typescript
await player.setTimescale({
  speed: 1.2,  // Change playback speed
  pitch: 1.2,  // Change pitch
  rate: 1.0    // Change sampling rate
});

// Nightcore preset
await player.setFilters(FilterUtil.nightcorePreset());

// Vaporwave preset
await player.setFilters(FilterUtil.vaporwavePreset());

// Remove timescale
await player.clearTimescale();
```

## Tremolo

Add a wavering effect to the audio:

```typescript
await player.setTremolo({
  frequency: 2.0, // How fast the volume changes
  depth: 0.5      // How much the volume changes
});

// Remove tremolo
await player.clearTremolo();
```

## Vibrato

Add a vibrating pitch effect:

```typescript
await player.setVibrato({
  frequency: 2.0, // How fast the pitch changes
  depth: 0.5      // How much the pitch changes
});

// Remove vibrato
await player.clearVibrato();
```

## Rotation

Create a rotating audio effect:

```typescript
await player.setRotation({
  rotationHz: 0.2 // Rotation speed in Hz
});

// 8D Audio preset
await player.setFilters(FilterUtil.eightDimensionalPreset());

// Remove rotation
await player.clearRotation();
```

## Channel Mix

Control the mixing of stereo channels:

```typescript
await player.setChannelMix({
  leftToLeft: 1.0,    // Left channel to left output
  leftToRight: 0.0,   // Left channel to right output
  rightToLeft: 0.0,   // Right channel to left output
  rightToRight: 1.0   // Right channel to right output
});

// Remove channel mix
await player.clearChannelMix();
```

## Low Pass

Apply a low pass filter to remove high frequencies:

```typescript
await player.setLowPass({
  smoothing: 20.0 // Smoothing factor
});

// Remove low pass
await player.clearLowPass();
```

## Combining Filters

You can apply multiple filters at once using setFilters:

```typescript
await player.setFilters({
  equalizer: [
    { band: 0, gain: 0.6 },
    { band: 1, gain: 0.7 }
  ],
  timescale: {
    speed: 1.2,
    pitch: 1.2
  },
  tremolo: {
    frequency: 2.0,
    depth: 0.5
  }
});

// Clear all filters
await player.clearFilters();
```

## Implementing Filter Commands

Here's a practical example of implementing filter commands using Discord.js slash commands:

```typescript
// First, register your filter commands
const commands = [
  new SlashCommandBuilder()
    .setName("filter")
    .setDescription("Apply audio filters to the current track")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("The type of filter to apply")
        .setRequired(true)
        .addChoices(
          { name: "Bass Boost", value: "bassboost" },
          { name: "Nightcore", value: "nightcore" },
          { name: "Vaporwave", value: "vaporwave" },
          { name: "8D Audio", value: "8d" },
          { name: "Reset Filters", value: "reset" }
        )
    ),
];

// Then handle the commands in your interaction handler
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  
  if (interaction.commandName === "filter") {
    const player = client.yukino.getPlayer(interaction.guildId);
    if (!player) {
      await interaction.reply({
        content: "Nothing is playing!",
        ephemeral: true,
      });
      return;
    }

    const filterType = interaction.options.getString("type");
    await interaction.deferReply();

    try {
      switch (filterType) {
        case "bassboost": {
          await player.setEqualizer(FilterUtil.createBassBoostEQ(0.5));
          await interaction.editReply("🔊 Applied Bass Boost filter!");
          break;
        }
        case "nightcore": {
          await player.setTimescale(FilterUtil.nightcorePreset().timescale);
          await interaction.editReply("⏩ Applied Nightcore filter!");
          break;
        }
        case "vaporwave": {
          await player.setTimescale(FilterUtil.vaporwavePreset().timescale);
          await interaction.editReply("⏪ Applied Vaporwave filter!");
          break;
        }
        case "8d": {
          await player.setRotation(
            FilterUtil.eightDimensionalPreset().rotation
          );
          await interaction.editReply("🔄 Applied 8D Audio filter!");
          break;
        }
        case "reset": {
          await player.clearFilters();
          await interaction.editReply("🔄 Reset all audio filters!");
          break;
        }
        default: {
          await interaction.editReply("❌ Unknown filter type!");
          break;
        }
      }
    } catch (error) {
      console.error("Filter error:", error);
      await interaction.editReply(
        `❌ Error applying filter: ${error.message || "Unknown error"}`
      );
    }
  }
});
```

## Best Practices

1. Reset filters when changing tracks:
```typescript
player.on('trackStart', async () => {
  await player.clearFilters();
});
```

2. Avoid extreme filter values:
```typescript
// Good
await player.setTimescale({ speed: 1.5 });

// Bad - might cause distortion
await player.setTimescale({ speed: 5.0 });
```

3. Consider performance impact:
```typescript
// Apply filters gradually
const filters = [];
for (let i = 0; i < 15; i++) {
  filters.push({ band: i, gain: 0.1 });
  await player.setEqualizer(filters);
  await new Promise(r => setTimeout(r, 50));
}
```

4. Save user preferences:
```typescript
const guildPreferences = new Map();

// Save filter preferences when applied
function saveFilterPreference(guildId, filterType) {
  guildPreferences.set(guildId, filterType);
}

// Restore preferences on new tracks
player.on('trackStart', async () => {
  const preference = guildPreferences.get(player.guildId);
  if (preference === 'bassboost') {
    await player.setEqualizer(FilterUtil.createBassBoostEQ(0.5));
  } else if (preference === 'nightcore') {
    await player.setTimescale(FilterUtil.nightcorePreset().timescale);
  }
});
```

5. Combine filters for custom effects:
```typescript
// Create a custom atmosphere effect
await player.setFilters({
  equalizer: FilterUtil.createBassBoostEQ(0.3),
  timescale: { 
    pitch: 0.95, 
    speed: 0.95 
  },
  rotation: { 
    rotationHz: 0.05
  },
  lowPass: {
    smoothing: 5.0
  }
});
```