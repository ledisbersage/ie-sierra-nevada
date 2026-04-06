import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-institucional-azul">Bienvenido al Panel</h1>
        <p className="mt-2 text-sm text-stone-600">
          Desde aquí puedes gestionar solicitudes, descargar certificados, consultar constancias, y más.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          href="/dashboard/certificados"
          className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-institucional-azul hover:bg-institucional-azul/5 transition"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-stone-800">Certificados</h2>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-institucional-azul/10 text-institucional-azul">
              🎓
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600">
            Solicita tu certificado de estudio, notas o asistencia de forma rápida.
          </p>
          <div className="mt-4 text-sm font-semibold text-institucional-azul group-hover:text-institucional-azulClaro">
            Ir a certificados →
          </div>
        </Link>

        <Link
          href="/dashboard/constancias"
          className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-institucional-azul hover:bg-institucional-azul/5 transition"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-stone-800">Constancias</h2>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-institucional-azul/10 text-institucional-azul">
              🧾
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600">
            Genera constancias de estudio, matrícula o buena conducta para trámites.
          </p>
          <div className="mt-4 text-sm font-semibold text-institucional-azul group-hover:text-institucional-azulClaro">
            Ir a constancias →
          </div>
        </Link>

        <Link
          href="/dashboard/ingreso"
          className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-institucional-azul hover:bg-institucional-azul/5 transition"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-stone-800">Ingreso</h2>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-institucional-azul/10 text-institucional-azul">
              ➕
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600">
            Consulta requisitos y pasos para ingresar a la institución o nuevos programas.
          </p>
          <div className="mt-4 text-sm font-semibold text-institucional-azul group-hover:text-institucional-azulClaro">
            Ir a ingreso →
          </div>
        </Link>

        <Link
          href="/dashboard/retiro"
          className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-institucional-azul hover:bg-institucional-azul/5 transition"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-stone-800">Retiro</h2>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-institucional-azul/10 text-institucional-azul">
              ➖
            </span>
          </div>
          <p className="mt-3 text-sm text-stone-600">
            Encuentra información sobre el proceso de retiro o cambio de institución.
          </p>
          <div className="mt-4 text-sm font-semibold text-institucional-azul group-hover:text-institucional-azulClaro">
            Ir a retiro →
          </div>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-800">¿Qué más puedo hacer desde aquí?</h2>
        <p className="mt-2 text-sm text-stone-600">
          Personaliza tu experiencia, descarga documentos oficiales, revisa noticias internas y consulta los
          próximos eventos de la institución.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-semibold text-stone-800">Ver certificaciones</p>
            <p className="mt-1 text-sm text-stone-600">Accede a tus certificados emitidos y descárgalos en PDF.</p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-semibold text-stone-800">Seguimiento de solicitudes</p>
            <p className="mt-1 text-sm text-stone-600">Revisa el estado de tus solicitudes y recibe notificaciones.</p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-semibold text-stone-800">Perfil</p>
            <p className="mt-1 text-sm text-stone-600">Actualiza tus datos de contacto y configuración de la cuenta.</p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-semibold text-stone-800">Ayuda</p>
            <p className="mt-1 text-sm text-stone-600">Encuentra guías y recursos para usar todas las funcionalidades.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
