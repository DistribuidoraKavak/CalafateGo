import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Lazy load pages for better performance (code splitting)
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Contacto = lazy(() => import('./pages/Contacto'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading fallback component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
            <div className="w-12 h-12 border-4 border-ice border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-500 font-medium">Cargando...</p>
        </div>
    </div>
);

const App: React.FC = () => {
    return (
        <div className="font-sans antialiased">
            <Header />
            <main>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/nosotros" element={<AboutUs />} />
                        <Route path="/servicios" element={<ServicesPage />} />
                        <Route path="/experiencia/:id" element={<ServiceDetail />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/privacidad" element={<PrivacyPolicy />} />
                        <Route path="/terminos" element={<Terms />} />
                        {/* 404 Catch-all route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default App;
