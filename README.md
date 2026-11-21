# Radar da Saúde 🇧🇷

**Informação pública, verificável e acessível sobre recursos destinados à saúde no Brasil.**

> **Estado do repositório: fundação documental (18/11/2026).** Este pacote não contém valores de despesas, cadastros hospitalares importados, gestores identificados ou painéis publicados. As fontes foram identificadas, mas **nenhuma integração de produção foi concluída**.

## Missão

Reunir, organizar, preservar e compartilhar informações públicas sobre orçamentos, gastos, contratações, investimentos, emendas e responsabilidades institucionais na saúde, em âmbito nacional. Conectar a informação ao hospital, ao órgão, ao ente federativo ou ao agente público **somente quando a fonte documental comprovar o vínculo**.

## Alcance

- Brasil: União, 26 estados e Distrito Federal; expansão municipal mediante definição de escopo e fontes.
- Hospitais federais e estaduais (inclusive hospitais universitários federais quando identificados); classificar com cuidado esfera, propriedade, mantenedor, operador e gestão do SUS.
- Ministérios, secretarias estaduais, fundos de saúde, órgãos gestores, direções hospitalares e responsáveis documentados.
- Orçamento, dotação, contratos, licitações, aditivos, empenhos, liquidações, pagamentos, transferências e investimentos — **etapas distintas**.
- Senado, Câmara dos Deputados e assembleias estaduais: proposições, autoria, tramitação, votações e emendas relacionadas à saúde.
- Governadores: atos, programas, propostas enviadas ao Legislativo e responsabilidades administrativas, sem tratá-los como autores de proposições parlamentares.

## Princípios

1. **Documento antes do número** — link oficial, identificador, data de referência, data da coleta e hash quando houver arquivo.
2. **Não confundir etapas financeiras** — orçamento não é pagamento; repasse não é gasto final; contrato não é liquidação.
3. **Não inventar ausência** — informação não localizada é `não documentado`, jamais zero.
4. **Históricos explícitos** — registro antigo permanece identificado com período e ressalva de vigência.
5. **Conciliação responsável** — identificar hospitais por CNES, entes por IBGE/UF e órgãos por chave verificável. Não inferir vínculo financeiro a partir de proximidade ou semelhança de nomes.
6. **Imparcialidade** — dados, não avaliações automáticas de caráter, ilegalidade ou culpabilidade.
7. **Privacidade e segurança** — usar apenas dados funcionais pertinentes; não publicar CPF, dados de pacientes, segredos ou tokens.
8. **Transparência da própria cobertura** — cada UF e fonte terá status de integração e última atualização.

## Estado do trabalho

| Elemento | Situação |
|---|---|
| Nome e missão | Definidos |
| Catálogo inicial de fontes nacionais | Documentado, sem ingestão |
| Modelo lógico inicial PostgreSQL | Proposta, ainda não aplicada |
| Matriz de cobertura das 27 UFs | Preparada, todas pendentes |
| Validação do catálogo e CI de documentação | Preparadas |
| Coleta automática, banco de produção e site | **Não implementados** |
| Vercel | **Fora do escopo desta etapa** |

## Organização

```text
radar-da-saude/
├── README.md
├── docs/
│   ├── ESCOPO.md
│   ├── FONTES_OFICIAIS.md
│   ├── METODOLOGIA.md
│   ├── MODELO_DE_DADOS.md
│   ├── MATRIZ_COBERTURA.csv
│   ├── ROADMAP_GITHUB.md
│   ├── ORIGEM_OBSERVATORIO_RJ.md
│   └── INICIAR_GITHUB.md
├── dados/
│   └── fontes_oficiais.json
├── schema/
│   └── 001_base.sql
├── scripts/
│   ├── validar_fundacao.py
│   └── publicar_github.ps1
├── tests/
│   └── test_fundacao.py
└── .github/workflows/validar.yml
```

**Projeto de referência, não dependência:** [Observatório RJ](https://github.com/admeduardovieira/observatorio-rj), branch `feat/portal-carioca-claro`. O projeto anterior não será modificado e seus dados específicos do Rio não serão apresentados como nacionais.

## Validação inicial

```powershell
python scripts/validar_fundacao.py
python -m unittest discover -s tests -v
```

O repositório nascerá apenas com a fundação documental. O planejamento visual, o desenvolvimento da aplicação e a publicação na Vercel serão definidos em uma etapa separada.
