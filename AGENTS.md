# AGENTS.md — Radar da Saúde

## Fonte de verdade

- Leia `docs/PROJETO_E_PLANEJAMENTO_RADAR_DA_SAUDE_2026-11-18.md` e `docs/PROMPT_WORK_RADAR_DA_SAUDE_2026-11-18.md` para o escopo e a ordem de execução.
- Referência arquitetural apenas para **leitura**: `admeduardovieira/observatorio-rj` / `feat/portal-carioca-claro`.
- O repositório e o projeto Vercel do Observatório RJ não podem ser modificados.
- Dados oficiais devem preservar fonte, ID, período, data da consulta, integridade, status e ressalvas.

## Modern Web Guidance

- Repositório oficial: https://github.com/GoogleChrome/modern-web-guidance
- Leia o `README.md` e `skills/modern-web-guidance/SKILL.md` atuais.
- Antes de implementar UI, use `npx modern-web-guidance@latest search "<tema>"`, selecione IDs reais e use `retrieve` para ler as orientações. Adapte-as a Next.js e registre os IDs em `docs/MODERN_WEB_GUIDANCE.md`.
- Nunca force recursos experimentais sem avaliação de compatibilidade, nem confunda o guia com um template.
- Para código novo, prefira `search`/`retrieve`; `legacy-scan` só para revisão de padrões legados.

## Regras antiinvenção

- Não há orçamento ou pagamento presumido. Valor ausente é `null`, não zero.
- Contrato, autorização, empenho, liquidação, pagamento e transferência não são intercambiáveis.
- Não atribua recurso a hospital sem vínculo documental.
- Não associe um ocupante de cargo a um período sem fonte e referência temporal.
- Não declare cobertura completa do Brasil a partir de fontes parciais.
- Distinga fonte mapeada de fonte incorporada e dado histórico de vigente.

## Engenharia

- Next.js/React/TypeScript; priorize SSR/SSG para dados públicos e scripts de coleta fora do runtime.
- Acessibilidade e mobile desde o primeiro componente; testes e build antes de merge ou deploy.
- Nenhum segredo versionado; sem dados de pacientes; sem serviços pagos não autorizados.
- Windows 11 e PowerShell compatíveis, sem Docker.
- Preserve documentação, crie relatório auditável e não anuncie sucesso sem verificação.
