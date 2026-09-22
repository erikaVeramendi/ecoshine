import GenericCrud from '../components/GenericCrud';

export default function NewsPage() {
  return (
    <GenericCrud
      tableName="news"
      title="Noticias y Actualizaciones"
      fields={[
        { name: 'title', label: 'Titular', type: 'text' },
        { name: 'date', label: 'Fecha', type: 'date' },
        { name: 'content', label: 'Contenido', type: 'textarea' },
        { name: 'image_url', label: 'URL de Imagen', type: 'text' },
      ]}
    />
  );
}
