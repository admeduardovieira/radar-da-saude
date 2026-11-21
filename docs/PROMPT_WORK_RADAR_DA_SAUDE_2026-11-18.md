# PROMPT MESTRE — CHATGPT WORK | RADAR DA SAÚDE

**Versão:** 1.0 — 18/11/2026  
**Executor:** ChatGPT Work (com navegador/computador, GitHub, Vercel e terminal, quando disponíveis)  
**Proprietário esperado:** `admeduardovieira`  
**Repositório a criar:** `https://github.com/admeduardovieira/radar-da-saude`  
**Projeto de referência (somente leitura):** `https://github.com/admeduardovieira/observatorio-rj`, branch `feat/portal-carioca-claro`  
**Padrões modernos obrigatórios:** `https://github.com/GoogleChrome/modern-web-guidance`  
**Saída esperada:** novo repositório público com fundação documental publicada, aplicativo Next.js funcional e implantação independente na Vercel, com relatório auditável.

---

## 0. Papel e modo de operação

Atue como **engenheiro de software full stack sênior, arquiteto de dados públicos, engenheiro de dados, auditor de finanças públicas, pesquisador de fontes oficiais, designer de produto e especialista em implantação Vercel**. Execute o trabalho, não apenas produza instruções ou uma proposta.

Use **os arquivos anexados nesta conversa** — principalmente o ZIP `Radar_da_Saude_Fundacao_GitHub_2026-11-18.zip` e o documento `PROJETO_E_PLANEJAMENTO_RADAR_DA_SAUDE_2026-11-18.md` — como base obrigatória. Extraia o pacote e leia **todos** os arquivos existentes antes de modificá-los. O ZIP inicial contém **19 arquivos** e é uma fundação documental, **não um frontend pronto**. Confirme as instruções contra o estado real do GitHub, as bases oficiais e a documentação atual das ferramentas; não presuma que prévias de chats anteriores representem o estado atual.

Prioridades absolutas:

1. **Criar no GitHub PRIMEIRO** o repositório público `admeduardovieira/radar-da-saude` na conta correta, se ele não existir. Se já existir, inspecionar o conteúdo antes de qualquer escrita e preservar arquivos existentes; não sobrescrever nem recriar o repositório.
2. Publicar e validar a fundação do ZIP, com commit verificável e GitHub Actions. Só depois iniciar o frontend.
3. Criar o aplicativo **Radar da Saúde** independentemente do Observatório RJ. Reaproveitar métodos e componentes somente quando fizer sentido; não copiar dados específicos da cidade para a base nacional, não substituir o portal existente e **não alterar o repositório do Observatório RJ ou seu Vercel**.
4. Usar **GoogleChrome/modern-web-guidance** durante a implementação, com evidência de quais orientações foram efetivamente consultadas e aplicadas; não tratá-lo como gerador automático de site.
5. Construir um **MVP nacional honesto**, útil mesmo quando parte das bases não puder ser integrada. Nunca inventar valores, contagens de hospitais, gestores, pagamentos, documentos, datas, fontes ou vínculos.
6. Desenvolver e testar preview na Vercel; somente publicar a produção do **novo** projeto após testes e verificação do ambiente e vínculo Git. Se a publicação em produção exigir autorização ou pagamento não contemplado na conta, documentar e parar nesse ponto, mantendo o preview e o código válidos. Não tocar em projetos Vercel existentes.
7. Concluir com links exatos, commits, estados, evidências e lacunas. Não afirmar sucesso sem confirmação.

Não solicite chaves, senhas ou tokens no chat. Utilize apenas sessões e integrações autorizadas e armazenamento seguro de segredos. Não procure nem copie segredos do Observatório RJ.

---

## 1. Visão e delimitação editorial

**Nome:** Radar da Saúde.  
**Objetivo:** informar, organizar, preservar e compartilhar informações públicas verificáveis sobre **orçamentos, despesas, contratações, pagamentos, investimentos, transferências, emendas parlamentares, órgãos e responsáveis pela saúde pública brasileira**.

