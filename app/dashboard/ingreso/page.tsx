import Link from "next/link";

export default function DashboardIngresoPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Ingreso</h1>
        <p className="mt-2 text-sm text-stone-600">
          Conoce los pasos para ingresar a la institución (pruebas, requisitos y documentación necesaria).
        </p>
      </header>

      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Requisitos</h2>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>• Fotocopia de documento de identidad.</li>
            <li>• Registro civil de nacimiento (para ingresos de preescolar).</li>
            <li>• Certificado de matrícula anterior (cuando aplique).</li>
            <li>• Fotografía reciente tamaño carnet.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Cómo aplicar</h2>
          <ol className="mt-3 space-y-2 text-sm text-stone-600 list-decimal list-inside">
            <li>Completa el formulario de inscripción en línea.</li>
            <li>Adjunta los documentos requeridos.</li>
            <li>Espera la confirmación por correo electrónico.</li>
            <li>Asiste a la jornada de inducción si es necesario.</li>
          </ol>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-sm text-stone-600">
          Este contenido es un ejemplo visual de cómo podría verse el módulo de ingreso en un futuro desarrollo.
        </p>
        <p className="mt-3 text-sm text-stone-600">
          <Link href="/dashboard" className="font-semibold text-institucional-azul hover:underline">
            Volver al panel
          </Link>
        </p>
      </div>
    </div>
  );
}
