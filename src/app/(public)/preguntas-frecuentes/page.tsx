import styles from '../components/public.module.css';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: '¿Qué es EcoShine?',
      a: 'EcoShine es un emprendimiento en desarrollo (fase MVP) enfocado en reciclar y revalorizar envases de vidrio posconsumo, transformándolos en materiales para construcción y decoración amigables con el medio ambiente.'
    },
    {
      q: '¿Cómo se recicla el vidrio?',
      a: 'Trabajamos en conjunto con asociaciones de ecorecolectoras locales. El vidrio es seleccionado, triturado mediante un proceso mecánico seguro, lavado y preparado para ser empleado como materia prima sustituyendo agregados petreos (como la arena o grava).'
    },
    {
      q: '¿Cómo se fabrican las baldosas?',
      a: 'Utilizamos una formulación innovadora que combina aglomerantes especiales y vidrio triturado (en polvo y en escamas). Esto nos permite moldear baldosas y revestimientos con una huella de carbono significativamente inferior a la de los cerámicos tradicionales horneados.'
    },
    {
      q: '¿Cuáles son los beneficios ambientales?',
      a: 'Evitamos que toneladas de vidrio saturen los vertederos. Ahorramos grandes cantidades de agua y energía. Disminuimos la explotación de recursos naturales y la emisión de gases al evitar altas temperaturas para procesos cerámicos.'
    },
    {
      q: '¿En qué estado se encuentra el proyecto?',
      a: 'Actualmente estamos en fase de validación e investigación (desarrollo del MVP). Estamos refinando las baldosas en pruebas de laboratorio y validando su aceptación en el mercado a través de estudios y alianzas tempranas para asegurar la viabilidad.'
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '900px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <HelpCircle size={48} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1>Preguntas Frecuentes</h1>
        <p style={{ marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>Conoce más sobre nuestros procesos, tecnología, estado actual de validación y misión para cambiar el sector constructivo.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {faqs.map((faq, i) => (
          <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
               {faq.q}
            </h3>
            <p style={{ color: 'var(--color-text-muted)' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
