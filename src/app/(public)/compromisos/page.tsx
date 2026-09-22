'use client';
import { useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import styles from '../components/publicComponents.module.css';
import { MessageSquarePlus } from 'lucide-react';

export default function CompromisosPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data } = await supabase.from('commitments').select('*').order('created_at', { ascending: false });
    if (data) setMessages(data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from('commitments').insert([formData]);
    if (!error) {
      setSuccess(true);
      setFormData({ name: '', message: '' });
      fetchMessages();
    }
    setSubmitting(false);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
        <h1 className="glow-text" style={{ fontSize: '1rem', marginBottom: '1rem' }}>Comunidad EcoShine</h1>
        <h2>Muro de Compromiso Ambiental</h2>
        <p style={{ marginTop: '1rem' }}>Toda gran revolución empieza con una simple declaración. Deja tu compromiso público por una Cochabamba más limpia y sostenible.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Formulary Column */}
        <div className="glass-panel" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MessageSquarePlus size={20} /> Deja tu Firma</h3>
          
          {success ? (
            <div style={{ textAlign: 'center', color: 'var(--color-primary)' }}>
              <h4>¡Gracias por tu compromiso!</h4>
              <p style={{ margin: '1rem 0' }}>Tu mensaje ha sido publicado en el muro virtual.</p>
              <button className="btn-premium" onClick={() => setSuccess(false)}>Dejar otro</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Tu Nombre / Iniciativa</label>
                <input required type="text" className="input-premium" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Ej: Camila, Familia López" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>¿A qué te comprometes?</label>
                <textarea required rows={4} className="input-premium" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Me comprometo a reciclar mis botellas de vidrio en los puntos EcoShine..."></textarea>
              </div>
              <button disabled={submitting} type="submit" className="btn-premium" style={{ width: '100%', marginTop: '1rem' }}>
                {submitting ? 'Publicando...' : 'Publicar Compromiso'}
              </button>
            </form>
          )}
        </div>

        {/* Masonry / Grid Column */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {loading ? (
             <p>Cargando muro...</p>
          ) : messages.length === 0 ? (
             <div className="glass-panel" style={{ gridColumn: '1 / -1', padding: '3rem', textAlign: 'center' }}>
               <h3 style={{ color: 'var(--color-text-muted)' }}>El muro está esperando su primer compromiso</h3>
             </div>
          ) : (
            messages.map(msg => (
              <div key={msg.id} className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.5 }}>"{msg.message}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>- {msg.name}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {new Date(msg.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
