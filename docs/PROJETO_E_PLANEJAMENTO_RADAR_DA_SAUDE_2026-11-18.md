# RADAR DA SAÚDE — PROJETO E PLANEJAMENTO EXECUTIVO

**Versão 1.0 — 18 de novembro de 2026**  
**Nome público:** Radar da Saúde  
**Slug técnico:** `radar-da-saude`  
**GitHub pretendido:** `https://github.com/admeduardovieira/radar-da-saude`  
**Hospedagem pretendida:** Vercel, em projeto **novo** e independente  
**Projeto de referência:** Observatório RJ (`admeduardovieira/observatorio-rj`, branch `feat/portal-carioca-claro`)  
**Guia tecnológico:** https://github.com/GoogleChrome/modern-web-guidance

> **Estado de partida:** fundação documental inicial pronta em ZIP, mas o novo repositório e a implantação Vercel ainda exigem verificação/criação no ambiente do executor. Este plano não comprova que os dados nacionais já foram coletados ou que o produto foi publicado.

## 1. Missão e proposta de valor

Transformar dados dispersos de orçamento, pagamento, contratação, investimento e governança da saúde em informação pública **acessível, verificável, comparável e rastreável**. Permitir que cidadãos, profissionais da saúde, jornalistas, pesquisadores e equipes de controle investiguem os documentos associados a um estado, órgão, hospital, administrador, parlamentar, emenda, contrato ou pagamento.

**Princípio visual e editorial:** “Da verba anunciada ao documento que comprova a execução.”

### Público-alvo

Cidadãos, gestores e profissionais do SUS, jornalistas, pesquisadores, organizações civis, técnicos de orçamento, assessorias legislativas e órgãos de fiscalização. A plataforma é informativa; não se apresenta como entidade oficial nem emite juízo automático de irregularidade.

### Limites de alcance

- **Geográfico:** União + 26 estados + Distrito Federal (27 UFs). Município é dimensão de localização; despesas municipais só entram quando o escopo for expandido e documentado.
- **Equipamentos:** hospitais federais e estaduais, inclusive universitários/fundacionais quando o cadastro institucional permitir classificar corretamente; municípios e unidades mistas ficam rotulados.
- **Político/institucional:** ministro, secretários de saúde estaduais, gestores, direções hospitalares, governadores, senadores, deputados federais, deputados estaduais, órgãos e fundos públicos.
- **Recorte temporal:** exigir período de competência/exercício em cada linha e manter histórico; não anunciar cobertura temporal contínua antes de comprová-la.

## 2. Questões que o produto deverá responder

1. Qual é o orçamento de saúde da União ou do estado em um exercício determinado, em qual conceito/estágio e de qual fonte?
2. Quanto do orçamento foi empenhado, liquidado ou pago? Quais documentos demonstram isso?
3. Qual hospital pertence à esfera federal ou estadual, quem é o mantenedor, quem o opera, qual é o gestor do SUS e quem exerce sua direção, com fontes e datas?
4. Qual contrato, fornecedor, licitação, aditivo ou pagamento está diretamente associado a esse hospital (se for possível provar)?
5. Qual emenda parlamentar foi destinada a um fundo ou estabelecimento e qual etapa financeira foi alcançada? Houve repasse ou pagamento final comprovado?
6. Que matérias relativas à saúde foram apresentadas por senadores, deputados federais e estaduais, e qual a tramitação/votação registrada?
7. Que atos, programas, propostas orçamentárias e políticas de saúde foram divulgados por governadores e secretarias?
8. Onde a informação está incompleta, bloqueada, histórica, divergente ou ainda não coletada?

## 3. Navegação e módulos

```text
Radar da Saúde
├── Início — Panorama do Brasil
├── Estados — 27 UFs e cobertura das fontes
│   └── UF — panorama, órgãos, hospitais, gastos, contratos e gestores
├── Hospitais — busca, filtros e fichas
│   └── Hospital — CNES, endereço, gestões, contratos, pagamentos, atos
├── Contas — orçamento, empenhos, liquidações, pagamentos, transferências
├── Contratações — licitações, contratos, aditivos, fornecedores
├── Investimentos / Obras — projeto, fonte, estágio e execução
├── Emendas — autor, destino, beneficiário, estágio do recurso
├── Política e Legislação — Senado, Câmara, assembleias e governadores
├── Gestores — órgãos, cargos, históricos e atos
├── Fontes e cobertura — transparência da coleta por base/UF
├── Metodologia — conceitos, classificação, conciliação
└── Atualizações e Correções — histórico público e auditoria
```

