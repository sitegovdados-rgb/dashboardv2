// Detecção de dark mode + tokens de cor compartilhados pelos gráficos.
export const dm =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme:dark)').matches
    : false;

export const tc = dm ? '#9c9a92' : '#5F5E5A';                       // texto/eixo
export const gc = dm ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'; // grid
export const arcBorder = dm ? '#071d2e' : '#fff';                   // borda de donuts

// Configuração global de tooltip
export const TT = {
  backgroundColor: dm ? '#12202d' : '#fff',
  titleColor: dm ? '#ddeeff' : '#2c2c2a',
  bodyColor: tc,
  borderColor: dm ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
  borderWidth: 0.5,
  padding: 8,
  titleFont: { size: 11, weight: 'normal' as const },
  bodyFont: { size: 10 },
};

// Legenda reutilizável
export const legend = (position: 'top' | 'bottom' | 'left' | 'right' = 'bottom') => ({
  display: true,
  position,
  labels: { color: tc, font: { size: 9 }, boxWidth: 9, padding: 7 },
});
