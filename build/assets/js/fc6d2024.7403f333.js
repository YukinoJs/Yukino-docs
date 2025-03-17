"use strict";(self.webpackChunkmy_docs_site=self.webpackChunkmy_docs_site||[]).push([[32],{8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>l});var t=n(6540);const s={},a=t.createContext(s);function c(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:r},e.children)}},9863:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"features/effects","title":"Effects","description":"Yukino provides a powerful effects system that allows you to modify audio playback in real-time using Lavalink\'s audio filtering capabilities.","source":"@site/docs/features/effects.md","sourceDirName":"features","slug":"/features/effects","permalink":"/docs/features/effects","draft":false,"unlisted":false,"editUrl":"https://github.com/yukino-org/yukino/tree/main/docs/docs/features/effects.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Audio Filters","permalink":"/docs/features/filters"},"next":{"title":"Custom Filters","permalink":"/docs/advanced/custom-filters"}}');var s=n(4848),a=n(8453);const c={},l="Effects",i={},o=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Applying Effects",id:"applying-effects",level:3},{value:"Removing Effects",id:"removing-effects",level:3},{value:"Built-in Effects",id:"built-in-effects",level:2},{value:"Bass Boost",id:"bass-boost",level:3},{value:"Nightcore",id:"nightcore",level:3},{value:"Vaporwave",id:"vaporwave",level:3},{value:"Echo",id:"echo",level:3},{value:"Tremolo",id:"tremolo",level:3},{value:"Vibrato",id:"vibrato",level:3},{value:"Effect Chains",id:"effect-chains",level:2},{value:"Creating Effect Chains",id:"creating-effect-chains",level:3},{value:"Managing Chains",id:"managing-chains",level:3},{value:"Custom Effects",id:"custom-effects",level:2},{value:"Creating Custom Effects",id:"creating-custom-effects",level:3},{value:"Effect Presets",id:"effect-presets",level:3},{value:"Real-time Control",id:"real-time-control",level:2},{value:"Dynamic Parameters",id:"dynamic-parameters",level:3},{value:"Effect States",id:"effect-states",level:3},{value:"Performance Considerations",id:"performance-considerations",level:2},{value:"Memory Usage",id:"memory-usage",level:3},{value:"CPU Usage",id:"cpu-usage",level:3},{value:"Events",id:"events",level:2},{value:"Effect Events",id:"effect-events",level:3},{value:"Error Handling",id:"error-handling",level:3}];function f(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"effects",children:"Effects"})}),"\n",(0,s.jsx)(r.p,{children:"Yukino provides a powerful effects system that allows you to modify audio playback in real-time using Lavalink's audio filtering capabilities."}),"\n",(0,s.jsx)(r.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(r.h3,{id:"applying-effects",children:"Applying Effects"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Apply a single effect\r\nplayer.effects.apply('bassboost');\r\n\r\n// Apply multiple effects\r\nplayer.effects.applyMany(['nightcore', 'echo']);\r\n\r\n// Apply with custom parameters\r\nplayer.effects.apply('tremolo', {\r\n  frequency: 2.0,\r\n  depth: 0.5\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"removing-effects",children:"Removing Effects"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Remove a single effect\r\nplayer.effects.remove('bassboost');\r\n\r\n// Remove multiple effects\r\nplayer.effects.removeMany(['nightcore', 'echo']);\r\n\r\n// Clear all effects\r\nplayer.effects.clear();\n"})}),"\n",(0,s.jsx)(r.h2,{id:"built-in-effects",children:"Built-in Effects"}),"\n",(0,s.jsx)(r.h3,{id:"bass-boost",children:"Bass Boost"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Default bass boost\r\nplayer.effects.apply('bassboost');\r\n\r\n// Custom bass boost levels\r\nplayer.effects.apply('bassboost', {\r\n  level: 0.5,    // 0.0 to 1.0\r\n  frequency: 100 // Bass frequency to boost\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"nightcore",children:"Nightcore"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Default nightcore\r\nplayer.effects.apply('nightcore');\r\n\r\n// Custom nightcore settings\r\nplayer.effects.apply('nightcore', {\r\n  pitch: 1.3,  // Pitch multiplier\r\n  speed: 1.2   // Speed multiplier\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"vaporwave",children:"Vaporwave"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Default vaporwave\r\nplayer.effects.apply('vaporwave');\r\n\r\n// Custom vaporwave settings\r\nplayer.effects.apply('vaporwave', {\r\n  pitch: 0.8,  // Pitch multiplier\r\n  speed: 0.8   // Speed multiplier\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"echo",children:"Echo"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Default echo\r\nplayer.effects.apply('echo');\r\n\r\n// Custom echo settings\r\nplayer.effects.apply('echo', {\r\n  delay: 0.5,     // Delay in seconds\r\n  decay: 0.5,     // Echo decay\r\n  feedback: 0.75  // Echo feedback\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"tremolo",children:"Tremolo"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Default tremolo\r\nplayer.effects.apply('tremolo');\r\n\r\n// Custom tremolo settings\r\nplayer.effects.apply('tremolo', {\r\n  frequency: 4.0, // Oscillation frequency\r\n  depth: 0.5     // Effect depth\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"vibrato",children:"Vibrato"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Default vibrato\r\nplayer.effects.apply('vibrato');\r\n\r\n// Custom vibrato settings\r\nplayer.effects.apply('vibrato', {\r\n  frequency: 2.0, // Oscillation frequency\r\n  depth: 0.5     // Effect depth\r\n});\n"})}),"\n",(0,s.jsx)(r.h2,{id:"effect-chains",children:"Effect Chains"}),"\n",(0,s.jsx)(r.h3,{id:"creating-effect-chains",children:"Creating Effect Chains"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Create a chain of effects\r\nplayer.effects.chain()\r\n  .add('bassboost', { level: 0.6 })\r\n  .add('echo', { delay: 0.3 })\r\n  .add('tremolo')\r\n  .apply();\r\n\r\n// Create and save a chain\r\nconst chain = player.effects.chain()\r\n  .add('nightcore')\r\n  .add('echo');\r\n\r\n// Apply saved chain later\r\nchain.apply();\n"})}),"\n",(0,s.jsx)(r.h3,{id:"managing-chains",children:"Managing Chains"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Remove specific effect from chain\r\nchain.remove('echo');\r\n\r\n// Clear chain\r\nchain.clear();\r\n\r\n// Check chain contents\r\nconsole.log(chain.effects);\n"})}),"\n",(0,s.jsx)(r.h2,{id:"custom-effects",children:"Custom Effects"}),"\n",(0,s.jsx)(r.h3,{id:"creating-custom-effects",children:"Creating Custom Effects"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Define custom effect\r\nconst customEffect = {\r\n  name: 'customBoost',\r\n  parameters: {\r\n    frequency: 150,\r\n    gain: 0.5\r\n  },\r\n  apply: (player, params) => {\r\n    // Implementation\r\n    player.setEqualizerBand(0, params.gain);\r\n  }\r\n};\r\n\r\n// Register custom effect\r\nplayer.effects.register(customEffect);\r\n\r\n// Use custom effect\r\nplayer.effects.apply('customBoost', {\r\n  frequency: 200,\r\n  gain: 0.7\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"effect-presets",children:"Effect Presets"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Create effect preset\r\nconst preset = {\r\n  name: 'party',\r\n  effects: [\r\n    ['bassboost', { level: 0.7 }],\r\n    ['tremolo', { frequency: 3.0 }],\r\n    ['echo', { delay: 0.2 }]\r\n  ]\r\n};\r\n\r\n// Register preset\r\nplayer.effects.registerPreset(preset);\r\n\r\n// Apply preset\r\nplayer.effects.applyPreset('party');\n"})}),"\n",(0,s.jsx)(r.h2,{id:"real-time-control",children:"Real-time Control"}),"\n",(0,s.jsx)(r.h3,{id:"dynamic-parameters",children:"Dynamic Parameters"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Update effect parameters in real-time\r\nplayer.effects.update('tremolo', {\r\n  frequency: 5.0,\r\n  depth: 0.8\r\n});\r\n\r\n// Smoothly transition parameters\r\nplayer.effects.transition('tremolo', {\r\n  frequency: 6.0,\r\n  depth: 0.9\r\n}, 2000); // Duration in ms\n"})}),"\n",(0,s.jsx)(r.h3,{id:"effect-states",children:"Effect States"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Check if effect is active\r\nconsole.log(player.effects.isActive('bassboost'));\r\n\r\n// Get active effects\r\nconsole.log(player.effects.active);\r\n\r\n// Get effect parameters\r\nconst params = player.effects.getParameters('echo');\n"})}),"\n",(0,s.jsx)(r.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,s.jsx)(r.h3,{id:"memory-usage",children:"Memory Usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Clear unused effects\r\nplayer.effects.cleanup();\r\n\r\n// Optimize chain processing\r\nplayer.effects.optimize();\n"})}),"\n",(0,s.jsx)(r.h3,{id:"cpu-usage",children:"CPU Usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Get effect CPU usage\r\nconst usage = player.effects.getUsage();\r\n\r\n// Set processing limits\r\nplayer.effects.setLimit({\r\n  maxEffects: 5,\r\n  maxChainLength: 3\r\n});\n"})}),"\n",(0,s.jsx)(r.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(r.h3,{id:"effect-events",children:"Effect Events"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Effect applied\r\nplayer.effects.on('effectApply', (effect, params) => {\r\n  console.log(`Applied ${effect} with:`, params);\r\n});\r\n\r\n// Effect removed\r\nplayer.effects.on('effectRemove', (effect) => {\r\n  console.log(`Removed ${effect}`);\r\n});\r\n\r\n// Parameters updated\r\nplayer.effects.on('effectUpdate', (effect, params) => {\r\n  console.log(`Updated ${effect} with:`, params);\r\n});\n"})}),"\n",(0,s.jsx)(r.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"// Handle effect errors\r\nplayer.effects.on('error', (error, effect) => {\r\n  console.error(`Error in ${effect}:`, error);\r\n});\r\n\r\n// Validate effect parameters\r\ntry {\r\n  player.effects.validate('tremolo', params);\r\n} catch (error) {\r\n  console.error('Invalid parameters:', error);\r\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}}}]);