Na primeira versão, rotas e estados vazios devem funcionar sem fingir completude. Fichas individuais e dashboards com valores exigem dados efetivamente incorporados.

## 4. Estrutura de dados e rastreabilidade

### Entidades principais

`estado`, `municipio`, `hospital`, `cnes_estabelecimento`, `orgao`, `fundo_saude`, `unidade_gestora`, `pessoa_publica`, `cargo`, `nomeacao`, `vinculo_gestao`, `fonte_documental`, `arquivo_original`, `snapshot`, `indicador`, `dotacao`, `despesa`, `empenho`, `liquidacao`, `pagamento`, `transferencia`, `licitacao`, `contrato`, `aditivo`, `fornecedor`, `obra`, `emenda`, `proposicao`, `voto`, `vinculo_evidencia`, `cobertura_fonte`.

### Campos essenciais de cada evento financeiro

- Identificador na fonte + chave interna estável
- Ente/órgão/unidade gestora
- Exercício e data de referência
- Etapa financeira e natureza do lançamento
- Valor exato em centavos/decimal
- Fonte oficial + URL + data de publicação/consulta
- Código documental (processo, número de empenho, transferência, contrato, etc.)
- Hospital/beneficiário **somente quando o vínculo for demonstrado**
- Qualidade do dado, ressalva, revisão, hash e versão

### Regras de conciliação

- Um `contrato` não é automaticamente um `pagamento`.
- `Empenhado`, `liquidado` e `pago` são etapas que não devem ser somadas como total novo.
- Transferência entre entes/fundos não deve ser contabilizada em duplicidade com aplicação final.
- Não ratear despesa central da Secretaria de Saúde em hospitais por população, leitos, endereço ou nome.
- CNES identifica estabelecimento em contexto e período; verificar alterações e vínculos de responsabilidade.
- Classificar separadamente **esfera, titularidade, mantenedor, gestor SUS, operador e diretor**.
- Não inferir estado atual de cargo por notícia histórica; exigir atos/período.
- Não converter ausência de valor, fato ou documento em zero.
- Não exibir totais nacionais/estaduais sem coberturas e denominadores coerentes.

## 5. Catálogo inicial de fontes e integração

| Frente | Fonte a validar | Utilização inicial | Risco / limite |
|---|---|---|---|
| Hospitais | CNES / DATASUS / OpenDataSUS | Cadastro, natureza, localização | Classificação/periodicidade, diferenças entre cadastro e gestão real |
| Orçamento em saúde | SIOPS | Declarações e indicadores por ente | Prazos de envio, conceito, relatórios faltantes |
| Contabilidade | Tesouro / Siconfi | Dados fiscais e contábeis | Compatibilidade de rubricas e períodos |
| Despesa federal | Portal da Transparência da União | Execução e transferências | Endpoints, paginação, limites, contratos e abrangência |
| Transferências SUS | Fundo Nacional de Saúde | Repasses para fundos e beneficiários | Repasse não significa gasto hospitalar final |
| Contratações | PNCP e portais locais | Licitações, contratos, aditivos | Cobertura variável, identificação do efetivo contratante |
| Legislativo federal | Câmara e Senado | Autores, matérias, tramitações | Classificar saúde por método e fonte, sem inferir autoria |
| Política e contas estaduais | Assembleias, portais da transparência, secretarias, DOs | Governadores, gestores, contas e projetos | 27 integrações heterogêneas; cobertura gradual |
| Controle | TCU, TCEs e controle interno | Fiscalização, auditorias e acórdãos | Não converter alerta ou achado em culpa comprovada |

Manter `dados/fontes_oficiais.json` como catálogo inicial; verificar URLs, escopos e autenticidade ao implementar. **Fontes mapeadas não equivalem a fontes integradas**. A tabela de status por UF é parte da interface e do modelo de dados.

