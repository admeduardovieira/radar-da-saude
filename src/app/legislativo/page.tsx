import Link from "next/link";
import { EstadoVazio } from "@/components/EstadoVazio";

export default function Legislativo() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Legislativo</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Poder Legislativo</span>
        <h1>Senado, Câmara e assembleias estaduais</h1>
        <p>
          Proposições, autoria, tramitação e votações relacionadas à saúde. Governadores não são tratados
          como autores de proposições parlamentares: atos do Executivo são classificados separadamente.
        </p>
      </section>

      <section className="vazio">
        <EstadoVazio
          titulo="Nenhuma matéria legislativa incorporada"
          descricao={
            "Câmara dos Deputados, Senado Federal e assembleias legislativas estão mapeadas como fontes, " +
            "mas nenhuma proposição, parlamentar ou votação foi importada para o Radar da Saúde."
          }
          acaoHref="/fontes"
          acaoLabel="Ver fontes oficiais"
        />
      </section>
    </>
  );
}

