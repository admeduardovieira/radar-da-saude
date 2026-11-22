import Link from "next/link";
import { EstadoVazio } from "@/components/EstadoVazio";

export default function Emendas() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Emendas</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Emendas parlamentares</span>
        <h1>Emendas relacionadas à saúde</h1>
        <p>
          Autor, destino, beneficiário e estágio do recurso. Emenda tem etapas distintas: proposta,
          autorização, empenho, repasse e efetiva aplicação. Repasse não é prova de pagamento final.
        </p>
      </section>

      <section className="vazio">
        <EstadoVazio
          titulo="Nenhuma emenda incorporada"
          descricao={
            "As bases do TCU (acompanhamento de emendas), Câmara e Senado estão mapeadas, mas nenhuma emenda " +
            "foi importada com vínculo documental a beneficiário de saúde."
          }
          acaoHref="/fontes"
          acaoLabel="Ver fontes oficiais"
        />
      </section>
    </>
  );
}

