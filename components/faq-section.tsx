"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo mínimo para fazer uma reserva?",
    answer:
      "Recomendamos que a reserva seja feita com pelo menos 3 dias de antecedência para garantir disponibilidade. Para eventos maiores ou em datas especiais, sugerimos 1 semana de antecedência.",
  },
  {
    question: "Vocês fazem entrega e retirada dos materiais?",
    answer:
      "Sim! Contamos com frota própria para entrega e retirada de todos os materiais. A entrega é feita no horário combinado e a retirada no dia seguinte ao evento, sem custos adicionais dentro da região de cobertura.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos diversas formas de pagamento: PIX, cartões de crédito e débito, dinheiro e transferência bancária. Para reservas, solicitamos um sinal de 50% do valor total.",
  },
  {
    question: "Os preços incluem montagem e desmontagem?",
    answer:
      "Sim! O valor do aluguel já inclui entrega, montagem, desmontagem e retirada. Nossa equipe cuida de tudo para que você aproveite seu evento sem preocupações.",
  },
  {
    question: "Qual a área de cobertura de vocês?",
    answer:
      "Atendemos toda a região metropolitana. Para cidades mais distantes, consulte-nos sobre disponibilidade e possíveis taxas adicionais de deslocamento.",
  },
  {
    question: "Como funciona o SOS Churrasco?",
    answer:
      "O SOS Churrasco é nosso serviço de emergência para eventos em andamento. Se acabar o gelo, as bebidas ou qualquer item essencial, basta ligar que fazemos a entrega em até 40 minutos!",
  },
];

export function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-[#fc7e14]/10 px-4 py-1.5 text-sm font-medium text-[#fc7e14]">
            FAQ
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#64748b]">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-[#e2e8f0] bg-[#f9f9f9] px-6 data-[state=open]:border-[#fc7e14]"
            >
              <AccordionTrigger className="py-4 text-left text-[#0f172a] hover:no-underline [&[data-state=open]>svg]:text-[#fc7e14] [&>svg]:text-[#fc7e14]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-[#64748b]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
