import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation slightly for better performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--7', styles.heroContent)}>
            <h1 className={clsx('hero__title', isVisible && styles.visible)}>
              {siteConfig.title}
              <span className={styles.gradientText}>.</span>
            </h1>
            <p className={clsx('hero__subtitle', isVisible && styles.visible, styles.delay1)}>
              {siteConfig.tagline}
            </p>
            <div className={clsx(styles.heroButtons, isVisible && styles.visible, styles.delay2)}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/installation">
                Installation Guide
              </Link>
            </div>
          </div>
          <div className={clsx('col col--5', styles.heroImageContainer, isVisible && styles.visible, styles.delay3)}>
            <div className={styles.heroImageWrapper}>
              <img 
                src={useBaseUrl('/img/logo.png')} 
                alt="Yukino Logo"
                className={styles.heroImage}
                width={300}
                height={360}
                loading="eager"
              />
              <div className={styles.heroGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const codeExample = `import { Client, GatewayIntentBits } from 'discord.js';
import { YukinoClient } from 'yukinojs';

// Create Discord.js client with required intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates
  ]
});

// Configure Yukino connection options
const connectorOptions = {
  client,
  host: 'localhost',
  port: 2333,
  auth: 'youshallnotpass',
  secure: false,
  version: 'v4',
  debug: false  // Enable for voice state tracking
};

const nodeOptions = {
  name: 'MainNode',
  url: 'localhost:2333',
  auth: 'youshallnotpass',
  reconnectOptions: {
    maxRetryAttempts: 10,
    retryDelayInMs: 5000
  }
};

// Create Yukino client with enhanced options
const yukino = new YukinoClient(client, connectorOptions, nodeOptions);

// Connect when ready
client.once('ready', () => {
  yukino.connect();
});

// Create a player and play music
const player = await yukino.createPlayer({
  guildId: 'guild-id',
  voiceChannelId: 'channel-id',
  autoReconnect: true  // Auto reconnect on disconnect
});

// Search and play a track with error handling
try {
  const result = await yukino.loadTrack('song name');
  if (result.data.length > 0) {
    await player.play({ track: result.data[0] });
  }
} catch (error) {
  console.error('Error playing track:', error);
}`;

const MainContent = React.memo(() => {
  return (
    <div className={clsx('container', styles.section)}>
      <div className="row">
        <div className="col col--6">
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Modern <span className={styles.highlight}>Audio Engine</span> for Discord Bots</h2>
            <p className={clsx(styles.sectionDescription)}>
              Yukino is a modern, feature-rich Lavalink client designed specifically for Discord.js. 
              It provides a high-level API for audio playback and manipulation in Discord bots.
            </p>
            <ul className={styles.featureList}>
              <li>🎵 Full Lavalink v4 support</li>
              <li>🎚️ Comprehensive audio filter system</li>
              <li>📊 Built-in queue management</li>
              <li>⚡ Type-safe with full TypeScript support</li>
            </ul>
          </div>
        </div>
        <div className="col col--6">
          <div className={styles.codeWrapper}>
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.codeTitle}>Quick Example</div>
            </div>
            <div className={styles.codeBlockContainer}>
              <CodeBlock className="language-typescript">
                {codeExample}
              </CodeBlock>
            </div>
            <div className={styles.codeActions}>
              <Link
                className="button button--primary button--sm"
                to="/docs/quickstart">
                More Examples →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const CtaSection = React.memo(() => {
  return (
    <div className={styles.ctaSection}>
      <div className="container">
        <h2 className={styles.ctaTitle}>Ready to power up your Discord bot?</h2>
        <p className={styles.ctaDescription}>
          Start building amazing music experiences with Yukino today
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/yukino-org/yukino">
            GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
});

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="A powerful Lavalink client for Discord.js">
      <HomepageHeader />
      
      <main className={styles.main}>
        {hasLoaded && (
          <>
            <MainContent />
            <HomepageFeatures />
            <CtaSection />
          </>
        )}
      </main>
    </Layout>
  );
}