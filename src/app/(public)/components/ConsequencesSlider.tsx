'use client';
import { useState, useCallback } from 'react';
import styles from './publicComponents.module.css';

// Seeded random for stable SSR rendering
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const BottleSVG = () => (
  <svg width="24" height="64" viewBox="0 0 24 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cap */}
    <rect x="7" y="0" width="10" height="4" rx="1" fill="rgba(16,185,129,0.5)" stroke="rgba(16,185,129,0.9)" strokeWidth="1"/>
    {/* Neck */}
    <rect x="8" y="4" width="8" height="4" rx="0.5" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.7)" strokeWidth="1"/>
    {/* Shoulder */}
    <path d="M8 8 L3 16 L21 16 L16 8 Z" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.7)" strokeWidth="1"/>
    {/* Body */}
    <rect x="3" y="16" width="18" height="40" rx="2" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.7)" strokeWidth="1"/>
    {/* Highlight */}
    <rect x="5" y="18" width="5" height="32" rx="1.5" fill="rgba(255,255,255,0.06)"/>
    {/* Bottom */}
    <rect x="3" y="56" width="18" height="4" rx="2" fill="rgba(59,130,246,0.25)" stroke="rgba(59,130,246,0.7)" strokeWidth="1"/>
  </svg>
);

// Mini tile (for the solution state)
const TileGrid = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    {[0,1].map(row => (
      <div key={row} style={{ display: 'flex', gap: '6px', marginLeft: row % 2 === 0 ? 0 : '30px' }}>
        {[0,1,2].map(col => (
          <div key={col} style={{
            width: '52px', height: '28px',
            border: '1.5px solid var(--color-primary)',
            borderRadius: '5px',
            background: 'rgba(16,185,129,0.08)',
            boxShadow: '0 0 8px rgba(16,185,129,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: '3px',
              border: '1px dashed rgba(59,130,246,0.3)',
              borderRadius: '3px',
            }}/>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default function ConsequencesSlider() {
  const [waste, setWaste] = useState(0);
  const count = Math.floor(waste / 2);

  return (
    <div className={styles.interactiveSection}>
      <h2 style={{ marginBottom: '1rem' }}>¿Qué pasaría si no recicláramos?</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
        Desliza para ver el impacto acumulado del vidrio sin reciclar.
      </p>

      <div className={styles.sliderContainer}>
        <input
          type="range" min="0" max="100" value={waste}
          onChange={e => setWaste(Number(e.target.value))}
          className={styles.slider}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--color-primary)' }}>
          <span>Hoy</span>
          <span>10 Años</span>
        </div>
      </div>

      <div className={styles.visualizationArea}>
        {waste < 80 ? (
          <div className={styles.bottlesPile}>
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className={styles.wasteItem}
                style={{
                  left: `${seededRand(i * 3) * 88}%`,
                  bottom: `${seededRand(i * 7) * Math.min(waste * 0.55, 65)}%`,
                  transform: `rotate(${(seededRand(i * 11) - 0.5) * 40}deg)`,
                  filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.5))',
                  transition: 'all 0.3s ease',
                }}
              >
                <BottleSVG />
              </span>
            ))}
            {waste > 0 && (
              <div className={styles.wasteOverlay}>
                <h3>{(waste * 1500).toLocaleString()} Ton</h3>
                <p>De vidrio en vertederos</p>
              </div>
            )}
          </div>
        ) : (
          <div className={`${styles.bottlesPile} ${styles.solution}`}>
            <div className={styles.wasteOverlay} style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.5)', backdropFilter: 'blur(12px)' }}>
              <h3 style={{ color: 'var(--color-primary)' }}>Con EcoShine</h3>
              <p>Ese volumen se convierte en <b>{(waste * 500).toLocaleString()} m²</b> de baldosas sostenibles</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <TileGrid />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
