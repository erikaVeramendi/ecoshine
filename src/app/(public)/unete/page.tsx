'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from '../components/public.module.css';
import { Send, CheckCircle } from 'lucide-react';

export default function UnetePage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      contact_info: formData.get('contact') as string,
      message: formData.get('message') as string,
    };

    const { error } = await supabase.from('leads').insert([data]);

    if (!error) {
      setSuccess(true);
    } else {
      alert('Hubo un error al enviar tu información. Por favor, intenta de nuevo.');
    }
    
    setLoading(false);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Únete a la Iniciativa</h1>
        <p>Estamos buscando validar nuestro producto con aliados clave. Deja tus datos y nuestro equipo entrará en contacto contigo muy pronto para explorar oportunidades juntos.</p>
      </div>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        {success ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={60} color="var(--color-primary)" style={{ margin: '0 auto 1.5rem' }} />
            <h3>¡Gracias por tu interés!</h3>
            <p style={{ marginTop: '1rem' }}>Hemos recibido tus datos correctamente. Nuestro equipo revisará la información y te contactará en breve.</p>
            <button onClick={() => setSuccess(false)} className="btn-premium" style={{ marginTop: '2rem' }}>Enviar otra solicitud</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>¿Qué tipo de aliado eres?</label>
              <select name="type" required className="input-premium" style={{ appearance: 'none' }}>
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="Arquitecto/Constructor">Arquitecto o Constructora</option>
                <option value="Empresa/Institución">Empresa o Institución</option>
                <option value="Inversor">Inversor / Fondo de Impacto</option>
                <option value="Persona natural">Persona particular (voluntario/cliente)</option>
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Nombre Completo o Empresa</label>
              <input name="name" type="text" required className="input-premium" placeholder="Ej: EcoConstruct SRL" />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Email o Teléfono de Contacto</label>
              <input name="contact" type="text" required className="input-premium" placeholder="tucorreo@ejemplo.com o número de celular" />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Mensaje (Opcional)</label>
              <textarea name="message" rows={4} className="input-premium" placeholder="Cuéntanos brevemente cómo te gustaría colaborar con nosotros en esta fase MVP..."></textarea>
            </div>

            <button type="submit" disabled={loading} className="btn-premium" style={{ marginTop: '1rem', width: '100%' }}>
              {loading ? 'Enviando...' : <><Send size={18} /> Enviar Solicitud</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
