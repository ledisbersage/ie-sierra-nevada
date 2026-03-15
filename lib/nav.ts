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
    label: "Sedes Educativas",
    children: [
      { label: "Mapa de sedes", href: "/sedes-educativas/mapa" },
      { label: "Juan y Medio", href: "/sedes-educativas/juan-y-medio" },
      { label: "Las Palmas", href: "/sedes-educativas/las-palmas" },
      { label: "Otras sedes", href: "/sedes-educativas/otras-sedes" },
    ],
  },
  {
    label: "Comunidad Educativa",
    children: [
      { label: "Estudiantes", href: "/comunidad-educativa/estudiantes" },
      { label: "Padres de familia", href: "/comunidad-educativa/padres" },
      { label: "Docentes", href: "/comunidad-educativa/docentes" },
      { label: "Egresados", href: "/comunidad-educativa/egresados" },
    ],
  },
  {
    label: "Gestión Institucional",
    children: [
      { label: "Proyecto Educativo Comunitario (PEC)", href: "/gestion-institucional/pec" },
      { label: "Manual de convivencia", href: "/gestion-institucional/manual-convivencia" },
      { label: "Gobierno escolar", href: "/gestion-institucional/gobierno-escolar" },
      { label: "Consejo Directivo", href: "/gestion-institucional/consejo-directivo" },
      { label: "Consejo Académico", href: "/gestion-institucional/consejo-academico" },
    ],
  },
  {
    label: "Noticias y Eventos",
    children: [
      { label: "Noticias", href: "/noticias-eventos/noticias" },
      { label: "Actividades", href: "/noticias-eventos/actividades" },
      { label: "Calendario escolar", href: "/noticias-eventos/calendario" },
    ],
  },
  {
    label: "Transparencia",
    children: [
      { label: "Contratación", href: "/transparencia/contratacion" },
      { label: "Informes", href: "/transparencia/informes" },
      { label: "Rendición de cuentas", href: "/transparencia/rendicion-cuentas" },
      { label: "Documentos institucionales", href: "/transparencia/documentos" },
    ],
  },
  {
    label: "Contacto",
    children: [
      { label: "Ubicación", href: "/contacto/ubicacion" },
      { label: "Formulario", href: "/contacto/formulario" },
      { label: "Teléfonos", href: "/contacto/telefonos" },
    ],
  },
];
