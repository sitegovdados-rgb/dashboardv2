export type PageId = 'exec' | 'territ' | 'oper' | 'qual' | 'esg';

const TABS: { id: PageId; label: string }[] = [
  { id: 'exec', label: 'Visão Executiva' },
  { id: 'territ', label: 'Territorial' },
  { id: 'oper', label: 'Operacional' },
  { id: 'qual', label: 'Qualidade' },
  { id: 'esg', label: 'ESG' },
];

interface Props {
  active: PageId;
  onChange: (id: PageId) => void;
}

export default function Tabs({ active, onChange }: Props) {
  return (
    <div className="tabs" role="tablist">
      {TABS.map((t) => (
        <button
          key={t.id}
          className={`tab${t.id === active ? ' act' : ''}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
