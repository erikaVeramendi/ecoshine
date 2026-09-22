import './globals.css';

export const metadata = {
  title: 'EcoShine - Economía Circular y Vidrio',
  description: 'Transformamos envases de vidrio de descarte en materiales sostenibles para la construcción y la decoración.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
