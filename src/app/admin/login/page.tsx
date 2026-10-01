'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Leaf, Lock, Mail, Eye, EyeOff } from 'lucide-react';

const ADMIN_EMAIL = 'ecoshineAdmin@gmail.com';
const ADMIN_PASSWORD = 'ecoshinecocha';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate a brief loading state
    await new Promise(r => setTimeout(r, 600));

    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Set session cookie (7 day expiry)
      document.cookie = `ecoshineAdminSession=authenticated; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
      router.push('/admin');
      router.refresh();
    } else {
      setError('Credenciales incorrectas. Verifica tu correo y contraseña.');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg)',
      padding: '2rem',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(16,185,129,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1,
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '0.5rem',
          }}>
            <Leaf size={32} color="var(--color-primary)" />
            <span style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff' }}>EcoShine</span>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Panel Administrativo
          </p>
        </div>

        {/* Card */}
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <h2 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>Iniciar Sesión</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            Accede con tus credenciales de administrador.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Correo Electrónico
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', pointerEvents: 'none' }} />
                <input
                  type="email"
                  required
                  className="input-premium"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="administrador@ecoshine.com"
                  style={{ paddingLeft: '2.75rem' }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Contraseña
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', pointerEvents: 'none' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="input-premium"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  style={{ paddingLeft: '2.75rem', paddingRight: '3rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(p => !p)}
                  style={{
                    position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)',
                    padding: '0.25rem',
                  }}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#fca5a5',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn-premium"
              disabled={loading}
              style={{ width: '100%', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Verificando...' : 'Ingresar al Panel'}
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          EcoShine MVP © {new Date().getFullYear()} — Área restringida
        </p>
      </div>
    </div>
  );
}
