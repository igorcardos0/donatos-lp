"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e2e8f0] bg-white p-4 shadow-lg lg:hidden">
      <Button
        asChild
        className="shimmer-btn h-12 w-full bg-[#fc7e14] text-base font-semibold text-white hover:bg-[#e56c00]"
      >
        <a href="/obrigado">
          Solicitar Orçamento
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}
