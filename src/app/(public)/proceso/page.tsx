import { RefreshCw, Hammer, Beaker, Truck, Blocks, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'El Proceso EcoShine | Transformación del Vidrio',
  description: 'Cómo transformamos envases de vidrio posconsumo en baldosas decorativas.',
};

export default function ProcesoPage() {
  const steps = [
    {
      icon: Truck,
      title: '1. Recolección',
      desc: 'Obtenemos vidrio posconsumo proveniente de diferentes fuentes de recuperación local, evitando que terminen en botaderos.',
    },
    {
      icon: RefreshCw,
      title: '2. Clasificación y limpieza',
      desc: 'El vidrio crudo se selecciona para separar colores (si aplica) y se limpia para prepararlo para el procesamiento mecánico.',
    },
    {
      icon: Hammer,
      title: '3. Trituración',
      desc: 'El vidrio es sometido a molienda mediante un servicio especializado externo, alcanzando la granulometría precisa para la mezcla sin necesidad de hornos.',
    },
    {
      icon: Beaker,
      title: '4. Dosificación y mezcla',
      desc: 'El vidrio triturado se integra cuidadosamente con cemento, agua, marmolina y componentes de refuerzo (en fase de validación técnica).',
    },
    {
      icon: Blocks,
      title: '5. Moldeo y vibrado',
      desc: 'La matriz es vertida y acomodada en moldes específicos. Se aplica vibración para asegurar que la placa no tenga bolsas de aire.',
    },
    {
      icon: Blocks, // Reuse an icon for curing, no exact icon fits perfectly
      title: '6. Curado',
      desc: 'Las piezas entran en un periodo de reposo a temperatura ambiente controlado para garantizar el fraguado óptimo de los minerales y máxima resistencia.',
    },
    {
      icon: Sparkles,
      title: '7. Acabado / Pulido',
      desc: 'Dependiendo del diseño requerido, se realiza el pulido superficial para exponer el brillo característico del vidrio reciclado en la superficie.',
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <RefreshCw size={48} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1>Así Transformamos el Vidrio</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          Un proceso que requiere menos energía y no emite gases tóxicos al evitar la refundición del vidrio.
        </p>
      </div>

      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        {/* Render a connecting line behind the steps on desktop */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: '32px',
          width: '2px', background: 'var(--glass-border)',
          zIndex: 0,
        }} className="process-timeline-line" />

        {steps.map((step, idx) => (
          <div key={idx} style={{ 
            display: 'flex', gap: '2rem', marginBottom: '3rem', 
            position: 'relative', zIndex: 1 
          }}>
            <div style={{ 
              width: '64px', height: '64px', borderRadius: '50%', 
              background: 'var(--color-bg-secondary)', border: '2px solid var(--color-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: '0 0 15px rgba(16,185,129,0.2)'
            }}>
              <step.icon size={28} color="var(--color-primary)" />
            </div>
            
            <div className="glass-panel" style={{ flex: 1, padding: '2rem' }}>
               <h3 style={{ marginBottom: '1rem', color: '#fff' }}>{step.title}</h3>
               <p style={{ lineHeight: 1.7, color: 'var(--color-text-muted)' }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Internal CSS just for hiding the line on very small mobile screens if needed, 
          though it sits nicely left-aligned. */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 600px) {
          .process-timeline-line { left: 24px !important; }
        }
      `}}/>
    </div>
  );
}
