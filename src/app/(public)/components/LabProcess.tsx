'use client';
import { useState } from 'react';
import styles from './publicComponents.module.css';
import { FlaskConical, Settings, Boxes, Square, Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 1, name: 'Recepción del vidrio', icon: FlaskConical, desc: 'Acopio y clasificación del vidrio. Integración con asociaciones de recolectores locales para dignificar su trabajo.' },
  { id: 2, name: 'Trituración', icon: Settings, desc: 'Procesamiento mecánico mecánico sin fundición para reducir el vidrio a polvo y escamas, ahorrando enormes cantidades de energía.' },
  { id: 3, name: 'Mezcla de materiales', icon: Boxes, desc: 'Las escamas de vidrio se combinan con aglomerantes especiales de baja huella de carbono, creando una matriz resistente.' },
  { id: 4, name: 'Moldeo', icon: Square, desc: 'La matriz se vierte en moldes. Al no necesitar cocción en hornos, evitamos toneladas de emisiones de CO2.' },
  { id: 5, name: 'Pulido', icon: Sparkles, desc: 'Desbastamos la capa superficial para descubrir los destellos cristalinos del vidrio reciclado en el fondo.' },
  { id: 6, name: 'Baldosa terminada', icon: CheckCircle2, desc: 'Una pieza única, estética, altamente resistente y verdaderamente sostenible, lista para revolucionar espacios.' },
];

export default function LabProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className={styles.interactiveSection}>
      <h2 style={{ marginBottom: '1rem' }}>Laboratorio EcoShine</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Transparencia total. Conoce exactamente cómo transformamos lo que otros tiran en materiales premium de construcción.
      </p>

      <div className={styles.labGrid}>
        {steps.map(step => {
          const isActive = activeStep === step.id;
          return (
            <div 
              key={step.id} 
              className="glass-panel" 
              style={{ 
                padding: '2rem', 
                cursor: 'pointer', 
                border: isActive ? '1px solid var(--color-primary)' : '',
                transform: isActive ? 'translateY(-5px)' : 'none',
                boxShadow: isActive ? '0 10px 30px rgba(16, 185, 129, 0.2)' : 'none'
              }}
              onClick={() => setActiveStep(step.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <step.icon size={28} color={isActive ? "var(--color-primary)" : "var(--color-text-muted)"} />
                <h3 style={{ color: isActive ? '#fff' : 'var(--color-text-muted)' }}>{step.id}. {step.name}</h3>
              </div>
              <div style={{
                maxHeight: isActive ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease',
                color: 'var(--color-text-muted)'
              }}>
                <p style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  {step.desc}
                </p>
                <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-primary)' }}>
                  + Innovación validada
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
