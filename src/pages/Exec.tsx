import { Doughnut, Bar, Line } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { D } from '../data';
import { arcBorder } from '../theme';
import { base, hBar, donut, tc, gc, TT, legend } from '../chartOpts';
import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';

const evolOpts: ChartOptions<'line'> = {
  ...base,
  scales: {
    x: { grid: { color: gc }, ticks: { color: tc, font: { size: 9 } } },
    y: { grid: { color: gc }, ticks: { color: tc, font: { size: 9 } }, title: { display: true, text: 'Projetos', color: tc, font: { size: 9 } } },
    y1: { position: 'right', grid: { display: false }, ticks: { color: '#639922', font: { size: 9 } }, title: { display: true, text: 'Beneficiários', color: '#639922', font: { size: 9 } } },
  },
  plugins: { legend: legend('top'), tooltip: { ...TT, mode: 'index', intersect: false } },
};

export default function Exec() {
  return (
    <div>
      <div className="krow k5">
        <KpiCard accent="bl" label="Total Projetos" value="351" sub="↑ 18 vs 2025" subKind="up" />
        <KpiCard accent="bl" label="Em Execução" value="97" sub="27,6% do portfólio" />
        <KpiCard accent="gr" label="Taxa Conclusão" value="43,6%" sub="↑ 5,2 p.p. YoY" subKind="up" />
        <KpiCard accent="pp" label="Beneficiários" value="46,8K" sub="↑ 22% YTD" subKind="up" />
        <KpiCard accent="tl" label="Área Intervinda" value="287K m²" sub="Área projetada" />
      </div>

      <div className="alert ae">
        ⚠ <strong>Risco Crítico:</strong> Aba Orçamento com 100% dos campos financeiros nulos —
        KPIs orçamentários indisponíveis para auditoria TCU/TCE
      </div>
      <div className="alert aw">
        ⚡ 28% dos projetos sem Nº SEI · 73% dos registros sociais sem data de início ·
        Aba Fiscalização completamente vazia
      </div>

      <div className="crow r2">
        <ChartCard title="Status consolidado do portfólio" subtitle="Social (115) + Arquitetura (236) — 351 projetos totais" height={190}>
          <Doughnut
            data={{ labels: D.stL, datasets: [{ data: D.stV, backgroundColor: D.stC, borderWidth: 1, borderColor: arcBorder, hoverOffset: 4 }] }}
            options={donut('right', '65%')}
          />
        </ChartCard>
        <ChartCard title="Projetos por tipologia" subtitle="Arquitetura — top 9 categorias por volume" height={190}>
          <Bar
            data={{ labels: D.tpL, datasets: [{ data: D.tpV, backgroundColor: D.tpC, borderRadius: 3, borderWidth: 0 }] }}
            options={hBar()}
          />
        </ChartCard>
      </div>

      <div className="crow r1">
        <ChartCard title="Evolução temporal — Projetos acumulados e Beneficiários" subtitle="Jan/2022 – Mai/2026 · Eixo duplo · Tendência de crescimento" height={180}>
          <Line
            data={{
              labels: D.evL,
              datasets: [
                { label: 'Projetos acumulados', data: D.evP, borderColor: '#378ADD', borderWidth: 2, backgroundColor: 'rgba(55,138,221,0.08)', fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: '#378ADD', yAxisID: 'y' },
                { label: 'Beneficiários', data: D.evB, borderColor: '#639922', borderWidth: 2, backgroundColor: 'rgba(99,153,34,0.07)', fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: '#639922', yAxisID: 'y1' },
              ],
            }}
            options={evolOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r2">
        <ChartCard title="Distribuição macrorregional — Arquitetura" subtitle="Projetos por região geográfica do estado do RJ" height={190}>
          <Bar
            data={{ labels: D.rgL, datasets: [{ data: D.rgV, backgroundColor: 'rgba(55,138,221,0.7)', borderColor: '#378ADD', borderWidth: 0.5, borderRadius: 3 }] }}
            options={hBar()}
          />
        </ChartCard>
        <ChartCard title="Prioridades do portfólio" subtitle="Arquitetura — 236 projetos classificados" height={190}>
          <Doughnut
            data={{ labels: D.prL, datasets: [{ data: D.prV, backgroundColor: D.prC, borderWidth: 1, borderColor: arcBorder, hoverOffset: 4 }] }}
            options={donut('bottom', '62%')}
          />
        </ChartCard>
      </div>
    </div>
  );
}
