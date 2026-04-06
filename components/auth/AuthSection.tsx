import Image from "next/image";
import Link from "next/link";

export default function AuthSection() {
  return (
    <section className="min-h-[calc(100vh-4.5rem)] bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative overflow-hidden rounded-3xl shadow-xl">
            <div className="absolute inset-0">
              <Image
                src="/fotos/IMG-20231109-WA0106.jpg"
                alt="Institución Etnoeducativa Sierra Nevada"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/logo-sierra-nevada.png"
                  alt="Logo IE Sierra Nevada"
                  fill
                  className="object-contain"
                />
              </div>
              <Link
                href="/"
                className="text-sm font-semibold text-white/90 hover:text-white transition"
              >
                Volver al inicio
              </Link>
            </div>

            <div className="relative px-8 py-12 lg:px-16 lg:py-20 text-white">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                ¡Bienvenido a la Institución Etnoeducativa Sierra Nevada!
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/90 max-w-xl">
                Nuestra misión es acompañar a las comunidades rurales de la Sierra Nevada en su proceso de
                formación, conocimiento y transformación. Ingresa con tus credenciales o solicita tu registro para
                acceder a contenido y herramientas exclusivas.
              </p>
              <ul className="mt-8 space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-institucional-azul" />
                  Contenido exclusivo para la comunidad institucional.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-institucional-azul" />
                  Acceso a recursos, noticias y convocatorias al instante.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-institucional-azul" />
                  Seguridad y confianza en el manejo de tus datos personales.
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  href="/la-institucion"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
                >
                  Saber más
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white shadow-xl overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-institucional-azul">Accede a tu cuenta</h2>
                <p className="mt-2 text-sm text-stone-600">
                  Ingresa o regístrate para acceder a contenido exclusivo de nuestra institución.
                </p>

                <div className="mt-8 grid gap-4">
                  <Link
                    href="/autenticacion/login"
                    className="block rounded-lg bg-institucional-azul px-5 py-3 text-white font-semibold hover:bg-institucional-azulClaro transition"
                  >
                    Ingresar
                  </Link>
                  <Link
                    href="/autenticacion/registro"
                    className="block rounded-lg border border-stone-200 bg-white px-5 py-3 text-stone-700 font-semibold hover:bg-stone-50 transition"
                  >
                    Registrarse
                  </Link>
                </div>

                <div className="mt-6 text-sm text-stone-600">
                  <p>
                    ¿No estás seguro? <Link href="/la-institucion" className="text-institucional-azul hover:underline">Conoce más sobre la institución</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
