'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import styles from '../admin.module.css';
import { Trash2 } from 'lucide-react';

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (!error && data) setLeads(data);
    setLoading(false);
  };

  const deleteLead = async (id: string) => {
    if (confirm('¿Eliminar este registro?')) {
      await supabase.from('leads').delete().eq('id', id);
      fetchLeads();
    }
  };

  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <h2>Interesados (Leads)</h2>
        <button onClick={fetchLeads} className="btn-premium">Actualizar</button>
      </div>

      <div className={styles.card}>
        {loading ? (
          <p>Cargando datos...</p>
        ) : leads.length === 0 ? (
          <p>Aún no hay registros de interesados. ¡Pronto llegarán!</p>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Contacto</th>
                  <th>Mensaje</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id}>
                    <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                    <td>{lead.name}</td>
                    <td>{lead.type}</td>
                    <td>{lead.contact_info}</td>
                    <td style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lead.message}</td>
                    <td>
                      <div className={styles.actionButtons}>
                        <button onClick={() => deleteLead(lead.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
