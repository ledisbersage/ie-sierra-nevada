export type SearchItem = {
  title: string;
  href: string;
  description?: string;
  tags?: string[];
};

export const BUSQUEDA_ITEMS: SearchItem[] = [
  { title: "Mapa de sedes", href: "/sedes-educativas/mapa", description: "Ubicacion y listado de sedes." },
  { title: "Documentos institucionales", href: "/transparencia/documentos", description: "PEC, manuales y mas." },
  { title: "Asociacion de padres", href: "/transparencia/asociacion-padres", description: "Estatutos y reglamento." },
  { title: "Contraloria estudiantil", href: "/transparencia/contraloria-estudiantil", description: "Definicion y funciones." },
  { title: "Democracia escolar", href: "/transparencia/democracia-escolar", description: "Proyecto y cronograma." },
  { title: "Gobierno escolar", href: "/transparencia/gobierno-escolar", description: "Estructura y funciones." },
  { title: "Noticias y eventos", href: "/noticias-eventos/noticias", description: "Noticias institucionales." },
  { title: "Convocatoria docentes", href: "/noticias-eventos/convocatoria-docentes", description: "Proceso y requisitos." },
  { title: "Calendario escolar", href: "/noticias-eventos/calendario", description: "Fechas academicas." },
  { title: "Contacto", href: "/contacto/ubicacion", description: "Ubicacion y canales oficiales." },
  { title: "Atencion al ciudadano", href: "/contacto/formulario", description: "Formulario de contacto." },
  { title: "Oferta academica", href: "/oferta-academica/prejardin", description: "Niveles y programas." },
];
