-- Radar da Saúde: rascunho inicial de modelo de dados, sem aplicação em produção.
-- As relações com evidência documental são obrigatórias para atribuir valores e responsabilidades.
-- PostgreSQL 15+ (proposta, não implantação)

CREATE TABLE fonte_oficial (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  url_oficial TEXT NOT NULL,
  status_integracao TEXT NOT NULL CHECK (status_integracao IN ('nao_integrada','em_validacao','integrada','suspensa')),
  revisado_em DATE NOT NULL
);

CREATE TABLE documento_fonte (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  fonte_id TEXT NOT NULL REFERENCES fonte_oficial(id),
  id_origem TEXT,
  titulo TEXT NOT NULL,
  url_documento TEXT NOT NULL,
  referencia_em DATE,
  publicado_em DATE,
  coletado_em TIMESTAMPTZ NOT NULL,
  sha256 CHAR(64),
  notas TEXT,
  UNIQUE (fonte_id, id_origem, sha256)
);

CREATE TABLE unidade_federativa (
  uf CHAR(2) PRIMARY KEY,
  nome TEXT NOT NULL
);

CREATE TABLE orgao_publico (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  uf CHAR(2) REFERENCES unidade_federativa(uf),
  esfera TEXT NOT NULL CHECK (esfera IN ('federal','estadual','distrital','municipal')),
  cnpj CHAR(14),
  codigo_origem TEXT,
  orgao_superior_id TEXT REFERENCES orgao_publico(id)
);

CREATE TABLE estabelecimento_saude (
  cnes CHAR(7) PRIMARY KEY,
  nome TEXT NOT NULL,
  uf CHAR(2) NOT NULL REFERENCES unidade_federativa(uf),
  municipio_ibge CHAR(7),
  tipo_cadastro TEXT,
  situacao_cadastral TEXT,
  referencia_em DATE,
  documento_id BIGINT REFERENCES documento_fonte(id)
);

CREATE TABLE vinculo_institucional (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cnes CHAR(7) NOT NULL REFERENCES estabelecimento_saude(cnes),
  orgao_id TEXT NOT NULL REFERENCES orgao_publico(id),
  papel TEXT NOT NULL CHECK (papel IN ('proprietario','mantenedor','operador','gestor_sus','financiador','outro')),
  inicio_em DATE,
  fim_em DATE,
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id),
  observacao TEXT,
  CHECK (fim_em IS NULL OR inicio_em IS NULL OR fim_em >= inicio_em)
);

CREATE TABLE pessoa_publica (
  id TEXT PRIMARY KEY,
  nome_publico TEXT NOT NULL,
  observacao TEXT
);

CREATE TABLE designacao (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  pessoa_id TEXT NOT NULL REFERENCES pessoa_publica(id),
  cargo TEXT NOT NULL,
  orgao_id TEXT REFERENCES orgao_publico(id),
  cnes CHAR(7) REFERENCES estabelecimento_saude(cnes),
  inicio_em DATE,
  fim_em DATE,
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id),
  situacao TEXT NOT NULL CHECK (situacao IN ('historica','vigencia_confirmada','vigencia_nao_reconfirmada')),
  CHECK (orgao_id IS NOT NULL OR cnes IS NOT NULL),
  CHECK (fim_em IS NULL OR inicio_em IS NULL OR fim_em >= inicio_em)
);

CREATE TABLE registro_financeiro (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  fonte_id TEXT NOT NULL REFERENCES fonte_oficial(id),
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id),
  sistema_origem TEXT NOT NULL,
  id_lancamento_origem TEXT NOT NULL,
  natureza TEXT NOT NULL CHECK (natureza IN (
    'orcamento','dotacao','contrato','aditivo','empenho','liquidacao',
    'pagamento','transferencia','emenda','projecao'
  )),
  exercicio INTEGER NOT NULL CHECK (exercicio BETWEEN 1900 AND 2200),
  valor_centavos BIGINT NOT NULL CHECK (valor_centavos >= 0),
  data_fato DATE,
  orgao_id TEXT REFERENCES orgao_publico(id),
  descricao TEXT,
  status_verificacao TEXT NOT NULL CHECK (status_verificacao IN ('documentado','em_conferencia','historico_nao_reconfirmado')),
  UNIQUE (fonte_id, sistema_origem, id_lancamento_origem, natureza)
);

CREATE TABLE vinculo_financeiro_hospital (
  registro_financeiro_id BIGINT NOT NULL REFERENCES registro_financeiro(id),
  cnes CHAR(7) NOT NULL REFERENCES estabelecimento_saude(cnes),
  documento_prova_id BIGINT NOT NULL REFERENCES documento_fonte(id),
  justificativa TEXT NOT NULL,
  PRIMARY KEY (registro_financeiro_id, cnes)
);

CREATE TABLE agente_politico (
  id TEXT PRIMARY KEY,
  pessoa_id TEXT NOT NULL REFERENCES pessoa_publica(id),
  cargo TEXT NOT NULL CHECK (cargo IN ('senador','deputado_federal','deputado_estadual','deputado_distrital','governador')),
  uf CHAR(2) REFERENCES unidade_federativa(uf),
  inicio_em DATE,
  fim_em DATE,
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id)
);

CREATE TABLE proposicao (
  id TEXT PRIMARY KEY,
  casa_ou_orgao TEXT NOT NULL,
  numero TEXT NOT NULL,
  ano INTEGER NOT NULL,
  tipo TEXT NOT NULL,
  ementa TEXT NOT NULL,
  situacao_documentada TEXT,
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id)
);

CREATE TABLE autoria_proposicao (
  proposicao_id TEXT NOT NULL REFERENCES proposicao(id),
  agente_id TEXT NOT NULL REFERENCES agente_politico(id),
  papel TEXT NOT NULL CHECK (papel IN ('autor','coautor','relator','proponente_executivo')),
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id),
  PRIMARY KEY (proposicao_id, agente_id, papel)
);

CREATE TABLE emenda_orcamentaria (
  id TEXT PRIMARY KEY,
  identificador_oficial TEXT NOT NULL,
  exercicio INTEGER NOT NULL,
  autor_agente_id TEXT REFERENCES agente_politico(id),
  valor_autorizado_centavos BIGINT CHECK (valor_autorizado_centavos >= 0),
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id),
  observacao TEXT
);

CREATE TABLE transferencia_publica (
  id TEXT PRIMARY KEY,
  id_origem TEXT NOT NULL,
  emenda_id TEXT REFERENCES emenda_orcamentaria(id),
  orgao_origem_id TEXT REFERENCES orgao_publico(id),
  orgao_destino_id TEXT REFERENCES orgao_publico(id),
  valor_centavos BIGINT NOT NULL CHECK (valor_centavos >= 0),
  referencia_em DATE,
  documento_id BIGINT NOT NULL REFERENCES documento_fonte(id)
);

-- Agregações devem ser construídas por estágio, exercício e escopo, não por soma indiscriminada de tabelas.
