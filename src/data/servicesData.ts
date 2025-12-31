// ============== TYPES ==============
export interface ServiceItem {
    id: string;
    title: string;
    price: number | string;
    shortDesc: string;
    fullDesc: string;
    image: string;
    category: 'traslados' | 'excursiones';
    duration?: string;
}

// ============== TRASLADOS DATA ==============
export const TRASLADOS_DATA: ServiceItem[] = [
    {
        id: 'trf-aeropuerto',
        title: 'Aeropuerto FTE IN/OUT',
        price: 30,
        shortDesc: 'Recepción en Aeropuerto y traslado directo a tu hospedaje.',
        fullDesc: 'El servicio IN comienza con la recepción de los pasajeros en el Aeropuerto Internacional Comandante Armando Tola (FTE). Traslado privado directo hasta su hospedaje. El servicio OUT se realiza coordinando el retiro desde su hospedaje en el horario más conveniente según su vuelo. Capacidad: 4 pax con valijas / 6 sin valijas.',
        image: '/images/traslado-aeropuerto.jpg',
        category: 'traslados',
        duration: '25-40 min'
    },
    {
        id: 'trf-terminal',
        title: 'Terminal de Ómnibus IN/OUT',
        price: 20,
        shortDesc: 'Conexión rápida entre la terminal y tu hotel.',
        fullDesc: 'Recepción en la Terminal de Ómnibus de El Calafate y traslado privado directo hasta su hospedaje. Ideal para quienes llegan con equipaje o en horarios especiales. Coordinamos el retiro con flexibilidad total.',
        image: '/images/traslado-aeropuerto.jpg',
        category: 'traslados',
        duration: '10-15 min'
    },
    {
        id: 'trf-chalten',
        title: 'Traslado a El Chaltén',
        price: 200,
        shortDesc: 'Viaje a la Capital Nacional del Trekking (Ruta 40).',
        fullDesc: 'Traslado privado exclusivo hacia El Chaltén (aprox 220km). Disfruta de las vistas del Fitz Roy y el Cerro Torre en el camino sin esperas ni horarios rígidos de buses regulares.',
        image: '/images/traslado-chalten.jpg',
        category: 'traslados',
        duration: '3-3.5 horas'
    },
    {
        id: 'trf-puerto-bandera',
        title: 'Puerto Bandera (Un tramo)',
        price: 90,
        shortDesc: 'Conexión para navegaciones.',
        fullDesc: 'Traslado privado hacia Puerto Bandera (47km), punto de partida de las navegaciones Todo Glaciares o Spegazzini. Te llevamos con puntualidad para tu embarque.',
        image: '/images/navegacion-lago.jpg',
        category: 'traslados',
        duration: '45-60 min'
    },
    {
        id: 'trf-rio-gallegos',
        title: 'Traslado a Río Gallegos',
        price: 330,
        shortDesc: 'Capital de Santa Cruz (Ida o Vuelta).',
        fullDesc: 'Traslado privado hacia Río Gallegos. Opción ideal para conexiones aéreas, trámites o visitas a la capital. Coordinamos horarios a medida con flexibilidad total.',
        image: '/images/patagonia-4x4.jpg',
        category: 'traslados',
        duration: '4-4.5 horas'
    },
    {
        id: 'trf-glaciarium',
        title: 'Visita al Glaciarium',
        price: 80,
        shortDesc: 'Museo del Hielo Patagónico.',
        fullDesc: 'Te llevamos al centro de interpretación Glaciarium. Conoce cómo se forman los glaciares de manera interactiva. Tiempo de espera incluido para tu visita y regreso al hotel.',
        image: '/images/glaciarium.jpg',
        category: 'traslados',
        duration: '2-3 horas (espera incluida)'
    },
    {
        id: 'trf-lagoroca',
        title: 'Lago Roca / Nibepo Aike',
        price: 180,
        shortDesc: 'Zona sur del Parque Nacional.',
        fullDesc: 'Traslado hacia el sector del Lago Roca o Estancia Nibepo Aike. Ideal para días de campo o trekkings en la zona sur.',
        image: '/images/patagonia-4x4.jpg',
        category: 'traslados',
        duration: '1-1.5 horas'
    }
];