**Território:** Brasil — União, 26 estados e Distrito Federal. Hospitais federais e estaduais em todo o país são prioritários; hospitais municipais podem ser incorporados como etapa futura ou quando a fonte permitir separação rigorosa de esfera e gestão.

**Escopo político institucional:** ministro da Saúde e gestores federais; governadores e secretários estaduais; gestores hospitalares identificados por ato; Senado, Câmara dos Deputados e assembleias legislativas; projetos, tramitações, votações, programas, decretos, propostas do Executivo e emendas relacionadas à saúde. Governadores não devem ser chamados de autores de proposições parlamentares: diferenciar propostas, mensagens, atos e programas do Executivo das matérias legislativas.

**Pilares do produto:**
- Portal público independente, sem viés partidário e sem rankings subjetivos de pessoas.
- Fontes oficiais, link original, identificador, datas, status de disponibilidade e hash quando aplicável.
- Distinguir estimativas/dotação/autorização, empenho, liquidação, pagamento, repasse, contrato, aditivo e investimento executado.
- Não somar diferentes etapas do **mesmo dinheiro** nem somar recursos federais e estaduais em duplicidade.
- Associar recursos e responsáveis a hospitais **apenas com vínculo documental identificado**; diferenciar hospital, estabelecimento, órgão, unidade gestora, fundo e contratante.
- Identificador CNES como referência de estabelecimento quando disponível, mas reconhecer alterações e situações cadastrais; UF/IBGE para território, CNPJ para contratantes/fornecedores quando publicado licitamente, IDs primários da origem para atos/transações.
- Distinção entre propriedade, mantenedor, administração, operação terceirizada, gestão do SUS e direção do estabelecimento.
- Campo `null`/`não documentado` para desconhecido; **nunca zero por ausência de registro**. Manter dados antigos com data e aviso de vigência não reconfirmada.
- Respeito à LGPD; dados funcionais públicos pertinentes, sem dados de pacientes, CPF de indivíduos, credenciais ou informações sensíveis desnecessárias.
- Apresentar matriz de cobertura por UF e por fonte com estados como: planejada, em validação, parcial, incorporada e indisponível.

O portal não é órgão público nem órgão de controle. Não qualificar corrupção, ilegalidade, culpa ou eficiência de políticos/hospitais sem evidência e método; não publicar afirmações depreciativas ou rankings morais.

---

## 2. Fase 1 obrigatória — criar e publicar o GitHub antes da Vercel

### 2.1 Verificação segura

- Confira o usuário conectado ao GitHub. O dono autorizado é `admeduardovieira`.
- Verifique se `admeduardovieira/radar-da-saude` já existe. Se não, **crie repositório público** chamado exatamente `radar-da-saude`, com descrição: `Transparência das contas, gastos, contratações e investimentos públicos na saúde brasileira.`
- Não crie em outra organização/conta por conveniência. Não modifique ou exclua repositórios antigos.
- Se a ferramenta GitHub não suportar a criação, tente um fluxo **autorizado** pelo navegador gráfico do Work, na sessão autenticada GitHub, ou `gh repo create` somente se o terminal tiver autenticação válida. Não peça para o usuário colar token. Se todas as vias falharem, descreva precisamente o bloqueio e continue preparando os arquivos, sem alegar que criou.

### 2.2 Importação da fundação

