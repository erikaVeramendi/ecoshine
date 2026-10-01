import Link from 'next/link';
import { Package, Filter } from 'lucide-react';

export const metadata = {
  title: 'Producto | EcoShine',
  description: 'Catálogo de baldosas decorativas de vidrio reciclado en validación.',
};

export default function ProductoPage() {
  const finishes = ['Mate', 'Pulido Brillante', 'Texturizado'];
  const baseColors = ['Blanco Cemento', 'Gris Medio', 'Antracita', 'Pigmento Natural'];
  
  // Placeholders since no real photos exist yet
  const tiles = [
    { id: 1, name: 'EcoShine Base Mateo', finish: 'Mate', color: 'Gris Medio', status: 'En validación MVP' },
    { id: 2, name: 'Crystal White', finish: 'Pulido Brillante', color: 'Blanco Cemento', status: 'Prototipo' },
    { id: 3, name: 'Terra Rust', finish: 'Texturizado', color: 'Pigmento Natural', status: 'En validación MVP' },
    { id: 4, name: 'Dark Crystal', finish: 'Pulido Brillante', color: 'Antracita', status: 'Diseño' },
    { id: 5, name: 'Pearl Gray', finish: 'Mate', color: 'Blanco Cemento', status: 'Prototipo' },
    { id: 6, name: 'Raw Texture', finish: 'Texturizado', color: 'Gris Medio', status: 'Diseño' },
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <Package size={48} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1>Nuestro Producto</h1>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          Baldosas decorativas no estructurales elaboradas con un alto porcentaje de vidrio posconsumo.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Ficha Técnica en Desarrollo</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-primary)' }}>Aplicación:</strong> Revestimientos decorativos (interiores y semi-exteriores).
            </li>
            <li style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-primary)' }}>Material Principal:</strong> Vidrio posconsumo procesado mecánicamente.
            </li>
            <li style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-primary)' }}>Aglomerante:</strong> Cemento, marmolina, agua.
            </li>
            <li style={{ paddingBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--color-primary)' }}>Refuerzo:</strong> En validación de materiales de soporte estructural minimizado.
            </li>
          </ul>
        </div>
        <div style={{ flex: '1 1 300px', background: 'rgba(16,185,129,0.08)', borderRadius: '12px', padding: '2rem', border: '1px border rgba(16,185,129,0.2)' }}>
          <h3>Aviso sobre Comercialización</h3>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
            Actualmente nos encontramos fabricando <strong>120 baldosas correspondientes a 3 lotes piloto</strong> para nuestro Producto Mínimo Viable (MVP).
            No contamos con stock para ventas masivas, pero estamos documentando los ensayos técnicos y aceptando contactos comerciales tempranos.
          </p>
          <Link href="/unete" className="btn-premium" style={{ marginTop: '1.5rem', width: '100%', fontSize: '0.9rem' }}>
            Solicitar Información MVP
          </Link>
        </div>
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
         <Filter size={20} color="var(--color-primary)" />
         <h3>Catálogo de Prototipos</h3>
      </div>
      
      {/* Filters (Visual only for now) */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
         <select className="input-premium" style={{ width: 'auto', minWidth: '150px' }}>
           <option value="">Acabado (Todos)</option>
           {finishes.map(f => <option key={f} value={f}>{f}</option>)}
         </select>
         <select className="input-premium" style={{ width: 'auto', minWidth: '150px' }}>
           <option value="">Color (Todos)</option>
           {baseColors.map(c => <option key={c} value={c}>{c}</option>)}
         </select>
      </div>

      {/* Grid of placeholders */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
        {tiles.map(tile => (
          <div key={tile.id} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              height: '240px', 
              background: 'linear-gradient(45deg, #131a18, #1a2522)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative'
            }}>
               <div style={{ textAlign: 'center', opacity: 0.5 }}>
                 <div style={{ fontSize: '3rem' }}>🔍</div>
                 <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Foto real pendiente</p>
               </div>
               <span style={{
                 position: 'absolute', top: '10px', right: '10px',
                 background: 'rgba(16,185,129,0.2)', color: 'var(--color-primary)',
                 padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600
               }}>
                 {tile.status}
               </span>
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{tile.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Acabado:</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{tile.finish}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Tono Base:</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{tile.color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
