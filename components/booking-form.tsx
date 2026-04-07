"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, Users, PartyPopper, Send } from "lucide-react";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Redirect to thank you page
    window.location.href = "/obrigado";
  };

  return (
    <section id="booking" className="bg-[#f9f9f9] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="p-6 sm:p-10">
            <div className="mb-8 text-center">
              <span className="mb-4 inline-flex items-center rounded-full bg-[#fc7e14]/10 px-4 py-1.5 text-sm font-medium text-[#fc7e14]">
                Orçamento Rápido
              </span>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                Falta pouco para garantir sua estrutura
              </h2>
              <p className="mt-3 text-[#64748b]">
                Preencha o formulário e receba seu orçamento personalizado
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#0f172a]">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    required
                    className="h-12 border-[#e2e8f0] focus:border-[#fc7e14] focus:ring-[#fc7e14]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#0f172a]">
                    Telefone/WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    required
                    className="h-12 border-[#e2e8f0] focus:border-[#fc7e14] focus:ring-[#fc7e14]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-[#0f172a]">
                    <CalendarDays className="mr-2 inline h-4 w-4 text-[#fc7e14]" />
                    Data do Evento
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    className="h-12 border-[#e2e8f0] focus:border-[#fc7e14] focus:ring-[#fc7e14]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-[#0f172a]">
                    <Users className="mr-2 inline h-4 w-4 text-[#fc7e14]" />
                    Número de Convidados
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 border-[#e2e8f0] focus:border-[#fc7e14] focus:ring-[#fc7e14]">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-30">10 a 30 pessoas</SelectItem>
                      <SelectItem value="30-50">30 a 50 pessoas</SelectItem>
                      <SelectItem value="50-100">50 a 100 pessoas</SelectItem>
                      <SelectItem value="100+">Mais de 100 pessoas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType" className="text-[#0f172a]">
                  <PartyPopper className="mr-2 inline h-4 w-4 text-[#fc7e14]" />
                  Tipo de Evento
                </Label>
                <Select>
                  <SelectTrigger className="h-12 border-[#e2e8f0] focus:border-[#fc7e14] focus:ring-[#fc7e14]">
                    <SelectValue placeholder="Selecione o tipo de evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="churrasco">Churrasco</SelectItem>
                    <SelectItem value="aniversario">Aniversário</SelectItem>
                    <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                    <SelectItem value="casamento">Casamento</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#0f172a]">
                  Detalhes Adicionais
                </Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos mais sobre seu evento e quais itens você precisa..."
                  rows={4}
                  className="border-[#e2e8f0] focus:border-[#fc7e14] focus:ring-[#fc7e14]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="shimmer-btn h-14 w-full bg-[#fc7e14] text-lg font-semibold text-white hover:bg-[#e56c00] disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Solicitar Orçamento
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
