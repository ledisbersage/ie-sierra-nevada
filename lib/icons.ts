import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  ClipboardCheck,
  LayoutDashboard,
  Lock,
  Mail,
  MapPin,
  Newspaper,
  School,
  ShieldCheck,
  Users,
  Home,
} from "lucide-react";

export const routeIcons = {
  home: Home,
  institucion: School,
  oferta: BookOpen,
  sedes: MapPin,
  comunidad: Users,
  gestion: ClipboardCheck,
  noticias: Newspaper,
  transparencia: ShieldCheck,
  contacto: Mail,
  acceso: Lock,
  dashboard: LayoutDashboard,
};

export type RouteIcon = LucideIcon;
export type RouteIconKey = keyof typeof routeIcons;
