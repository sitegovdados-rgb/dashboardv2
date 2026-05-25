import { Radar, Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import { D } from '../data';
import { base, radar, tc, gc, TT } from '../chartOpts';
import ChartCard from '../components/ChartCard';

const cbaseColors = D.cbV.map((v) => (v > 70 ? '#639922' : v > 40 ? '#BA7517' : '#A32D2D'));
const cbaseOpts: ChartOptions<'bar'> = {
  ...base,
  scales: {
    x: { grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
    y: { min: 0, max: 100, grid: { color: gc }, ticks: { color: tc, font: { size: 9 }, callback: (v) => v + '%' } },
  },
  plugins: { legend: { display: false }, tooltip: { ...TT, callbacks: { label: (c) => ' Completude: ' + c.raw + '%' } } },
};

const camposColors = D.cfV.map((v) => (v === 100 ? '#639922' : v >= 70 ? '#378ADD' : v >= 30 ? '#BA7517' : '#A32D2D'));
const camposOpts: ChartOptions<'bar'> = {
  ...base,
  indexAxis: 'y',
  scales: {
    x: { min: 0, max: 100, grid: { color: gc }, ticks: { color: tc, font: { size: 9 }, callback: (v) => v + '%' } },
    y: { grid: { display: false }, ticks: { color: tc, font: { size: 9 } } },
  },
  plugins: { legend: { display: false }, tooltip: { ...TT, callbacks: { label: (c) => ' ' + c.raw + '%' } } },
};

interface Row { campo: string; total: number; preench: number; nulo: number; comp: string; crit: 'OK' | 'Médio' | 'Crítico'; }
const rows: Row[] = [
  { campo: 'Tipologia', total: 236, preench: 236, nulo: 0, comp: '100%', crit: 'OK' },
  { campo: 'Data de Início (Arq.)', total: 236, preench: 236, nulo: 0, comp: '100%', crit: 'OK' },
  { campo: 'Área Projetada m²', total: 236, preench: 232, nulo: 4, comp: '98,3%', crit: 'OK' },
  { campo: 'Lat / Long', total: 236, preench: 228, nulo: 8, comp: '96,6%', crit: 'OK' },
  { campo: 'Número SEI', total: 236, preench: 171, nulo: 65, comp: '72,5%', crit: 'Médio' },
  { campo: 'Data Final Prevista', total: 236, preench: 145, nulo: 91, comp: '61,4%', crit: 'Médio' },
  { campo: 'Data Início (Social)', total: 115, preench: 31, nulo: 84, comp: '27,0%', crit: 'Crítico' },
  { campo: 'Qtd. Beneficiários', total: 115, preench: 38, nulo: 77, comp: '33,0%', crit: 'Crítico' },
  { campo: 'Orçamento Licitado', total: 121, preench: 0, nulo: 121, comp: '0%', crit: 'Crítico' },
  { campo: 'Documentação Legal', total: 236, preench: 0, nulo: 236, comp: '0%', crit: 'Crítico' },
];
const critClass: Record<Row['crit'], string> = { OK: 'bg2', 'Médio': 'ba', 'Crítico': 'br' };
const critLabel: Record<Row['crit'], string> = { OK: 'OK', 'Médio': 'Médio', 'Crítico': 'Crítico' };

export default function Qual() {
  return (
    <div>
      <div className="krow k3">
        <div className="kc am"><div className="kl">Score DQ Global</div><div className="kv">44%</div><div className="ks dn">Meta: &gt; 85%</div></div>
        <div className="kc rd"><div className="kl">Completude Orçamento</div><div className="kv">0%</div><div className="ks dn">Crítico — sem dados</div></div>
        <div className="kc bl"><div className="kl">Completude Média</div><div className="kv">62%</div><div className="ks n">Social 52% · Arq 71%</div></div>
      </div>

      <div className="alert ae">
        ⚠ <strong>Orçamento:</strong> 121 registros presentes, 5 campos financeiros com
        100% de valores nulos. Impacta auditabilidade TCU/TCE e KPIs de economicidade.
      </div>

      <div className="crow r2">
        <ChartCard title="Radar — Dimensões DQ Enterprise" subtitle="6 dimensões · Social (azul) · Arquitetura (verde) · Orçamento (vermelho)" height={220}>
          <Radar
            data={{
              labels: D.qdL,
              datasets: [
                { label: 'Social', data: D.qdS, borderColor: '#378ADD', backgroundColor: 'rgba(55,138,221,0.12)', borderWidth: 1.5, pointRadius: 3, pointBackgroundColor: '#378ADD' },
                { label: 'Arquitetura', data: D.qdA, borderColor: '#639922', backgroundColor: 'rgba(99,153,34,0.12)', borderWidth: 1.5, pointRadius: 3, pointBackgroundColor: '#639922' },
                { label: 'Orçamento', data: D.qdO, borderColor: '#A32D2D', backgroundColor: 'rgba(163,45,45,0.12)', borderWidth: 1.5, pointRadius: 3, pointBackgroundColor: '#A32D2D' },
              ],
            }}
            options={radar()}
          />
        </ChartCard>
        <ChartCard title="Completude por base de dados" subtitle="% de campos não nulos por fonte" height={220}>
          <Bar
            data={{ labels: D.cbL, datasets: [{ data: D.cbV, backgroundColor: cbaseColors, borderRadius: 4, borderWidth: 0 }] }}
            options={cbaseOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r1">
        <ChartCard title="Completude por campo crítico — ranking de prioridade" subtitle="Verde ≥ 90% · Azul ≥ 70% · Âmbar ≥ 30% · Vermelho < 30%" height={210}>
          <Bar
            data={{ labels: D.cfL, datasets: [{ data: D.cfV, backgroundColor: camposColors, borderRadius: 3, borderWidth: 0 }] }}
            options={camposOpts}
          />
        </ChartCard>
      </div>

      <div className="crow r1">
        <div className="cc">
          <div className="ct2">Rastreabilidade documental — Tabela de auditoria</div>
          <div className="cs">Status de conformidade dos campos obrigatórios</div>
          <table className="mt">
            <tbody>
              <tr>
                <th>Campo</th><th>Total</th><th>Preenchido</th><th>Nulo</th><th>Completude</th><th>Criticidade</th>
              </tr>
              {rows.map((r) => (
                <tr key={r.campo}>
                  <td>{r.campo}</td><td>{r.total}</td><td>{r.preench}</td><td>{r.nulo}</td><td>{r.comp}</td>
                  <td><span className={`b ${critClass[r.crit]}`}>{critLabel[r.crit]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
