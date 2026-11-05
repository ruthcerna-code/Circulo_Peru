import React from 'react';
import { FOUNDERS } from '../data/cadData';
import { Heart, Users } from 'lucide-react';

export const QuienesSomos: React.FC = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-[#FBF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Two Columns (Real Photo left, story right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Photo of Community Circle */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#B9A3D6]/30 bg-[#F6E7E7]">
              <img
                src="/src/assets/images/cad_circle_community_1793922116325.jpg"
                alt="Encuentro de la comunidad de CAD Perú compartiendo en una mesa cálida con tazas de té y abrazos"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent absolute bottom-0 inset-x-0 text-white">
                <p className="font-serif-title text-base sm:text-lg font-medium text-white/95">
                  Encuentros presenciales en Lima y Sullana
                </p>
                <p className="text-xs text-purple-200 mt-1 font-body">
                  Mujeres y familias compartiendo historias, lágrimas y sonrisas en un ambiente de contención.
                </p>
              </div>
            </div>

            {/* Subtle floating accent badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-md border border-[#B9A3D6]/30 items-center gap-3">
              <span className="text-2xl">💜</span>
              <div>
                <p className="text-xs font-bold text-[#7B5EA7]">Círculo de Escucha</p>
                <p className="text-[11px] text-[#4B4453]">Sin juicios ni frases hechas</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6E7E7] text-[#7B5EA7] text-xs font-semibold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>Nuestra Historia</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl text-[#7B5EA7] font-normal tracking-tight mb-6 leading-tight">
              Un círculo que nace <span className="font-script text-4xl sm:text-5xl text-[#4A6FA5] font-semibold">del amor</span>
            </h2>

            <div className="space-y-4 font-body text-lg text-[#4B4453]/90 leading-relaxed">
              <p>
                Somos madres y padres que vivimos la pérdida de un hijo o una hija. Un día empezamos a compartir nuestras historias, nos dimos cuenta de que no estábamos solas y decidimos acompañarnos.
              </p>
              <p>
                Hoy somos una red que sostiene a otras familias para que nadie atraviese este camino en silencio. Escuchamos sin juzgar, recordamos a nuestros bebés por su nombre y trabajamos para que su paso por este mundo sea reconocido.
              </p>
              <p className="text-base text-[#4B4453]/80 italic pt-2 border-l-2 border-[#B9A3D6] pl-4">
                “Nombrar a nuestros bebés es darles el lugar que siempre tendrán en nuestras vidas y familias.”
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Three Circular Cards of Founders */}
        <div className="pt-10 border-t border-[#B9A3D6]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif-title text-2xl sm:text-3xl text-[#7B5EA7] font-normal mb-2">
              Nuestras fundadoras
            </h3>
            <p className="text-sm text-[#4B4453]/80 font-body">
              Madres en duelo que transformaron el dolor en una red de amor y cobijo para todo el Perú.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="bg-[#F6E7E7]/40 hover:bg-[#F6E7E7]/80 transition-all duration-300 rounded-3xl p-8 border border-[#B9A3D6]/30 flex flex-col items-center text-center group"
              >
                {/* Circular Portrait or Watercolor Avatar */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#B9A3D6] via-[#F6E7E7] to-[#7B5EA7] p-1 shadow-md mb-5 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-[#FBF7F2] flex flex-col items-center justify-center border border-white">
                    <span className="font-serif-title text-xl font-bold text-[#7B5EA7]">
                      {founder.initials}
                    </span>
                    <span className="text-xs text-[#4A6FA5]">🦋</span>
                  </div>
                </div>

                <h4 className="font-serif-title text-xl font-bold text-[#4B4453] mb-1">
                  {founder.name}
                </h4>

                <p className="text-xs font-semibold text-[#7B5EA7] uppercase tracking-wider mb-1">
                  {founder.role}
                </p>

                <p className="text-sm font-medium text-[#4A6FA5] mb-4">
                  {founder.motherOf}
                </p>

                <p className="text-sm text-[#4B4453]/80 font-body italic leading-relaxed">
                  “{founder.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
