# Catálogo inicial de fontes oficiais (Brasil)

**Pesquisa documental realizada em 18/11/2026.** Os portais e descrições foram conferidos por páginas públicas. **Nenhum dado foi importado, reconciliado ou publicado**. A disponibilidade técnica dos endpoints e as condições de uso ainda precisam de teste no início da integração.

| Fonte | Conteúdo esperado | Endereço oficial | Estado |
|---|---|---|---|
| CNES / Dados Abertos SUS | Estabelecimentos de saúde, cadastro, atributos | https://dadosabertos.saude.gov.br/dataset/cnes-cadastro-nacional-de-estabelecimentos-de-saude | Identificada |
| Hospitais e leitos / SUS | Hospital, capacidade e leitos | https://dadosabertos.saude.gov.br/dataset/hospitais-e-leitos | Identificada |
| SIOPS | Receitas e despesas públicas em saúde, RREO, fontes/subfunções | https://dadosabertos.saude.gov.br/dataset/siops | Identificada |
| Siconfi / STN | Demonstrações contábeis e fiscais por ente | https://www.tesourotransparente.gov.br/consultas/consultas-siconfi/siconfi-api-de-dados-abertos | Identificada |
| Portal da Transparência — download | Execução de despesa federal, contratos e mais bases | https://portaldatransparencia.gov.br/download-de-dados/ | Identificada |
| Portal da Transparência — API | Consultas federais específicas (ver acesso/autenticação) | https://api.portaldatransparencia.gov.br/ | Identificada |
| FNS | Consultas de recursos federais destinados ao SUS | https://portalfns.saude.gov.br/consultas/ | Identificada |
| PNCP — API consulta | Contratações e licitações informadas no portal nacional | https://pncp.gov.br/api/consulta/swagger-ui/index.html | Identificada |
| DEMAS / Saúde | APIs de dados de assistência, CNES e produção | https://apidadosabertos.saude.gov.br/ | Identificada |
| Câmara dos Deputados | Deputados, proposições, votações e tramitação | https://dadosabertos.camara.leg.br/ | Identificada |
| Senado Federal | Senadores, matérias, votações e comissões | https://www12.senado.leg.br/dados-abertos | Identificada |
| TCU — Emendas | Painel de acompanhamento da execução de emendas | https://sites.tcu.gov.br/painel-de-acompanhamento-da-execucao-de-emendas/ | Identificada |
| HU Brasil (antiga Ebserh) | Hospitais universitários federais e arranjos institucionais | https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/sobre-os-hospitais-universitarios-federais/sobre-os-hospitais-universitarios/ | Identificada |

## Notas críticas de integração

1. O CNES é cadastro de estabelecimentos, não prova isolada de propriedade, responsabilidade financeira ou vigência de diretor.
2. O SIOPS contém valores informados por entes e demonstrativos; não distribua seus totais entre hospitais sem vinculação explícita.
3. A base federal de despesas e os balanços dos estados têm escopos distintos; nunca somar transferências e execução final sem reconciliação de fluxo.
4. PNCP cobre registros publicados pelos órgãos; ausência na consulta não comprova inexistência de contratação.
5. Emendas têm etapas distintas: proposta, autorização, empenho, repasse e efetiva aplicação.
6. Portais e diários oficiais estaduais devem ser catalogados individualmente; **não foram validados nesta edição**.
7. Projetos de autoria do Executivo e de autoria parlamentar seguem classificações distintas.
8. Verificar limites de uso de API, termos de licenciamento, paginação e atualização antes de criar conectores.

As fontes estão também em `dados/fontes_oficiais.json`, para validação automática de integridade documental.
