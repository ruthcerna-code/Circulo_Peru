import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BienvenidaPerdidaProps {
  onOpenJoinModal: () => void;
}

export const BienvenidaPerdida: React.FC<BienvenidaPerdidaProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative py-20 bg-[#FBF7F2] border-y border-[#B9A3D6]/20 overflow-hidden">
      {/* Background delicate watercolor glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[36rem] h-[24rem] rounded-full bg-gradient-to-r from-[#F6E7E7]/60 via-[#B9A3D6]/20 to-[#F6E7E7]/60 blur-3xl opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Delicate small butterfly above */}
        <div className="inline-flex items-center justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#F6E7E7] border border-[#B9A3D6]/30 flex items-center justify-center text-2xl shadow-xs animate-float-gentle select-none">
            🦋
          </div>
        </div>

        {/* Emotionally grounding title */}
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[#7B5EA7] font-normal tracking-tight mb-6">
          Si llegaste aquí, lo sentimos mucho
        </h2>

        {/* Short, breathing room copy */}
        <div className="space-y-4 max-w-2xl mx-auto text-lg sm:text-xl font-body text-[#4B4453]/90 leading-relaxed">
          <p>
            Sabemos que no hay palabras para este dolor. Tu bebé existió, fue amado y siempre será tu hijo o tu hija.
          </p>
          <p className="font-medium text-[#4B4453]">
            No tienes que atravesar esto sola: hay otras madres y padres que caminaron este mismo camino y hoy quieren acompañarte.
          </p>
        </div>

        {/* Action Link: Escríbenos cuando te sientas lista */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-2 text-lg font-serif-title font-semibold text-[#7B5EA7] hover:text-[#4A6FA5] transition-colors py-2 px-4 group cursor-pointer"
          >
            <span>Escríbenos cuando te sientas lista</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Quiet reassurance badge */}
        <div className="mt-8 pt-6 border-t border-[#B9A3D6]/20 inline-flex items-center gap-2 text-xs text-[#4B4453]/70 font-body">
          <Sparkles className="w-3.5 h-3.5 text-[#B9A3D6]" />
          <span>Sin compromisos, a tu propio ritmo y en total confidencialidad</span>
        </div>
      </div>
    </section>
  );
};
