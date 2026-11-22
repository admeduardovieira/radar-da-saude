import Link from "next/link";
import { notFound } from "next/navigation";
import { EstadoVazio } from "@/components/EstadoVazio";
import { BadgeCobertura } from "@/components/BadgeCobertura";

export const dynamicParams = false;
export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return { title: `Hospital ${id} · Radar da Saúde` };
}

export default async function HospitalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Nenhum estabelecimento real foi importado: qualquer id é inexistente nesta versão.
  notFound();

  return null;
}
