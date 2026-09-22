import React from 'react';
import AdminSidebar from './components/AdminSidebar';
import styles from './admin.module.css';

export const metadata = {
  title: 'EcoShine Admin Panel',
  description: 'Panel de administración MVP',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.adminLayout}>
      <AdminSidebar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
