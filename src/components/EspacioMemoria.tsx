import React, { useState } from 'react';
import { INITIAL_MEMORIAL_ENTRIES, MemorialEntry } from '../data/cadData';
import { Sparkles, Heart, Plus, Search, Flame } from 'lucide-react';

export const EspacioMemoria: React.FC = () => {
  const [entries, setEntries] = useState<MemorialEntry[]>(INITIAL_MEMORIAL_ENTRIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [justLitBaby, setJustLitBaby] = useState<string | null>(null);

  // Form State
  const [babyName, setBabyName] = useState('');
  const [parentsOrFamily, setParentsOrFamily] = useState('');
  const [message, setMessage] = useState('');
  const [city, setCity] = useState('');

  const handleLightCandle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!babyName.trim() || !message.trim()) return;

    const newEntry: MemorialEntry = {
      id: Date.now().toString(),
      babyName: babyName.trim(),
      parentsOrFamily: parentsOrFamily.trim() || 'Familia con amor',
      message: message.trim(),
      city: city.trim() || 'Perú',
      dateStr: 'Hoy',
      createdAt: Date.now(),
    };

    setEntries([newEntry, ...entries]);
    setJustLitBaby(newEntry.babyName);
    setBabyName('');
    setParentsOrFamily('');
    setMessage('');
    setCity('');
    setIsFormOpen(false);

    setTimeout(() => {
      setJustLitBaby(null);
    }, 6000);
  };

  const filteredEntries = entries.filter((e) => {
    const q = searchQuery.toLowerCase();
    return (
      e.babyName.toLowerCase().includes(q) ||
      e.parentsOrFamily.toLowerCase().includes(q) ||
      e.message.toLowerCase().includes(q) ||
      (e.city && e.city.toLowerCase().includes(q))
    );
  });

  return (
    <section id="memoria" className="py-24 bg-gradient-to-b from-[#241B35] via-[#2F2247] to-[#1F172E] text-white relative overflow-hidden">
      {/* Background illustration overlay with starry night & luminous butterflies */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
        <img
          src="/src/assets/images/cad_starry_memorial_1793922116119.jpg"
          alt="Cielo estrellado de fondo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#B9A3D6] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Espacio de Memoria & Resignificación</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-5xl font-normal tracking-tight mb-4 text-white">
            El Cielo de <span className="font-script text-4xl sm:text-6xl text-[#B9A3D6] font-semibold">nuestras estrellas</span>
          </h2>

          <p className="font-body text-lg text-purple-200/90 leading-relaxed max-w-2xl mx-auto">
            Nombramos a cada bebé porque existieron, cambiaron nuestro mundo y vivirán por siempre en nuestra memoria.
          </p>

          {/* Action to open Candle Form */}
          <div className="mt-8">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-[#241B35] bg-[#B9A3D6] hover:bg-white active:scale-98 transition-all shadow-lg cursor-pointer"
            >
              <Flame className="w-5 h-5 text-amber-600 fill-amber-500 animate-candle-flicker" />
              <span>Enciende una velita por tu bebé estrella</span>
            </button>
          </div>
        </div>

        {/* Confirmation banner when a candle was just lit */}
        {justLitBaby && (
          <div className="mb-10 max-w-xl mx-auto p-4 rounded-2xl bg-[#7B5EA7]/50 border border-[#B9A3D6]/60 text-center animate-in fade-in zoom-in-95 duration-300">
            <p className="text-sm font-medium text-purple-100 flex items-center justify-center gap-2">
              <span className="text-xl">🕯️</span>
              <span>La velita por <strong>{justLitBaby}</strong> ha sido encendida en nuestro firmamento. Gracias por compartir su luz con nosotros.</span>
            </p>
          </div>
        )}

        {/* Candle Lighting Form Modal / Card */}
        {isFormOpen && (
          <div className="mb-16 max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl animate-in fade-in duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕯️</span>
                <h3 className="font-serif-title text-2xl font-bold text-white">
                  Enciende una luz de amor
                </h3>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-white/60 hover:text-white text-sm"
              >
                Cerrar
              </button>
            </div>

            <form onSubmit={handleLightCandle} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                  Nombre de tu bebé *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Sofía, Mateo, Mi angelito..."
                  value={babyName}
                  onChange={(e) => setBabyName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B9A3D6] text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                    De parte de
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Mamá y Papá, Familia..."
                    value={parentsOrFamily}
                    onChange={(e) => setParentsOrFamily(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B9A3D6] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                    Ciudad / Región
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Lima, Sullana, Cusco..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B9A3D6] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-1.5">
                  Mensaje o dedicatoria *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Escribe lo que sientes en el corazón para tu bebé..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#B9A3D6] text-base resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2.5 rounded-full text-sm text-purple-200 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full text-sm font-semibold text-[#241B35] bg-[#B9A3D6] hover:bg-white transition-all shadow-md cursor-pointer"
                >
                  Encender velita 🦋
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search / Filter Filter bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/15">
          <div className="flex items-center gap-3">
            <span className="text-xl">✨</span>
            <p className="text-sm text-purple-200">
              <strong className="text-white">{entries.length}</strong> luces encendidas con amor en esta constelación
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nombre o ciudad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#B9A3D6]"
            />
          </div>
        </div>

        {/* Memorial Constellation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 rounded-3xl p-6 border border-white/15 flex flex-col justify-between group hover:border-[#B9A3D6]/50 shadow-md"
            >
              <div>
                {/* Header with candle and baby name */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-300/40 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-amber-300 fill-amber-300/80 animate-candle-flicker" />
                    </div>
                    <div>
                      <h4 className="font-serif-title text-xl font-bold text-white group-hover:text-[#B9A3D6] transition-colors">
                        {entry.babyName}
                      </h4>
                      <p className="text-xs text-purple-300">
                        {entry.parentsOrFamily}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    🦋
                  </span>
                </div>

                {/* Tender Message */}
                <p className="font-body text-[15px] text-purple-100/90 leading-relaxed italic mb-4">
                  “{entry.message}”
                </p>
              </div>

              {/* Footer info: City & Date */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-purple-300/75 font-body">
                <span>{entry.city || 'Perú'}</span>
                <span>{entry.dateStr || 'En el corazón'}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <div className="text-center py-12 text-purple-200">
            <p>No se encontraron velitas con ese nombre.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-sm text-[#B9A3D6] underline hover:text-white"
            >
              Mostrar todas las velitas
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
