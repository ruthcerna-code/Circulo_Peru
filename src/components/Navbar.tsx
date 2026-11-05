import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes somos', href: '#quienes-somos' },
    { label: 'Cómo acompañamos', href: '#como-acompanamos' },
    { label: 'Tus derechos', href: '#tus-derechos' },
    { label: 'Memoria', href: '#memoria' },
    { label: 'Profesionales', href: '#profesionales' },
    { label: 'Apoya', href: '#apoya' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF7F2]/92 backdrop-blur-md border-b border-[#B9A3D6]/25 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Zone: Circular Logo + Brand Wordmark */}
        <a 
          href="#inicio" 
          className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          aria-label="Logo del Círculo de Apoyo ante el Duelo, CAD Perú"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F6E7E7] via-[#B9A3D6]/40 to-[#7B5EA7]/20 border border-[#7B5EA7]/30 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <span className="text-xl" role="img" aria-label="mariposa">🦋</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-title text-xl font-bold tracking-tight text-[#7B5EA7]">
              CAD Perú
            </span>
            <span className="text-[11px] font-medium text-[#4B4453]/80 tracking-wide uppercase">
              Círculo de Apoyo ante el Duelo
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#4B4453]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#7B5EA7] transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7B5EA7] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenJoinModal}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <Heart className="w-4 h-4 text-[#F6E7E7] fill-current" />
            <span>Únete al círculo</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#4B4453] hover:text-[#7B5EA7] hover:bg-[#F6E7E7] transition-colors"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF7F2] border-b border-[#B9A3D6]/30 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#4B4453]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-[#F6E7E7] hover:text-[#7B5EA7] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#B9A3D6]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-base font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-colors shadow-sm"
              >
                <Heart className="w-4 h-4 text-[#F6E7E7] fill-current" />
                <span>Únete al círculo</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
