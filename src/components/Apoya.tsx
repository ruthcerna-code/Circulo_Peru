import React, { useState } from 'react';
import { Heart, Sparkles, Gift, Scissors, Copy, Check } from 'lucide-react';

interface ApoyaProps {
  onOpenJoinModal: (topic?: string) => void;
}

export const Apoya: React.FC<ApoyaProps> = ({ onOpenJoinModal }) => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(label);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2500);
  };

  return (
    <section id="apoya" className="py-24 bg-[#F6E7E7]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B5EA7]/15 text-[#7B5EA7] text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#7B5EA7]" />
            <span>Suma tu granito de amor</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#7B5EA7] font-normal tracking-tight mb-4">
            Cómo apoyar a <span className="font-script text-4xl sm:text-6xl text-[#4A6FA5] font-semibold">CAD Perú</span>
          </h2>

          <p className="font-body text-lg text-[#4B4453]/90 leading-relaxed">
            Somos una red sin fines de lucro autogestionada por madres y padres en duelo. Tu apoyo permite que las cajitas de recuerdo y los grupos de apoyo continúen siendo 100% gratuitos para todas las familias peruanas.
          </p>
        </div>

        {/* 3 Pillars of Support */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 1. Apadrina una cajita */}
          <div className="bg-[#FBF7F2] rounded-3xl p-8 border border-[#B9A3D6]/40 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F6E7E7] flex items-center justify-center text-[#7B5EA7] mb-6 group-hover:scale-105 transition-transform">
                <Gift className="w-7 h-7" />
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-[#7B5EA7] mb-3">
                Apadrina una Cajita de Recuerdo
              </h3>

              <p className="font-body text-sm text-[#4B4453]/90 leading-relaxed mb-4">
                Con un aporte solidario de <strong>S/ 35</strong> cubres los materiales de una cajita de madera o cartón rígido con estrella tejida a crochet, tarjeta de huellas, cinta de seda y su envío a una madre en un hospital.
              </p>
            </div>

            <button
              onClick={() => onOpenJoinModal('Apadrinar Cajita de Recuerdo')}
              className="mt-6 w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-colors cursor-pointer shadow-xs"
            >
              Quiero apadrinar
            </button>
          </div>

          {/* 2. Red de Tejedoras Solidarias */}
          <div className="bg-[#FBF7F2] rounded-3xl p-8 border border-[#B9A3D6]/40 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F6E7E7] flex items-center justify-center text-[#7B5EA7] mb-6 group-hover:scale-105 transition-transform">
                <Scissors className="w-7 h-7" />
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-[#7B5EA7] mb-3">
                Tejedoras Solidarias
              </h3>

              <p className="font-body text-sm text-[#4B4453]/90 leading-relaxed mb-4">
                ¿Sabes tejer a crochet o palillos? Donamos patrones de estrellitas, conejitos y pulpitos de apego en colores pasteles para incluir en cada cajita. Tejer es también un hermoso acto de amor y memoria.
              </p>
            </div>

            <button
              onClick={() => onOpenJoinModal('Voluntariado Tejedoras Solidarias')}
              className="mt-6 w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#7B5EA7] bg-[#F6E7E7] hover:bg-[#B9A3D6]/30 transition-colors cursor-pointer"
            >
              Sumarme como tejedora
            </button>
          </div>

          {/* 3. Voluntariado Profesional */}
          <div className="bg-[#FBF7F2] rounded-3xl p-8 border border-[#B9A3D6]/40 shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F6E7E7] flex items-center justify-center text-[#7B5EA7] mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-[#7B5EA7] mb-3">
                Voluntariado Profesional
              </h3>

              <p className="font-body text-sm text-[#4B4453]/90 leading-relaxed mb-4">
                Si eres profesional en psicología perinatal, tanatología, abogacía, diseño gráfico o comunicación, puedes sumar tus horas para talleres, incidencia legislativa o acompañamiento.
              </p>
            </div>

            <button
              onClick={() => onOpenJoinModal('Voluntariado Profesional')}
              className="mt-6 w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#7B5EA7] bg-[#F6E7E7] hover:bg-[#B9A3D6]/30 transition-colors cursor-pointer"
            >
              Ofrecer voluntariado
            </button>
          </div>
        </div>

        {/* Cuentas de Aporte Solidario en Perú */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#B9A3D6]/35 shadow-xs max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif-title text-2xl font-bold text-[#4B4453]">
              Cuentas para donaciones directas (Perú)
            </h3>
            <p className="text-sm text-[#4B4453]/80 mt-1">
              Todos los fondos se destinan íntegramente a las cajitas de recuerdo y encuentros de contención.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Yape / Plin */}
            <div className="p-4 rounded-2xl bg-[#FBF7F2] border border-[#B9A3D6]/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7B5EA7]">Yape / Plin</p>
                <p className="text-lg font-mono font-bold text-[#4B4453] mt-0.5">992 481 054</p>
                <p className="text-[11px] text-[#4B4453]/70">Titular: Nicole Acosta (CAD Perú)</p>
              </div>
              <button
                onClick={() => copyToClipboard('992481054', 'yape')}
                className="p-2.5 rounded-xl bg-white hover:bg-[#F6E7E7] text-[#7B5EA7] border border-[#B9A3D6]/30 transition-colors"
                title="Copiar número"
              >
                {copiedAccount === 'yape' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* BCP Cuenta Corriente */}
            <div className="p-4 rounded-2xl bg-[#FBF7F2] border border-[#B9A3D6]/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#4A6FA5]">BCP (Soles)</p>
                <p className="text-base font-mono font-bold text-[#4B4453] mt-0.5">193-98214470-0-12</p>
                <p className="text-[11px] text-[#4B4453]/70">CCI: 002-193009821447001214</p>
              </div>
              <button
                onClick={() => copyToClipboard('19398214470012', 'bcp')}
                className="p-2.5 rounded-xl bg-white hover:bg-[#F6E7E7] text-[#7B5EA7] border border-[#B9A3D6]/30 transition-colors"
                title="Copiar cuenta"
              >
                {copiedAccount === 'bcp' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {copiedAccount && (
            <p className="text-center text-xs font-semibold text-emerald-700 mt-4 animate-in fade-in">
              ✓ Datos copiados al portapapeles. ¡Muchas gracias por tu generosidad!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
