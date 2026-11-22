import Link from "next/link";
import { listarUfs, buscarCoberturaUf, resumoCobertura } from "@/lib/data";
import { BadgeCobertura } from "@/components/BadgeCobertura";

const TEMAS: { chave: 'cadastro_hospitalar' | 'orcamento' | 'pagamentos' | 'contratacoes' | 'gestores' | 'assembleia'; label: string }[] = [
  { chave: "cadastro_hospitalar", label: "Cadastro hospitalar" },
  { chave: "orcamento", label: "Orçamento" },
  { chave: "pagamentos", label: "Pagamentos" },
  { chave: "contratacoes", label: "Contratações" },
  { chave: "gestores", label: "Gestores" },
  { chave: "assembleia", label: "Assembleia" },
];

export default function Estados() {
  const ufs = listarUfs();
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Estados</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Território</span>
        <h1>Estados (27 UFs)</h1>
        <p>
          União, 26 estados e Distrito Federal. Cada card mostra o status de cobertura documental por tema.
          <strong>Pendente significa que a fonte ainda não foi importada — nunca um valor inventado.</strong>
        </p>
      </section>

      <div className="grade-cobertura">
        {ufs.map((uf) => {
          const c = buscarCoberturaUf(uf.uf);
          return (
            <Link key={uf.uf} href={`/estados/${uf.uf}`} className="cartao-estado">
              <div>
                <span className="sigla">{uf.uf}</span>
                <span className="nome">{uf.nome}</span>
              </div>
              <div className="temas">
                {TEMAS.map((t) => {
                  const v = c?.[t.chave] ?? "pendente";
                  return (
                    <span key={t.chave} className="chip" title={`${t.label}: ${v}`}>
                      {v[0].toUpperCase()}
                    </span>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>

      <section className="resumo">
        <h2>Resumo nacional de cobertura</h2>
        <table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Incorporada</th>
              <th>Pendente</th>
              <th>Indisponível</th>
              <th>Total UFs</th>
            </tr>
          </thead>
          <tbody>
            {resumoCobertura().map((c) => (
              <tr key={c.tema}>
                <td>{c.tema.replace(/_/g, " ").toUpperCase()}</td>
                <td>{c.integradas}</td>
                <td>{c.pendentes}</td>
                <td>{c.indisponiveis}</td>
                <td>{c.total_uf}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="nota">
          Status extraído da matriz de cobertura documental (docs/MATRIZ_COBERTURA.csv). Não há dados financeiros importados nesta versão.
        </p>
      </section>
    </>
  );
}
