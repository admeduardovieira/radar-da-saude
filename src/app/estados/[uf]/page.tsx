import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarUf, buscarCoberturaUf, listarFontes } from "@/lib/data";
import { EstadoVazio } from "@/components/EstadoVazio";
import { Badge } from "@/components/ui";
import { BadgeCobertura } from "@/components/BadgeCobertura";

const TEMAS: { chave: 'cadastro_hospitalar' | 'orcamento' | 'pagamentos' | 'contratacoes' | 'gestores' | 'assembleia'; label: string }[] = [
  { chave: "cadastro_hospitalar", label: "Cadastro hospitalar" },
  { chave: "orcamento", label: "Orçamento" },
  { chave: "pagamentos", label: "Pagamentos" },
  { chave: "contratacoes", label: "Contratações" },
  { chave: "gestores", label: "Gestores" },
  { chave: "assembleia", label: "Assembleia legislativa" },
];

export const dynamicParams = false;
export function generateStaticParams() {
  return [
    { uf: "AC" }, { uf: "AL" }, { uf: "AP" }, { uf: "AM" }, { uf: "BA" }, { uf: "CE" }, { uf: "DF" },
    { uf: "ES" }, { uf: "GO" }, { uf: "MA" }, { uf: "MT" }, { uf: "MS" }, { uf: "MG" }, { uf: "PA" },
    { uf: "PB" }, { uf: "PR" }, { uf: "PE" }, { uf: "PI" }, { uf: "RJ" }, { uf: "RN" }, { uf: "RS" },
    { uf: "RO" }, { uf: "RR" }, { uf: "SC" }, { uf: "SP" }, { uf: "SE" }, { uf: "TO" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ uf: string }> }) {
  const { uf } = await params;
  const estado = buscarUf(uf);
  return { title: estado ? `${estado.nome} (${uf}) · Radar da Saúde` : `UF ${uf}` };
}

export default async function EstadoPage({ params }: { params: Promise<{ uf: string }> }) {
  const { uf } = await params;
  const sigla = uf.toUpperCase();
  const estado = buscarUf(sigla);
  const cobertura = buscarCoberturaUf(sigla);
  const fontes = listarFontes();

  if (!estado) notFound();

  return (
    <>
      <div className="breadcrumbs">
        <Link href="/">Início</Link> <span>/</span> <Link href="/estados">Estados</Link> <span>/</span> <span>{estado.nome}</span>
      </div>
      <section className="section-header">
        <span className="eyebrow">UF · {sigla}</span>
        <h1>{estado.nome}</h1>
        <p>
          Panorama documental do estado. IBGE {estado.ibge}. Todas as fontes abaixo estão
          <strong>não integradas</strong> até que um conector seja validado com dados oficiais.
        </p>
      </section>

      <section className="cobertura-uf">
        <h2>Cobertura por tema</h2>
        <table>
          <thead>
            <tr><th>Tema</th><th>Status</th><th>Significado</th></tr>
          </thead>
          <tbody>
            {TEMAS.map((t) => {
              const v = cobertura?.[t.chave] ?? "pendente";
              return (
                <tr key={t.chave}>
                  <td>{t.label}</td>
                  <td><BadgeCobertura status={v} /></td>
                  <td>{legenda(v)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="fontes-nacionais">
        <h2>Fontes nacionais aplicáveis a este estado</h2>
        <p className="subtitulo">
          As fontes nacionais podem conter registros de {estado.nome}, mas nenhum dado foi importado para o Radar da Saúde.
        </p>
        <ul className="lista-fontes">
          {fontes.map((f) => (
            <li key={f.id} className="item-fonte">
              <Link href={f.official_url} target="_blank" rel="noopener noreferrer" className="nome-fonte">
                {f.name}
              </Link>
              <span className="categoria">[{f.category}]</span>
              <Badge variant="outline" className="status-fonte">
                {f.integration_status.replace(/_/g, " ")}
              </Badge>
            </li>
          ))}
        </ul>
      </section>

      <section className="vazio">
        <EstadoVazio
          titulo="Nenhum dado hospitalar, financeiro ou de gestão importado para este estado"
          descricao={
            "O estado " +
            estado.nome +
            " aparece na navegação nacional, mas não há estabelecimentos, contas, contratos, emendas ou gestores incorporados. " +
            "Use a página Fontes para conhecer as origens oficiais e a página Cobertura para ver a matriz nacional."
          }
          acaoHref="/fontes"
          acaoLabel="Ver fontes oficiais"
        />
      </section>
    </>
  );
}

function legenda(status: string) {
  const map: Record<string, string> = {
    planejada: "Planejada para coleta futura.",
    em_validacao: "Endpoint e formato em validação.",
    parcial: "Parte dos dados incorporada, com ressalvas.",
    incorporada: "Fonte integrada com dados validados.",
    indisponivel: "Fonte indisponível ou inacessível.",
    pendente: "Não coletada ainda. Ausência de dado não é zero.",
  };
  return map[status] ?? status;
}
