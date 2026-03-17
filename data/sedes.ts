export type Sede = {
  slug: string;
  nombre: string;
  codigoDane: string;
  jornadas: string[];
  ubicacion: string;
  mapsQuery: string;
  coords?: { lat: number; lng: number };
  imagenes: string[];
  descripcion: string;
  destacada?: "principal" | "bachillerato";
};

const buildMapsQuery = (nombre: string) => `${nombre}, Riohacha, La Guajira`;

export const sedes: Sede[] = [
  {
    slug: "juan-y-medio",
    nombre: "Juan y Medio",
    codigoDane: "244001802780",
    jornadas: ["Sabatina", "Única"],
    ubicacion: "Corregimiento de Juan y Medio, Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Juan y Medio"),
    coords: { lat: 11.11722573324196, lng: -73.00256729245172 },
    imagenes: ["/fotos/IMG_20240319_123815.jpg", "/fotos/IMG-20231120-WA0042.jpg"],
    descripcion:
      "Sede principal de la IE Sierra Nevada, articuladora de los procesos institucionales y el acompañamiento a las sedes rurales.",
    destacada: "principal",
  },
  {
    slug: "moreneros",
    nombre: "Moreneros",
    codigoDane: "244001800007",
    jornadas: ["Única"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Moreneros"),
    coords: { lat: 11.12735507784729, lng: -72.99251180103168 },
    imagenes: ["/fotos/IMG-20231123-WA0033.jpg"],
    descripcion: "Sede rural que atiende población escolar de comunidades cercanas.",
  },
  {
    slug: "los-monos",
    nombre: "Los Monos",
    codigoDane: "244001800091",
    jornadas: ["Única"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Los Monos"),
    imagenes: ["/fotos/IMG-20231123-WA0032.jpg"],
    descripcion: "Sede rural con acompañamiento pedagógico etnoeducativo.",
  },
  {
    slug: "cascajalito-primaria",
    nombre: "Cascajalito Primaria",
    codigoDane: "244001800082",
    jornadas: ["Única"],
    ubicacion: "Comunidad de Cascajalito, Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Cascajalito"),
    coords: { lat: 11.091964244891008, lng: -73.02501970373571 },
    imagenes: ["/fotos/IMG-20231124-WA0098.jpg"],
    descripcion: "Sede de primaria con enfoque etnoeducativo y acompañamiento comunitario.",
  },
  {
    slug: "cascajalito",
    nombre: "Cascajalito",
    codigoDane: "244001800082",
    jornadas: ["Mañana"],
    ubicacion: "Comunidad de Cascajalito, Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Cascajalito"),
    coords: { lat: 11.091964244891008, lng: -73.02501970373571 },
    imagenes: ["/fotos/IMG-20231124-WA0099.jpg"],
    descripcion: "Sede de bachillerato (6° a 11°) articulada a las demás sedes.",
    destacada: "bachillerato",
  },
  {
    slug: "el-carmen",
    nombre: "El Carmen",
    codigoDane: "244001800015",
    jornadas: ["Única"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("El Carmen"),
    imagenes: ["/fotos/IMG-20231109-WA0106.jpg"],
    descripcion: "Sede rural que fortalece identidad cultural y permanencia escolar.",
  },
  {
    slug: "las-colonias",
    nombre: "Las Colonias",
    codigoDane: "244001800023",
    jornadas: ["Mañana"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Las Colonias"),
    imagenes: ["/fotos/IMG-20231130-WA0049.jpg"],
    descripcion: "Sede rural con jornada mañana y enfoque etnoeducativo.",
  },
  {
    slug: "las-palmas",
    nombre: "Las Palmas",
    codigoDane: "244001800031",
    jornadas: ["Única"],
    ubicacion: "Corregimiento de Las Palmas, Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Las Palmas"),
    coords: { lat: 11.073207611030247, lng: -73.05458127724447 },
    imagenes: ["/fotos/IMG-20231123-WA0034.jpg"],
    descripcion: "Sede en el corregimiento de Las Palmas con fuerte identidad comunitaria.",
  },
  {
    slug: "la-guillermina",
    nombre: "La Guillermina",
    codigoDane: "244001800805",
    jornadas: ["Mañana"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("La Guillermina"),
    coords: { lat: 11.062349768320995, lng: -73.01102748825016 },
    imagenes: ["/fotos/IMG-20231123-WA0031.jpg"],
    descripcion: "Sede con jornada mañana y acompañamiento a comunidades rurales.",
  },
  {
    slug: "las-casitas",
    nombre: "Las Casitas",
    codigoDane: "244001800058",
    jornadas: ["Mañana"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Las Casitas"),
    coords: { lat: 11.052716321514692, lng: -73.05574603230929 },
    imagenes: ["/fotos/IMG-20230918-WA0057.jpg"],
    descripcion: "Sede rural con jornada mañana y participación comunitaria.",
  },
  {
    slug: "las-balsas",
    nombre: "Las Balsas",
    codigoDane: "244001800066",
    jornadas: ["Única"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Las Balsas"),
    coords: { lat: 11.03201017169966, lng: -73.05047746270053 },
    imagenes: ["/fotos/IMG-20230906-WA0113.jpg"],
    descripcion: "Sede rural con jornada única y énfasis en permanencia escolar.",
  },
  {
    slug: "puerto-colombia",
    nombre: "Puerto Colombia",
    codigoDane: "244001800040",
    jornadas: ["Mañana"],
    ubicacion: "Zona rural del Distrito de Riohacha, La Guajira",
    mapsQuery: buildMapsQuery("Puerto Colombia"),
    coords: { lat: 11.061234813298968, lng: -73.05132151213128 },
    imagenes: ["/fotos/IMG-20230907-WA0048.jpg"],
    descripcion: "Sede rural con jornada mañana y enfoque intercultural.",
  },
];

export const sedesCount = sedes.length;

export const sedesNavItems = sedes.map((sede) => ({
  label: sede.nombre,
  href: `/sedes-educativas/${sede.slug}`,
}));

const normalizeSlug = (value?: string) => (value ?? "").trim().toLowerCase();

export const getSedeBySlug = (slug: string) =>
  sedes.find((sede) => normalizeSlug(sede.slug) === normalizeSlug(slug));
