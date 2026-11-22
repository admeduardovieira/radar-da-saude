import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarUf } from "@/lib/data";
import { EstadoVazio } from "@/components/EstadoVazio";

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
  return { title: estado ? `Contas · ${estado.nome} (${uf})` : `Contas ${uf}` };
}

export default async function ContasUf({ params }: { params: Promise<{ uf: string }> }) {
  const { uf } = await params;
  const sigla = uf.toUpperCase();
  const estado = buscarUf(sigla);
  if (!estado) notFound();

  return (
    <>
      <div className="breadcrumbs">
        <Link href="/">Início</Link> <span>/</span> <Link href="/contas">Contas</Link> <span>/</span> <span>{estado.nome}</span>
      </div>
      <section className="section-header">
        <span className="eyebrow">Contas · UF {sigla}</span>
        <h1>{estado.nome}</h1>
        <p>Visão de receitas e despesas por UF, usando fontes e escopos separados. Nenhum valor foi importado.</p>
      </section>

      <section className="vazio">
        <EstadoVazio
          titulo={"Nenhuma conta disponível para " + estado.nome}
          descricao={
            "Não há orçamento, empenho, liquidação, pagamento, transferências ou contratos incorporados para " +
            estado.nome +
            ". Selecione outra UF ou consulte as fontes oficiais."
          }
          acaoHref="/contas"
          acaoLabel="Voltar às contas"
        />
      </section>
    </>
  );
}
