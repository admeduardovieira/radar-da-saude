import { describe, expect, it } from "vitest";
import {
  buscarCoberturaUf,
  buscarUf,
  fontesNaoIntegradas,
  listarCobertura,
  listarFontes,
  listarUfs,
  resumoCobertura,
} from "./data";

describe("listarUfs", () => {
  it("retorna as 27 unidades federativas", () => {
    const ufs = listarUfs();
    expect(ufs).toHaveLength(27);
  });

  it("inclui AC, DF e TO", () => {
    const siglas = listarUfs().map((u) => u.uf);
    expect(siglas).toContain("AC");
    expect(siglas).toContain("DF");
    expect(siglas).toContain("TO");
  });
});

describe("buscarUf", () => {
  it("encontra UF pela sigla (maiúscula)", () => {
    expect(buscarUf("SP")?.uf).toBe("SP");
    expect(buscarUf("SP")?.nome).toBe("São Paulo");
  });

  it("encontra UF pela sigla minúscula", () => {
    expect(buscarUf("sp")?.uf).toBe("SP");
  });

  it("retorna undefined para sigla inexistente", () => {
    expect(buscarUf("XX")).toBeUndefined();
  });
});

describe("listarCobertura", () => {
  it("tem uma linha por UF", () => {
    expect(listarCobertura()).toHaveLength(27);
  });

  it("todas começam como pendente", () => {
    for (const c of listarCobertura()) {
      expect(c.cadastro_hospitalar).toBe("pendente");
    }
  });
});

describe("buscarCoberturaUf", () => {
  it("encontra cobertura por UF", () => {
    expect(buscarCoberturaUf("RJ")?.uf).toBe("RJ");
  });
});

describe("listarFontes", () => {
  it("retorna fontes mapeadas", () => {
    const fontes = listarFontes();
    expect(fontes.length).toBeGreaterThan(0);
  });
});

describe("fontesNaoIntegradas", () => {
  it("filtra apenas fontes não integradas", () => {
    const naoIntegradas = fontesNaoIntegradas();
    for (const f of naoIntegradas) {
      expect(f.integration_status).toBe("nao_integrada");
    }
  });
});

describe("resumoCobertura", () => {
  it("retorna resumo por tema com totais corretos", () => {
    const resumo = resumoCobertura();
    expect(resumo).toHaveLength(6);
    for (const r of resumo) {
      expect(r.total_uf).toBe(27);
      expect(r.integradas + r.pendentes + r.indisponiveis).toBe(27);
    }
  });
});
