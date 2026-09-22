import { supabase } from '@/lib/supabase';
import styles from '../components/public.module.css';
import { Calendar, Tag } from 'lucide-react';

export const revalidate = 60;

export default async function AvancePage() {
  const { data: activities } = await supabase
    .from('activities')
    .select('*')
    .order('date', { ascending: false });

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h1 className="glow-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}>Desarrollo MVP</h1>
        <h2>Avances del Proyecto</h2>
        <p style={{ marginTop: '1rem' }}>Documentamos cada paso de nuestro proceso de validación. Desde iteraciones en la formulación de nuestras baldosas ecológicas, hasta nuestra presencia y reuniones con actores de la industria.</p>
      </div>

      {(!activities || activities.length === 0) ? (
        <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h3>Nuevos hitos en camino</h3>
          <p style={{ marginTop: '1rem' }}>El equipo está trabajando arduamente en la validación. Las actualizaciones de actividades y pruebas se publicarán aquí próximamente desde el panel administrativo.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {activities.map(activity => (
            <div key={activity.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              {activity.image_url && (
                <div style={{ flex: '1 1 300px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={activity.image_url} alt={activity.title} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '250px' }} />
                </div>
              )}
              <div style={{ flex: '2 1 400px' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    <Calendar size={14} /> {new Date(activity.date).toLocaleDateString()}
                  </span>
                  {activity.type && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--color-primary)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      <Tag size={14} /> {activity.type}
                    </span>
                  )}
                </div>
                <h3>{activity.title}</h3>
                <p style={{ marginTop: '1rem' }}>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
