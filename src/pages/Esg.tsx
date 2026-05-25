import { Radar, Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { D } from '../data';
import { base, vBar, radar, tc, gc, TT, legend } from '../chartOpts';
import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';

const sdemOpts: ChartOptions<'bar'> = {
  ...base,
  indexAxis: 'y',
  scales: {
    x: { stacked: true, min: 0, max: 115, grid: { color: gc }, ticks: { color: tc, font: { size: 9 } } },
    y: { stacked: true, grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
  },
  plugins: { legend: legend('top'), tooltip: { ...TT, mode: 'index', intersect: false } },
};

const scov = D.sdS.map((v, i) => Math.round((v / (D.sdS[i] + D.sdN[i] + D.sdG[i])) * 100));
const scovColors = scov.map((v) => (v > 40 ? '#378ADD' : v > 25 ? '#BA7517' : '#A32D2D'));
const scovOpts: ChartOptions<'bar'> = {
  ...base,
  indexAxis: 'y',
  scales: {
    x: { min: 0, max: 100, grid: { color: gc }, ticks: { color: tc, font: { size: 9 }, callback: (v) => v + '%' } },
    y: { grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
  },
  plugins: { legend: { display: false }, tooltip: { ...TT, callbacks: { label: (c) => ' ' + c.raw + '% com dados' } } },
};

function Progress({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="qb">
      <div className="qbl"><span>{label}</span><span style={{ fontWeight: 500, color }}>{value}%</span></div>
      <div className="qt"><div className="qf" style={{ width: `${value}%`, background: color }} /></div>
    </div>
  );
}

export default function Esg() {
  return (
    <div>
      <div className="krow k3">
        <KpiCard accent="tl" label="Score ESG Territorial" value="54%" sub="Meta: > 75%" subKind="dn" />
        <KpiCard accent="pp" label="Cobertura Sociodem." value="38%" sub="Meta: > 80%" subKind="dn" />
        <KpiCard accent="gr" label="Projetos c/ Dados PCD" value="22 / 115" sub="19,1% ações sociais" />
      </div>

      <div className="crow r2">
        <ChartCard title="Radar ESG — Score por dimensão" subtitle="Atual (verde) vs Meta (cinza tracejado) · 7 dimensões" height={225}>
          <Radar
            data={{
              labels: D.egL,
              datasets: [
                { label: 'Atual', data: D.egA, borderColor: '#0F6E56', backgroundColor: 'rgba(15,110,86,0.15)', borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#0F6E56' },
                { label: 'Meta', data: D.egM, borderColor: '#888780', backgroundColor: 'rgba(136,135,128,0.05)', borderWidth: 1, borderDash: [4, 3], pointRadius: 2, pointBackgroundColor: '#888780' },
              ],
            }}
            options={radar()}
          />
        </ChartCard>
        <div className="cc">
          <div className="ct2">Score ESG por componente</div>
          <div className="cs">Pesos: Environmental 40% · Social 35% · Governance 25%</div>
          <Progress label="Environmental (E) — Sustentabilidade" value={48} color="#0F6E56" />
          <Progress label="Social (S) — Inclusão e cobertura" value={62} color="#378ADD" />
          <Progress label="Governance (G) — Transparência" value={45} color="#534AB7" />
          <div className="scg">
            <div className="sc"><div className="sv" style={{ color: '#0F6E56' }}>48%</div><div className="sl">Environmental</div></div>
            <div className="sc"><div className="sv" style={{ color: '#378ADD' }}>62%</div><div className="sl">Social</div></div>
            <div className="sc"><div className="sv" style={{ color: '#534AB7' }}>45%</div><div className="sl">Governance</div></div>
          </div>
          <div style={{ fontSize: 9, color: 'var(--color-text-secondary)', marginTop: '.75rem' }}>
            Metodologia: Score composto ponderado. E = tipologia + infraestrutura.
            S = cobertura territorial + inclusão. G = completude documental + rastreabilidade.
          </div>
        </div>
      </div>

      <div className="crow r1">
        <ChartCard title="Perfil sociodemográfico — Sim / Não / Aguardando Informação" subtitle="115 ações sociais · 9 dimensões de inclusão" height={210}>
          <Bar
            data={{
              labels: D.sdL,
              datasets: [
                { label: 'Sim (possui dados)', data: D.sdS, backgroundColor: '#639922' },
                { label: 'Não (declarado)', data: D.sdN, backgroundColor: '#A32D2D' },
                { label: 'Aguardando Informação', data: D.sdG, backgroundColor: '#BA7517' },
              ],
            }}
            options={sdemOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r2">
        <ChartCard title="Cobertura de populações prioritárias" subtitle="Projetos que reportam dados por grupo" height={190}>
          <Bar
            data={{ labels: D.ppL, datasets: [{ data: D.ppV, backgroundColor: D.ppC, borderRadius: 4, borderWidth: 0 }] }}
            options={vBar()}
          />
        </ChartCard>
        <ChartCard title="% de cobertura por dimensão sociodemográfica" subtitle='Projetos com resposta "Sim" sobre dados disponíveis' height={190}>
          <Bar
            data={{ labels: D.sdL, datasets: [{ data: scov, backgroundColor: scovColors, borderRadius: 3, borderWidth: 0 }] }}
            options={scovOpts}
          />
        </ChartCard>
      </div>
    </div>
  );
}
