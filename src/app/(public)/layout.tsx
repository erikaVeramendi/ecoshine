import Navbar from '../components/Navbar';
import styles from '../components/public.module.css';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} EcoShine. Plataforma en proceso de validación MVP.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Fomentando la economía circular paso a paso.</p>
        </div>
      </footer>
    </div>
  );
}
