import React, { useState, useEffect } from 'react';
import { X, Heart, MessageCircle, CheckCircle, Sparkles } from 'lucide-react';

interface ModalUneteProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ModalUnete: React.FC<ModalUneteProps> = ({ isOpen, onClose, initialTopic }) => {
  const [topic, setTopic] = useState('Grupo de apoyo (WhatsApp)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [babyName, setBabyName] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setTopic(initialTopic);
    }
  }, [initialTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setCity('');
    setBabyName('');
    setNotes('');
    onClose();
  };

  const createWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola CAD Perú, me gustaría contactarme con ustedes. Mi nombre es ${name || 'una mamá/papá en búsqueda de apoyo'}. Motivo: ${topic}. ${babyName ? `En memoria de mi bebé ${babyName}.` : ''} Ciudad: ${city || 'Perú'}.`
    );
    return `https://wa.me/51992481054?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#FBF7F2] max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#B9A3D6]/40 relative my-8">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F6E7E7] text-[#4B4453] transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#F6E7E7] flex items-center justify-center text-xl">
                🦋
              </div>
              <h3 className="font-serif-title text-2xl font-bold text-[#7B5EA7]">
                Te recibimos con amor
              </h3>
            </div>
            <p className="text-sm font-body text-[#4B4453]/85 mb-6 leading-relaxed">
              No tienes que dar explicaciones ni apresurarte. Cuéntanos qué necesitas y una madre de nuestro equipo se comunicará contigo con total cariño y reserva.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7B5EA7] mb-1.5">
                  ¿Cómo podemos acompañarte? *
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#B9A3D6]/40 text-[#4B4453] focus:outline-none focus:border-[#7B5EA7] text-sm"
                >
                  <option value="Grupo de apoyo (WhatsApp)">Quiero unirme al Grupo de Apoyo (WhatsApp)</option>
                  <option value="Cajita de Recuerdo">Deseo solicitar una Cajita de Recuerdo para mi bebé</option>
                  <option value="Reuniones virtuales">Información sobre reuniones virtuales mensuales</option>
                  <option value="Encuentros presenciales">Encuentros presenciales (Lima / Sullana)</option>
                  <option value="Orientación Legal / Ley Estrella">Orientación sobre trámites, hospital o Ley Estrella</option>
                  <option value="Apadrinar / Voluntariado">Quiero ser voluntaria / Apadrinar una cajita</option>
                  <option value="Otro motivo">Otro motivo</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7B5EA7] mb-1.5">
                    Tu nombre o cómo llamarte *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Nicole"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#B9A3D6]/40 text-[#4B4453] placeholder-[#4B4453]/40 focus:outline-none focus:border-[#7B5EA7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7B5EA7] mb-1.5">
                    WhatsApp o teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 999 123 456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#B9A3D6]/40 text-[#4B4453] placeholder-[#4B4453]/40 focus:outline-none focus:border-[#7B5EA7] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7B5EA7] mb-1.5">
                    Ciudad / Región
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Lima, Sullana, Piura, Arequipa..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#B9A3D6]/40 text-[#4B4453] placeholder-[#4B4453]/40 focus:outline-none focus:border-[#7B5EA7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7B5EA7] mb-1.5">
                    Nombre de tu bebé (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Si deseas compartirlo..."
                    value={babyName}
                    onChange={(e) => setBabyName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#B9A3D6]/40 text-[#4B4453] placeholder-[#4B4453]/40 focus:outline-none focus:border-[#7B5EA7] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7B5EA7] mb-1.5">
                  ¿Algo que quieras dejarnos saber? (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Sólo si te nace escribirlo..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-[#B9A3D6]/40 text-[#4B4453] placeholder-[#4B4453]/40 focus:outline-none focus:border-[#7B5EA7] text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Escribir por WhatsApp directo</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#7B5EA7] hover:bg-[#684b91] transition-all cursor-pointer shadow-xs"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-serif-title text-2xl font-bold text-[#7B5EA7] mb-2">
              Gracias por acercarte a nuestro círculo
            </h3>

            <p className="font-body text-[#4B4453] text-base leading-relaxed mb-6">
              Hemos recibido tus datos con mucho cuidado y respeto{name ? `, ${name}` : ''}. Una madre facilitadora te escribirá muy pronto por WhatsApp.
              {babyName && (
                <span className="block mt-2 font-serif-title italic text-[#4A6FA5]">
                  Recordamos con ternura a {babyName}. 🦋
                </span>
              )}
            </p>

            <div className="p-4 rounded-2xl bg-[#F6E7E7] border border-[#B9A3D6]/30 mb-6 text-sm text-[#4B4453]">
              Si necesitas hablar ahora mismo o es una emergencia emocional, puedes abrir nuestro chat directo:
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir WhatsApp ahora</span>
              </a>

              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full text-sm font-medium text-[#4B4453] hover:bg-[#F6E7E7] transition-colors"
              >
                Volver a la página
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
