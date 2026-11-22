import Link from "next/link";

export default function Acessibilidade() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Acessibilidade</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Acessibilidade</span>
        <h1>Acessibilidade</h1>
        <p>
          Meta de implementação: WCAG 2.2 AA. Navegação por teclado, rótulos, contraste, redução de movimento,
          responsividade a partir de 320 px e conteúdo essencial sem depender de JavaScript quando viável.
        </p>
      </section>
      <section className="checklist">
        <h2>Compromissos</h2>
        <ul>
          <li>Link "Pular para o conteúdo" visível no foco do teclado.</li>
          <li>Menus navegáveis por teclado, com estado aberto/fechado anunciado (aria-expanded).</li>
          <li>Contraste de texto definido por variáveis CSS (nível AA para texto normal e grande).</li>
          <li>Respeita prefers-reduced-motion (animações desativadas quando solicitado).</li>
          <li>Layout fluido sem overflow horizontal a 320/360 px.</li>
          <li>Imagens com texto alternativo; ícones decorativos ocultos de tecnologias assistivas.</li>
          <li>Foco visível em botões, links e campos de formulário.</li>
        </ul>
      </section>
      <p className="nota">
        A acessibilidade é uma meta de implementação, não uma alegação de certificação. Relate divergências pela página Sobre.
      </p>
    </>
  );
}

