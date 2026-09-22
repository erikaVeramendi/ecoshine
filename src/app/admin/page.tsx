import styles from './admin.module.css';
import { supabase } from '@/lib/supabase';
import { Users, Newspaper, Activity, Flag } from 'lucide-react';

// For MVP, we can have dynamic fetching without caching on the dashboard
export const revalidate = 0;

export default async function AdminDashboardPage() {
  
  // Basic stats fetching
  const { count: leadsCount } = await supabase.from('leads').select('*', { count: 'exact', head: true });
  const { count: newsCount } = await supabase.from('news').select('*', { count: 'exact', head: true });
  const { count: activitiesCount } = await supabase.from('activities').select('*', { count: 'exact', head: true });
  const { count: indicatorsCount } = await supabase.from('indicators').select('*', { count: 'exact', head: true });

  const stats = [
    { label: 'Leads (Interesados)', value: leadsCount || 0, icon: Users },
    { label: 'Noticias Publicadas', value: newsCount || 0, icon: Newspaper },
    { label: 'Actividades Realizadas', value: activitiesCount || 0, icon: Flag },
    { label: 'Indicadores Activos', value: indicatorsCount || 0, icon: Activity },
  ];

  return (
    <div>
      <div className={styles.header}>
        <h1>Dashboard General</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.card} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--glass-bg)', borderRadius: '50%', color: 'var(--color-primary)' }}>
              <stat.icon size={28} />
            </div>
            <div>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>{stat.label}</p>
              <h2 style={{ margin: 0 }}>{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.card} style={{ marginTop: '2rem' }}>
        <h3>Estado del Sistema (MVP)</h3>
        <p style={{ marginTop: '1rem' }}>
          Bienvenido al panel administrativo de EcoShine. Desde aquí puedes gestionar la información que se muestra en el sitio público.
          La transparencia es clave: todos los datos en el sitio público provendrán de este panel. No se utilizan datos ficticios.
        </p>
      </div>
    </div>
  );
}
