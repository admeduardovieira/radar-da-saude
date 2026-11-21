# Política de dados e metodologia

## Vocabulário obrigatório

- **Dotação/orçamento**: autorização ou previsão para um exercício.
- **Empenho**: compromisso orçamentário.
- **Liquidação**: verificação do direito do credor.
- **Pagamento**: desembolso registrado.
- **Contrato/aditivo**: instrumento jurídico e alterações; não é prova de pagamento.
- **Transferência/repasse**: movimento entre entes ou fundos; não equivale automaticamente à aplicação final.
- **Emenda**: iniciativa orçamentária identificada; aprovação, empenho, pagamento e resultado são dimensões separadas.
- **Projeção**: cenário/estimativa; nunca soma de execução.

## Padrão de um registro

Cada observação publicada terá, quando aplicável: `id_origem`, `sistema_origem`, `url_fonte`, `documento`, `hash_sha256`, `coletado_em`, `referencia_em`, `exercicio`, `periodo`, `natureza`, `valor_centavos`, `status_verificacao`, `limite_documental` e `vinculos_com_prova`.

## Atribuição financeira

O gasto de um órgão não será atribuído a hospital por endereço, nome parecido, relação hierárquica ou proporção. Cada relação com um CNES deve apontar documento ou chave de origem que indique explicitamente a unidade beneficiária. Um mesmo recurso exibido em diversas visões carrega o mesmo identificador e não entra duas vezes no mesmo agregado.

## Campos ausentes e histórico

Valores ausentes serão `null` acompanhados da razão. Dados de exercício anterior podem ser publicados como históricos, com data original e aviso de vigência não reconfirmada. Não presumir mudança de gestão, irregularidade ou pagamento.

## Responsabilidades e mandatos

Guardar cargo, órgão/unidade, pessoa pública, ato de nomeação/exoneração, intervalo temporal e origem. Distinguir titular cadastral, designação documentada, substituto e situação atual não confirmada. Evitar CPF, endereço privado, matrícula desnecessária, dados assistenciais de pacientes e outros dados pessoais sensíveis.

## Qualidade e revisão

1. Capturar a resposta/fonte original e hash quando tecnicamente possível.
2. Validar esquema, tipos, chaves, UF, CNES e moeda em centavos inteiros.
3. Conciliar referências e impedir colisões e duplicidades.
4. Registrar limites, bloqueios, divergências e diffs entre revisões.
5. Requerer revisão humana para mudança de titular, vínculo de gasto, fonte conflitante e hipótese de irregularidade.
6. Versionar snapshot aprovado; disponibilizar data e fonte em cada visão.

## Neutralidade e correção

Sem notas de honestidade ou suspeita automáticas. Indicações analíticas devem separar fato, fórmula e interpretação. Correções editoriais exigem registro do antes/depois, data e evidência. A cobertura por estado deve ser pública e não pode ser apresentada como completa se for parcial.
