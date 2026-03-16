export type DocumentoInstitucional = {
  id: string;
  titulo: string;
  descripcion: string;
  archivo: string;
  categoria: string;
};

export const documentosInstitucionales: DocumentoInstitucional[] = [
  {
    id: "pec-2026",
    titulo: "Proyecto Educativo Comunitario (PEC) 2026",
    descripcion: "Documento rector del enfoque etnoeducativo y la planeación institucional.",
    archivo: "/documentos/PEC-Sierra-Nevada-2026.pdf",
    categoria: "Gestión institucional",
  },
  {
    id: "manual-convivencia",
    titulo: "Manual de Convivencia",
    descripcion: "Normas y acuerdos de convivencia escolar.",
    archivo: "/documentos/Manual-Convivencia.pdf",
    categoria: "Convivencia",
  },
  {
    id: "calendario-escolar",
    titulo: "Calendario Escolar",
    descripcion: "Cronograma anual de actividades académicas.",
    archivo: "/documentos/Calendario-Escolar.pdf",
    categoria: "Calendario",
  },
  {
    id: "politica-habeas-data",
    titulo: "Política de Tratamiento de Datos (Habeas Data)",
    descripcion: "Lineamientos de protección de datos personales (Ley 1581 de 2012).",
    archivo: "/documentos/Politica-Habeas-Data.pdf",
    categoria: "Transparencia",
  },
];
