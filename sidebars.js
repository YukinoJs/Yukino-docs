/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'installation',
        'quickstart'
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core/client',
        'core/node',
        'core/player',
        'core/queue',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/filters',
        'features/logger',
        'features/utils',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'advanced/custom-filters',
        'advanced/voice-state',
        'advanced/error-handling',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/index',
        'api/yukino-client',
        // 'api/node',
        // 'api/player',
        // 'api/queue',
        'api/rest',
        'api/connectors',
        'api/player',
        'api/types',
      ],
    },
  ],
};

module.exports = sidebars;