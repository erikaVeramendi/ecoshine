import GenericCrud from '../components/GenericCrud';

export default function IndicatorsPage() {
  return (
    <GenericCrud
      tableName="indicators"
      title="Indicadores de Impacto"
      fields={[
        { name: 'name', label: 'Nombre del Indicador', type: 'text' },
        { name: 'value', label: 'Valor', type: 'number' },
        { name: 'unit', label: 'Unidad de Medida', type: 'text' },
        { name: 'description', label: 'Descripción Breve', type: 'text' },
      ]}
    />
  );
}
