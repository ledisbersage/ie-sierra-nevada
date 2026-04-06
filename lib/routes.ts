import { routeIcons, type RouteIcon } from "@/lib/icons";

export type RouteItem = {
  label: string;
  href: string;
  icon: RouteIcon;
  category?: string;
};

export const appRoutes: RouteItem[] = [
  { label: "Inicio", href: "/", icon: routeIcons.home, category: "Principal" },
  { label: "La Institución", href: "/la-institucion", icon: routeIcons.institucion, category: "Principal" },
  {
    label: "Oferta Académica",
    href: "/oferta-academica/prejardin",
    icon: routeIcons.oferta,
    category: "Principal",
  },
  { label: "Sedes", href: "/sedes-educativas/mapa", icon: routeIcons.sedes, category: "Principal" },
  { label: "Comunidad", href: "/comunidad-educativa/estudiantes", icon: routeIcons.comunidad, category: "Comunicación" },
  { label: "Gestión", href: "/gestion-institucional/pec", icon: routeIcons.gestion, category: "Comunicación" },
  { label: "Noticias", href: "/noticias-eventos/noticias", icon: routeIcons.noticias, category: "Comunicación" },
  { label: "Transparencia", href: "/transparencia/documentos", icon: routeIcons.transparencia, category: "Comunicación" },
  { label: "Contacto", href: "/contacto/formulario", icon: routeIcons.contacto, category: "Comunicación" },
  { label: "Acceso", href: "/autenticacion/login", icon: routeIcons.acceso, category: "Cuenta" },
  { label: "Dashboard", href: "/dashboard", icon: routeIcons.dashboard, category: "Cuenta" },
];
