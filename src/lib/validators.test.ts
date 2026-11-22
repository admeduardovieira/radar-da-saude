import { describe, expect, it } from "vitest";
import {
  centavos,
  dinheiroOuNull,
  ehDigitos,
  formatoMoedaBrasil,
  estaVazioOuIndisponível,
} from "./validators";

describe("dinheiroOuNull", () => {
  it("retorna null para nulo, indefinido e string vazia", () => {
    expect(dinheiroOuNull(null)).toBeNull();
    expect(dinheiroOuNull(undefined)).toBeNull();
    expect(dinheiroOuNull("")).toBeNull();
  });

  it("retorna null para valores inválidos ou negativos", () => {
    expect(dinheiroOuNull("abc")).toBeNull();
    expect(dinheiroOuNull(Infinity)).toBeNull();
    expect(dinheiroOuNull(-10)).toBeNull();
  });

  it("retorna o número para valores válidos", () => {
    expect(dinheiroOuNull(100)).toBe(100);
    expect(dinheiroOuNull("100.50")).toBe(100.5);
    expect(dinheiroOuNull(0)).toBe(0);
  });
});

describe("centavos", () => {
  it("retorna null para null", () => {
    expect(centavos(null)).toBeNull();
  });

  it("converte reais para centavos com arredondamento", () => {
    expect(centavos(10)).toBe(1000);
    expect(centavos(10.555)).toBe(1056);
    expect(centavos(0)).toBe(0);
  });

  it("retorna null para resultado negativo ou não finito", () => {
    expect(centavos(-1)).toBeNull();
  });
});

describe("formatoMoedaBrasil", () => {
  it("retorna 'Não documentado' para null", () => {
    expect(formatoMoedaBrasil(null)).toBe("Não documentado");
  });

  it("formata valor em centavos como moeda BRL", () => {
    expect(formatoMoedaBrasil(1000).replace(/\s/g, "")).toBe("R$10,00");
    expect(formatoMoedaBrasil(123456).replace(/\s/g, "")).toBe("R$1.234,56");
  });
});

describe("estaVazioOuIndisponível", () => {
  it("identifica valores vazios", () => {
    expect(estaVazioOuIndisponível(null)).toBe(true);
    expect(estaVazioOuIndisponível(undefined)).toBe(true);
    expect(estaVazioOuIndisponível("")).toBe(true);
    expect(estaVazioOuIndisponível("x")).toBe(false);
    expect(estaVazioOuIndisponível(0)).toBe(false);
  });
});

describe("ehDigitos", () => {
  it("valida apenas dígitos após remover máscara", () => {
    expect(ehDigitos("123.456.789-00")).toBe(true);
    expect(ehDigitos("12.345.678/0001-00")).toBe(true);
    expect(ehDigitos("abc")).toBe(false);
  });
});
