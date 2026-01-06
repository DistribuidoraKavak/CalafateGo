import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages for better performance (code splitting)
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Contacto = lazy(() => import('./pages/Contacto'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
                        {/* 404 Catch-all route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default App;
