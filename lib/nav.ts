import { sedesNavItems } from "@/data/sedes";

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "La Institución",
    children: [
      { label: "Historia", href: "/la-institucion/historia" },
      { label: "Misión y Visión", href: "/la-institucion/mision-vision" },
      { label: "Principios Etnoeducativos", href: "/la-institucion/principios-etnoeducativos" },
      { label: "Símbolos Institucionales", href: "/la-institucion/simbolos-institucionales" },
      { label: "Equipo Directivo", href: "/la-institucion/equipo-directivo" },
    ],
  },
  {
    label: "Oferta Académica",
    children: [
      { label: "Prejardín", href: "/oferta-academica/prejardin" },
      { label: "Jardín", href: "/oferta-academica/jardin" },
      { label: "Transición", href: "/oferta-academica/transicion" },
      { label: "Básica Primaria", href: "/oferta-academica/basica-primaria" },
      { label: "Básica Secundaria", href: "/oferta-academica/basica-secundaria" },
      { label: "Media Académica", href: "/oferta-academica/media-academica" },
    ],
  },
  {
    label: "Sedes",
    children: [
      { label: "Mapa de sedes", href: "/sedes-educativas/mapa" },
      ...sedesNavItems,
    ],
  },
  {
    label: "Comunidad",
    children: [
      { label: "Estudiantes", href: "/comunidad-educativa/estudiantes" },
      { label: "Padres de familia", href: "/comunidad-educativa/padres" },
      { label: "Docentes", href: "/comunidad-educativa/docentes" },
      { label: "Egresados", href: "/comunidad-educativa/egresados" },
    ],
  },
  {
    label: "Gestión",
    children: [
      { label: "PEC", href: "/gestion-institucional/pec" },
      { label: "Manual de convivencia", href: "/gestion-institucional/manual-convivencia" },
      { label: "Gobierno escolar", href: "/gestion-institucional/gobierno-escolar" },
      { label: "Consejo Directivo", href: "/gestion-institucional/consejo-directivo" },
      { label: "Consejo Académico", href: "/gestion-institucional/consejo-academico" },
    ],
  },
  {
    label: "Más",
    children: [
      { label: "Noticias", href: "/noticias-eventos/noticias" },
      { label: "Actividades", href: "/noticias-eventos/actividades" },
      { label: "Calendario escolar", href: "/noticias-eventos/calendario" },
      { label: "Transparencia", href: "/transparencia/documentos" },
      { label: "Atención al ciudadano", href: "/contacto/formulario" },
      { label: "Ubicación y teléfonos", href: "/contacto/ubicacion" },
    ],
  },
];
