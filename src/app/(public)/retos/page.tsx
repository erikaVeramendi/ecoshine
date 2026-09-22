import { supabase } from '@/lib/supabase';
import styles from '../components/publicComponents.module.css';
import { Target, UploadCloud, Medal } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60;

export default async function RetosPage() {
  const { data: challenges } = await supabase.from('challenges').select('*').eq('is_active', true);

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
        <Medal size={48} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1>Reto Mensual EcoShine</h1>
        <p style={{ marginTop: '1rem' }}>No te limites a informarte. Transfórmate en parte activa de nuestra campaña. Cumple los retos mensuales, sube tus evidencias a tus redes etiquetándonos y únete al muro oficial.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {(!challenges || challenges.length === 0) ? (
          <div className="glass-panel" style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center' }}>
            <h2>Recibiendo nuevos retos...</h2>
            <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Mantente atento. Lanzaremos nuestro primer reto de separación de vidrio en unos días.</p>
          </div>
        ) : (
          challenges.map(challenge => (
            <div key={challenge.id} className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--color-primary)', width: '100px', height: '100px', borderRadius: '50%', opacity: 0.1 }}></div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <Target color="var(--color-primary)" /> {challenge.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>{challenge.description}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <span className="glow-text" style={{ fontSize: '0.9rem' }}>+{challenge.points} Pts Eco</span>
                <Link href={`https://instagram.com`} target="_blank" className="btn-premium" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  <UploadCloud size={16} /> Subir Evidencia
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="glass-panel" style={{ marginTop: '4rem', padding: '3rem', textAlign: 'center' }}>
        <h3>¿Cómo funciona?</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <span style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>1</span>
            <p style={{ marginTop: '0.5rem' }}>Elige un reto activo</p>
          </div>
          <div>
            <span style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>2</span>
            <p style={{ marginTop: '0.5rem' }}>Cumple la acción recomendada</p>
          </div>
          <div>
            <span style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>3</span>
            <p style={{ marginTop: '0.5rem' }}>Publica tu foto o video</p>
          </div>
        </div>
      </div>
    </div>
  );
}
