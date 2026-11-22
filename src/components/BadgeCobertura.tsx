interface BadgeCoberturaProps {
  status: string;
}

const MAPA: Record<string, { variant: string; rotulo: string }> = {
  planejada: { variant: "secondary", rotulo: "Planejada" },
  em_validacao: { variant: "warning", rotulo: "Em validação" },
  parcial: { variant: "warning", rotulo: "Parcial" },
  incorporada: { variant: "success", rotulo: "Incorporada" },
  indisponivel: { variant: "destructive", rotulo: "Indisponível" },
};

export function BadgeCobertura({ status }: BadgeCoberturaProps) {
  const entry = MAPA[status] ?? { variant: "secondary", rotulo: status };
  return (
    <span className="badge-cobertura" data-status={status}>
      {entry.rotulo}
    </span>
  );
}
