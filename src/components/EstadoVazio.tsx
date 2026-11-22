interface EstadoVazioProps {
  titulo?: string;
  descricao?: string;
  acaoHref?: string;
  acaoLabel?: string;
}

export function EstadoVazio({
  titulo = "Não há dados disponíveis",
  descricao,
  acaoHref,
  acaoLabel,
}: EstadoVazioProps) {
  return (
    <div className="estado-vazio">
      <p className="titulo">{titulo}</p>
      {descricao && <p className="descricao">{descricao}</p>}
      {acaoHref && acaoLabel && (
        <a href={acaoHref} className="link">
          {acaoLabel}
        </a>
      )}
      <p className="nota">
        Exibir estado vazio honesto quando não houver dados oficiais validados.
      </p>
    </div>
  );
}
