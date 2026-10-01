import { Leaf, Users, TrendingUp, AlertTriangle } from 'lucide-react';
import ImpactSimulator from '../components/ImpactSimulator';

export const metadata = {
  title: 'Impacto EcoShine | Económico, Social y Ambiental',
  description: 'Conoce cómo las baldosas EcoShine buscan generar valor económico, social y ayudar al medio ambiente.',
};

export default function ImpactoPage() {
  const impacts = [
    {
      icon: Leaf, color: '#10b981', title: 'Impacto Ambiental',
      points: [
        { label: 'Vidrio recuperado', val: 'Pendiente de registro' },
        { label: 'Valorización de residuos', val: 'Pendiente de registro' },
        { label: 'Reducción en botaderos', val: 'En proceso de validación' },
      ],
      desc: 'El vidrio es 100% reciclable pero su descarte masivo genera colapso en botaderos, ya que tarda miles de años en degradarse. Evitando su acumulación ganamos espacio y reducimos contaminación visual y de suelos.'
    },
    {
      icon: Users, color: '#3b82f6', title: 'Impacto Social',
      points: [
        { label: 'Ecorecolectores participantes', val: 'Pendiente de registro' },
        { label: 'Oportunidades económicas', val: 'En proceso de validación' },
        { label: 'Actores de recuperación', val: 'En proceso de validación' },
      ],
      desc: 'Buscamos dignificar y formalizar canales de recolección de residuos, conectando proyectos arquitectónicos con la gran labor que realizan los recuperadores de base.'
    },
    {
      icon: TrendingUp, color: '#8b5cf6', title: 'Impacto Económico',
      points: [
        { label: 'Generación de valor (Bs)', val: 'Pendiente de registro' },
        { label: 'Desarrollo de producto local', val: 'Activo / MVP' },
        { label: 'Oportunidades comerciales', val: 'En proceso de validación' },
      ],
      desc: 'Al transformar un "problema" en un recurso premium para un mercado (como el de la construcción y diseño), la economía circular genera valor dentro de la misma localidad.'
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <Leaf size={48} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1>Nuestro Impacto</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          La huella que queremos dejar en Cochabamba y el mundo, siendo transparentes desde el día uno de nuestro MVP.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '4rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <AlertTriangle color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          <strong style={{ color: '#ef4444' }}>Aviso de Transparencia (Regla Fundamental):</strong> Actualmente nos encontramos en la fase de validación del Producto Mínimo Viable. Todos los datos finales y estadísticas masivas se encuentran en estado de <em>Pendiente de registro</em>. No inventamos cifras; estas métricas reflejarán nuestro impacto real conforme el plan de validación avance hacia la comercialización.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
        {impacts.map((block, i) => (
          <div key={i} className="glass-panel" style={{ padding: '2.5rem' }}>
             <div style={{ 
               width: '56px', height: '56px', borderRadius: '14px', 
               background: `${block.color}15`, border: `1px solid ${block.color}40`,
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               marginBottom: '1.5rem'
             }}>
               <block.icon size={26} color={block.color} />
             </div>
             <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{block.title}</h2>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {block.points.map((p, idx) => (
                  <div key={idx} style={{ paddingBottom: '0.75rem', borderBottom: '1px solid var(--glass-border)' }}>
                     <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>{p.label}</div>
                     <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{p.val}</div>
                  </div>
                ))}
             </div>
             
             <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
               {block.desc}
             </p>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Simulador Educativo</h2>
      <ImpactSimulator />
      
    </div>
  );
}
