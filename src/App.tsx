import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Contacto from './pages/Contacto';

const App: React.FC = () => {
    return (
        <div className="font-sans antialiased">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<ServicesPage />} />
                    <Route path="/experiencia/:id" element={<ServiceDetail />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
