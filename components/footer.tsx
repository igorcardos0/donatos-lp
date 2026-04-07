import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/images/logo-isolado.png"
              alt="Donato's Conveniência"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-md text-white/70">
              Há mais de 5 anos transformando eventos em experiências
              inesquecíveis. Qualidade e atendimento diferenciado.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#fc7e14]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#fc7e14]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5500000000000"
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-[#fc7e14]"
                >
                  <Phone className="h-4 w-4" />
                  (00) 00000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@donatos.com.br"
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-[#fc7e14]"
                >
                  <Mail className="h-4 w-4" />
                  contato@donatos.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Sua Cidade, Estado</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#vitrine"
                  className="text-white/70 transition-colors hover:text-[#fc7e14]"
                >
                  Nossos Produtos
                </a>
              </li>
              <li>
                <a
                  href="/obrigado"
                  className="text-white/70 transition-colors hover:text-[#fc7e14]"
                >
                  Solicitar Orçamento
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 transition-colors hover:text-[#fc7e14]"
                >
                  SOS Churrasco
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Donato&apos;s Conveniência. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
