"use client";

import { useEffect, useState } from "react";

const destination = "https://loja.neemo.com.br/donatosconvenincia";

export default function ObrigadoPage() {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.assign(destination);
      return;
    }

    const timeout = window.setTimeout(() => {
      setCountdown((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, [countdown]);

  return (
    <main className="min-h-screen bg-[#f9f9f9] px-4 py-16">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center rounded-3xl bg-white p-10 shadow-2xl">
        <span className="mb-4 inline-flex rounded-full bg-[#fc7e14]/10 px-4 py-2 text-sm font-semibold text-[#fc7e14]">
          Obrigado por visitar a Donato&apos;s
        </span>
        <h1 className="text-center text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl">
          Quase lá!
        </h1>
        <p className="mt-6 text-center text-lg leading-relaxed text-[#64748b]">
          Redirecionando você para a nossa loja online em breve.
        </p>
        <div className="mt-8 rounded-2xl bg-[#f8fafc] px-6 py-5 text-center text-sm text-[#334155] shadow-sm">
          <p className="font-semibold text-[#0f172a]">Aguarde {countdown}s</p>
          <p className="mt-2">Você será levado para:</p>
          <a
            href={destination}
            className="mt-2 inline-block text-[#fc7e14] hover:underline"
          >
            {destination}
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-[#64748b]">
          Caso o redirecionamento não aconteça automaticamente, clique no link acima.
        </p>
      </div>
    </main>
  );
}
