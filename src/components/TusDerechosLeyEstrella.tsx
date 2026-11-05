import React, { useState } from 'react';
import { DERECHOS_LEY_ESTRELLA } from '../data/cadData';
import { Scale, CheckCircle2, FileText, ChevronDown, ChevronUp, AlertCircle, Sparkles } from 'lucide-react';

interface TusDerechosProps {
  onOpenJoinModal: (topic?: string) => void;
}

export const TusDerechosLeyEstrella: React.FC<TusDerechosProps> = ({ onOpenJoinModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="tus-derechos" className="py-24 bg-[#FBF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A6FA5]/10 text-[#4A6FA5] text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" />
            <span>Ley Estrella & Marco Legal en el Perú</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#4A6FA5] font-normal tracking-tight mb-4">
            Tus derechos y la <span className="font-script text-4xl sm:text-6xl text-[#7B5EA7] font-semibold">Ley Estrella</span>
          </h2>

          <p className="font-body text-lg text-[#4B4453]/90 leading-relaxed">
            Tu bebé existió y su nombre importa. En el Perú, las familias tienen derechos legalmente reconocidos durante y después de la atención en clínicas y hospitales.
          </p>
        </div>

        {/* Ley Estrella Feature Box */}
        <div className="bg-gradient-to-br from-[#4A6FA5]/10 via-[#F6E7E7]/40 to-[#B9A3D6]/20 rounded-3xl p-8 sm:p-10 border border-[#4A6FA5]/25 mb-14 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#4A6FA5]/20">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4A6FA5]">
                Hito Histórico de Dignidad
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#4B4453] mt-1">
                ¿Qué establece la Ley Estrella en el Perú?
              </h3>
            </div>
            <span className="px-4 py-2 rounded-full bg-white text-xs font-bold text-[#4A6FA5] border border-[#4A6FA5]/30 shadow-xs whitespace-nowrap">
              Ley N° 31693
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-white/80 p-5 rounded-2xl border border-[#B9A3D6]/20">
              <div className="w-8 h-8 rounded-full bg-[#4A6FA5]/15 flex items-center justify-center text-[#4A6FA5] font-bold text-sm mb-3">
                1
              </div>
              <h4 className="font-serif-title text-lg font-bold text-[#4A6FA5] mb-2">
                Identidad con Nombre
              </h4>
              <p className="text-sm font-body text-[#4B4453]/85 leading-relaxed">
                Reconocimiento voluntario para inscribir al bebé fallecido en el vientre materno con su nombre y apellidos paterno y materno en el SINADEF y RENIEC.
              </p>
            </div>

            <div className="bg-white/80 p-5 rounded-2xl border border-[#B9A3D6]/20">
              <div className="w-8 h-8 rounded-full bg-[#4A6FA5]/15 flex items-center justify-center text-[#4A6FA5] font-bold text-sm mb-3">
                2
              </div>
              <h4 className="font-serif-title text-lg font-bold text-[#4A6FA5] mb-2">
                Trato Hospitalario Digno
              </h4>
              <p className="text-sm font-body text-[#4B4453]/85 leading-relaxed">
                Ninguna madre en duelo debe ser internada en salas compartidas con bebés recién nacidos que lloran. Atención empática y sin violencia obstétrica.
              </p>
            </div>

            <div className="bg-white/80 p-5 rounded-2xl border border-[#B9A3D6]/20">
              <div className="w-8 h-8 rounded-full bg-[#4A6FA5]/15 flex items-center justify-center text-[#4A6FA5] font-bold text-sm mb-3">
                3
              </div>
              <h4 className="font-serif-title text-lg font-bold text-[#4A6FA5] mb-2">
                Entrega para Sepelio
              </h4>
              <p className="text-sm font-body text-[#4B4453]/85 leading-relaxed">
                Derecho a recibir el cuerpo de tu bebé, sin importar la edad gestacional, para despedirlo en una ceremonia digna según las creencias de la familia.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Rights Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h3 className="font-serif-title text-2xl text-[#7B5EA7] font-semibold">
              Guía de Derechos y Trámites Hospitalarios
            </h3>
            <p className="text-sm text-[#4B4453]/80">
              Haz clic en cada derecho para conocer el protocolo paso a paso.
            </p>
          </div>

          {DERECHOS_LEY_ESTRELLA.map((derecho, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={derecho.title}
                className="bg-white rounded-2xl border border-[#B9A3D6]/35 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F6E7E7]/20 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#F6E7E7] text-[#7B5EA7] flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-serif-title text-lg sm:text-xl font-bold text-[#4B4453]">
                        {derecho.title}
                      </h4>
                      <p className="text-xs text-[#4A6FA5] font-medium mt-0.5">
                        {derecho.peruLaw}
                      </p>
                    </div>
                  </div>
                  <div className="p-1 rounded-full text-[#7B5EA7]">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#B9A3D6]/20 bg-[#FBF7F2]/50 animate-in fade-in duration-200">
                    <p className="font-body text-[#4B4453] text-base mb-4 leading-relaxed">
                      {derecho.summary}
                    </p>

                    <div className="bg-white p-4 rounded-xl border border-[#B9A3D6]/25 space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7B5EA7]">
                        ¿Cómo ejercer este derecho?
                      </p>
                      {derecho.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-sm font-body text-[#4B4453]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#7B5EA7] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="max-w-2xl mx-auto text-center p-6 bg-[#F6E7E7] rounded-3xl border border-[#B9A3D6]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <AlertCircle className="w-6 h-6 text-[#7B5EA7] shrink-0" />
            <p className="text-sm font-body text-[#4B4453]">
              ¿Estás en una clínica u hospital y te niegan alguno de estos derechos? Podemos orientarte de inmediato.
            </p>
          </div>
          <button
            onClick={() => onOpenJoinModal('Orientación Legal / Hospitalaria')}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            Orientación urgente
          </button>
        </div>
      </div>
    </section>
  );
};
