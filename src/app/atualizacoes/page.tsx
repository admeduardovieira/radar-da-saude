import Link from "next/link";

export default function Atualizacoes() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Atualizações</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Histórico público</span>
        <h1>Atualizações e correções</h1>
        <p>
          Histórico público de alterações na fundação, na cobertura e na aplicação. Nenhuma correção
          apaga divergências; elas são registradas com antes/depois, data e evidência.
        </p>
      </section>
      <section className="entradas">
        <h2>Entradas registradas</h2>
        <table>
          <thead>
            <tr><th>Data</th><th>Tipo</th><th>Descrição</th><th>Evidência</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-11-21</td>
              <td>Repositório</td>
              <td>Criação do repositório público admeduardovieira/radar-da-saude e publicação da fundação documental (24 arquivos).</td>
              <td>Commit 286610a · CI success (run 44964404448)</td>
            </tr>
            <tr>
              <td>2026-11-18</td>
              <td>Fundação</td>
              <td>Catálogo inicial de 13 fontes oficiais nacionais e matriz de 27 UFs (todas pendentes).</td>
              <td>docs/fontes_oficiais.json · docs/MATRIZ_COBERTURA.csv</td>
            </tr>
          </tbody>
        </table>
      </section>
      <p className="nota">
        Esta página é o histórico de auditoria do próprio Radar da Saúde. Correções futuras serão registradas aqui com fonte e data.
      </p>
    </>
  );
}

