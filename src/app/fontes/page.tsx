import Link from "next/link";
import { listarFontes } from "@/lib/data";

export default function Fontes() {
  const fontes = listarFontes();
  const categorias = Array.from(new Set(fontes.map((f) => f.category)));

  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Fontes</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Fontes oficiais</span>
        <h1>Catálogo de fontes oficiais</h1>
        <p>
          Fontes identificadas e sua situação de integração. Fonte mapeada não equivale a fonte integrada.
          Nenhum dado foi importado nesta versão.
        </p>
      </section>

      <section className="filtros">
        <span className="rotulo">Filtrar por categoria:</span>
        {categorias.map((cat) => (
          <span key={cat} className="chip-cat">{cat}</span>
        ))}
        <p className="total">{fontes.length} fonte(s) mapeada(s), {fontes.filter((f) => f.integration_status === "nao_integrada").length} não integrada(s).</p>
      </section>

      <table>
        <thead>
          <tr>
            <th>Fonte</th>
            <th>Categoria</th>
            <th>Cobertura</th>
            <th>Status de integração</th>
            <th>URL oficial</th>
            <th>Limitação</th>
          </tr>
        </thead>
        <tbody>
          {fontes.map((f) => (
            <tr key={f.id}>
              <td>
                <Link href={f.official_url} target="_blank" rel="noopener noreferrer">{f.name}</Link>
              </td>
              <td>{f.category}</td>
              <td>{f.coverage}</td>
              <td>{f.integration_status.replace(/_/g, " ")}</td>
              <td className="url">{f.official_url}</td>
              <td>{f.limitation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="nota">
        Consulte docs/FONTES_OFICIAIS.md e dados/fontes_oficiais.json para URLs, escopos, autenticidade e limitações de cada fonte.
      </p>
    </>
  );
}

