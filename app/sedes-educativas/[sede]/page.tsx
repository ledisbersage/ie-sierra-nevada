import SedeClient from "./SedeClient";
import { getSedeBySlug, sedes } from "@/data/sedes";

type Props = {
  params: Promise<{ sede: string }>;
};

export function generateStaticParams() {
  return sedes.map((sede) => ({ sede: sede.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { sede: sedeSlug } = await params;
  const sede = getSedeBySlug(sedeSlug);
  if (!sede) {
    return {
      title: "Sede no encontrada | IE Sierra Nevada",
    };
  }
  return {
    title: `${sede.nombre} | Sedes Educativas - IE Sierra Nevada`,
    description: `Informacion de la sede ${sede.nombre} de la IE Sierra Nevada en Riohacha.`,
  };
}

export default function SedePage({ params }: Props) {
  return <SedeClient />;
}
