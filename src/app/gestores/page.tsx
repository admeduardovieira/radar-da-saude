import Link from "next/link";
import { EstadoVazio } from "@/components/EstadoVazio";

export default function Gestores() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Gestores</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Gestão pública</span>
        <h1>Ministro, secretários, governadores e direções</h1>
        <p>
          Titulares de cargos e atos de nomeação com período. Não se infere o estado atual de um cargo por
          notícia histórica; exige ato e referência temporal. Não há CPF nem dados pessoais desnecessários.
        </p>
      </section>

      <section className="vazio">
        <EstadoVazio
          titulo="Nenhum gestor documentado"
          descricao={
            "Ministro da Saúde, secretários estaduais de saúde, governadores e direções hospitalares estão no escopo, " +
            "mas nenhum ato de nomeação ou vínculo de gestão foi incorporado com fonte oficial."
          }
          acaoHref="/fontes"
          acaoLabel="Ver fontes oficiais"
        />
      </section>
    </>
  );
}

