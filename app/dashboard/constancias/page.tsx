import Link from "next/link";

export default function DashboardConstanciasPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Constancias</h1>
        <p className="mt-2 text-sm text-stone-600">
          Aquí puedes solicitar constancias de asistencia, buena conducta o matrícula.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Constancia de asistencia</h2>
          <p className="mt-2 text-sm text-stone-600">
            Genera una constancia para trámites y justificaciones de asistencia.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-institucional-azul px-4 py-2 text-sm font-semibold text-white hover:bg-institucional-azulClaro transition">
            Generar constancia
          </button>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Constancia de buena conducta</h2>
          <p className="mt-2 text-sm text-stone-600">
            Solicita una constancia para procesos de empleo o convenios.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition">
            Solicitar constancia
          </button>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-sm text-stone-600">
          Este espacio sirve como un ejemplo de cómo podrían organizarse tus solicitudes dentro del panel.
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
