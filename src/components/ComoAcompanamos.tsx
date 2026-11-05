import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem } from '../data/cadData';
import { MessageCircle, Monitor, Users, Package, BookOpen, MapPin, X, ArrowRight, Heart } from 'lucide-react';

interface ComoAcompanamosProps {
  onOpenJoinModal: (defaultTopic?: string) => void;
}

export const ComoAcompanamos: React.FC<ComoAcompanamosProps> = ({ onOpenJoinModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'butterfly':
        return <span className="text-2xl" role="img" aria-label="mariposa">🦋</span>;
      case 'screen':
        return <Monitor className="w-6 h-6 text-[#7B5EA7] stroke-[1.8]" />;
      case 'table':
        return <Users className="w-6 h-6 text-[#7B5EA7] stroke-[1.8]" />;
      case 'box':
        return <Package className="w-6 h-6 text-[#7B5EA7] stroke-[1.8]" />;
      case 'book':
        return <BookOpen className="w-6 h-6 text-[#7B5EA7] stroke-[1.8]" />;
      case 'map':
        return <MapPin className="w-6 h-6 text-[#7B5EA7] stroke-[1.8]" />;
      default:
        return <Heart className="w-6 h-6 text-[#7B5EA7]" />;
    }
  };

  return (
    <section id="como-acompanamos" className="py-24 bg-[#F6E7E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif-title text-3xl sm:text-4xl text-[#7B5EA7] font-normal tracking-tight mb-3">
            Cómo te acompañamos
          </h2>
          <p className="font-body text-lg text-[#4B4453]/90">
            Distintas formas de estar cerca, a tu propio ritmo.
          </p>
        </div>

        {/* 6 Cards Grid (3x2 Desktop, 1 col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-[#FBF7F2] rounded-3xl p-8 border border-[#B9A3D6]/40 hover:border-[#7B5EA7]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                {/* Header of card with icon and tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#F6E7E7] border border-[#B9A3D6]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-xs font-semibold text-[#7B5EA7] bg-[#B9A3D6]/20 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Card Title in Morado CAD */}
                <h3 className="font-serif-title text-2xl font-bold text-[#7B5EA7] mb-3 group-hover:text-[#4A6FA5] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="font-body text-[16px] text-[#4B4453]/90 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action link */}
              <div className="mt-6 pt-4 border-t border-[#B9A3D6]/20 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#7B5EA7] group-hover:underline">
                  Conoce más detalles
                </span>
                <ArrowRight className="w-4 h-4 text-[#7B5EA7] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Cajita de Recuerdo */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#B9A3D6]/40 shadow-sm flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/3 rounded-2xl overflow-hidden shadow-xs">
            <img
              src="/src/assets/images/cad_memory_box_1793922116421.jpg"
              alt="Cajita de recuerdo para bebés estrella con estrella tejida a crochet y cinta lila, CAD Perú"
              className="w-full h-56 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7B5EA7] mb-2">
              <span>Recuerdos con ternura</span>
              <span>·</span>
              <span>Comunidad Solidaria</span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#7B5EA7] mb-3">
              ¿Deseas una Cajita de Recuerdo para tu bebé?
            </h3>
            <p className="font-body text-[#4B4453] leading-relaxed mb-6">
              Las cajitas de recuerdo son preparadas a mano por madres del círculo con materiales suaves y mucho amor. 
              Si estás en un hospital o en casa y deseas recibir una cajita de memoria sin costo, escríbenos con toda confianza.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenJoinModal('Cajita de Recuerdo')}
                className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-all cursor-pointer shadow-xs"
              >
                Solicitar una Cajita de Recuerdo
              </button>
              <a
                href="#apoya"
                className="px-6 py-3 rounded-full text-sm font-medium text-[#7B5EA7] bg-[#F6E7E7] hover:bg-[#B9A3D6]/30 transition-colors"
              >
                Apadrinar una cajita solidaria
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FBF7F2] max-w-lg w-full rounded-3xl p-8 shadow-2xl border border-[#B9A3D6]/40 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F6E7E7] text-[#4B4453] transition-colors"
              aria-label="Cerrar detalle"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-[#F6E7E7] flex items-center justify-center mb-5">
              {getIcon(selectedService.iconName)}
            </div>

            <h3 className="font-serif-title text-2xl font-bold text-[#7B5EA7] mb-2">
              {selectedService.title}
            </h3>

            <p className="text-sm font-medium text-[#4A6FA5] mb-4">
              {selectedService.shortDesc}
            </p>

            <div className="bg-white p-5 rounded-2xl border border-[#B9A3D6]/30 text-base font-body text-[#4B4453] leading-relaxed mb-6">
              {selectedService.detail}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[#4B4453] hover:bg-[#F6E7E7] transition-colors"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenJoinModal(serviceName);
                }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-colors shadow-xs"
              >
                Participar o coordinar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
