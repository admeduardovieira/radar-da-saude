import Link from "next/link";

export default function Cobertura() {
  return (
    <>
      <div className="breadcrumbs"><Link href="/">Início</Link> <span>/</span> <span>Cobertura</span></div>
      <section className="section-header">
        <span className="eyebrow">Radar da Saúde · Cobertura nacional</span>
        <h1>Matriz de cobertura por UF e fonte</h1>
        <p>
          Status de integração das 27 Unidades Federativas por tema. Todas as UFs iniciam como "pendente".
          Nenhuma UF declara cobertura completa sem prova de ingestão.
        </p>
      </section>
      <section className="matriz">
        <table>
          <thead>
            <tr>
              <th>UF</th>
              <th>Estado</th>
              <th>Cadastro hospitalar</th>
              <th>Orçamento</th>
              <th>Pagamentos</th>
              <th>Contratações</th>
              <th>Gestores</th>
              <th>Assembleia</th>
              <th>Fonte estadual verificada</th>
              <th>Última revisão</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["AC","Acre"],["AL","Alagoas"],["AP","Amapá"],["AM","Amazonas"],["BA","Bahia"],["CE","Ceará"],["DF","Distrito Federal"],
              ["ES","Espírito Santo"],["GO","Goiás"],["MA","Maranhão"],["MT","Mato Grosso"],["MS","Mato Grosso do Sul"],["MG","Minas Gerais"],
              ["PA","Pará"],["PB","Paraíba"],["PR","Paraná"],["PE","Pernambuco"],["PI","Piauí"],["RJ","Rio de Janeiro"],["RN","Rio Grande do Norte"],
              ["RS","Rio Grande do Sul"],["RO","Rondônia"],["RR","Roraima"],["SC","Santa Catarina"],["SP","São Paulo"],["SE","Sergipe"],["TO","Tocantins"],
            ].map(([uf, estado]) => (
              <tr key={uf}>
                <td>{uf}</td>
                <td>{estado}</td>
                <td><span className="status">pendente</span></td>
                <td><span className="status">pendente</span></td>
                <td><span className="status">pendente</span></td>
                <td><span className="status">pendente</span></td>
                <td><span className="status">pendente</span></td>
                <td><span className="status">pendente</span></td>
                <td><span className="status">não</span></td>
                <td>2026-11-18</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <p className="nota">
        Fonte: docs/MATRIZ_COBERTURA.csv. Alterar qualquer status exige evidência de ingestão e versionamento dos dados.
      </p>
    </>
  );
}

