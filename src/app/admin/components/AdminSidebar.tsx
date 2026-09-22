import Link from 'next/link';
import { LayoutDashboard, Newspaper, Image as ImageIcon, Activity, Flag, BookOpen, Users } from 'lucide-react';
import styles from '../admin.module.css';

export default function AdminSidebar() {
  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { label: 'Noticias', icon: Newspaper, href: '/admin/news' },
    { label: 'Galería', icon: ImageIcon, href: '/admin/gallery' },
    { label: 'Actividades', icon: Flag, href: '/admin/activities' },
    { label: 'Indicadores', icon: Activity, href: '/admin/indicators' },
    { label: 'EduContent', icon: BookOpen, href: '/admin/educational_content' },
    { label: 'Únete/Leads', icon: Users, href: '/admin/leads' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className="glow-text">EcoShine Admin</h2>
      </div>
      <nav className={styles.sidebarNav}>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.navLink}>
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
