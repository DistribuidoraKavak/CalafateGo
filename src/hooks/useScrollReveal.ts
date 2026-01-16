import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');

        const revealOnScroll = () => {
            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 150;

                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Check on mount

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);
};
