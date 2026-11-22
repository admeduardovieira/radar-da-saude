import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Rodapé">
      <div className="footer-grid">
        <div>
          <Link className="footer-brand" href="/" aria-label="Radar da Saúde — início">
            Radar da Saúde
          </Link>
          <p>
            Portal público, independente e apartidário de transparência da saúde no Brasil.
            <br />
            Conecta a informação ao hospital, ao órgão, ao ente federativo ou ao agente público
            <strong>somente quando a fonte documental comprovar o vínculo.</strong>
          </p>
        </div>
        <nav aria-label="Navegação auxiliar">
          <Link href="/">Início</Link>
          <Link href="/estados">Estados</Link>
          <Link href="/hospitais">Hospitais</Link>
          <Link href="/contas">Contas</Link>
          <Link href="/fontes">Fontes</Link>
          <Link href="/metodologia">Metodologia</Link>
          <Link href="/cobertura">Cobertura</Link>
          <Link href="/atualizacoes">Atualizações</Link>
          <Link href="/acessibilidade">Acessibilidade</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
      <p className="footer-note">
        Dados oficiais com fonte, identificador, data de referência e data de coleta. Ausência de registro
        é "não documentado", jamais zero. Sem vínculo com o Observatório RJ ou seu projeto Vercel.
      </p>
    </footer>
  );
}
