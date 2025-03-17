import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { LuZap } from 'react-icons/lu';
import { LuListMusic } from 'react-icons/lu';
import { BiMicrophone } from 'react-icons/bi';
import { TbBrandTypescript } from 'react-icons/tb';
import { SiDiscord } from 'react-icons/si';

import { PiWaveform } from "react-icons/pi";

const FeatureList = [
  {
    title: 'Simple Yet Powerful',
    description: (
      <>
        Yukino provides an intuitive API while giving you full access to Lavalink's
        powerful features. Start playing music in just a few lines of code.
      </>
    ),
    Icon: LuZap
  },
  {
    title: 'Advanced Audio Filters',
    description: (
      <>
        Apply and combine audio filters in real-time. From equalizers to karaoke effects,
        Yukino supports all of Lavalink's audio manipulation features.
      </>
    ),
    Icon: PiWaveform
  },
  {
    title: 'Robust Queue Management',
    description: (
      <>
        Built-in queue system with support for track looping, queue looping,
        shuffling, and more. Handle playlists and track collections with ease.
      </>
    ),
    Icon: LuListMusic
  },
  {
    title: 'Voice State Handling',
    description: (
      <>
        Automatic voice connection management with built-in reconnection logic and
        voice state synchronization.
      </>
    ),
    Icon: BiMicrophone
  },
  {
    title: 'Type-Safe by Design',
    description: (
      <>
        Written in TypeScript with comprehensive type definitions. Get excellent IDE
        support and catch errors before they happen.
      </>
    ),
    Icon: TbBrandTypescript
  },
  {
    title: 'Discord.js Integration',
    description: (
      <>
        Seamlessly integrates with Discord.js v14. No need to handle voice updates
        or server configuration manually.
      </>
    ),
    Icon: SiDiscord
  }
];

const Feature = React.memo(({ title, description, Icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 100); // Staggered animation

    return () => clearTimeout(timer);
  }, [index]);

  if (!Icon) {
    return null;
  }

  const IconComponent = Icon;

  return (
    <div className={clsx('col col--4', styles.featureItem, isVisible && styles.visible)}>
      <div className={clsx('card', styles.featureCard)}>
        <div className="card__header">
          <div className={styles.featureIcon}>
            <IconComponent size="2.75em" className={styles.iconComponent} />
          </div>
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
});

function HomepageFeatures() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.features} ref={sectionRef}>
      <div className="container">
        <div className={styles.featureGrid}>
          <h2 className={clsx(styles.featuresTitle, isInView && styles.visible)}>Features</h2>
          <div className="row">
            {isInView && FeatureList.map((props, idx) => (
              <Feature key={idx} index={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(HomepageFeatures);