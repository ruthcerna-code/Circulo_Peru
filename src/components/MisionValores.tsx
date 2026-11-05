import React from 'react';
import { Ear, Sparkles, Users, Scale } from 'lucide-react';

export const MisionValores: React.FC = () => {
  const valores = [
    {
      word: 'Escucha',
      desc: 'Tu historia importa y aquí se escucha sin juicios.',
      icon: Ear,
    },
    {
      word: 'Memoria',
      desc: 'Nombramos y recordamos a cada bebé.',
      icon: Sparkles,
    },
    {
      word: 'Comunidad',
      desc: 'Nadie debería vivir este duelo en soledad.',
      icon: Users,
    },
    {
      word: 'Derechos',
      desc: 'Trabajamos para que el duelo sea reconocido y cuidado.',
      icon: Scale,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FBF7F2] to-[#F6E7E7]/50 relative overflow-hidden">
      {/* Subtle watercolor texture element */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#B9A3D6]/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Phrase: Grande, centrada, en serif azul acuarela */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#7B5EA7] mb-4">
            Nuestra Misión
          </p>

          <blockquote className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#4A6FA5] font-normal leading-relaxed tracking-tight px-4 sm:px-8">
            “Acompañar a las familias que viven una pérdida gestacional, perinatal o neonatal con espacios seguros de escucha, contención y memoria, e impulsar una atención más humana y el reconocimiento de sus derechos.”
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-2 text-[#7B5EA7]">
            <span className="w-12 h-px bg-[#B9A3D6]/50"></span>
            <span className="text-xl">🦋</span>
            <span className="w-12 h-px bg-[#B9A3D6]/50"></span>
          </div>
        </div>

        {/* Four Values: Line icons in lilac with one word and one line each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.word}
                className="bg-white/70 backdrop-blur-xs p-7 rounded-3xl border border-[#B9A3D6]/30 hover:border-[#7B5EA7]/50 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Linear lilac icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#F6E7E7] border border-[#B9A3D6]/40 flex items-center justify-center text-[#7B5EA7] mb-5 group-hover:bg-[#B9A3D6]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#7B5EA7] stroke-[1.6]" />
                </div>

                {/* Word */}
                <h3 className="font-serif-title text-2xl font-semibold text-[#7B5EA7] mb-2">
                  {val.word}
                </h3>

                {/* One line description */}
                <p className="font-body text-[15px] text-[#4B4453]/90 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
