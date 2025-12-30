import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, Traslados, Excursiones, Contacto } from './pages';

const App: React.FC = () => {
    return (
        <div className="font-sans antialiased">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/traslados" element={<Traslados />} />
                    <Route path="/excursiones" element={<Excursiones />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
