import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Users,
  KeyRound,
  Signal,
  FileCheck,
  MessageCircle,
} from "lucide-react";

export type AuthFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const authFeatures: AuthFeature[] = [
  {
    title: "Seguridad a prueba de auditorías",
    description:
      "Tus credenciales se protegen con cifrado moderno y políticas que cumplen las normas del modelo etnoeducativo.",
    icon: ShieldCheck,
  },
  {
    title: "Roles colaborativos",
    description:
      "Docentes, estudiantes y comunidad en general acceden con permisos que se ajustan a sus necesidades institucionales.",
    icon: Users,
  },
  {
    title: "Autenticación avanzada",
    description: "Claves dinámicas con recordatorios amigables para que todos puedan ingresar sin fricción.",
    icon: KeyRound,
  },
  {
    title: "Disponibilidad continua",
    description: "Monitorizamos el acceso y enviamos alertas cuando hay novedades o tareas importantes.",
    icon: Signal,
  },
  {
    title: "Documentación clara",
    description: "Guías y pasos rápidos para activar cuentas, restablecer claves o actualizar permisos.",
    icon: FileCheck,
  },
  {
    title: "Soporte humano",
    description: "Enlazamos con el equipo directivo para resolver dudas y compartir novedades institucionales.",
    icon: MessageCircle,
  },
];
