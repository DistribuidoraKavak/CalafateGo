import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Home, Traslados, Excursiones, Contacto } from './src/pages';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-navy">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traslados" element={<Traslados />} />
          <Route path="/excursiones" element={<Excursiones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
