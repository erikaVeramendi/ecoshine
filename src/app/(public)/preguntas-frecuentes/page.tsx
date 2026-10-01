'use client';
import { useState } from 'react';
import styles from '../components/public.module.css';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué es EcoShine?',
      a: 'EcoShine es un emprendimiento en desarrollo (fase MVP) de economía circular que transforma vidrio posconsumo en baldosas decorativas.'
    },
    {
      q: '¿Qué producto desarrolla?',
      a: 'Desarrollamos baldosas decorativas no estructurales que pueden ser utilizadas para revestimientos en interiores y espacios comerciales.'
    },
    {
      q: '¿De qué materiales están hechas las baldosas?',
      a: 'Están compuestas principalmente por vidrio posconsumo triturado, cemento, marmolina, agua y un material de refuerzo que estamos validando.'
    },
    {
      q: '¿Las baldosas son estructurales?',
      a: 'No. Nuestras baldosas son decorativas y de revestimiento. No están diseñadas para soportar cargas estructurales de construcción.'
    },
    {
      q: '¿Dónde pueden utilizarse?',
      a: 'Son ideales para revestimientos de paredes, interiores de oficinas, espacios comerciales y remodelaciones donde se busque un toque sustentable y estético.'
    },
    {
      q: '¿Cómo se obtiene el vidrio?',
      a: 'Trabajamos con fuentes de recuperación local y buscamos integrar a ecorecolectores en el proceso para dignificar y formalizar este trabajo.'
    },
    {
      q: '¿Qué ocurre con el vidrio después de recuperarlo?',
      a: 'Se selecciona, limpia y se envía a un servicio de trituración externa. Luego, ese material procesado se dosifica y mezcla para moldear las baldosas.'
    },
    {
      q: '¿EcoShine ya está produciendo comercialmente?',
      a: 'No. Actualmente nos encontramos en la fase de Producto Mínimo Viable (MVP). Estamos produciendo 3 lotes piloto (120 baldosas en total) para validar calidad y viabilidad comercial.'
    },
    {
      q: '¿Cómo puedo participar?',
      a: 'Puedes participar como potencial cliente interesado en probar el producto, como ecorecolector proveyendo vidrio, o como empresa aliada. Dirígete a la sección "Participa" para llenar el formulario.'
    },
    {
      q: '¿Cómo puedo contactarlos?',
      a: 'A través de nuestros formularios en la plataforma web o directamente mediante nuestras redes sociales oficiales.'
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <HelpCircle size={48} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1>Preguntas Frecuentes</h1>
        <p style={{ marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>Conoce más sobre nuestros procesos, tecnología y el estado actual de validación del proyecto.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="glass-panel" 
            style={{ overflow: 'hidden', transition: 'all 0.3s' }}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.5rem 2rem', background: 'transparent', border: 'none', cursor: 'pointer',
                color: '#fff', fontSize: '1.1rem', fontWeight: 500, textAlign: 'left'
              }}
            >
               {faq.q}
               {openIndex === i ? <ChevronUp size={20} color="var(--color-primary)" /> : <ChevronDown size={20} color="var(--color-text-muted)" />}
            </button>
            <div style={{ 
               height: openIndex === i ? 'auto' : 0, 
               opacity: openIndex === i ? 1 : 0, 
               padding: openIndex === i ? '0 2rem 1.5rem' : '0 2rem',
               transition: 'all 0.3s'
            }}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
