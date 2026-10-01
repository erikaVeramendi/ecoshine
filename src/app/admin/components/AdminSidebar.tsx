'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Leaf, LogOut, LayoutDashboard, Newspaper, Image as ImageIcon, Activity, Flag, BookOpen, Users } from 'lucide-react';
import styles from '../admin.module.css';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { label: 'Noticias', icon: Newspaper, href: '/admin/news' },
    { label: 'Galería', icon: ImageIcon, href: '/admin/gallery' },
    { label: 'Actividades', icon: Flag, href: '/admin/activities' },
    { label: 'Indicadores', icon: Activity, href: '/admin/indicators' },
    { label: 'EduContent', icon: BookOpen, href: '/admin/educational_content' },
    { label: 'Únete/Leads', icon: Users, href: '/admin/leads' },
  ];

  const handleLogout = () => {
    document.cookie = 'ecoshineAdminSession=; path=/; max-age=0';
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Leaf size={20} color="var(--color-primary)" />
          <h2 className="glow-text">EcoShine</h2>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
          Panel Admin · MVP
        </p>
      </div>
      <nav className={styles.sidebarNav} style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)' }}>
        <button
          onClick={handleLogout}
          className={styles.navLink}
          style={{
            width: '100%', background: 'none', border: 'none', cursor: 'pointer',
            color: '#ef4444', display: 'flex', alignItems: 'center', gap: '1rem',
            padding: '1rem 2rem', fontSize: '1rem', borderRadius: '0',
          }}
        >
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
