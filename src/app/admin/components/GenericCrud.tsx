'use client';
import { useState, useEffect, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import styles from '../admin.module.css';
import { Trash2, Plus, X } from 'lucide-react';

type Field = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'textarea';
};

interface GenericCrudProps {
  tableName: string;
  title: string;
  fields: Field[];
}

export default function GenericCrud({ tableName, title, fields }: GenericCrudProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    fetchData();
  }, [tableName]);

  const fetchData = async () => {
    setLoading(true);
    const { data: result, error } = await supabase.from(tableName).select('*').order('created_at', { ascending: false });
    if (!error && result) setData(result);
    setLoading(false);
  };

  const deleteRecord = async (id: string) => {
    if (confirm('¿Eliminar este registro?')) {
      await supabase.from(tableName).delete().eq('id', id);
      fetchData();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await supabase.from(tableName).insert([formData]);
    setShowModal(false);
    setFormData({});
    fetchData();
  };

  return (
    <div className="animate-fade-in">
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setShowModal(true)} className="btn-premium">
          <Plus size={18} /> Agregar Nuevo
        </button>
      </div>

      <div className={styles.card}>
        {loading ? (
          <p>Cargando datos...</p>
        ) : data.length === 0 ? (
          <p>No hay registros disponibles. Prueba agregando uno nuevo.</p>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {fields.map(f => <th key={f.name}>{f.label}</th>)}
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={row.id || i}>
                    {fields.map(f => (
                      <td key={f.name} style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {row[f.name]}
                      </td>
                    ))}
                    <td>
                      <div className={styles.actionButtons}>
                        <button onClick={() => deleteRecord(row.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
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

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div className={styles.card} style={{ width: '100%', maxWidth: '500px', margin: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3>Nuevo {title}</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}><X /></button>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {fields.map(f => (
                <div key={f.name}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>{f.label}</label>
                  {f.type === 'textarea' ? (
                    <textarea 
                      required
                      className="input-premium" 
                      rows={4}
                      value={formData[f.name] || ''}
                      onChange={e => setFormData({ ...formData, [f.name]: e.target.value })}
                    />
                  ) : (
                    <input 
                      required
                      className="input-premium" 
                      type={f.type}
                      value={formData[f.name] || ''}
                      onChange={e => setFormData({ ...formData, [f.name]: e.target.value })}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn-premium" style={{ marginTop: '1rem' }}>Guardar Registro</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
