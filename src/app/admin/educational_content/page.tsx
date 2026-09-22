import GenericCrud from '../components/GenericCrud';

export default function EducationalContentPage() {
  return (
    <GenericCrud
      tableName="educational_content"
      title="Contenido Educativo"
      fields={[
        { name: 'title', label: 'Título', type: 'text' },
        { name: 'summary', label: 'Resumen Breve', type: 'textarea' },
        { name: 'body', label: 'Contenido Completo', type: 'textarea' },
        { name: 'video_url', label: 'Video URL (opcional)', type: 'text' },
      ]}
    />
  );
}
