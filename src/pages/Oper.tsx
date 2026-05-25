import { Doughnut, Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { D } from '../data';
import { arcBorder } from '../theme';
import { base, hBar, donut, tc, gc, TT, legend } from '../chartOpts';
import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';

const vStackOpts: ChartOptions<'bar'> = {
  ...base,
  scales: {
    x: { stacked: true, grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
    y: { stacked: true, grid: { color: gc }, ticks: { color: tc, font: { size: 9 } } },
  },
  plugins: { legend: legend('top'), tooltip: { ...TT, mode: 'index', intersect: false } },
};

const hStackOpts: ChartOptions<'bar'> = {
  ...base,
  indexAxis: 'y',
  scales: {
    x: { stacked: true, grid: { color: gc }, ticks: { color: tc, font: { size: 9 } } },
    y: { stacked: true, grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
  },
  plugins: { legend: legend('top'), tooltip: { ...TT, mode: 'index', intersect: false } },
};

export default function Oper() {
  return (
    <div>
      <div className="krow k4">
        <KpiCard accent="rd" label="Projetos Atrasados" value="31" sub="13,1% do portfólio" subKind="dn" />
        <KpiCard accent="am" label="Urgentes" value="8" sub="Atenção imediata" subKind="dn" />
        <KpiCard accent="bl" label="Prazo Médio (dias)" value="87" sub="Projetos concluídos" />
        <KpiCard accent="gr" label="Taxa de Execução" value="27,6%" sub="Em andamento / Total" subKind="up" />
      </div>

      <div className="crow r2">
        <ChartCard title="Etapas projetuais — Arquitetura" subtitle="Distribuição por fase do projeto" height={190}>
          <Bar
            data={{ labels: D.etL, datasets: [{ data: D.etV, backgroundColor: 'rgba(55,138,221,0.7)', borderColor: '#378ADD', borderRadius: 3, borderWidth: 0.5 }] }}
            options={hBar()}
          />
        </ChartCard>
        <ChartCard title="Status social por tipo de ação" subtitle="Temporária / Contínua / Esporádica" height={190}>
          <Bar
            data={{ labels: D.soL, datasets: D.soD.map((d) => ({ label: d.l, data: d.d, backgroundColor: d.c })) }}
            options={vStackOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r1">
        <ChartCard title="Carga de trabalho por arquiteto responsável" subtitle="Concluídos · Em execução · Atrasados — por profissional" height={195}>
          <Bar
            data={{ labels: D.aqL, datasets: D.aqD.map((d) => ({ label: d.l, data: d.d, backgroundColor: d.c })) }}
            options={hStackOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r2">
        <ChartCard title="Escala de intervenção" subtitle="Edificação / Lote / Quadra / Bairro" height={190}>
          <Doughnut
            data={{ labels: D.esL, datasets: [{ data: D.esV, backgroundColor: D.esC, borderWidth: 1, borderColor: arcBorder, hoverOffset: 4 }] }}
            options={donut('right', '60%')}
          />
        </ChartCard>
        <ChartCard title="Grau de intervenção" subtitle="Tipo de obra por categoria arquitetônica" height={190}>
          <Bar
            data={{ labels: D.grL, datasets: [{ data: D.grV, backgroundColor: D.grC, borderRadius: 3, borderWidth: 0 }] }}
            options={hBar()}
          />
        </ChartCard>
      </div>
    </div>
  );
}
