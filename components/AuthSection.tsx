"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Mode = "login" | "register";

function classNames(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function AuthSection() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<null | { type: "success" | "error"; text: string }>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const tabClasses = useMemo(
    () =>
      (active: boolean) =>
        classNames(
          "flex-1 text-center py-3 font-semibold rounded-t-lg",
          active
            ? "bg-white text-institucional-azul shadow"
            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
        ),
    []
  );

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/auth");
        const json = await res.json();
        setLoggedIn(json.ok === true);
      } catch {
        setLoggedIn(false);
      }
    }
    check();
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: email, pass: password }),
      });
      if (!res.ok) {
        setMessage({ type: "error", text: "Usuario o contraseña incorrectos." });
        setLoading(false);
        return;
      }
      setMessage({ type: "success", text: "Ingreso exitoso. Bienvenido a la IE Sierra Nevada." });
      setLoggedIn(true);
      setPassword("");
    } catch (error) {
      setMessage({ type: "error", text: "No se pudo conectar con el servidor." });
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    await fetch("/api/auth", { method: "DELETE" });
    setLoggedIn(false);
    setMessage({ type: "success", text: "Sesión cerrada." });
    setLoading(false);
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!name.trim() || !email.trim() || !password) {
      setMessage({ type: "error", text: "Por favor completa todos los campos." });
      return;
    }
    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage({
        type: "success",
        text: "Registro recibido. Por favor, comunícate con la institución para activar tu cuenta.",
      });
    }, 800);
  }

  const statusMessage = message ? (
    <div
      className={classNames(
        "rounded-lg px-4 py-3 text-sm",
        message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
      )}
    >
      {message.text}
    </div>
  ) : null;

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
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white shadow-xl overflow-hidden">
              <div className="flex w-full">
                <button
                  type="button"
                  className={tabClasses(mode === "login")}
                  onClick={() => setMode("login")}
                >
                  Ingresar
                </button>
                <button
                  type="button"
                  className={tabClasses(mode === "register")}
                  onClick={() => setMode("register")}
                >
                  Registrarse
                </button>
              </div>
              <div className="p-8">
                {statusMessage}
                {loggedIn ? (
                  <div className="space-y-4">
                    <p className="text-sm text-stone-600">
                      Estás conectado. Si deseas cerrar la sesión, haz clic en el botón.
                    </p>
                    <button
                      type="button"
                      disabled={loading}
                      onClick={handleLogout}
                      className="w-full rounded-lg bg-institucional-azul px-4 py-2 text-white font-semibold hover:bg-institucional-azulClaro transition"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                ) : mode === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-stone-700">Correo electrónico</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
                        placeholder="tu@correo.com"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-stone-700">Contraseña</label>
                        <a href="#" className="text-sm text-institucional-azul hover:underline">
                          Olvidé mi contraseña
                        </a>
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
                        placeholder="********"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        id="remember"
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="h-4 w-4 rounded border-stone-300 text-institucional-azul focus:ring-institucional-azul"
                      />
                      <label htmlFor="remember" className="text-sm text-stone-600">
                        Recuérdame
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-lg bg-institucional-azul px-4 py-3 text-white font-semibold hover:bg-institucional-azulClaro transition"
                    >
                      {loading ? "Ingresando…" : "Ingresar"}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-stone-700">Nombres completos</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-stone-700">Correo electrónico</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
                        placeholder="tu@correo.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-stone-700">Contraseña</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
                        placeholder="********"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-stone-700">Confirmar contraseña</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 focus:border-institucional-azul focus:ring-institucional-azul/30"
                        placeholder="********"
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-stone-300 text-institucional-azul focus:ring-institucional-azul"
                      />
                      <label htmlFor="terms" className="text-sm text-stone-600">
                        Estoy de acuerdo con los <a href="#" className="text-institucional-azul hover:underline">Términos de servicio</a> y la <a href="#" className="text-institucional-azul hover:underline">Política de privacidad</a>.
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-lg bg-institucional-azul px-4 py-3 text-white font-semibold hover:bg-institucional-azulClaro transition"
                    >
                      {loading ? "Registrando…" : "Registrarse"}
                    </button>
                    <p className="text-xs text-stone-500">
                      Después de registrarte, nos pondremos en contacto para habilitar tu acceso.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