- Descompacte `Radar_da_Saude_Fundacao_GitHub_2026-11-18.zip` e confira que contém `README.md`, documentação, `dados/fontes_oficiais.json`, `schema/001_base.sql`, `scripts`, `tests` e `.github/workflows/validar.yml`.
- Confira `Radar_da_Saude_Manifesto_GitHub_2026-11-18.json` se anexado, calculando hashes e registrando divergências — esse manifesto é uma referência da fundação anterior, não prova do commit que será publicado.
- Inspecione e preserve o que já existe. Acrescente `docs/PLANO_MESTRE.md`, `docs/DECISOES_ARQUITETURAIS.md` e `AGENTS.md` para orientar os agentes, conforme as decisões abaixo.
- Execute as validações Python e testes existentes **enquanto o repositório ainda é apenas documental**. Corrija eventuais inconsistências, sem remover salvaguardas ou simular sucesso. **Atenção:** o pacote de fundação contém testes propositadamente temporários que proíbem `vercel.json`, dados reais importados e mudança da matriz de cobertura (por exemplo, `test_no_vercel_files`, `test_no_production_data_in_starter`, `test_all_federative_units_pending`). Eles provam o estado **inicial**, não devem impedir a evolução planejada. **Na fase de aplicativo e ingestão, refatore esses testes** para checar a procedência, schema, status real, configuração Vercel segura e integração validada. Preserve testes de integridade, os casos negativos e a trilha de mudanças; não simplesmente apague os testes para obter PASS.
- Publique um commit de fundação em `main` **antes** de iniciar a aplicação, com mensagem semelhante a `chore: initialize Radar da Saude foundation`.
- Confirme o SHA do commit, a existência pública dos arquivos e o resultado de CI. Não prossiga à Vercel se o GitHub inicial não estiver validado.

### 2.3 Inspeção do Observatório RJ (somente leitura)

Estude a branch `feat/portal-carioca-claro` do repositório `admeduardovieira/observatorio-rj` para extrair **padrões** de: arquitetura Next.js, rotas hierárquicas, fichas documentais e contas por entidade, filtros, histórico, snapshots imutáveis, relatórios, hash de fonte, testes de integridade, auditoria de restauração, UX e acessibilidade. Verifique a versão atual dos arquivos. Adapte o que for aplicável para a escala nacional e registre sua procedência. **Não copie fotos de parlamentares do Rio, cadastros e números municipais, nem faça push ao repositório anterior.** A produção `https://observatoriopolitico-rj.vercel.app` deve permanecer inalterada.

---

## 3. Fase 2 — fontes e arquitetura de dados

### 3.1 Pesquisa nacional mínima a verificar em fontes primárias

- **CNES / DATASUS / OpenDataSUS:** estabelecimentos hospitalares, tipo, esfera, localização, situações de cadastro e leitos, conforme dicionário vigente.
- **SIOPS (Ministério da Saúde):** indicadores e declarações orçamentárias dos entes, com exercício e conceito contábil.
- **Tesouro / Siconfi:** relatórios fiscais/contábeis e comparação por ente/período.
- **Portal da Transparência da União e APIs/arquivos oficiais:** orçamento e execução federal, despesas, contratos, emendas e documentos, respeitando formato e disponibilidade.
- **Fundo Nacional de Saúde:** transferências e detalhamento de repasses, distinguindo recebedor e aplicação final.
- **PNCP:** licitações e contratações publicadas, observando cobertura e necessidade de conciliação.
- **Câmara dos Deputados, Senado Federal:** matérias legislativas, parlamentares, tramitação, emendas, votos e comissões.
- **Assembleias legislativas, secretarias de saúde, portais de transparência estaduais, tribunais de contas e diários oficiais:** cadastros de órgãos, governadores, secretários, nomeações, hospitais, despesas e contratos, estado a estado.

Para cada fonte, documente URL oficial **atual verificada**, escopo, cobertura temporal, datas de consulta, formato, endpoint confirmado ou ainda não confirmado, autenticação, limitações, licença/condições de uso, frequência e situação de integração. Nunca confunda “fonte localizada” com “dados integrados”.

### 3.2 Modelo orientado a evidência

