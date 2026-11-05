import React from 'react';
import { Stethoscope, CheckCircle, XCircle, HeartHandshake, FileCheck } from 'lucide-react';

interface ProfesionalesProps {
  onOpenJoinModal: (topic?: string) => void;
}

export const ProfesionalesSalud: React.FC<ProfesionalesProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="profesionales" className="py-24 bg-[#FBF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B9A3D6]/20 text-[#7B5EA7] text-xs font-semibold uppercase tracking-wider mb-4">
            <Stethoscope className="w-4 h-4" />
            <span>Alianza con Personal Médico y Hospitales</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#7B5EA7] font-normal tracking-tight mb-4">
            Para profesionales <span className="font-script text-4xl sm:text-6xl text-[#4A6FA5] font-semibold">de la salud</span>
          </h2>

          <p className="font-body text-lg text-[#4B4453]/90 leading-relaxed">
            El personal de obstetricia, enfermería, ginecología y neonatología tiene en sus manos el poder de transformar el peor día de una familia en un recuerdo sostenido con dignidad y respeto.
          </p>
        </div>

        {/* The Purple Butterfly Protocol Feature */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#B9A3D6]/40 shadow-xs mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7B5EA7] mb-2">
                <span>Iniciativa CAD Perú</span>
                <span>·</span>
                <span>Humanización Hospitalaria</span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#4B4453] mb-4">
                El Protocolo de la Mariposa Morada 🦋
              </h3>
              <p className="font-body text-[#4B4453]/90 leading-relaxed text-base mb-6">
                Consiste en colocar una discreta mariposa morada en la puerta de la habitación o en la historia clínica cuando una paciente ha sufrido una pérdida gestacional o perinatal. 
                De esta manera, todo el equipo hospitalario que ingresa (médicos, limpieza, nutrición, enfermería) sabe de antemano que debe modular su voz, evitar preguntas como “¿dónde está el bebé?” o felicitaciones involuntarias, y brindar un trato de máxima delicadeza.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenJoinModal('Capacitación Código Mariposa')}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-all cursor-pointer shadow-xs"
                >
                  Solicitar capacitación para tu clínica u hospital
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F6E7E7]/60 rounded-2xl p-6 border border-[#B9A3D6]/30 text-center">
              <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center text-3xl shadow-xs mb-3 animate-float-gentle">
                🦋
              </div>
              <h4 className="font-serif-title text-lg font-bold text-[#7B5EA7] mb-1">
                Símbolo de Respeto
              </h4>
              <p className="text-xs font-body text-[#4B4453]/80 leading-relaxed">
                Reconocido internacionalmente para avisar con compasión y evitar la revictimización en los pasillos de maternidad.
              </p>
            </div>
          </div>
        </div>

        {/* Guía de Lenguaje Compasivo: Qué decir vs Qué evitar */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif-title text-2xl font-bold text-[#4B4453]">
              Guía de lenguaje compasivo para la consulta y el parto
            </h3>
            <p className="text-sm font-body text-[#4B4453]/80">
              Las palabras que se dicen en ese instante marcan a las familias para toda la vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Qué decir */}
            <div className="bg-[#FBF7F2] rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xs">
              <div className="flex items-center gap-3 mb-6 text-emerald-800">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <h4 className="font-serif-title text-xl font-bold">
                  Frases que sanan y acompañan
                </h4>
              </div>
              <ul className="space-y-3.5 text-sm font-body text-[#4B4453]">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>“Lamento profundamente tu pérdida.”</strong> Reconoce el dolor sin minimizarlo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>“¿Cómo se llama tu bebé?”</strong> Valida su existencia e identidad.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>“Tu bebé es hermoso/a.”</strong> Si los padres deciden verlo y sostenerlo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>“Tómate el tiempo que necesites para despedirte.”</strong> Sin apresurar los protocolos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>“No hiciste nada malo.”</strong> Alivia la culpa que tantas madres cargan.</span>
                </li>
              </ul>
            </div>

            {/* Qué evitar */}
            <div className="bg-[#FBF7F2] rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-xs">
              <div className="flex items-center gap-3 mb-6 text-rose-800">
                <XCircle className="w-6 h-6 text-rose-500" />
                <h4 className="font-serif-title text-xl font-bold">
                  Frases que causan un dolor profundo
                </h4>
              </div>
              <ul className="space-y-3.5 text-sm font-body text-[#4B4453]">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><em>“Eres joven, todavía puedes tener más hijos.”</em> Ningún hijo reemplaza a otro.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><em>“Dios sabe por qué hace las cosas.”</em> Genera confusión y rabia espiritual.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><em>“Al menos no llegaste a conocerlo/a.”</em> El vínculo maternal nace desde la primera prueba positiva.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><em>“No llores, tienes que ser fuerte por tus otros hijos.”</em> Reprime el desahogo natural del duelo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><em>“Mejor no lo mires para que no te duela más.”</em> Quita la única oportunidad de despedirse y atesorar un recuerdo.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Talleres y Guías para Hospitales */}
        <div className="bg-[#F6E7E7] rounded-3xl p-8 border border-[#B9A3D6]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#7B5EA7] shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-title text-xl font-bold text-[#7B5EA7]">
                Kit de Trato Humanizado para Servicios de Salud
              </h4>
              <p className="text-sm font-body text-[#4B4453]/90">
                Brindamos charlas gratuitas, afiches del Código Mariposa y kits de toma de huellitas hospitalarias.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenJoinModal('Contacto Profesional de la Salud')}
            className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            Contactar equipo CAD
          </button>
        </div>
      </div>
    </section>
  );
};
