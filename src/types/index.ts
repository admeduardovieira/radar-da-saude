// Radar da Saúde — tipos de domínio compartilhados.
// Nenhum valor financeiro presumido: ausente é null, nunca zero.

export type UfSigla =
  | 'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' | 'ES' | 'GO'
  | 'MA' | 'MT' | 'MS' | 'MG' | 'PA' | 'PB' | 'PR' | 'PE' | 'PI'
  | 'RJ' | 'RN' | 'RS' | 'RO' | 'RR' | 'SC' | 'SP' | 'SE' | 'TO';

export type StatusCobertura = 'planejada' | 'em_validacao' | 'parcial' | 'incorporada' | 'indisponivel';

export interface Uf {
  uf: UfSigla;
  nome: string;
  ibge: string;
}

export interface FonteOficial {
  id: string;
  name: string;
  official_url: string;
  category: string;
  coverage: string;
  integration_status: string;
  limitation: string;
}

export interface CoberturaUf {
  uf: string;
  estado: string;
  cadastro_hospitalar: StatusCobertura;
  orcamento: StatusCobertura;
  pagamentos: StatusCobertura;
  contratacoes: StatusCobertura;
  gestores: StatusCobertura;
  assembleia: StatusCobertura;
  fonte_estadual_verificada: boolean;
  ultima_revisao: string;
}

export interface FonteDocumental {
  id: string;
  url: string;
  identificador_origem?: string;
  tipo: string;
  titulo: string;
  data_publicacao?: string;
  data_coleta: string;
  hash_integridade?: string;
}

export interface RegistroFinanceiro {
  id: string;
  fonte_id: string;
  documento_id: string;
  sistema_origem: string;
  id_lancamento_origem: string;
  natureza: 'orcamento' | 'dotacao' | 'contrato' | 'aditivo' | 'empenho' | 'liquidacao' | 'pagamento' | 'transferencia' | 'emenda' | 'projecao';
  exercicio: number;
  valor_centavos: number | null;
  data_fato?: string;
  orgao_id?: string;
  descricao?: string;
  status_verificacao: 'documentado' | 'em_conferencia' | 'historico_nao_reconfirmado';
}

export interface EstabelecimentoSaude {
  cnes?: string;
  nome: string;
  uf: UfSigla;
  municipio_ibge?: string;
  tipo_cadastro?: string;
  esfera?: string;
  situacao_cadastral?: string;
  referencia_em?: string;
  fonte_documental_id?: string;
  integracoes: string[];
}

export interface PessoaPublica {
  id: string;
  nome_publico: string;
  cargo?: string;
  orgao_id?: string;
  inicio_em?: string;
  fim_em?: string;
  situacao: 'historica' | 'vigencia_confirmada' | 'vigencia_nao_reconfirmada';
  fonte_documental_id: string;
}

export interface Proposicao {
  id: string;
  casa_ou_orgao: string;
  numero: string;
  ano: number;
  tipo: string;
  ementa: string;
  situacao_documentada?: string;
  fonte_documental_id: string;
}

export interface MetricaCobertura {
  tema: string;
  total_uf: number;
  integradas: number;
  pendentes: number;
  indisponiveis: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
