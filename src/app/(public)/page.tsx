import { supabase } from '@/lib/supabase';
import styles from '../components/public.module.css';
import Link from 'next/link';

// Interactive Components
import HeroAnimation from './components/HeroAnimation';
import ConsequencesSlider from './components/ConsequencesSlider';
import LabProcess from './components/LabProcess';
import ImpactSimulator from './components/ImpactSimulator';

export const revalidate = 60;

export default async function LandingPage() {
  const { data: indicators } = await supabase.from('indicators').select('*');
  const activeIndicators = indicators?.filter(i => i.value > 0) || [];

  return (
    <div className="animate-fade-in">
      {/* 1. Landing Inmersiva */}
      <HeroAnimation />

      <div className="container">
        {/* 2. Qué pasaría si no recicláramos */}
        <ConsequencesSlider />
      </div>

      {/* 3. Laboratorio EcoShine */}
      <div style={{ background: 'var(--color-bg-secondary)', padding: '2rem 0' }}>
        <div className="container">
          <LabProcess />
        </div>
      </div>

      {/* MVP Indicators (EcoShine Live) */}
      {activeIndicators.length > 0 && (
        <section style={{ padding: '6rem 0', background: 'var(--glass-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>EcoShine Live (Datos Generados)</h2>
              <p>Seguimiento en vivo de la fase MVP y progreso alcanzado.</p>
            </div>
            <div className={styles.gridSection} style={{ marginTop: 0 }}>
              {activeIndicators.map(indicator => (
                <div key={indicator.id} style={{ textAlign: 'center' }}>
                  <h2 style={{ color: 'var(--color-primary)', fontSize: '3rem' }}>{indicator.value}{indicator.unit}</h2>
                  <p style={{ fontWeight: 600, color: '#fff', margin: '0.5rem 0' }}>{indicator.name}</p>
                  <p style={{ fontSize: '0.875rem' }}>{indicator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Simulador de Impacto */}
      <div className="container">
        <ImpactSimulator />
      </div>

      {/* 5. Galería de Futuro (Scaffold) */}
      <section className="container" style={{ margin: '6rem auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Galería de Futuro</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Renderizados conceptuales sobre el impacto de nuestras baldosas en los espacios del mañana.</p>
        <div className={styles.gridSection}>
          {['Patio Ecológico', 'Cafetería Sostenible', 'Oficina Sostenible'].map((title, i) => (
            <div key={i} className="glass-panel" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-secondary)' }}>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sections to be externalized: Commitment Wall & Learning Center */}
      <section className="container" style={{ margin: '6rem auto', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(59,130,246,0.1))' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Último Paso: Súmate a la Revolución</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>Pondremos el vidrio donde pertenece: En tu suelo y no en tu océano.</p>
          <Link href="/unete" className="btn-premium">
            Quiero Colaborar en el MVP
          </Link>
        </div>
      </section>

    </div>
  );
}
