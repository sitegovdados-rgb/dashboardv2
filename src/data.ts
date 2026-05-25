// ============================================================
//  DADOS DO DASHBOARD PCI
//  Edite este arquivo para atualizar os números do dashboard.
//  Baseado em: pci-social.xlsx + pci-urbanismo.xlsx
// ============================================================

export interface StackSeries {
  l: string;   // rótulo da série
  d: number[]; // valores
  c: string;   // cor
}

export interface BubbleDataset {
  label: string;
  data: { x: number; y: number; r: number }[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export const D = {
  // ── Página 1: Visão Executiva ──────────────────────────────
  stL: ['Concluído', 'Em Execução', 'Não Iniciado', 'Ag. Info/Aprovação', 'Suspenso/Bloqueado', 'Cancelado'],
  stV: [153, 97, 24, 44, 21, 4],
  stC: ['#639922', '#378ADD', '#888780', '#BA7517', '#D85A30', '#A32D2D'],

  tpL: ['Recreativo', 'Educacional', 'Urbanismo', 'Assistencial', 'Esportivo', 'Cultural', 'Institucional', 'Hospitalar', 'Outros'],
  tpV: [62, 48, 38, 28, 18, 14, 10, 8, 10],
  tpC: ['#378ADD', '#534AB7', '#0F6E56', '#D85A30', '#BA7517', '#D4537E', '#639922', '#E24B4A', '#888780'],

  evL: ['Jan/22', 'Jul/22', 'Jan/23', 'Jul/23', 'Jan/24', 'Jul/24', 'Jan/25', 'Jul/25', 'Mai/26'],
  evP: [42, 78, 112, 148, 178, 198, 218, 230, 236],
  evB: [8200, 15400, 22800, 31200, 38600, 43800, 47200, 50800, 46820],

  rgL: ['Metropolitana', 'Centro-Sul Fl.', 'Norte Fl.', 'Baixada Lit.', 'Médio Paraíba', 'Serrana', 'Outros'],
  rgV: [168, 22, 14, 11, 9, 5, 7],

  prL: ['Normal', 'Alta', 'Baixa', 'Urgente'],
  prV: [168, 42, 18, 8],
  prC: ['#888780', '#BA7517', '#639922', '#A32D2D'],

  // ── Página 2: Territorial ──────────────────────────────────
  tsL: ['Jacarezinho e Manguinhos', 'Corredor Itanhangá / Rio das Pedras', 'PPG'],
  tsV: [52, 47, 16],
  tbL: ['Jacarezinho\ne Manguinhos', 'Corredor Itanhangá\n/ Rio das Pedras', 'PPG'],
  tbV: [18500, 16800, 5200],
  tsC: ['#378ADD', '#0F6E56', '#534AB7'],

  skL: ['Metropolitana', 'Centro-Sul Fl.', 'Norte Fl.', 'Baixada Lit.', 'Médio Paraíba'],
  skD: [
    { l: 'Concluído', d: [75, 10, 6, 5, 4], c: '#639922' },
    { l: 'Em Execução', d: [45, 7, 4, 3, 3], c: '#378ADD' },
    { l: 'Pendente', d: [28, 3, 3, 2, 2], c: '#BA7517' },
    { l: 'Suspenso', d: [12, 2, 1, 1, 0], c: '#D85A30' },
    { l: 'Cancelado', d: [8, 0, 0, 0, 0], c: '#A32D2D' },
  ] as StackSeries[],

  ttL: ['Recreativo', 'Educacional', 'Urbanismo', 'Assistencial', 'Esportivo', 'Cultural', 'Outros'],
  ttV: [50, 38, 30, 22, 14, 10, 4],

  tbub: [
    { label: 'Metropolitana', data: [{ x: 65, y: 82, r: 20 }], backgroundColor: 'rgba(55,138,221,0.55)', borderColor: '#378ADD', borderWidth: 1 },
    { label: 'Centro-Sul Fl.', data: [{ x: 28, y: 42, r: 7 }], backgroundColor: 'rgba(99,153,34,0.55)', borderColor: '#639922', borderWidth: 1 },
    { label: 'Norte Fl.', data: [{ x: 52, y: 68, r: 5 }], backgroundColor: 'rgba(83,74,183,0.55)', borderColor: '#534AB7', borderWidth: 1 },
    { label: 'Baixada Lit.', data: [{ x: 78, y: 28, r: 4 }], backgroundColor: 'rgba(216,90,48,0.55)', borderColor: '#D85A30', borderWidth: 1 },
    { label: 'Médio Paraíba', data: [{ x: 18, y: 25, r: 4 }], backgroundColor: 'rgba(186,117,23,0.55)', borderColor: '#BA7517', borderWidth: 1 },
  ] as BubbleDataset[],

  // ── Página 3: Operacional ──────────────────────────────────
  etL: ['Anteprojeto', 'Estudo Preliminar', 'Proj. Executivo', 'Proj. Legal', 'Est. Viabilidade', 'Obra/Fiscaliz.'],
  etV: [84, 72, 38, 24, 12, 6],

  soL: ['Temporária', 'Contínua', 'Esporádica'],
  soD: [
    { l: 'Concluída', d: [38, 7, 2], c: '#639922' },
    { l: 'Em Execução', d: [8, 28, 2], c: '#378ADD' },
    { l: 'Ag. Informação', d: [12, 9, 3], c: '#BA7517' },
    { l: 'Bloqueada', d: [2, 2, 2], c: '#A32D2D' },
  ] as StackSeries[],

  aqL: ['Marcelo Mourão', 'Raphael Sena', 'Ana Paula', 'Carlos Lima', 'Equipe PCI', 'Outros'],
  aqD: [
    { l: 'Concluídos', d: [42, 28, 15, 10, 8, 3], c: '#639922' },
    { l: 'Em Execução', d: [18, 14, 8, 5, 8, 6], c: '#378ADD' },
    { l: 'Atrasados', d: [3, 2, 1, 1, 3, 1], c: '#A32D2D' },
  ] as StackSeries[],

  esL: ['Edificação', 'Lote', 'Não se Aplica', 'Quadra', 'Bairro'],
  esV: [118, 72, 28, 12, 6],
  esC: ['#378ADD', '#534AB7', '#888780', '#0F6E56', '#BA7517'],

  grL: ['Conservação/Manut.', 'Nova Edificação', 'Reforma', 'Ampliação', 'Restauro'],
  grV: [88, 72, 42, 22, 12],
  grC: ['#0F6E56', '#378ADD', '#BA7517', '#534AB7', '#D85A30'],

  // ── Página 4: Qualidade de Dados ───────────────────────────
  qdL: ['Completeness', 'Uniqueness', 'Consistency', 'Validity', 'Timeliness', 'Accuracy'],
  qdS: [52, 94, 88, 91, 100, 75],
  qdA: [71, 98, 76, 85, 100, 80],
  qdO: [8, 98, 0, 0, 0, 0],

  cbL: ['Social\n(115 regs)', 'Arquitetura\n(236 regs)', 'Orçamento\n(121 regs)'],
  cbV: [52, 71, 8],

  cfL: ['Tipologia', 'Status', 'Área Proj. m²', 'Data Início (Arq)', 'Nº SEI', 'Data Final Prev.', 'Qtd. Benefic.', 'Data Início (Soc)', 'Orçamento Licit.'],
  cfV: [100, 100, 98, 100, 72, 61, 33, 27, 0],

  // ── Página 5: ESG e Impacto Social ─────────────────────────
  egL: ['Cobertura\nSocial', 'Equidade\nTerrit.', 'Inclusão\nRacial', 'Acessib.', 'Gov.\nDados', 'Transp.', 'Sustentab.'],
  egA: [68, 72, 45, 58, 52, 38, 61],
  egM: [85, 85, 80, 80, 90, 90, 80],

  sdL: ['Gênero', 'Cor/Raça', 'Etários', 'Renda', 'Escolaridade', 'Prog.Sociais', 'Est.Civil', 'PCD', 'Filhos'],
  sdS: [38, 35, 32, 40, 36, 28, 24, 22, 20],
  sdN: [42, 44, 45, 38, 42, 48, 52, 48, 52],
  sdG: [35, 36, 38, 37, 37, 39, 39, 45, 43],

  ppL: ['Mulheres', 'Jovens (14-29)', 'PCD', 'Idosos (60+)', 'Pop. Indígena', 'LGBTQIA+'],
  ppV: [62, 48, 22, 35, 5, 12],
  ppC: ['#378ADD', '#534AB7', '#0F6E56', '#D85A30', '#D4537E', '#BA7517'],
};
