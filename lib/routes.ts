export type RouteItem = {
  label: string;
  href: string;
  icon: string;
  category?: string;
};

export const appRoutes: RouteItem[] = [
  { label: "Inicio", href: "/", icon: "🏠", category: "Principal" },
  { label: "La Institución", href: "/la-institucion", icon: "🏫", category: "Principal" },
  { label: "Oferta Académica", href: "/oferta-academica/prejardin", icon: "📚", category: "Principal" },
  { label: "Sedes", href: "/sedes-educativas/mapa", icon: "📍", category: "Principal" },
  { label: "Comunidad", href: "/comunidad-educativa/estudiantes", icon: "👥", category: "Comunicación" },
  { label: "Gestión", href: "/gestion-institucional/pec", icon: "🗂️", category: "Comunicación" },
  { label: "Noticias", href: "/noticias-eventos/noticias", icon: "📰", category: "Comunicación" },
  { label: "Transparencia", href: "/transparencia/documentos", icon: "🕵️", category: "Comunicación" },
  { label: "Contacto", href: "/contacto/formulario", icon: "✉️", category: "Comunicación" },
  { label: "Acceso", href: "/autenticacion/login", icon: "🔐", category: "Cuenta" },
  { label: "Dashboard", href: "/dashboard", icon: "📊", category: "Cuenta" },
];
