import Link from "next/link";

export default function DashboardRetiroPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-institucional-azul">Retiro</h1>
        <p className="mt-2 text-sm text-stone-600">
          Información sobre los pasos a seguir para el retiro de la institución y el proceso de salida.
        </p>
      </header>

      <div className="space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Proceso de retiro</h2>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>• Solicita el retiro al coordinador académico.</li>
            <li>• Completa el formulario oficial de retiro.</li>
            <li>• Entrega la documentación y resuelve pagos pendientes.</li>
            <li>• Solicita la carta de retiro y la constancia de notas.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-800">Requisitos</h2>
          <p className="mt-2 text-sm text-stone-600">
            Dependiendo de tu situación, puede que necesites una justificación escrita o carta de autorización.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-sm text-stone-600">
          Esta página es un ejemplo visual para mostrar la posible estructura del módulo de retiro dentro del
          panel institucional.
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
