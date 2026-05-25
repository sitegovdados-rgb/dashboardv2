import type { ChartOptions } from 'chart.js';
import { tc, gc, TT, legend } from './theme';

const axisTicks = { color: tc, font: { size: 9 } };

// Base comum: sem aspect ratio (a altura vem do container .cbox).
export const base = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 500 },
  plugins: { legend: { display: false }, tooltip: TT },
};

// Barra vertical simples
export function vBar(opts: Partial<ChartOptions<'bar'>> = {}): ChartOptions<'bar'> {
  return {
    ...base,
    scales: {
      x: { grid: { display: false }, ticks: axisTicks },
      y: { grid: { color: gc }, ticks: axisTicks },
    },
    ...opts,
  } as ChartOptions<'bar'>;
}

// Barra horizontal
export function hBar(opts: Partial<ChartOptions<'bar'>> = {}): ChartOptions<'bar'> {
  return {
    ...base,
    indexAxis: 'y',
    scales: {
      x: { grid: { color: gc }, ticks: axisTicks },
      y: { grid: { display: false }, ticks: axisTicks },
    },
    ...opts,
  } as ChartOptions<'bar'>;
}

// Donut / doughnut (sem escalas, com legenda)
export function donut(
  position: 'top' | 'bottom' | 'left' | 'right' = 'bottom',
  cutout = '60%'
): ChartOptions<'doughnut'> {
  return {
    ...base,
    cutout,
    plugins: { legend: legend(position), tooltip: TT },
  } as ChartOptions<'doughnut'>;
}

// Radar 0–100
export function radar(): ChartOptions<'radar'> {
  return {
    ...base,
    scales: {
      r: {
        min: 0,
        max: 100,
        grid: { color: gc },
        angleLines: { color: gc },
        ticks: { color: tc, font: { size: 8 }, stepSize: 25, backdropColor: 'transparent' },
        pointLabels: { color: tc, font: { size: 9 } },
      },
    },
    plugins: { legend: legend('bottom'), tooltip: TT },
  } as ChartOptions<'radar'>;
}

export { tc, gc, TT, legend };
