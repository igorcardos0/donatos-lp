"use client";

import { Button } from "@/components/ui/button";
import { Phone, Clock, Zap, Snowflake } from "lucide-react";

export function SOSChurrasco() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#fc7e14]" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#fc7e14]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fc7e14] px-4 py-2">
              <Zap className="h-5 w-5 text-white" />
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                Emergência
              </span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="text-[#fc7e14]">SOS Churrasco</span>
              <br />
              Acabou o Gelo? A Bebida?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Estamos prontos para salvar seu evento! Delivery express de gelo,
              bebidas e suprimentos. Ligou, chegou. Simples assim.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                <Clock className="h-8 w-8 text-[#fc7e14]" />
                <div>
                  <p className="font-semibold text-white">Entrega Rápida</p>
                  <p className="text-sm text-white/70">Em até 40 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                <Snowflake className="h-8 w-8 text-[#fc7e14]" />
                <div>
                  <p className="font-semibold text-white">Gelo Premium</p>
                  <p className="text-sm text-white/70">Sempre bem gelado</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="h-14 bg-[#fc7e14] px-8 text-lg font-semibold text-white hover:bg-[#e56c00]"
              >
                <a href="/obrigado">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 border-white px-8 text-lg font-semibold text-white hover:bg-white hover:text-[#0f172a] bg-transparent"
              >
                <a href="/obrigado">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold text-[#fc7e14]">500+</div>
              <p className="mt-2 text-white/80">Eventos Atendidos</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold text-[#fc7e14]">40min</div>
              <p className="mt-2 text-white/80">Tempo Médio de Entrega</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold text-[#fc7e14]">24/7</div>
              <p className="mt-2 text-white/80">Atendimento</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="text-5xl font-bold text-[#fc7e14]">98%</div>
              <p className="mt-2 text-white/80">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
