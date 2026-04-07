"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f9f9f9] flex items-center py-20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex items-center rounded-full bg-[#fc7e14]/10 px-4 py-1.5 text-sm font-medium text-[#fc7e14] w-fit">
              A solução para você   
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
              Sua Festa Pronta com a{" "}
              <span className="text-[#fc7e14]">Infraestrutura de Elite</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#64748b]">
              Transformamos seu evento em uma experiência inesquecível. Tendas,
              jogos de mesa, bebidas geladas e toda estrutura que você precisa,
              com qualidade e entrega pontual.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="shimmer-btn h-12 bg-[#fc7e14] px-8 text-base font-semibold text-white hover:bg-[#e56c00]"
              >
                <Link href="/obrigado">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-12 border-[#0f172a] px-8 text-base font-semibold text-[#0f172a] hover:bg-[#0f172a] hover:text-white bg-transparent"
                onClick={() =>
                  document
                    .getElementById("vitrine")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Produtos
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/donatos-img/hero.jpeg"
                alt="Premium drinks and elegant event setup"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent" />
            </div>
            <p className="mt-3 text-sm text-[#64748b]">Imagem ilustrativa</p>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg sm:-bottom-6 sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fc7e14]/10">
                  <span className="text-2xl font-bold text-[#fc7e14]">+10</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">Anos de</p>
                  <p className="text-sm text-[#64748b]">Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