## 6. Stack arquitetural proposta

- **Frontend:** Next.js App Router, React e TypeScript.
- **Design:** Tailwind CSS/CSS moderno, responsivo, acessível e com visual próprio; consultar GoogleChrome/modern-web-guidance durante a construção.
- **Ingestão:** Python para ETL/ELT supervisionado, dicionários oficiais, integridade e revisões.
- **Persistência MVP:** JSON/Parquet versionados e dados tipados, se volume permitir; PostgreSQL quando justificado.
- **Exploração:** SQL e DuckDB offline para verificações, sem obrigar serviço pago.
- **CI:** GitHub Actions para testes, build e validação dos dados (não usar CI para publicar dados não revisados).
- **Deploy:** Vercel com projeto independente, preview, QA e promoção/publicação de produção de acordo com aprovação e recursos disponíveis.
- **Ambiente de trabalho:** Windows 11 / PowerShell, Node.js e Python, **sem Docker**.
- **Segurança:** nenhum token ou credencial no código, repositório ou artefato; privilégios mínimos.

### Modern Web Guidance como orientação de engenharia

Repositório: https://github.com/GoogleChrome/modern-web-guidance  
Documentação oficial: https://developer.chrome.com/docs/modern-web-guidance/get-started?hl=pt-br

O Modern Web Guidance **não gera o site sozinho**. O agente deverá usar a CLI/skill para buscar e recuperar padrões atuais relevantes (`search` e `retrieve`), aplicar aos componentes Next.js e registrar quais decisões e fallbacks foram guiados por esses padrões. Instalação conforme compatibilidade: `npx modern-web-guidance@latest install` ou `npx skills add GoogleChrome/modern-web-guidance`. Para código novo, priorizar busca orientada a tarefas; reservar `legacy-scan` para diagnóstico de legado.

## 7. Design de produto e experiência

**Identidade:** Radar da Saúde. Visual confiável, contemporâneo e humano; azul marinho, azuis mais claros e verde como cor de contexto institucional, com neutralidade na interpretação de gastos. Não usar semáforos morais para políticos, hospitais ou entes.

**Home:** busca nacional + resumo de cobertura documental, categorias, links para estados, hospitais, contas, contratos, emendas e legislação. Indicadores só quando houver registros validados.

**Estado:** cabeçalho contextual, vínculo com fontes locais, hospitais do estado (se importados), orçamento por exercício, execução por estágio, atos de gestão, contratos e discrepâncias documentadas.

**Hospital:** ficha com CNES, endereço e estado, esfera/mantenedor/gestão/operador, diretor e ato datado quando confirmados, atos, pagamentos atribuíveis, contratos, emendas e fontes originais. Esgotada a base, mostrar aviso e link de fonte.

**Contas:** categorias financeiras separadas; filtro por UF, órgão, exercício, fase, hospital e fornecedor; visualizações que explicitam sobreposição/possível dupla contagem.

**Acessibilidade:** WCAG 2.2 AA como meta de implementação (sem alegar certificação), navegação por teclado, rótulos, contraste, redução de movimento, responsividade ≥320 px e experiência sem JS para conteúdo essencial quando viável.

## 8. Cronograma por portões (sem prazo arbitrário)

| Portão | Resultado auditável | Bloqueador para avançar |
|---|---|---|
| G0 — Repositório | `radar-da-saude` criado + 19 arquivos básicos versionados e validados | Sem GitHub remoto confirmado |
| G1 — Domínio editorial | Escopo, conceitos, IDs, fonte/UF, segurança e modelos definidos | Sem regras para vínculos e estágios financeiros |
| G2 — App navegável | Next.js executa; 27 páginas UF; busca/rotas e fichas vazias honestas | Sem build, navegação ou testes |
| G3 — Primeiras bases verificadas | Importação real de uma ou mais fontes oficiais, proveniência e testes | Dados fictícios exibidos como verdade, campos sem fonte |
| G4 — Política + contratos | Bases federais e conectores estaduais incrementais, com status explícito | Generalizar subconjunto como censo |
| G5 — Vercel | Projeto próprio; preview READY; QA; produção após validação | Projeto/commit/ambiente não verificados |
| G6 — Evolução nacional | Ampliação progressiva por UF, histórico e cobertura atualizada | Alterações sem fonte ou sem revisão |

