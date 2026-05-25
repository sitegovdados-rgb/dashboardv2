type Accent = 'bl' | 'gr' | 'am' | 'rd' | 'pp' | 'tl';
type SubKind = 'up' | 'dn' | 'n';

interface Props {
  accent: Accent;
  label: string;
  value: string;
  sub: string;
  subKind?: SubKind;
}

export default function KpiCard({ accent, label, value, sub, subKind = 'n' }: Props) {
  return (
    <div className={`kc ${accent}`}>
      <div className="kl">{label}</div>
      <div className="kv">{value}</div>
      <div className={`ks ${subKind}`}>{sub}</div>
    </div>
  );
}
