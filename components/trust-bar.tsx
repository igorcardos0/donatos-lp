import { Truck, Award, Sliders, Package } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Frota Própria",
    description: "Entrega garantida",
  },
  {
    icon: Award,
    title: "Material Premium",
    description: "Qualidade superior",
  },
  {
    icon: Sliders,
    title: "Flexibilidade",
    description: "Pacotes personalizados",
  },
  {
    icon: Package,
    title: "Combo 360º",
    description: "Solução completa",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#e2e8f0] bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fc7e14]/10 sm:h-12 sm:w-12">
                <feature.icon className="h-5 w-5 text-[#fc7e14] sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0f172a] sm:text-base">
                  {feature.title}
                </p>
                <p className="text-xs text-[#64748b] sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
