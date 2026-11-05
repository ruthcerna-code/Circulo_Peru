import React from 'react';
import { Heart, Instagram, Mail, MessageCircle, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenJoinModal: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoinModal }) => {
  return (
    <footer className="bg-[#2D223B] text-white pt-16 pb-12 border-t border-[#B9A3D6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Essence */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#B9A3D6]/20 border border-[#B9A3D6]/40 flex items-center justify-center text-xl">
                🦋
              </div>
              <span className="font-serif-title text-2xl font-bold tracking-tight text-white">
                CAD Perú
              </span>
            </div>

            <p className="font-body text-sm text-purple-200/90 leading-relaxed max-w-sm mb-6">
              Círculo de Apoyo ante el Duelo Gestacional, Perinatal y Neonatal. Un abrazo cálido para que ninguna familia en el Perú viva la pérdida de su bebé en soledad ni silencio.
            </p>

            <div className="flex items-center gap-3 text-sm text-[#B9A3D6]">
              <MapPin className="w-4 h-4 text-[#B9A3D6] shrink-0" />
              <span>Presencia activa en Lima y Sullana (Piura)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-title text-base font-bold text-white mb-4">
              Explorar
            </h4>
            <ul className="space-y-2.5 text-sm font-body text-purple-200/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">Quiénes somos</a>
              </li>
              <li>
                <a href="#como-acompanamos" className="hover:text-white transition-colors">Cómo te acompañamos</a>
              </li>
              <li>
                <a href="#tus-derechos" className="hover:text-white transition-colors">Tus derechos (Ley Estrella)</a>
              </li>
              <li>
                <a href="#memoria" className="hover:text-white transition-colors">Espacio de Memoria</a>
              </li>
              <li>
                <a href="#profesionales" className="hover:text-white transition-colors">Profesionales de la salud</a>
              </li>
              <li>
                <a href="#apoya" className="hover:text-white transition-colors">Cómo apoyar</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Social Links */}
          <div className="lg:col-span-4">
            <h4 className="font-serif-title text-base font-bold text-white mb-4">
              Comunidad & Contacto
            </h4>
            <p className="text-sm text-purple-200/80 mb-4">
              Síguenos en nuestras redes donde compartimos lecturas, testimonios y fechas de círculos abiertos:
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7B5EA7] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram de CAD Perú"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={() => onOpenJoinModal('Contacto general')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="WhatsApp de CAD Perú"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <a
                href="mailto:contacto@cadperu.org"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4A6FA5] flex items-center justify-center text-white transition-colors"
                aria-label="Email de contacto"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-purple-200/90 leading-relaxed">
              <p className="font-medium text-white mb-1">💜 No estás sola, no estás solo.</p>
              <p>Si sientes que no puedes más, escríbenos. Siempre habrá un par de brazos abiertos esperando por ti.</p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/70">
          <p className="font-script text-base sm:text-lg text-[#B9A3D6]">
            En memoria de cada mariposa y de cada estrella. Siempre con amor. 🦋✨
          </p>
          <p>
            © {new Date().getFullYear()} CAD Perú · Círculo de Apoyo ante el Duelo Gestacional y Perinatal.
          </p>
        </div>
      </div>
    </footer>
  );
};
