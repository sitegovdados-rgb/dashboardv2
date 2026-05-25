// Filtros visuais (decorativos, como na versão estática).
export default function FilterBar() {
  return (
    <div className="fbar">
      <span className="fl">Filtros:</span>
      <select className="fs">
        <option>Todos os Anos</option>
        <option>2026</option><option>2025</option>
        <option>2024</option><option>2023</option>
        <option>2022</option><option>2021</option>
      </select>
      <select className="fs">
        <option>Todas as Regiões</option>
        <option>Metropolitana</option>
        <option>Norte Fluminense</option>
        <option>Centro-Sul Fl.</option>
        <option>Baixada Litorânea</option>
      </select>
      <select className="fs">
        <option>Todos os Status</option>
        <option>Concluído</option>
        <option>Em Execução</option>
        <option>Não Iniciado</option>
        <option>Suspenso</option>
      </select>
      <select className="fs">
        <option>Todas Tipologias</option>
        <option>Recreativo</option><option>Educacional</option>
        <option>Urbanismo</option><option>Assistencial</option>
      </select>
    </div>
  );
}