Adaptar o SQL inicial do pacote. Entidades mínimas: `uf`, `municipio`, `estabelecimento_saude`, `orgao`, `unidade_gestora`, `pessoa_publica`, `cargo`, `ato_nomeacao`, `gestao_estabelecimento`, `fonte`, `documento`, `snapshot`, `indicador`, `dotacao`, `empenho`, `liquidacao`, `pagamento`, `transferencia`, `contrato`, `aditivo`, `fornecedor`, `emenda`, `proposicao_legislativa`, `voto`, `vinculo_evidencia` e `cobertura_fonte`. Usar unicidade e chaves estáveis, referência temporal, versões, proveniência e restrições contra valores financeiros incoerentes. Se o MVP usar somente JSON tipado, preservar compatibilidade lógica e entregar migração clara para PostgreSQL, sem implantação prematura de banco pago.

**Fidelidade dos dados:** dinheiro em centavos inteiros ou decimal exato; definir período, esfera, unidade, estágio, fonte e evidência; valores identificados apenas pelo orçamento geral não podem ser atribuídos automaticamente a hospital. Se documento não sustentar um dado, registrar ausência com limitação explícita.

### 3.3 Coleta e publicação

Coleta Python/Node fora do navegador, leitura de originais, hashes, validação de schemas, deduplicação por identificador, quarentena para divergências, comparação entre versões e snapshots datados. Automatize apenas fontes com endpoints e limites confirmados. Se fonte bloquear, registrar falha real e não buscar caminhos de evasão. Não colocar tokens em repositório nem coletar dados pessoais clínicos. Lembre que um catálogo nacional pode ser **parcial**, mesmo com acesso ao CNES: exibir escopo e atualização.

---

## 4. Fase 3 — interface MVP nacional em Next.js

### 4.1 Stack e estrutura

Use **Next.js App Router + React + TypeScript + CSS moderno/Tailwind**, versões estáveis verificadas e lockfile. Hospede interface na **Vercel**, sem Docker. Priorize pré-renderização e cache para páginas públicas; não realizar coleta custosa ou downloads massivos em tempo de requisição. O desenvolvimento local deve funcionar em Windows 11 + PowerShell. Evite APIs pagas e infraestrutura adicional sem necessidade comprovada ou autorização. O layout deve ter identidade própria **Radar da Saúde**, não uma cópia visual do Observatório RJ ou da marca Google.

### 4.2 Páginas e rotas mínimas

- `/` — painel inicial nacional, missão, navegação por UF, indicadores **reais ou claramente indisponíveis**.
- `/estados` e `/estados/[uf]` — as 27 UFs, com status de dados por tema.
- `/hospitais` — busca por nome, UF, município, esfera, CNES e situação de integração.
- `/hospitais/[id]` — ficha canônica: identificação, classificação, direção/gestão com atos, histórico, contas atribuídas e ressalvas.
- `/contas` — trilha do dinheiro, distinguir previsão, dotação, empenho, liquidação, pagamento, transferências e contratos.
- `/contas/[uf]` ou equivalente — visão de receitas/despesas por UF, usando fontes e escopos separados.
- `/contratos` e `/contratos/[id]` quando houver registros verificados.
- `/emendas` — origem, autor, destinação, beneficiário e execução, com vínculos comprovados.
- `/legislativo` — senadores, deputados federais, assembleias estaduais, matérias e tramitações quando incorporadas.
- `/gestores` — ministro, secretários, governadores e direções quando documentados; atos e períodos.
- `/fontes`, `/metodologia`, `/cobertura`, `/atualizacoes`, `/acessibilidade`, `/sobre` — transparência editorial e operacional.

A navegação deve permitir o caminho `Brasil → UF → órgão/hospital → responsável → contas → documento original`. Páginas sem informação suficiente devem mostrar um **estado vazio honesto**, não uma ficha inventada. Não produzir cifras financeiras em cards sem documentos.

### 4.3 UX e identidade

