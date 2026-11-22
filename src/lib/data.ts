"use strict";

// Radar da Saúde — carregadores de dados documentais.
// Nenhum dado financeiro inventado: listas vazias significam ausência de ingestão.

import ufs from "@/data/ufs.json";
import cobertura from "@/data/cobertura.json";
import fontes from "@/data/fontes.json";
import type { Uf, CoberturaUf, FonteOficial } from "@/types";

export function listarUfs(): Uf[] {
  return ufs as Uf[];
}

export function buscarUf(sigla: string): Uf | undefined {
  return (ufs as Uf[]).find((u) => u.uf === sigla.toUpperCase());
}

export function listarCobertura(): CoberturaUf[] {
  return cobertura as CoberturaUf[];
}

export function buscarCoberturaUf(sigla: string): CoberturaUf | undefined {
  return (cobertura as CoberturaUf[]).find((c) => c.uf === sigla.toUpperCase());
}

export function listarFontes(): FonteOficial[] {
  return fontes.sources as FonteOficial[];
}

export function fontePorId(id: string): FonteOficial | undefined {
  return (fontes.sources as FonteOficial[]).find((f) => f.id === id);
}

export function fontesNaoIntegradas(): FonteOficial[] {
  return (fontes.sources as FonteOficial[]).filter((f) => f.integration_status === "nao_integrada");
}

export function resumoCobertura() {
  const lista = listarCobertura();
  const temas = ["cadastro_hospitalar", "orcamento", "pagamentos", "contratacoes", "gestores", "assembleia"] as const;
  return temas.map((tema) => {
    let integradas = 0;
    let pendentes = 0;
    let indisponiveis = 0;
    for (const uf of lista) {
      const v = uf[tema];
      if (v === "incorporada") integradas += 1;
      else if (v === "indisponivel") indisponiveis += 1;
      else pendentes += 1;
    }
    return { tema, total_uf: lista.length, integradas, pendentes, indisponiveis };
  });
}
