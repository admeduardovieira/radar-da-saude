"use client";

import { useState } from "react";
import Link from "next/link";
import { EstadoVazio } from "@/components/EstadoVazio";
import { Input, Button } from "@/components/ui";

const HINTS = [
  "Busque por nome do hospital, município, UF, esfera ou CNES.",
  "Nenhum estabelecimento foi importado nesta versão. Use o CNES como referência quando a fonte for incorporada.",
];

export default function Hospitais() {
  const [termo, setTermo] = useState("");
  const [uf, setUf] = useState("");
  const [esfera, setEsfera] = useState("");

  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Hospitais</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Estabelecimentos</span>
        <h1>Hospitais</h1>
        <p>
          Busca e filtros de estabelecimentos de saúde (foco: hospitais federais e estaduais). O
          CNES identifica o estabelecimento em contexto e período; não comprova por si só propriedade,
          responsabilidade financeira ou vigência de direção.
        </p>
      </section>

      <section className="busca">
        <form className="form-busca" onSubmit={(e) => e.preventDefault()}>
          <div className="campo">
            <label htmlFor="termo" className="label-visual">Nome do hospital</label>
            <Input id="termo" placeholder="Ex.: Hospital das Clínicas" value={termo} onChange={(e) => setTermo(e.target.value)} />
          </div>
          <div className="campo">
            <label htmlFor="uf" className="label-visual">UF</label>
            <Input id="uf" placeholder="Ex.: SP" maxLength={2} value={uf} onChange={(e) => setUf(e.target.value.toUpperCase())} />
          </div>
          <div className="campo">
            <label htmlFor="esfera" className="label-visual">Esfera</label>
            <select id="esfera" value={esfera} onChange={(e) => setEsfera(e.target.value)}>
              <option value="">Todas</option>
              <option value="federal">Federal</option>
              <option value="estadual">Estadual</option>
              <option value="distrital">Distrital</option>
            </select>
          </div>
          <Button type="submit" variant="default">Buscar</Button>
        </form>
        <div className="dicas">
          {HINTS.map((d, i) => (
            <span key={i} className="dica">• {d}</span>
          ))}
        </div>
      </section>

      <section className="resultados">
        <EstadoVazio
          titulo="Nenhum hospital cadastrado nesta versão"
          descricao={
            "O cadastro hospitalar (CNES/DATASUS/OpenDataSUS) está mapeado como fonte, mas não foi importado. " +
            "Quando um conector for validado, esta lista mostrará estabelecimentos com CNES, endereço, esfera, mantenedor e gestão do SUS — " +
            "sempre com link para o documento original."
          }
          acaoHref="/fontes"
          acaoLabel="Ver fontes oficiais"
        />
      </section>
    </>
  );
}

