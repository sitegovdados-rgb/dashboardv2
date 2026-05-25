import { Doughnut, Bar, Bubble } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { D } from '../data';
import { arcBorder } from '../theme';
import { base, hBar, donut, tc, gc, TT, legend } from '../chartOpts';
import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';

const benefOpts: ChartOptions<'bar'> = {
  ...base,
  scales: {
    x: { grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
    y: { grid: { color: gc }, ticks: { color: tc, font: { size: 9 }, callback: (v) => (Number(v) >= 1000 ? Math.round(Number(v) / 1000) + 'K' : v) } },
  },
};

const stackOpts: ChartOptions<'bar'> = {
  ...base,
  scales: {
    x: { stacked: true, grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
    y: { stacked: true, grid: { color: gc }, ticks: { color: tc, font: { size: 9 } } },
  },
  plugins: { legend: legend('top'), tooltip: { ...TT, mode: 'index', intersect: false } },
};

const bubbleOpts: ChartOptions<'bubble'> = {
  ...base,
  scales: {
    x: { min: 0, max: 100, grid: { color: gc }, ticks: { color: tc, font: { size: 9 } }, title: { display: true, text: 'Projetos (índice relativo)', color: tc, font: { size: 9 } } },
    y: { min: 0, max: 100, grid: { color: gc }, ticks: { color: tc, font: { size: 9 } }, title: { display: true, text: 'Beneficiários (índice relativo)', color: tc, font: { size: 9 } } },
  },
  plugins: { legend: legend('bottom'), tooltip: TT },
};

export default function Territ() {
  return (
    <div>
      <div className="krow k3">
        <KpiCard accent="bl" label="Territórios PCI Cobertos" value="3 / 3" sub="Cobertura 100%" subKind="up" />
        <KpiCard accent="pp" label="Média Benef./Território" value="15.600" sub="Por região PCI social" />
        <KpiCard accent="tl" label="Proj. Metropolitanos" value="168" sub="71,2% do total arq." />
      </div>

      <div className="crow r2">
        <ChartCard title="Distribuição PCI Social por território" subtitle="115 ações sociais — 3 regiões territoriais" height={200}>
          <Doughnut
            data={{ labels: D.tsL, datasets: [{ data: D.tsV, backgroundColor: D.tsC, borderWidth: 1, borderColor: arcBorder, hoverOffset: 4 }] }}
            options={donut('bottom', '60%')}
          />
        </ChartCard>
        <ChartCard title="Beneficiários por região PCI" subtitle="Total estimado acumulado por território" height={200}>
          <Bar
            data={{ labels: D.tbL, datasets: [{ data: D.tbV, backgroundColor: D.tsC, borderRadius: 4, borderWidth: 0 }] }}
            options={benefOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r1">
        <ChartCard title="Status por macrorregião — Arquitetura (barras empilhadas)" subtitle="Distribuição de status por região · 5 principais macrorregiões" height={200}>
          <Bar
            data={{ labels: D.skL, datasets: D.skD.map((d) => ({ label: d.l, data: d.d, backgroundColor: d.c })) }}
            options={stackOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r2">
        <ChartCard title="Tipologias na Região Metropolitana" subtitle="168 projetos — top 7 categorias" height={190}>
          <Bar
            data={{ labels: D.ttL, datasets: [{ data: D.ttV, backgroundColor: D.tpC, borderRadius: 3, borderWidth: 0 }] }}
            options={hBar()}
          />
        </ChartCard>
        <ChartCard title="Volume × Cobertura territorial" subtitle="Bubble: tamanho = área m² relativa · cor = região" height={190}>
          <Bubble data={{ datasets: D.tbub }} options={bubbleOpts} />
        </ChartCard>
      </div>
    </div>
  );
}
