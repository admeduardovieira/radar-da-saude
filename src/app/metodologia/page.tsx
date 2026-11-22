import Link from "next/link";

export default function Metodologia() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Metodologia</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Política de dados</span>
        <h1>Metodologia e conciliação</h1>
        <p>
          Regras de uso dos dados públicos, distinção entre estágios financeiros, atribuição de responsabilidades
          e limites de alcance.
        </p>
      </section>

      <section className="regras">
        <h2>Regras obrigatórias</h2>
        <ul>
          <li>Orçamento, dotação, empenho, liquidação e pagamento são etapas distintas; nunca somar como total novo.</li>
          <li>Contrato não é liquidação; repasse não é gasto final da unidade.</li>
          <li>Ausência de registro é "não documentado", jamais zero.</li>
          <li>Recurso só se atribui a hospital com vínculo documental identificado (não por nome, endereço ou proximidade).</li>
          <li>CNES identifica estabelecimento em contexto e período; não comprova propriedade nem gestão vigente.</li>
          <li>Esfera, titularidade, mantenedor, gestor do SUS, operador e diretor são classificados separadamente.</li>
          <li>Cargo público exige ato e período; não se infere situação atual por notícia histórica.</li>
          <li>Governador não é autor de proposição parlamentar; atos do Executivo têm classificação própria.</li>
          <li>Sem rankings morais, sem alegação automática de irregularidade, sem dados de pacientes nem CPF.</li>
        </ul>
      </section>

      <section className="vocabulario">
        <h2>Vocabulário</h2>
        <dl>
          <dt>Dotação / orçamento</dt><dd>Autorização ou previsão para um exercício.</dd>
          <dt>Empenho</dt><dd>Compromisso orçamentário.</dd>
          <dt>Liquidação</dt><dd>Verificação do direito do credor.</dd>
          <dt>Pagamento</dt><dd>Desembolso registrado.</dd>
          <dt>Contrato / aditivo</dt><dd>Instrumento jurídico e alterações; não é prova de pagamento.</dd>
          <dt>Transferência / repasse</dt><dd>Movimento entre entes ou fundos; não equivale à aplicação final.</dd>
          <dt>Emenda</dt><dd>Iniciativa orçamentária; aprovação, empenho, pagamento e resultado são dimensões separadas.</dd>
        </dl>
      </section>
      <p className="nota">Veja docs/METODOLOGIA.md, docs/ESCOPO.md e docs/MODELO_DE_DADOS.md.</p>
    </>
  );
}

