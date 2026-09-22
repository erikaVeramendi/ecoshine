import GenericCrud from '../components/GenericCrud';

export default function ActivitiesPage() {
  return (
    <GenericCrud
      tableName="activities"
      title="Avance del Proyecto (Actividades)"
      fields={[
        { name: 'title', label: 'Título de la Actividad', type: 'text' },
        { name: 'date', label: 'Fecha', type: 'date' },
        { name: 'type', label: 'Tipo (Prueba, Feria, Entrevista)', type: 'text' },
        { name: 'description', label: 'Descripción', type: 'textarea' },
        { name: 'image_url', label: 'URL de Evidencia / Foto', type: 'text' },
      ]}
    />
  );
}