Design editorial moderno, claro, profissional e reconhecível, com azul profundo, verde ligado à saúde, superfícies neutras, ótima leitura móvel e contraste acessível. Evite verde como indicação enganosa de “situação regular”. Fontes legíveis, menus mobile, pesquisa útil, filtros com rótulos, paginação ou navegação acessível, breadcrumbs, exportação de dados e badges de cobertura. Microinterações discretas e respeitando `prefers-reduced-motion`. **Sem fabricar fotos** de hospitais, pessoas, mapas ou insígnias oficiais. Ícones e ilustrações originais podem ser usados quando pertinentes. Cada afirmação numérica deve levar à referência documental.

### 4.4 Modern Web Guidance — requisito obrigatório

O projeto **deve usar** o repositório oficial: `https://github.com/GoogleChrome/modern-web-guidance` e suas orientações publicadas pela equipe do Chrome e colaboradores. **Não é um template nem substitui Next.js**.

1. Verifique README e `skills/modern-web-guidance/SKILL.md` atuais antes de executar comandos.
2. Se houver terminal compatível, instalar pela CLI documentada: `npx modern-web-guidance@latest install` (interativo) ou `npx skills add GoogleChrome/modern-web-guidance` em ambiente compatível. Se o ambiente impedir instalação, leia e use a documentação oficial e registre a limitação.
3. Para **cada decisão concreta** de UI, pesquise primeiro orientações relevantes, por exemplo com `npx modern-web-guidance@latest search "accessible navigation mobile"`, `search "responsive data tables"`, `search "forms validation focus"`, `search "performance images"`; selecione IDs **realmente retornados** e consulte `npx modern-web-guidance@latest retrieve "<id-retornado>"`. Nunca invente IDs.
4. Aplicar semantic HTML, CSS nativo quando útil, acessibilidade, performance, compatibilidade de navegadores e fallbacks quando exigidos, sem comprometer SSR/hidratação Next.js.
5. Para projeto novo, **não** executar `legacy-scan` indiscriminadamente como substituto do fluxo `search → retrieve → aplicar`. Só usar `legacy-scan` para revisão explícita de padrões legados incorporados ou modernização direcionada, conforme documentação oficial.
6. Registrar em `docs/MODERN_WEB_GUIDANCE.md`: fonte, versão/data de consulta, comandos/IDs consultados, orientação aplicada, arquivos afetados, fallback, testes e itens não aplicáveis. Na entrega, listar apenas guias efetivamente usados.
7. Compatibilidade padrão: recursos Baseline amplamente disponíveis; implementar fallback quando o guia recomendar. Aplicar testes em Chromium e, quando possível, Firefox e WebKit.

**Nota de segurança:** não habilitar origin trials ou recursos voláteis sem justificativa e consentimento. Não conceder permissão irrestrita a comandos externos. Examinar dependências antes de instalar.

---

## 5. Fase 4 — testes, revisão e evidências

Exigir, no mínimo:

- TypeScript compilando; lint sem erros bloqueadores; `npm run build` sucesso.
- Testes de schema e integridade: fontes válidas, município/UF coerentes, chaves únicas, valores decimais exatos, ausência não transformada em zero, nenhum pagamento sem documentação, nenhuma atribuição a hospital por mera semelhança de nome.
- Testes de rotas, links internos, dados vazios, busca e filtros; acessibilidade por teclado, foco visível, menus mobile e sem overflow a 320/360 px.
- Auditoria de dados políticos: projeto não equivale a lei, menção não equivale a autoria, governador não equivale a parlamentar; filiação e cargo com período.
- Segurança: sem credenciais versionadas, sem dados de pacientes, sem URL arbitrária usada como fonte de execução, sem HTML não confiável renderizado sem sanitização.
- Performance: aferir Core Web Vitals quando possível, tamanho do bundle, hidratação, responsividade, estratégia de cache e SEO básico.
- CI GitHub Actions com build, lint/test e validação de dados; preferir escopo mínimo de permissões e ações versionadas/pinadas conforme revisão.

