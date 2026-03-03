import React from "react";
import { Meteors } from "@/components/react/ui/meteors";

export default function MeteorsDemo() {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-7 shadow-xl md:px-6 md:py-8">
        <div className="absolute inset-0 h-full w-full scale-90 rounded-full bg-linear-to-r from-blue-500/30 to-teal-500/30 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start gap-3">
          <h3 className="m-0 text-xl font-bold text-white">Journey in progress</h3>
          <p className="m-0 max-w-2xl text-sm text-white/55 md:text-base">
            Cada paso suma. Sigo construyendo productos, aprendiendo nuevas herramientas
            y mejorando en cada proyecto.
          </p>
        </div>

        <Meteors number={18} />
      </div>
    </div>
  );
}
