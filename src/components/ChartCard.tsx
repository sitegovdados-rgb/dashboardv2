import type { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle: string;
  height: number;
  children: ReactNode;
}

// Card com título + container de altura fixa (.cbox).
// A altura fixa é o que evita o loop de crescimento do Chart.js.
export default function ChartCard({ title, subtitle, height, children }: Props) {
  return (
    <div className="cc">
      <div className="ct2">{title}</div>
      <div className="cs">{subtitle}</div>
      <div className="cbox" style={{ height }}>
        {children}
      </div>
    </div>
  );
}