Registre **comandos reais executados e resultados**, distinguindo teste local, teste de preview e verificação em produção. Falha não deve ser omitida nem relatada como PASS.

---

## 6. Fase 5 — Vercel, somente após GitHub verificado

- Abra a conta Vercel **autorizada** e confirme o workspace correto; preserve todos os projetos anteriores, especialmente `observatoriopolitico-rj`.
- Crie **novo projeto** `radar-da-saude` conectado **somente** ao repositório GitHub `admeduardovieira/radar-da-saude`. Se o projeto já existir, verifique propriedade, vínculo, branch, ambientes e destino antes de alterar.
- Escolha integração Git com branch de produção `main` ou fluxo de preview/PR controlado; configure build e framework Next.js de acordo com os arquivos reais.
- Gere primeiro uma implantação de **preview** a partir de um commit explícito. Confirme `READY` e valide páginas, links, layout, mobile, dados, OpenGraph e console. Se CI/testes falharem, não publicar produção.
- Com código revisado e validações PASS, publique **produção somente no novo projeto**, se as permissões da sessão e a configuração permitirem. Confirme o alias novo e o commit realmente publicado; não presumir URL `radar-da-saude.vercel.app` antes de verificar. Se houver custo/upgrade, não contratar automaticamente; documentar a decisão necessária.
- Guardar segredos apenas nas configurações seguras (GitHub/Vercel), sem valores nos logs ou na conversa.
- Registrar deploy ID, ambiente, URL, SHA, estado, erros de build e verificação pós-deploy. Não inventar métricas de tempo, logs ou testes.

---

## 7. Critérios mínimos de aceitação

1. `https://github.com/admeduardovieira/radar-da-saude` existe, é o repositório correto e contém a fundação + app com histórico Git.
2. `observatorio-rj` e o antigo projeto Vercel permanecem intactos.
3. MVP real com navegação nacional nas **27 UFs**, páginas e filtros funcionais, no mínimo estrutura hospitalar e consulta de cobertura/contas/fontes sem números fictícios. Uma página pode indicar que a fonte ainda não foi importada.
4. Fichas por hospital só exibem nome, CNES, gestor, valores e identificadores obtidos de fonte verificada; caso contrário exibem ausência explicitamente.
5. Documentação em Markdown e dados legíveis: fonte, política, período, limites, atualização, cobertura, arquitetura, auditoria e integração Vercel.
6. O Modern Web Guidance foi realmente consultado e aplicado, com registro de guias e resultados, não apenas mencionado no README.
7. Testes/CI passam ou falhas são expostas com precisão; Vercel preview e, se elegível, produção `READY` e auditados.
8. Relatório final informa o que está funcionando **agora**, o que ficou parcial e o que depende de futuras integrações estaduais.

---

## 8. Entrega final obrigatória

Ao concluir, responder em português do Brasil com links verdadeiros e comprovação:

| Item | Resultado esperado |
|---|---|
| GitHub | URL exata, visibilidade, branch e SHA inicial + final |
| Arquivos importados | Quantidade real, ajustes realizados e hash/manifesto |
| Aplicação | Páginas e funções comprovadamente implementadas |
| Fontes integradas | Lista e total real, datas e limitações; separar mapeadas de importadas |
| Cobertura nacional | Situação por UF, sem alegar censo |
| Modern Web Guidance | IDs reais consultados e aplicados, referência ao relatório |
| Testes e CI | Comandos, status, URLs das execuções |
| Vercel | Projeto, URL efetiva, preview/produção, deployment ID, READY/ERROR, SHA |
| Pendências | Dados/fontes, credenciais ou autorização necessários sem expor segredos |

**Não pare após um README ou um mockup.** Trabalhe até entregar o máximo possível dentro dos acessos reais. Se um serviço ou ferramenta estiver indisponível, registre o bloqueio e continue com as etapas independentes. Não crie contas ou custos pagos, não remova repositórios antigos e não apresente uma simulação como implantação concluída.
