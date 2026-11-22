import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Não encontrado</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde</span>
        <h1>Página não encontrada</h1>
        <p>
          O endereço solicitado não existe no Radar da Saúde. Como esta versão ainda não incorporou dados,
          fichas de hospital, conta, contrato, emenda ou gestor específicos não estão disponíveis.
        </p>
      </section>
      <section className="acoes">
        <Link href="/" className="botao primario">Voltar ao início</Link>
        <Link href="/fontes" className="botao secundario">Ver fontes oficiais</Link>
      </section>
    </>
  );
}

