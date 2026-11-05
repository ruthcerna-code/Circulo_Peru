/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BienvenidaPerdida } from './components/BienvenidaPerdida';
import { QuienesSomos } from './components/QuienesSomos';
import { MisionValores } from './components/MisionValores';
import { ComoAcompanamos } from './components/ComoAcompanamos';
import { TusDerechosLeyEstrella } from './components/TusDerechosLeyEstrella';
import { EspacioMemoria } from './components/EspacioMemoria';
import { ProfesionalesSalud } from './components/ProfesionalesSalud';
import { Apoya } from './components/Apoya';
import { Footer } from './components/Footer';
import { ModalUnete } from './components/ModalUnete';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string | undefined>(undefined);

  const handleOpenJoinModal = (topic?: string) => {
    setModalTopic(topic);
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
    setModalTopic(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F2] text-[#4B4453] selection:bg-[#B9A3D6]/30 selection:text-[#7B5EA7]">
      {/* Fixed Navigation Header */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal('Grupo de apoyo (WhatsApp)')} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Cover */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal('Grupo de apoyo (WhatsApp)')} />

        {/* 2. Welcome for anyone who just suffered a loss */}
        <BienvenidaPerdida onOpenJoinModal={() => handleOpenJoinModal('Acabo de vivir una pérdida')} />

        {/* 3. Quiénes somos & Fundadoras */}
        <QuienesSomos />

        {/* 4. Misión y Valores */}
        <MisionValores />

        {/* 5. Cómo acompañamos (Grilla 6 tarjetas) */}
        <ComoAcompanamos onOpenJoinModal={handleOpenJoinModal} />

        {/* 6. Tus derechos y la Ley Estrella */}
        <TusDerechosLeyEstrella onOpenJoinModal={handleOpenJoinModal} />

        {/* 7. Espacio de Memoria / Enciende una velita */}
        <EspacioMemoria />

        {/* 8. Profesionales de la salud & Código Mariposa */}
        <ProfesionalesSalud onOpenJoinModal={handleOpenJoinModal} />

        {/* 9. Apoya a CAD Perú (Donaciones & Voluntariado) */}
        <Apoya onOpenJoinModal={handleOpenJoinModal} />
      </main>

      {/* Footer */}
      <Footer onOpenJoinModal={handleOpenJoinModal} />

      {/* Compassionate Join / Contact Modal */}
      <ModalUnete
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        initialTopic={modalTopic}
      />
    </div>
  );
}
