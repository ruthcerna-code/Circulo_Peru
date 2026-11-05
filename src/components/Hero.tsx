import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, Heart } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const [activeConcept, setActiveConcept] = useState<'acuarela' | 'estrellas'>('acuarela');

  return (
    <section 
      id="inicio"
      className={`relative min-h-[92vh] pt-28 pb-16 flex items-center transition-colors duration-700 overflow-hidden ${
        activeConcept === 'acuarela'
          ? 'bg-gradient-to-b from-[#FBF7F2] via-[#F6E7E7] to-[#FBF7F2]'
          : 'bg-gradient-to-b from-[#251D3A] via-[#3B2D54] to-[#1F172E] text-white'
      }`}
    >
      {/* Decorative ambient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft floating butterflies */}
        <div className="absolute top-24 left-[8%] text-3xl opacity-75 animate-float-gentle select-none">
          🦋
        </div>
        <div className="absolute top-1/2 left-[3%] text-2xl opacity-60 animate-float-delayed select-none">
          🦋
        </div>
        <div className="absolute top-36 right-[12%] text-3xl opacity-75 animate-float-delayed select-none">
          🦋
        </div>
        <div className="absolute bottom-20 right-[6%] text-2xl opacity-60 animate-float-gentle select-none">
          🦋
        </div>

        {/* Soft glowing blurs */}
        <div 
          className={`absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
            activeConcept === 'acuarela' ? 'bg-[#B9A3D6]/20' : 'bg-[#B9A3D6]/15'
          }`}
        />
        <div 
          className={`absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none ${
            activeConcept === 'acuarela' ? 'bg-[#F6E7E7]/80' : 'bg-[#4A6FA5]/20'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Concept toggle pill / switcher in top right of section */}
        <div className="flex justify-end mb-4">
          <div className={`inline-flex items-center gap-1.5 p-1 rounded-full text-xs font-medium border backdrop-blur-md transition-all ${
            activeConcept === 'acuarela'
              ? 'bg-[#FBF7F2]/80 border-[#B9A3D6]/40 text-[#4B4453]'
              : 'bg-white/10 border-white/20 text-white/90'
          }`}>
            <span className="text-[11px] px-2 text-opacity-70">Concepto visual:</span>
            <button
              onClick={() => setActiveConcept('acuarela')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeConcept === 'acuarela'
                  ? 'bg-[#7B5EA7] text-white shadow-xs'
                  : 'hover:text-[#7B5EA7]'
              }`}
            >
              Abrazo en Acuarela
            </button>
            <button
              onClick={() => setActiveConcept('estrellas')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeConcept === 'estrellas'
                  ? 'bg-[#B9A3D6] text-[#251D3A] font-semibold shadow-xs'
                  : 'hover:text-[#B9A3D6]'
              }`}
            >
              Cielo de Estrellas ✨
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Kicker Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs font-bold tracking-widest uppercase ${
                activeConcept === 'acuarela' ? 'text-[#7B5EA7]' : 'text-[#B9A3D6]'
              }`}>
                Red de apoyo
              </span>
              <span className="text-xs opacity-40">·</span>
              <span className={`text-xs font-semibold tracking-wider uppercase ${
                activeConcept === 'acuarela' ? 'text-[#4A6FA5]' : 'text-blue-200'
              }`}>
                Perú
              </span>
              <span className="text-xs opacity-40">·</span>
              <span className={`text-xs ${
                activeConcept === 'acuarela' ? 'text-[#4B4453]/70' : 'text-white/70'
              }`}>
                Comunidad sin juicio
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] mb-6">
              <span className={activeConcept === 'acuarela' ? 'text-[#4B4453]' : 'text-white'}>
                No estás sola.
              </span>{' '}
              <span className={activeConcept === 'acuarela' ? 'text-[#7B5EA7]' : 'text-[#B9A3D6]'}>
                No estás solo.
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl font-body leading-relaxed max-w-2xl mb-8 ${
              activeConcept === 'acuarela' ? 'text-[#4B4453]/90' : 'text-purple-100/90'
            }`}>
              Somos un círculo de familias que acompaña el duelo gestacional, perinatal, neonatal y de la infancia temprana en el Perú. 
              Aquí puedes hablar de tu bebé, llorarlo y <span className="font-script text-2xl text-[#7B5EA7] dark:text-[#B9A3D6] font-semibold">recordarlo</span> con ternura.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] active:scale-98 transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Quiero unirme al grupo de apoyo</span>
              </button>

              <a
                href="#quienes-somos"
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium transition-all ${
                  activeConcept === 'acuarela'
                    ? 'bg-white/80 hover:bg-white text-[#4B4453] border border-[#B9A3D6]/40 hover:border-[#7B5EA7]'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                <span>Conoce nuestra historia</span>
                <ArrowRight className="w-4 h-4 text-[#7B5EA7]" />
              </a>
            </div>

            {/* Calligraphic tender footer phrase */}
            <div className={`pt-6 border-t ${
              activeConcept === 'acuarela' ? 'border-[#B9A3D6]/25' : 'border-white/15'
            }`}>
              <p className={`font-script text-xl sm:text-2xl leading-snug ${
                activeConcept === 'acuarela' ? 'text-[#7B5EA7]' : 'text-[#B9A3D6]'
              }`}>
                “En honor a todos los bebés que nacieron dormidos y a los que nacieron con vida y no pudieron quedarse.” 🦋
              </p>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Frame with organic soft curves */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/40 bg-white/30 backdrop-blur-xs">
                {activeConcept === 'acuarela' ? (
                  <img
                    src="/src/assets/images/cad_watercolor_embrace_1793922114657.jpg"
                    alt="Ilustración acuarela de mujer abrazando constelación de estrellas y mariposas con ternura, CAD Perú"
                    className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <img
                    src="/src/assets/images/cad_starry_memorial_1793922116119.jpg"
                    alt="Cielo de estrellas y mariposas luminosas sobre los valles del Perú, CAD Perú"
                    className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Gentle emotional tag at the bottom of the card */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wide">
                    <Sparkles className="w-4 h-4 text-[#B9A3D6]" />
                    <span>Un espacio seguro de escucha y amor</span>
                  </div>
                  <p className="text-xs text-white/90 mt-1 font-body">
                    Lima · Sullana · En todo el Perú
                  </p>
                </div>
              </div>

              {/* Floating Little Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#FBF7F2] p-3.5 rounded-2xl shadow-lg border border-[#B9A3D6]/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F6E7E7] flex items-center justify-center text-[#7B5EA7]">
                  <Heart className="w-5 h-5 fill-[#7B5EA7]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#4B4453] leading-tight">Más de 450 familias</p>
                  <p className="text-[11px] text-[#4B4453]/70">acompañadas con amor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
