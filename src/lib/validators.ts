"use strict";

// Radar da Saúde — validadores de integridade documental.
// Regras anti-invenção: ausência é null, nunca zero; contrato não é pagamento.

export function dinheiroOuNull(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

export function centavos(valor: number | null): number | null {
  if (valor === null) return null;
  const arredondado = Math.round(valor * 100);
  if (!Number.isFinite(arredondado) || arredondado < 0) return null;
  return arredondado;
}

export function formatoMoedaBrasil(valor: number | null): string {
  if (valor === null) return "Não documentado";
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor / 100);
}

export function estaVazioOuIndisponível(v: unknown): boolean {
  return v === null || v === undefined || v === "";
}

export function ehDigitos(cpfCnpj: string): boolean {
  return /^\d+$/.test(cpfCnpj.replace(/[.\-/]/g, ""));
}
