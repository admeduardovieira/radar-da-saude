# Relatório de Entrega — Radar da Saúde

**Versão:** 0.1.0  
**Data:** 22/11/2026  
**Repositório:** https://github.com/admeduardovieira/radar-da-saude  
**Branch:** `main`  
**Último commit:** `76fdf29`  
**CI:** GitHub Actions run `44964404448` (sucesso)

## Escopo da entrega

Next.js 15 (App Router, SSR/SSG estático), React 19, TypeScript, Tailwind CSS v3, Vitest + jsdom. Hospedagem estática (output: standalone). Zero dados financeiros inventados — ausência é `null`, nunca zero.

## O que foi entregue

### Páginas públicas (71 rotas estáticas)
- `/` — home com mapa do site por tema e trilha do dinheiro
- `/estados` + `/estados/[uf]` — visão por unidade federativa (27 UFs)
- `/hospitais` + `/hospitais/[id]` — busca de estabelecimentos (CNES mapeado, não importado)
- `/contas` + `/contas/[uf]` — etapas financeiras (orçamento, empenho, liquidação, pagamento, transferência, contrato, emenda)
- `/contratos` — licitações e aditivos (contrato ≠ pagamento)
- `/emendas` — emendas parlamentares (etapas distintas)
- `/legislativo` — proposições e votações
- `/gestores` — titulares e atos de nomeação
- `/fontes` — catálogo de 13 fontes oficiais com status de integração
- `/metodologia` — regras obrigatórias e vocabulário
- `/cobertura` — matriz de cobertura por UF (todas pendentes)
- `/atualizacoes` — histórico de auditoria
- `/acessibilidade` — compromissos WCAG 2.2 AA
- `/sobre` — sobre o projeto
- `not-found.tsx` — página 404

### Componentes
- `Navbar`, `Footer`, `EstadoVazio`, `BadgeCobertura`, `ui.tsx` (Input, Button, Badge)

### Dados e tipos
- `src/data/ufs.json` — 27 UFs
- `src/data/cobertura.json` — matriz de cobertura (todas pendentes)
- `src/data/fontes.json` — 13 fontes oficiais
- `src/types/index.ts` — tipos de domínio (Uf, CoberturaUf, FonteOficial, etc.)
- `src/lib/data.ts` — carregadores (listarUfs, buscarUf, listarFontes, resumoCobertura, etc.)
- `src/lib/validators.ts` — dinheiroOuNull, centavos, formatoMoedaBrasil, estaVazioOuIndisponível, ehDigitos

### Testes
- `src/lib/validators.test.ts` — 10 testes
- `src/lib/data.test.ts` — 11 testes
- Total: 21 testes passando (`npm run test:ci`)

### Verificação de qualidade
- `npm run build` — verde (71 páginas estáticas geradas)
- `npm run lint` — sem avisos ou erros
- `tsc --noEmit` — EXIT 0

## Regras anti-invenção respeitadas

- Valor ausente é `null`, nunca zero.
- Contrato, autorização, empenho, liquidação, pagamento e transferência são etapas distintas.
- Nenhum recurso atribuído a hospital sem vínculo documental.
- Nenhum ocupante de cargo associado a período sem fonte.
- Nenhuma cobertura completa declarada a partir de fontes parciais.
- Fonte mapeada ≠ fonte integrada.
- Nenhum segredo, dado de paciente ou serviço pago não autorizado versionado.

## Próximos passos (pendentes de ação do usuário)

1. **Vercel:** executar `vercel login` (visitar https://vercel.com/oauth/device?user_code=NPDW-SDVL), depois `vercel` no diretório `radar-da-saude` para criar o projeto e fazer deploy em preview/produção.
2. **Variáveis de ambiente:** nenhuma necessária nesta versão (sem coleta de dados no runtime).
3. **Documentação:** `docs/MODERN_WEB_GUIDANCE.md` ainda não preenchida com IDs de orientações recuperadas.
