'use client';
import { useState, useEffect } from 'react';
import styles from './HeroAnimation.module.css';
import { ArrowDown } from 'lucide-react';

const BottleSVG = ({ opacity = 1, scale = 1 }: { opacity?: number; scale?: number }) => (
  <svg width={40 * scale} height={100 * scale} viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    {/* Bottle neck */}
    <rect x="15" y="0" width="10" height="6" rx="2" fill="rgba(16,185,129,0.3)" stroke="rgba(16,185,129,0.8)" strokeWidth="1.5"/>
    {/* Thread */}
    <rect x="13" y="6" width="14" height="4" rx="1" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.6)" strokeWidth="1"/>
    {/* Shoulder taper */}
    <path d="M13 10 L6 24 L34 24 L27 10 Z" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5"/>
    {/* Body */}
    <rect x="6" y="24" width="28" height="60" rx="3" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.7)" strokeWidth="1.5"/>
    {/* Highlight inside body */}
    <rect x="9" y="28" width="8" height="50" rx="2" fill="rgba(255,255,255,0.05)"/>
    {/* Label */}
    <rect x="10" y="40" width="20" height="28" rx="2" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/>
    {/* Bottom */}
    <rect x="6" y="84" width="28" height="6" rx="3" fill="rgba(59,130,246,0.25)" stroke="rgba(59,130,246,0.7)" strokeWidth="1.5"/>
  </svg>
);

const TileSVG = () => (
  <div className={styles.futuristicTile}>
    {/* Texture grid inside tile */}
    {[...Array(9)].map((_, i) => (
      <div key={i} className={styles.tileCell} />
    ))}
    <div className={styles.tileShimmer}></div>
  </div>
);

const WallSVG = () => (
  <div className={styles.brickWall}>
    {/* 4 rows × 3 tiles = a staggered tile wall */}
    {[0,1,2,3].map(row => (
      <div key={row} className={styles.brickRow} style={{ marginLeft: row % 2 === 0 ? 0 : '36px' }}>
        {[0,1,2].map(col => (
          <div key={col} className={styles.brick} style={{ animationDelay: `${(row * 3 + col) * 0.1}s` }}>
            <div className={styles.brickInner} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default function HeroAnimation() {
  const [phase, setPhase] = useState<'falling' | 'breaking' | 'tile' | 'wall' | 'text'>('falling');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('breaking'), 1500);
    const t2 = setTimeout(() => setPhase('tile'), 2200);
    const t3 = setTimeout(() => setPhase('wall'), 3400);
    const t4 = setTimeout(() => setPhase('text'), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.animationArea}>
        {phase === 'falling' && (
          <div className={`${styles.iconItem} ${styles.falling}`}>
            <BottleSVG scale={1.5} />
          </div>
        )}
        {phase === 'breaking' && (
          <div className={styles.iconItem}>
            {/* Glass shards — angled rectangles flying outward */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.shard} style={{ '--angle': `${i * 45}deg` } as React.CSSProperties}>
                <svg width="12" height="28" viewBox="0 0 12 28">
                  <polygon points="6,0 12,28 0,28" fill={`rgba(59,130,246,${0.5 + Math.random()*0.4})`} />
                </svg>
              </div>
            ))}
          </div>
        )}
        {phase === 'tile' && (
          <div className={`${styles.iconItem} ${styles.scaleFadeIn}`}>
            <TileSVG />
          </div>
        )}
        {phase === 'wall' && (
          <div className={`${styles.iconItem} ${styles.scaleFadeIn}`}>
            <WallSVG />
          </div>
        )}
      </div>

      <div className={`${styles.textContent} ${(phase === 'wall' || phase === 'text') ? styles.visible : styles.hidden}`}>
        <h1>Lo que hoy es residuo, mañana es <span className="glow-text" style={{ fontSize: 'inherit' }}>construcción sostenible</span></h1>
        <p>EcoShine convierte envases de vidrio en baldosas premium para arquitectura y decoración. Sin hornos. Sin CO₂.</p>
        <div style={{ marginTop: '2rem' }}>
          <ArrowDown className={styles.bounce} size={32} color="var(--color-primary)" />
        </div>
      </div>
    </div>
  );
}
