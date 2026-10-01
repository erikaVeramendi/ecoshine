import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import HeroAnimation from './components/HeroAnimation';
import ConsequencesSlider from './components/ConsequencesSlider';
import LabProcess from './components/LabProcess';
import ImpactSimulator from './components/ImpactSimulator';
import {
  Recycle, Leaf, Building2, Users, TrendingUp,
  ArrowRight, Package, FlaskConical, CheckCircle,
  Loader, Star, ChevronRight,
} from 'lucide-react';

export const revalidate = 60;

export const metadata = {
  title: 'EcoShine — Del vidrio que descartamos al diseño que construimos',
  description:
    'EcoShine transforma vidrio posconsumo en baldosas decorativas no estructurales. Un emprendimiento de economía circular en validación MVP.',
  openGraph: {
    title: 'EcoShine — Baldosas Decorativas de Vidrio Reciclado',
    description: 'Economía circular aplicada a la construcción sostenible. Cochabamba, Bolivia.',
    type: 'website',
  },
};

export default async function LandingPage() {
  const { data: indicators } = await supabase.from('indicators').select('*');
  const activeIndicators = indicators?.filter((i) => i.value > 0) || [];

  /* -------- DATA -------- */
  const queEsCards = [
    {
      icon: Recycle,
      title: '¿Qué hacemos?',
      desc: 'Recuperamos vidrio posconsumo y lo transformamos en baldosas decorativas no estructurales mediante un proceso de economía circular.',
    },
    {
      icon: Building2,
      title: '¿Qué problema abordamos?',
      desc: 'El vidrio es difícilmente reciclado en nuestra región y termina en botaderos. EcoShine busca convertir ese residuo en un recurso valioso.',
    },
    {
      icon: Package,
      title: '¿Qué producto estamos desarrollando?',
      desc: 'Baldosas decorativas no estructurales elaboradas con vidrio posconsumo, cemento, marmolina y agua, para revestimientos y decoración.',
    },
    {
      icon: Leaf,
      title: '¿Qué impacto buscamos?',
      desc: 'Reducir residuos de vidrio, integrar ecorecolectores, generar valor local y demostrar que los residuos pueden ser un punto de partida para innovar.',
    },
  ];

  const circularSteps = [
    { label: 'Residuo', sublabel: 'Vidrio posconsumo', color: '#ef4444' },
    { label: 'Recuperación', sublabel: 'Recolección y clasificación', color: '#f59e0b' },
    { label: 'Transformación', sublabel: 'Proceso EcoShine', color: '#10b981' },
    { label: 'Producto', sublabel: 'Baldosa decorativa', color: '#3b82f6' },
    { label: 'Nuevo Valor', sublabel: 'Económico, social, ambiental', color: '#8b5cf6' },
  ];

  const mvpStats = [
    { value: '3', label: 'Lotes Piloto', desc: 'Lotes de producción planificados para la fase MVP' },
    { value: '40', label: 'Baldosas por Lote', desc: 'Unidades por lote para proceso de validación' },
    { value: '120', label: 'Baldosas Piloto', desc: 'Total del plan de producción para el MVP' },
  ];

  const mvpValidation = [
    { text: 'Formulación de la mezcla' },
    { text: 'Calidad del producto' },
    { text: 'Ensayos técnicos' },
    { text: 'Análisis de costos' },
    { text: 'Aceptación del mercado' },
  ];

  const impactCategories = [
    {
      icon: Leaf,
      color: '#10b981',
      title: 'Impacto Ambiental',
      items: [
        { label: 'Vidrio recuperado', value: 'Pendiente de registro' },
        { label: 'Residuos valorizados', value: 'Pendiente de registro' },
        { label: 'Reducción en botaderos', value: 'En proceso de validación' },
      ],
    },
    {
      icon: Users,
      color: '#3b82f6',
      title: 'Impacto Social',
      items: [
        { label: 'Ecorecolectores integrados', value: 'Pendiente de registro' },
        { label: 'Oportunidades económicas', value: 'En proceso de validación' },
        { label: 'Actores de recuperación', value: 'En proceso de validación' },
      ],
    },
    {
      icon: TrendingUp,
      color: '#8b5cf6',
      title: 'Impacto Económico',
      items: [
        { label: 'Valor generado del residuo', value: 'Pendiente de registro' },
        { label: 'Producto local desarrollado', value: 'En validación MVP' },
        { label: 'Oportunidades comerciales', value: 'En proceso de validación' },
      ],
    },
  ];

  const participaPaths = [
    {
      icon: Package,
      title: 'Soy potencial cliente',
      desc: 'Quiero conocer o adquirir baldosas EcoShine para mi proyecto.',
      cta: 'Quiero conocer el producto',
      type: 'potencial-cliente',
    },
    {
      icon: Recycle,
      title: 'Soy ecorecolector',
      desc: 'Quiero participar en la recuperación y provisión de vidrio posconsumo.',
      cta: 'Quiero proveer vidrio',
      type: 'ecorecolector',
    },
    {
      icon: Building2,
      title: 'Soy empresa o institución',
      desc: 'Quiero explorar alianzas o colaboraciones con EcoShine.',
      cta: 'Quiero ser aliado',
      type: 'empresa',
    },
    {
      icon: Star,
      title: 'Quiero conocer el proyecto',
      desc: 'Me interesa seguir los avances de EcoShine y recibir información.',
      cta: 'Recibir información',
      type: 'informacion',
    },
  ];

  const futureGallery = [
    { title: 'Revestimiento Interior', note: 'Visualización conceptual — No es un proyecto real' },
    { title: 'Espacio Comercial', note: 'Visualización conceptual — No es un proyecto real' },
    { title: 'Proyecto Arquitectónico', note: 'Visualización conceptual — No es un proyecto real' },
  ];

  return (
    <div>
      {/* ===================== 1. HERO ===================== */}
      <HeroAnimation />

      {/* ===================== 2. ¿QUÉ ES ECOSHINE? ===================== */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="glow-text">¿Qué es EcoShine?</span>
            <h2 style={{ marginTop: '1rem' }}>
              Transformamos residuos en{' '}
              <span style={{ color: 'var(--color-primary)' }}>diseño sostenible</span>
            </h2>
            <p style={{ marginTop: '1rem' }}>
              EcoShine es un emprendimiento de economía circular que transforma vidrio posconsumo en
              baldosas decorativas no estructurales, generando valor a partir de un residuo.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {queEsCards.map((card, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{ padding: '2rem' }}
              >
                <div
                  style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(16,185,129,0.12)',
                    border: '1px solid rgba(16,185,129,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <card.icon size={22} color="var(--color-primary)" />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3. ECONOMÍA CIRCULAR ===================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="glow-text">Economía Circular</span>
            <h2 style={{ marginTop: '1rem' }}>El ciclo que EcoShine activa</h2>
            <p style={{ marginTop: '1rem' }}>
              El vidrio que normalmente sería descartado puede reincorporarse a un proceso productivo
              para convertirse en un nuevo producto con valor económico, social y ambiental.
            </p>
          </div>

          {/* Circular Flow */}
          <div
            style={{
              display: 'flex', flexWrap: 'wrap', gap: '0',
              justifyContent: 'center', alignItems: 'center',
            }}
          >
            {circularSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{ textAlign: 'center', padding: '1.5rem 1rem', minWidth: '120px' }}
                >
                  <div
                    style={{
                      width: '56px', height: '56px', borderRadius: '50%',
                      background: `${step.color}22`, border: `2px solid ${step.color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 0.75rem', fontSize: '1.25rem', fontWeight: 700,
                      color: step.color,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p style={{ fontWeight: 600, color: '#fff', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    {step.label}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                    {step.sublabel}
                  </p>
                </div>
                {i < circularSteps.length - 1 && (
                  <ChevronRight
                    size={24}
                    color="var(--color-text-muted)"
                    style={{ flexShrink: 0 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Educational note */}
          <div
            className="glass-panel"
            style={{
              marginTop: '3rem', padding: '2rem',
              background: 'rgba(16,185,129,0.05)',
              border: '1px solid rgba(16,185,129,0.2)',
              textAlign: 'center', maxWidth: '700px', margin: '3rem auto 0',
            }}
          >
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              <strong style={{ color: 'var(--color-primary)' }}>¿Qué es la valorización de un residuo?</strong>{' '}
              Valorizar significa transformar algo que ya no tiene uso en su forma original en un nuevo recurso
              con valor económico o funcional, en lugar de descartarlo.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== 4. SLIDER CONSECUENCIAS ===================== */}
      <div style={{ background: 'var(--color-bg-secondary)', padding: '6rem 0' }}>
        <div className="container">
          <ConsequencesSlider />
        </div>
      </div>

      {/* ===================== 5. PROCESO (preview) ===================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="glow-text">Proceso EcoShine</span>
              <h2 style={{ marginTop: '0.5rem' }}>Así transformamos el vidrio</h2>
            </div>
            <Link href="/proceso" className="btn-premium" style={{ fontSize: '0.875rem', padding: '0.6rem 1.2rem' }}>
              Ver proceso completo <ArrowRight size={16} />
            </Link>
          </div>
          <LabProcess />
        </div>
      </section>

      {/* ===================== 6. NUESTRO MVP ===================== */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="glow-text">Nuestro MVP</span>
            <h2 style={{ marginTop: '1rem' }}>Plan de validación</h2>
            <p style={{ marginTop: '1rem' }}>
              EcoShine se encuentra actualmente en la fase de validación de su MVP (Producto Mínimo Viable).
              El objetivo es verificar la formulación, calidad y viabilidad comercial antes de escalar.
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem', marginBottom: '3rem',
            }}
          >
            {mvpStats.map((stat, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '2.5rem', textAlign: 'center',
                  border: '1px solid rgba(16,185,129,0.2)',
                }}
              >
                <h2
                  style={{
                    fontSize: '3.5rem', fontWeight: 700,
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </h2>
                <p style={{ fontWeight: 600, color: '#fff', margin: '0.5rem 0 0.25rem' }}>{stat.label}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* MVP road */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>El MVP busca validar:</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
              }}
            >
              {mvpValidation.map((v, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                >
                  <CheckCircle size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{v.text}</span>
                </div>
              ))}
            </div>

            {/* Progress line */}
            <div style={{ marginTop: '2.5rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem', textAlign: 'center' }}>
                Línea de avance MVP
              </p>
              <div
                style={{
                  display: 'flex', gap: '0', overflowX: 'auto',
                  justifyContent: 'center', flexWrap: 'wrap', rowGap: '0.5rem',
                }}
              >
                {['Diseño', 'Prototipo', 'Producción Piloto', 'Ensayos', 'Validación Comercial'].map((stage, i, arr) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', fontSize: '0.8rem', flexShrink: 0 }}>
                    <div
                      style={{
                        padding: '0.4rem 0.8rem',
                        background: i <= 1 ? 'rgba(16,185,129,0.15)' : 'var(--glass-bg)',
                        border: i <= 1 ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)',
                        color: i <= 1 ? 'var(--color-primary)' : 'var(--color-text-muted)',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {stage}
                    </div>
                    {i < arr.length - 1 && (
                      <ChevronRight size={16} color="var(--color-text-muted)" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 7. IMPACTO ===================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="glow-text">Nuestro Impacto</span>
              <h2 style={{ marginTop: '0.5rem' }}>Lo que buscamos generar</h2>
            </div>
            <Link href="/impacto" className="btn-premium" style={{ fontSize: '0.875rem', padding: '0.6rem 1.2rem' }}>
              Ver sección de impacto <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {impactCategories.map((cat, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                <div
                  style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: `${cat.color}18`, border: `1px solid ${cat.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <cat.icon size={22} color={cat.color} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>{cat.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.label}</span>
                      <span
                        style={{
                          fontSize: '0.75rem', fontStyle: 'italic',
                          color: 'var(--color-text-muted)',
                          background: 'var(--glass-bg)',
                          padding: '0.2rem 0.5rem', borderRadius: '4px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 8. SIMULADOR ===================== */}
      <div style={{ background: 'var(--color-bg-secondary)', padding: '6rem 0' }}>
        <div className="container">
          <ImpactSimulator />
        </div>
      </div>

      {/* ===================== 9. ECOSHINE LIVE ===================== */}
      {activeIndicators.length > 0 && (
        <section style={{ padding: '6rem 0', background: 'var(--glass-bg)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="glow-text">EcoShine Live</span>
              <h2 style={{ marginTop: '1rem' }}>Datos del MVP en tiempo real</h2>
              <p style={{ marginTop: '0.5rem' }}>
                Seguimiento verificado del progreso en la fase de validación.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginTop: 0,
              }}
            >
              {activeIndicators.map((indicator: any) => (
                <div key={indicator.id} className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
                  <h2 style={{ color: 'var(--color-primary)', fontSize: '3rem' }}>
                    {indicator.value}{indicator.unit}
                  </h2>
                  <p style={{ fontWeight: 600, color: '#fff', margin: '0.5rem 0' }}>{indicator.name}</p>
                  <p style={{ fontSize: '0.875rem' }}>{indicator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== 10. GALERÍA DE FUTURO ===================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 1rem' }}>
            <span className="glow-text">Galería de Futuro</span>
            <h2 style={{ marginTop: '1rem' }}>¿Dónde podrían estar nuestras baldosas?</h2>
          </div>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
              color: '#fbbf24', fontSize: '0.8rem', fontWeight: 500,
              padding: '0.3rem 0.8rem', borderRadius: '20px',
              margin: '1rem auto 3rem', display: 'flex', width: 'fit-content',
            }}
          >
            ⚠️ Estas son visualizaciones conceptuales, no proyectos reales de EcoShine
          </div>
          <div
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {futureGallery.map((item, i) => (
              <div
                key={i}
                className="glass-panel"
                style={{
                  height: '260px',
                  background: `linear-gradient(135deg, rgba(16,185,129,0.0${3 + i}), rgba(59,130,246,0.0${4 + i}))`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '1rem', padding: '2rem',
                }}
              >
                <div style={{ fontSize: '3rem' }}>🏗️</div>
                <h3 style={{ fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 11. SÉ PARTE ===================== */}
      <section style={{ padding: '6rem 0', background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="glow-text">Sé Parte de EcoShine</span>
            <h2 style={{ marginTop: '1rem' }}>¿Cómo quieres participar?</h2>
            <p style={{ marginTop: '1rem' }}>
              Hay diferentes formas de sumarte a este proceso. Elige la que mejor representa tu interés.
            </p>
          </div>
          <div
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {participaPaths.map((path, i) => (
              <Link
                key={i}
                href={`/unete?tipo=${path.type}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="glass-panel"
                  style={{
                    padding: '2rem', height: '100%', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '1.25rem', flexShrink: 0,
                    }}
                  >
                    <path.icon size={22} color="var(--color-primary)" />
                  </div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{path.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>{path.desc}</p>
                  <span
                    style={{
                      marginTop: '1.25rem', fontSize: '0.85rem',
                      color: 'var(--color-primary)', fontWeight: 600,
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}
                  >
                    {path.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 12. CTA BOTTOM ===================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '4rem 2rem', textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(59,130,246,0.08))',
            }}
          >
            <span className="glow-text" style={{ marginBottom: '1rem', display: 'block' }}>
              ¿Listo para actuar?
            </span>
            <h2 style={{ marginBottom: '1rem' }}>Pondremos el vidrio donde pertenece</h2>
            <p
              style={{
                maxWidth: '500px', margin: '0 auto 2.5rem',
                color: 'var(--color-text-muted)',
              }}
            >
              En tu espacio, en tu construcción — no en un botadero.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/unete" className="btn-premium">
                Quiero participar
              </Link>
              <Link
                href="/producto"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.8rem 1.5rem', borderRadius: '8px',
                  border: '1px solid var(--glass-border)', color: 'var(--color-text)',
                  fontWeight: 600, transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                Ver nuestras baldosas <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
