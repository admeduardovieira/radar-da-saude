import Link from "next/link";
import { listarUfs, listarFontes, resumoCobertura } from "@/lib/data";
import { EstadoVazio } from "@/components/EstadoVazio";
import { Badge } from "@/components/ui";
import { BadgeCobertura } from "@/components/BadgeCobertura";

const CATEGORIAS: { href: string; label: string; desc: string }[] = [
  { href: "/estados", label: "Estados", desc: "27 UFs e status das fontes por território" },
  { href: "/hospitais", label: "Hospitais", desc: "Busca, filtros e fichas de estabelecimentos" },
  { href: "/contas", label: "Contas", desc: "Orçamento, empenho, liquidação, pagamento e transferências" },
  { href: "/contratos", label: "Contratações", desc: "Licitações, contratos, aditivos e fornecedores" },
  { href: "/emendas", label: "Emendas", desc: "Autor, destino, beneficiário e estágio do recurso" },
  { href: "/legislativo", label: "Legislativo", desc: "Senado, Câmara, assembleias e proposições" },
  { href: "/gestores", label: "Gestores", desc: "Ministro, secretários, governadores e direções" },
  { href: "/fontes", label: "Fontes", desc: "Catálogo de fontes oficiais e integração" },
];

export default function Home() {
  const ufs = listarUfs();
  const fontes = listarFontes();
  const cobertura = resumoCobertura();
  const totalFontes = fontes.length;
  const fontesIntegradas = fontes.filter((f) => f.integration_status !== "nao_integrada").length;

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-texto">
            <span className="eyebrow">Radar da Saúde · Brasil</span>
            <h1>Da verba anunciada ao documento que comprova a execução.</h1>
            <p>
              Transparência das contas, gastos, contratações e investimentos públicos na saúde.
              Conecta a informação ao hospital, ao órgão, ao ente federativo ou ao agente público
              <strong>somente quando a fonte documental comprovar o vínculo.</strong>
            </p>
            <div className="hero-indicadores">
              <div className="indicador">
                <span className="valor">{ufs.length}</span>
                <span className="rotulo">UFs na navegação nacional</span>
              </div>
              <div className="indicador">
                <span className="valor">{totalFontes}</span>
                <span className="rotulo">Fontes oficiais mapeadas</span>
              </div>
              <div className="indicador">
                <span className="valor">{fontesIntegradas}</span>
                <span className="rotulo">Fontes integradas (verificadas)</span>
              </div>
            </div>
            <div className="hero-cta">
              <Link href="/estados" className="botao primario">
                Explorar os estados <span>↗</span>
              </Link>
              <Link href="/fontes" className="botao secundario">
                Ver fontes oficiais
              </Link>
            </div>
            <p className="nota">
              Valores e cadastros só aparecem quando há registro oficial validado.               Ausência de dado é
              "não documentado", jamais zero.
            </p>
          </div>
          <div className="hero-cobertura">
            <h2>Cobertura documental por tema</h2>
            <div className="grade-cobertura">
              {cobertura.map((c) => (
                <div key={c.tema} className="cartao-cobertura">
                  <span className="rotulo-tema">{c.tema.replace(/_/g, " ").toUpperCase()}</span>
                  <BadgeCobertura status="pendente" />
                  <p className="contagem">
                    {c.integradas} incorporada(s) · {c.pendentes} pendente(s) · {c.indisponiveis} indisponível(is) de {c.total_uf} UFs
                  </p>
                </div>
              ))}
            </div>
            <p className="legenda-cobertura">
              Status da matriz de cobertura (documento de planejamento). Nenhum valor financeiro foi importado nesta versão.
            </p>
          </div>
        </div>
      </section>

      <section className="categorias">
        <h2>Navegar por módulo</h2>
        <p className="subtitulo">
          Escolha uma frente. Páginas sem dados suficientes exibem um estado vazio honesto — nunca um número inventado.
        </p>
        <div className="grade-categorias">
          {CATEGORIAS.map((cat) => (
            <a key={cat.href} href={cat.href} className="cartao-categoria">
              <div>
                <span className="rotulo">{cat.label}</span>
                <p>{cat.desc}</p>
              </div>
              <span className="seta">→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="ufs">
        <h2>Estados (27 UFs)</h2>
        <p className="subtitulo">Clique em uma UF para ver o panorama de fontes e cobertura do estado.</p>
        <div className="grade-ufs">
          {ufs.map((uf) => (
            <Link key={uf.uf} href={`/estados/${uf.uf}`} className="cartao-uf">
              <span className="sigla">{uf.uf}</span>
              <span className="nome">{uf.nome}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
