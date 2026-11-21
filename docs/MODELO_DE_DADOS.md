# Modelo de dados — rascunho técnico

O arquivo `schema/001_base.sql` define a base relacional inicial. É um desenho para revisão; **não foi aplicado a um servidor**.

## Chaves e identidades

| Objeto | Chave de referência | Nota |
|---|---|---|
| Hospital/estabelecimento | CNES | Chave cadastral; revisar sucessões e históricos |
| UF | Sigla oficial | Complementar com código IBGE quando a fonte trouxer |
| Órgão e fundo | Identificador interno + código de origem | CNPJ e código de unidade orçamentária podem auxiliar, nunca isoladamente |
| Pessoa pública | ID interno e origem documental | Não usar CPF como identificador público |
| Documento | Fonte, ID de origem e SHA-256 | Imutabilidade e rastreabilidade |
| Lançamento financeiro | Sistema, ID original e estágio | Distinção entre contrato, empenho, liquidação, pagamento e repasse |
| Proposição/emenda | ID da casa/órgão de origem | Preservar tipo, exercício e tramitação |

## Ligações verificáveis

- `estabelecimento_saude` ↔ `orgao_publico` via `vinculo_institucional` com tipo (proprietário, mantenedor, operador, gestor SUS etc.) e prova.
- `pessoa_publica` ↔ `orgao_publico` ou hospital via `designacao` com ato e período.
- `registro_financeiro` ↔ hospital por `vinculo_financeiro_hospital`: vínculo comprovado, não calculado.
- `agente_politico` ↔ `proposicao` via `autoria`, com papel e documento; governadores podem apresentar iniciativas do Executivo em classificação própria.
- `emenda` ↔ `transferencia` via identificadores documentados, preservando a distinção entre fases do recurso.

## Cuidados de modelagem

- `valor_centavos BIGINT` evita arredondamento indevido de moeda corrente.
- Datas de fato, publicação e coleta são diferentes.
- Cada documento tem `fonte_id`; identificar a periodicidade e a versão.
- As categorias de esfera e tipo do hospital podem mudar no tempo; conservar histórico.
- Nem todo dataset permite ligação ao CNES; a cobertura financeira individual precisa ser medida.
- Não unir dados do SIOPS com pagamentos federais como se fossem a mesma linha contábil.

## API e interface

**Não definidas nesta etapa.** A escolha de framework, banco gerenciado, cache e publicação será feita depois da consolidação do repositório de documentação.
