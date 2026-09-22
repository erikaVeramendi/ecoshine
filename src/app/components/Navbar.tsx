'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Leaf } from 'lucide-react';
import styles from './public.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Leaf className={styles.logoIcon} />
          <span>EcoShine</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={pathname === '/' ? styles.activeLink : ''}>Inicio</Link>
          <Link href="/avance" className={pathname === '/avance' ? styles.activeLink : ''}>Live MVP</Link>
          <Link href="/aprendizaje" className={pathname === '/aprendizaje' ? styles.activeLink : ''}>Aprende</Link>
          <Link href="/compromisos" className={pathname === '/compromisos' ? styles.activeLink : ''}>Muro</Link>
          <Link href="/retos" className={pathname === '/retos' ? styles.activeLink : ''}>Retos</Link>
          <Link href="/unete" className={`btn-premium ${styles.ctaBtn}`}>Únete a la Iniciativa</Link>
        </nav>
      </div>
    </header>
  );
}
