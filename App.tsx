import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './src/pages/Home';
import ServicesPage from './src/pages/ServicesPage';
import ServiceDetail from './src/pages/ServiceDetail';
import Contacto from './src/pages/Contacto';
import AboutUs from './src/pages/AboutUs';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-navy">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/experiencia/:id" element={<ServiceDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Redirect old routes to new unified services page */}
          <Route path="/traslados" element={<ServicesPage />} />
          <Route path="/excursiones" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
