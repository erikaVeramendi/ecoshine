import { supabase } from '@/lib/supabase';
import styles from '../components/publicComponents.module.css';

export const revalidate = 60;

export default async function AprendizajePage() {
  const { data: content } = await supabase.from('educational_content').select('*').order('created_at', { ascending: false });

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h1 className="glow-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}>Centro de Aprendizaje</h1>
        <h2>Microcontenido Visual</h2>
        <p style={{ marginTop: '1rem' }}>Aprende de forma rápida y dinámica sobre economía circular, separación de residuos y sostenibilidad.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {(!content || content.length === 0) ? (
           <div className="glass-panel" style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center' }}>
             <h3>Próximamente...</h3>
             <p>Estamos preparando cápsulas educativas sobre economía circular para ti.</p>
           </div>
        ) : (
          content.map(item => (
            <div key={item.id} className="glass-panel" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '400px', background: 'var(--color-bg-secondary)' }}>
              {/* Fake TikTok/Reel Video Placeholder */}
              <div style={{ flex: 1, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--glass-border)', overflow: 'hidden', position: 'relative' }}>
                 {item.video_url ? (
                   <div style={{ color: 'var(--color-primary)' }}>▶ Reproducir Video</div>
                 ) : (
                   <div style={{ padding: '2rem', textAlign: 'center' }}>
                     <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', textShadow: '0 0 10px rgba(16,185,129,0.5)' }}>ECO<br/>SHINE</h2>
                   </div>
                 )}
                 <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem' }}>#EcoShine</div>
              </div>
              <div style={{ padding: '1.5rem', height: '150px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.summary}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
