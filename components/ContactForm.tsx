"use client";

import { useState } from "react";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="p-5 rounded-lg bg-green-50 border border-green-200 text-green-800">
        <p className="font-medium">Mensaje enviado</p>
        <p className="text-sm mt-1">
          Gracias por contactarnos. Recibirá respuesta por los canales que haya indicado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-stone-700 mb-1">
          Nombre completo *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-institucional-azul focus:border-institucional-azul"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
          Correo electrónico *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-institucional-azul focus:border-institucional-azul"
        />
      </div>
      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-stone-700 mb-1">
          Asunto *
        </label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-institucional-azul focus:border-institucional-azul"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-stone-700 mb-1">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-institucional-azul focus:border-institucional-azul"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-2.5 bg-institucional-azul text-white font-medium rounded-lg hover:bg-institucional-azulClaro transition"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
