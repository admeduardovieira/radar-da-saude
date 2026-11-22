"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui";

const ITEMS: [string, string][] = [
  ["/", "Início"],
  ["/estados", "Estados"],
  ["/hospitais", "Hospitais"],
  ["/contas", "Contas"],
  ["/contratos", "Contratações"],
  ["/emendas", "Emendas"],
  ["/legislativo", "Legislativo"],
  ["/gestores", "Gestores"],
  ["/fontes", "Fontes"],
  ["/cobertura", "Cobertura"],
  ["/metodologia", "Metodologia"],
  ["/atualizacoes", "Atualizações"],
  ["/acessibilidade", "Acessibilidade"],
  ["/sobre", "Sobre"],
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="masthead">
        <Link className="brand" href="/" aria-label="Radar da Saúde — início">
          <span className="brand-icon">RS</span>
          <span>Radar da<span className="brand-saude"> Saúde</span></span>
        </Link>
        <p className="edition">
          Dados públicos, leitura aberta.<br />
          <strong>Brasil · União, 26 estados e Distrito Federal</strong>
        </p>
        <Button variant="ghost" size="sm" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-principal">
          {open ? "Fechar ✕" : "Menu ☰"}
        </Button>
        <Link className="sources-button" href="/fontes">
          Fontes e dados ↗
        </Link>
      </div>
      <nav id="menu-principal" aria-label="Navegação principal" className={open ? "primary-nav open" : "primary-nav"}>
        {ITEMS.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            aria-current={path === href || (href !== "/" && path.startsWith(href + "/")) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
