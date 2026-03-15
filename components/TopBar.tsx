import Link from "next/link";

const links = [
  { label: "Estudiantes", href: "/comunidad-educativa/estudiantes" },
  { label: "Padres de familia", href: "/comunidad-educativa/padres" },
  { label: "Docentes", href: "/comunidad-educativa/docentes" },
  { label: "Egresados", href: "/comunidad-educativa/egresados" },
  { label: "Transparencia", href: "/transparencia/documentos" },
  { label: "Atención al ciudadano", href: "/contacto/formulario" },
  { label: "Sedes", href: "/sedes-educativas/mapa" },
  { label: "Contacto", href: "/contacto/ubicacion" },
];

export default function TopBar() {
  return (
    <div className="bg-stone-100 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-1.5">
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-stone-600 hover:text-institucional-azul transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
