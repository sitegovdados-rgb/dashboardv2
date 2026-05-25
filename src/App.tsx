import { useState } from 'react';
import type { FC } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import type { PageId } from './components/Tabs';
import FilterBar from './components/FilterBar';
import Exec from './pages/Exec';
import Territ from './pages/Territ';
import Oper from './pages/Oper';
import Qual from './pages/Qual';
import Esg from './pages/Esg';

const PAGES: Record<PageId, FC> = {
  exec: Exec,
  territ: Territ,
  oper: Oper,
  qual: Qual,
  esg: Esg,
};

export default function App() {
  const [page, setPage] = useState<PageId>('exec');
  const Page = PAGES[page];

  return (
    <div className="dash">
      <h2 className="sr-only">Dashboard PCI — Plataforma Analítica Territorial Interativo</h2>
      <Header />
      <Tabs active={page} onChange={setPage} />
      <FilterBar />
      <div className="ct">
        <Page />
      </div>
    </div>
  );
}
