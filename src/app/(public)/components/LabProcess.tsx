'use client';
import { useState } from 'react';
import styles from './publicComponents.module.css';
import { FlaskConical, Settings, Boxes, Square, Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 1, name: 'Recepción del vidrio', icon: FlaskConical, desc: 'Acopio y recolección de vidrio posconsumo desde fuentes diversas.' },
  { id: 2, name: 'Trituración', icon: Settings, desc: 'Molienda mediante un servicio especializado externo para alcanzar la granulometría precisa.' },
  { id: 3, name: 'Mezcla de materiales', icon: Boxes, desc: 'El vidrio triturado se integra cuidadosamente con cemento, agua, marmolina y componentes.' },
  { id: 4, name: 'Moldeo', icon: Square, desc: 'La matriz es vertida en moldes con vibrado para eliminar burbujas.' },
  { id: 5, name: 'Curado', icon: Sparkles, desc: 'Reposo controlado a temperatura ambiente garantizando el fraguado óptimo.' },
  { id: 6, name: 'Acabado', icon: CheckCircle2, desc: 'Pulido final de superficie para exponer el brillo característico del vidrio reciclado.' },
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
