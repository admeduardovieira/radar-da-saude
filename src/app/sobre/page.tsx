import Link from "next/link";

export default function Sobre() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Sobre</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Sobre o projeto</span>
        <h1>Sobre o Radar da Saúde</h1>
        <p>
          Portal público, independente e apartidário de transparência da saúde no Brasil. Não é órgão público
          nem órgão de controle. Não qualifica corrupção, ilegalidade, culpa ou eficiência sem evidência e método.
        </p>
      </section>

      <section className="sobre">
        <h2>Escopo</h2>
        <p>
          União, 26 estados e Distrito Federal. Hospitais federais e estaduais são prioritários. Ministro da
          Saúde, secretários estaduais, governadores, direções hospitalares, Senado, Câmara dos Deputados e
          assembleias legislativas estão no escopo institucional. Municípios são dimensão de localização, não
          despesa, salvo expansão futura documentada.
        </p>
        <h2>Limites</h2>
        <ul>
          <li>Não há dados financeiros importados nesta versão. Páginas exibem estado vazio honesto quando não há registro oficial.</li>
          <li>Não se inventa valores, gestores, pagamentos, vínculos ou estatísticas.</li>
          <li>Não há scraping que burle controles de acesso ou limites de taxa.</li>
          <li>Não há CPF, dados de pacientes, senhas ou tokens no repositório nem em artefatos publicados.</li>
        </ul>
        <h2>Referências</h2>
        <ul>
          <li><a href="https://github.com/admeduardovieira/radar-da-saude" target="_blank" rel="noopener noreferrer">Repositório GitHub</a></li>
          <li><a href="https://github.com/admeduardovieira/observatorio-rj/tree/feat/portal-carioca-claro" target="_blank" rel="noopener noreferrer">Observatório RJ (referência de leitura)</a></li>
          <li><a href="https://github.com/GoogleChrome/modern-web-guidance" target="_blank" rel="noopener noreferrer">Modern Web Guidance</a></li>
        </ul>
        <p className="nota">
          Relate problemas ou sugira fontes por canal privado; não exponha credenciais nem dados pessoais sensíveis.
        </p>
      </section>
    </>
  );
}