**Regra de engenharia:** nenhum portão exige simular o próximo. Se não houver endpoint acessível, manter a página e declarar o dado indisponível; não inventar números para “completar” o layout.

## 9. Transição segura dos testes da fundação para o produto

O ZIP original possui verificações **temporárias de estado inicial**: todas as fontes como não integradas; matriz 27 UFs pendentes; ausência de `dados/hospitais.json`, `dados/pagamentos.json` e `vercel.json`. Esses testes devem passar **no primeiro commit documental**, mas não são critérios permanentes. Quando o Work importar dados reais ou configurar Vercel, deve atualizar os testes para verificar **o novo estado com prova**, sem remover os casos negativos de veracidade, procedência e contabilidade. Cada mudança no status de cobertura precisa ser sustentada por evidência de ingestão e versionamento.

## 10. Qualidade, segurança e testes obrigatórios

- Validação de JSON, CSV, hashes, dados financeiros, unicidade e referências originais.
- Build TypeScript, lint, testes e verificação de links.
- Casos negativos que proíbam “não informado = zero” e “contrato = pagamento”.
- Testes de filtro nacional, escopo territorial, visual mobile e tela vazia.
- Histórico de fonte; datas de documento, consulta e publicação distintas.
- Nenhum CPF/paciente/senha/token em dados publicados.
- Sem scraping que burle controles de acesso ou limite de taxa.
- Segurança do CI: permissões mínimas e ações fixadas quando possível.
- Verificação Vercel: projeto, domínio, commit, ambiente, logs e ausência de regressão no Observatório RJ.

## 11. Responsabilidades e critérios de aprovação

### Trabalho permitido para o Work

Criar **novo** repositório em `admeduardovieira`, inicializar com o ZIP, adaptar métodos do Observatório RJ em modo leitura, desenvolver a aplicação, integrar fontes oficiais verificadas, testar e criar **novo** projeto Vercel com deploy de preview e eventual produção validada, sem custo inesperado.

### Trabalho proibido

- Excluir/substituir código do Observatório RJ ou seu deploy.
- Copiar tokens/segredos existentes, cometer credenciais ou solicitar senhas na conversa.
- Afirmar que dados estaduais ou hospitalares estão completos sem prova.
- Atribuir despesa ou ato a pessoas/unidades apenas por semelhança de nome.
- Inventar cifras, gestores, quantidade de estabelecimentos, votações, auditorias ou datas.
- Contratar serviço pago sem autorização.
- Declarar deploy realizado sem URL/ID, commit e status confirmados.

## 12. Entregáveis finais e critérios de pronto

- URL e SHA do **novo GitHub**, com README e documentação completa.
- Aplicação Next.js com menus, 27 UFs e navegação nacional funcional.
- Documentação da fonte, cobertura, integrações, modelo de dados, metodologia, segurança e limitações.
- Guia Modern Web Guidance aplicado com evidências e relatório.
- `npm run build`, testes, validações e GitHub Actions reportados com resultados reais.
- **Novo Vercel** com preview e estado real; produção quando for possível e validada.
- Relatório em `docs/RELATORIO_DE_ENTREGA.md` contendo links, commits, datas, problemas, evidências e próximos passos.

### Referências técnicas

- Observatório RJ (fonte arquitetural): https://github.com/admeduardovieira/observatorio-rj/tree/feat/portal-carioca-claro
- Modern Web Guidance: https://github.com/GoogleChrome/modern-web-guidance
- Chrome for Developers — instalação: https://developer.chrome.com/docs/modern-web-guidance/get-started?hl=pt-br
- Vercel — Next.js: https://vercel.com/docs/frameworks/full-stack/nextjs
- Vercel — Git Integration: https://vercel.com/docs/git

**Observação final:** uma primeira versão publicada e útil com cobertura parcial honesta é preferível a uma plataforma que inventa completude nacional. O propósito do Radar da Saúde é a rastreabilidade da informação, não preencher uma vitrine de números.
