import Link from "next/link";

export default function DashboardCertificadosPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Certificados</h1>
        <p className="mt-2 text-sm text-stone-600">
          Solicita certificados académicos o de asistencia. Esta es una vista de ejemplo para mostrar cómo se
          podría estructurar la gestión.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Certificado de estudios</h2>
          <p className="mt-2 text-sm text-stone-600">
            Solicita tu certificado de estudios para trámites académicos o laborales.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-institucional-azul px-4 py-2 text-sm font-semibold text-white hover:bg-institucional-azulClaro transition">
            Solicitar certificado
          </button>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Constancia de notas</h2>
          <p className="mt-2 text-sm text-stone-600">
            Descarga tu constancia de notas en formato PDF para tus documentos personales.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition">
            Ver constancias
          </button>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-sm text-stone-600">
          En un desarrollo real, estas acciones abrirían formularios de solicitud, validarían datos de usuario y
          enviarían notificaciones por correo electrónico cuando tu trámite esté completo.
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
