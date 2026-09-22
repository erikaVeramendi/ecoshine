'use client';
import { useState } from 'react';
import styles from './publicComponents.module.css';
import { Calculator } from 'lucide-react';

export default function ImpactSimulator() {
  const [bottles, setBottles] = useState(10);
  const [people, setPeople] = useState(3);

  // Example formula: 1 bottle = X amount of glass. Takes ~40 bottles for 1 sqm of tiles.
  const tilesPerYear = Math.floor((bottles * 12 * people) / 10); 
  const co2Saved = (tilesPerYear * 2.5).toFixed(1); // 2.5kg CO2 saved per tile approx

  return (
    <div className={styles.interactiveSection}>
      <h2>Simulador de Impacto</h2>
      <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>No es una calculadora financiera. Es una experiencia de concientización sobre cuánto material útil botamos.</p>
      
      <div className={styles.simContainer}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          {/* Inputs */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '1rem' }}>
                ¿Cuántas botellas o frascos de vidrio botas al mes (por persona)?
                <span style={{ float: 'right', fontWeight: 'bold', color: 'var(--color-primary)' }}>{bottles}</span>
              </label>
              <input 
                type="range" min="1" max="50" 
                value={bottles} 
                onChange={e => setBottles(Number(e.target.value))}
                className={styles.slider} 
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '1rem' }}>
                ¿Cuántas personas viven en tu hogar u oficina?
                <span style={{ float: 'right', fontWeight: 'bold', color: 'var(--color-primary)' }}>{people}</span>
              </label>
              <input 
                type="range" min="1" max="20" 
                value={people} 
                onChange={e => setPeople(Number(e.target.value))}
                className={styles.slider} 
              />
            </div>
          </div>
          
          {/* Outputs */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '12px' }}>
            <Calculator size={48} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 400 }}>Tu hogar podría aportar suficiente vidrio para producir:</h3>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '4rem', margin: '0.5rem 0' }}>{tilesPerYear}</h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Baldosas EcoShine al Año</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
              Evitando la emisión de {co2Saved} kg de CO2 equivalente.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
