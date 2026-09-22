import GenericCrud from '../components/GenericCrud';

export default function GalleryPage() {
  return (
    <GenericCrud
      tableName="gallery"
      title="Galería / Evidencias"
      fields={[
        { name: 'title', label: 'Título de la Imagen', type: 'text' },
        { name: 'description', label: 'Descripción', type: 'text' },
        { name: 'category', label: 'Categoría (Ej: Feria, Prototipo)', type: 'text' },
        { name: 'image_url', label: 'URL de Imagen', type: 'text' },
      ]}
    />
  );
}
