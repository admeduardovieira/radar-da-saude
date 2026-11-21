# Referência: Observatório RJ

Projeto anterior do mesmo autor: https://github.com/admeduardovieira/observatorio-rj  
Branch de referência: `feat/portal-carioca-claro`  
Revisão consultada: `ba8a6fb123b600fae9270b3d293a1d8fa948679b` (17/11/2026).

## Padrões que serão reaproveitados conceitualmente

1. Separação entre repositório de pesquisa, coleta, validação, snapshots e dados publicados.
2. Fonte, data e limites visíveis ao lado da informação.
3. Gestão documental/histórico com asterisco para vigência não reconfirmada.
4. Fichas de entidade e fichas de contas com **o mesmo identificador**, sem criar pagamentos duplicados.
5. Hierarquia território → órgão → unidade → documento → lançamento financeiro.
6. Testes que bloqueiam atribuição de pagamento sem evidência e preservam arquivos anteriores.
7. Implantação desacoplada de atualização de dados, sem depender de coleta dentro do navegador.

## O que NÃO será copiado

- Identidade visual, domínio, projeto Vercel, chaves e eventuais segredos do Observatório RJ.
- Datasets exclusivos do município do Rio como se fossem dados nacionais.
- Proposições e políticos do Legislativo municipal para uma análise federal/estadual.
- Números sem reconfirmação ou fontes estaduais ainda não mapeadas.

## Diferença de escala

No Observatório RJ uma edição estática reúne 2.754 entidades cívicas, com páginas documentais e financeiras. O Radar da Saúde precisará de ingestão incremental, cobertura por UF e controles de grande volume. A tecnologia de implantação será decidida em fase posterior.
