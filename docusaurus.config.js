// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yukino',
  tagline: 'A Modern Lavalink Client for Discord.js',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'yukino-org',
  projectName: 'yukino',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Sanchit-codes/yukino-docs/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: ['docusaurus-lunr-search'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Yukino',
        logo: {
          alt: 'Yukino Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/api',
            label: 'API',
            position: 'left'
          },
          {
            to: '/docs/advanced/custom-filters',
            label: 'Advanced',
            position: 'left'
          },
          {
            href: 'https://github.com/Sanchit-codes/yukino',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.kwin.in/',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'API Reference',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/yukino',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/Sanchit-codes/yukino/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yukino-org/yukino',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/yukino',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yukino. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['yaml', 'bash', 'json'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '⭐ If you like Yukino, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sanchit-codes/yukino">GitHub</a>!',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: true,
      },
    }),
};

module.exports = config;