import Link from "next/link";
import { EstadoVazio } from "@/components/EstadoVazio";

const ETAPAS: { chave: string; label: string; desc: string }[] = [
  { chave: "orcamento", label: "Orçamento / dotação", desc: "Autorização ou previsão para um exercício." },
  { chave: "dotacao", label: "Dotação", desc: "Recurso alocado a uma unidade orçamentária." },
  { chave: "empenho", label: "Empenho", desc: "Compromisso orçamentário." },
  { chave: "liquidacao", label: "Liquidação", desc: "Verificação do direito do credor." },
  { chave: "pagamento", label: "Pagamento", desc: "Desembolso registrado." },
  { chave: "transferencia", label: "Transferência / repasse", desc: "Movimento entre entes ou fundos." },
  { chave: "contrato", label: "Contrato / aditivo", desc: "Instrumento jurídico; não é prova de pagamento." },
  { chave: "emenda", label: "Emenda", desc: "Iniciativa orçamentária; fases distintas do recurso." },
];

export default function Contas() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Contas</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Trilha do dinheiro</span>
        <h1>Contas públicas da saúde</h1>
        <p>
          Orçamento, empenho, liquidação, pagamento, transferências e contratos. Cada etapa é registrada
          separadamente; nunca somamos etapas do mesmo dinheiro nem confundimos contrato com pagamento.
        </p>
      </section>

      <section className="etapas">
        <h2>Etapas financeiras</h2>
        <table>
          <thead>
            <tr><th>Etapa</th><th>O que significa</th><th>Status</th></tr>
          </thead>
          <tbody>
            {ETAPAS.map((e) => (
              <tr key={e.chave}>
                <td>{e.label}</td>
                <td>{e.desc}</td>
                <td><span className="status">Não importado</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="nota">
          Nenhum lançamento financeiro foi incorporado nesta versão. Quando houver dados, cada linha conterá
          identificador na fonte, exercício, valor em centavos, fonte oficial, URL e data de coleta.
        </p>
      </section>

      <section className="por-uf">
        <h2>Ver por unidade federativa</h2>
        <p className="subtitulo">
          Selecione uma UF para ver a visão de contas daquele estado, com as fontes e escopos separados.
        </p>
        <div className="grade-ufs">
          {[
            "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI",
            "RJ","RN","RS","RO","RR","SC","SP","SE","TO",
          ].map((sigla) => (
            <Link key={sigla} href={`/contas/${sigla}`} className="chip-uf">
              {sigla}
            </Link>
          ))}
        </div>
      </section>

      <section className="vazio">
        <EstadoVazio
          titulo="Nenhum registro contábil disponível"
          descricao={
            "Os dados de orçamento, empenho, liquidação, pagamento, contratos e transferências ainda não foram importados. " +
            "As fontes nacionais (SIOPS, Siconfi, Portal da Transparência, FNS, PNCP) estão mapeadas, mas não integradas."
          }
          acaoHref="/fontes"
          acaoLabel="Ver fontes oficiais"
        />
      </section>
    </>
  );
}

