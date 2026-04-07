"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Jogos de Mesa",
    description: "Ping pong, sinuca, pebolim e muito mais para animar seu evento",
    image: "/images/donatos-img/jogos-de-mesa.jpeg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    title: "Tendas",
    description: "Proteção e elegância para eventos ao ar livre",
    image: "/images/donatos-img/tendas.jpeg",
    span: "lg:col-span-1",
  },
  {
    id: 3,
    title: "Bebidas e Gelo",
    description: "Bebidas geladas e gelo em abundância",
    image: "/images/donatos-img/bebidas-e-gelo.jpeg",
    span: "lg:col-span-1",
  },
  {
    id: 4,
    title: "Caixas Térmicas",
    description: "Mantenha suas bebidas na temperatura ideal",
    image: "/images/donatos-img/caixas-termicas.jpeg",
    span: "lg:col-span-2",
  },
];

export function BentoVitrine() {
  return (
    <section id="vitrine" className="bg-[#f9f9f9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-[#fc7e14]/10 px-4 py-1.5 text-sm font-medium text-[#fc7e14]">
            Nossa Vitrine
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Tudo para o seu evento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
            Produtos e serviços para transformar sua festa em uma
            experiência única
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-[#fc7e14] ${product.span}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[200px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent" />
              </div>
              <p className="px-4 pt-4 text-sm text-[#64748b]">Imagem ilustrativa</p>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fc7e14] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[#64748b]">Imagens ilustrativas.</p>
      </div>
    </section>
  );
}