// ============== EXCURSIONES DATA ==============
export const EXCURSIONES_DATA: ServiceItem[] = [
    {
        id: 'exc-perito-moreno',
        title: 'Glaciar Perito Moreno',
        price: 140,
        shortDesc: 'Excursión día completo con espera flexible.',
        fullDesc: 'Recorrido de 80km hasta el Parque Nacional. Podrán caminar libremente por las pasarelas el tiempo que deseen. Sin límite de horas de espera ni horarios rígidos de regreso. Opcional: Navegación cara norte.',
        image: '/images/glaciar-perito.jpg',
        category: 'excursiones',
        duration: 'Día completo (6-8 horas)'
    },
    {
        id: 'exc-bandera-moreno',
        title: 'Puerto Bandera + Glaciar Moreno',
        price: 220,
        shortDesc: 'Dos imperdibles en un solo día.',
        fullDesc: 'Combina la navegación por el Lago Argentino (saliendo de Puerto Bandera) con la visita a las pasarelas del Perito Moreno. Optimizamos tu tiempo con un traslado privado que conecta ambos puntos.',
        image: '/images/navegacion-lago.jpg',
        category: 'excursiones',
        duration: 'Día completo (10-12 horas)'
    },
    {
        id: 'exc-chalten-full',
        title: 'El Chaltén Full Day',
        price: 280,
        shortDesc: 'Visita por el día a la montaña.',
        fullDesc: 'Ida y vuelta en el día. Ideal para realizar caminatas cortas (Chorrillo del Salto, Mirador de los Cóndores) o disfrutar del pueblo. Regreso coordinado según tus tiempos.',
        image: '/images/traslado-chalten.jpg',
        category: 'excursiones',
        duration: 'Día completo (12-14 horas)'
    },
    {
        id: 'exc-torres-paine',
        title: 'Torres del Paine (Chile)',
        price: 'Consultar',
        shortDesc: 'Excursión Full Day internacional.',
        fullDesc: 'Cruce de frontera por Cancha Carrera. Recorrido por los puntos panorámicos del Parque Nacional Torres del Paine (Lago Toro, Río Serrano, Cuernos del Paine, Laguna Amarga). Jornada completa con regreso aprox 21hs.',
        image: '/images/torres-paine.jpg',
        category: 'excursiones',
        duration: 'Día completo (14-16 horas)'
    },
    {
        id: 'exc-walichu',
        title: 'Cuevas del Walichu',
        price: 90,
        shortDesc: 'Historia y pinturas rupestres.',
        fullDesc: 'Visita al sitio arqueológico a orillas del Lago Argentino. Recorrido por las cuevas con pinturas rupestres y vistas panorámicas. Experiencia sin apuros.',
        image: '/images/cuevas-walichu.jpg',
        category: 'excursiones',
        duration: '2-3 horas'
    },
    {
        id: 'exc-city-tour',
        title: 'City Tour Panorámico',
        price: 90,
        shortDesc: 'Lo mejor de El Calafate.',
        fullDesc: 'Recorrido por Laguna Nimez (aves), Bahía Redonda, Cisnes de cuello negro y miradores de la ciudad. Ideal para el día de llegada o partida.',
        image: '/images/navegacion-lago.jpg',
        category: 'excursiones',
        duration: '2-3 horas'
    }
];

// ============== HELPER FUNCTIONS ==============
export const ALL_SERVICES: ServiceItem[] = [...TRASLADOS_DATA, ...EXCURSIONES_DATA];

export const getServiceById = (id: string): ServiceItem | undefined => {
    return ALL_SERVICES.find(service => service.id === id);
};

export const getServicesByCategory = (category: 'traslados' | 'excursiones'): ServiceItem[] => {
    return ALL_SERVICES.filter(service => service.category === category);
};
