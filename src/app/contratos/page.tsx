import Link from "next/link";
import { EstadoVazio } from "@/components/EstadoVazio";

export default function Contratos() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Contratações</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Contratações públicas</span>
        <h1>Licitações, contratos e aditivos</h1>
        <p>
          Contratos e aditivos relacionados à saúde, com fornecedor, objeto, valor, vigência e órgão
          contratante. Um contrato não é automaticamente um pagamento.
        </p>
      </section>

      <section className="vazio">
        <EstadoVazio
          titulo="Nenhum contrato de saúde incorporado"
          descricao={
            "A PNCP e os portais de transparência estão mapeados como fontes de contratações, mas nenhum registro " +
            "foi importado nem reconciliado com estabelecimentos de saúde."
          }
          acaoHref="/fontes"
          acaoLabel="Ver fontes oficiais"
        />
      </section>
    </>
  );
}

