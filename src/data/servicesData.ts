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
    // New fields for premium detail page
    itinerary?: { title: string; subtitle?: string }[];
    tips?: string[];
    galleryKeywords?: string;
    gallery?: string[]; // Array of image paths for the detail page
}

// ============== TRASLADOS DATA ==============
// ============== TRASLADOS DATA ==============
export const TRASLADOS_DATA: ServiceItem[] = [
    {
        id: 'trf-aeropuerto',
        title: 'Aeropuerto FTE IN/OUT',
        price: 30,
        shortDesc: 'Recepción en Aeropuerto y traslado directo a tu hospedaje.',
        fullDesc: 'Olvídate del estrés de llegar a un lugar nuevo. Nuestro servicio comienza con la recepción personalizada en el Aeropuerto Internacional Comandante Armando Tola (FTE). Un chofer profesional te estará esperando con un cartel con tu nombre, listo para asistirte con el equipaje y llevarte directamente a tu hotel en El Calafate.\n\nDisfruta de un viaje cómodo en nuestras unidades modernas, con climatización y espacio de sobra para tu equipaje.',
        image: '/images/aeropuerto-vista-terminal.jpg',
        gallery: [
            '/images/aeropuerto-vista-terminal.jpg',
            '/images/aeropuerto-fachada.png',
            '/images/aeropuerto-pareja.png',
            '/images/aeropuerto-avion.png'
        ],
        category: 'traslados',
        galleryKeywords: 'luxury airport transfer suv luggage chauffeur',
        itinerary: [
            { title: 'Recepción en Aeropuerto', subtitle: 'Tu chofer te espera en el hall de llegadas con un cartel a tu nombre.' },
            { title: 'Asistencia con Equipaje', subtitle: 'Nos encargamos de cargar tus maletas en el vehículo.' },
            { title: 'Traslado Directo', subtitle: 'Viaje seguro y confortable hasta la puerta de tu hotel.' },
            { title: 'Check-in o Despedida', subtitle: 'Te dejamos listo para disfrutar o regresar a casa.' }
        ],
        tips: [
            'Envíanos tu número de vuelo para monitorear posibles demoras.',
            'El precio es por tramo (Ida o Vuelta).',
            'Capacidad máxima: 4 pasajeros con 1 maleta grande y una chica cada uno.'
        ]
    },
    {
        id: 'exc-perito-moreno',
        title: 'Glaciar Perito Moreno',
        price: 150,
        shortDesc: 'Excursión día completo con espera flexible.',
        fullDesc: 'La excursión obligada. Te llevamos al Parque Nacional Los Glaciares (80km) para que vivas una de las maravillas naturales del mundo. A diferencia de los tours grupales, aquí TÚ decides cuánto tiempo quedarte en las pasarelas, cuándo comer y cuándo regresar. Sin apuros, a tu propio ritmo.',
        image: '/images/glaciar-perito.jpg',
        gallery: [
            '/images/glaciar-perito.jpg',
            '/images/glaciar-pasarelas.jpg',
            '/images/glaciar-pm-new-2.jpg',
            '/images/glaciar-pm-new-1.jpg'
        ],
        category: 'traslados',
        duration: 'Día completo (6-8 horas)',
        galleryKeywords: 'glacier ice blue nature patagonia perito moreno',
        itinerary: [
            { title: 'Salida del Hotel', subtitle: 'Horario sugerido: 9:00 AM para evitar multitudes.' },
            { title: 'Ingreso al Parque Nacional', subtitle: 'Compra de entradas y acceso.' },
            { title: 'Curva de los Suspiros', subtitle: 'Primera vista panorámica del Glaciar.' },
            { title: 'Pasarelas Libres', subtitle: 'Tiempo ilimitado para recorrer los balcones.' },
            { title: 'Navegación Opcional', subtitle: 'Si deseas, coordinamos el safari náutico.' },
            { title: 'Regreso', subtitle: 'Vuelta a la ciudad cuando tú lo decidas.' }
        ],
        tips: [
            'Llevar vianda o snacks, los precios en el parque son elevados.',
            'Ropa en capas: el clima cambia rápido frente al hielo.',
            'No olvidar lentes de sol y protector solar.',
            'La entrada al Parque Nacional se paga en el ingreso (Efectivo/Tarjeta).'
        ]
    },
    {
        id: 'exc-chalten-full',
        title: 'El Chaltén Full Day',
        price: 290,
        shortDesc: 'Visita por el día a la montaña.',
        fullDesc: 'Viví El Chaltén al máximo. Una experiencia diseñada para que disfrutes de la Capital Nacional del Trekking con total libertad y sin apuros. Es ideal tanto para quienes buscan caminatas cortas y accesibles, como para quienes desean desafíos más exigentes.\n\nTendrás el tiempo necesario para recorrer senderos emblemáticos como Laguna Capri, Mirador de los Cóndores o Chorrillo del Salto; o incluso para emprender trekkings icónicos como Laguna de los Tres o Cerro Torre.\n\nNosotros nos encargamos de la logística: te llevamos, te esperamos mientras explorás y disfrutas de la gastronomía local, y te traemos de regreso. Comodidad, flexibilidad y naturaleza pura.',
        image: '/images/chalten-full-cover.jpg',
        gallery: [
            '/images/chalten-full-cover.jpg',
            '/images/chalten-full-capri.jpg',
            '/images/chalten-full-chorrillo.jpg',
            '/images/chalten-full-condores.png'
        ],
        category: 'traslados',
        duration: 'Día completo',
        galleryKeywords: 'mountain hiking trekking nature fitz roy',
        itinerary: [
            { title: 'Salida', subtitle: 'Temprano por la mañana (7:00 - 8:00 AM).' },
            { title: 'Llegada a El Chaltén', subtitle: 'Arribo a la base de los senderos.' },
            { title: 'Tiempo Libre', subtitle: 'Recorre senderos autoguiados o disfruta de la gastronomía local.' },
            { title: 'Regreso Programado', subtitle: 'Encuentro para la vuelta a El Calafate.' }
        ]
    },
    {
        id: 'trf-chalten',
        title: 'Traslado a El Chaltén (Ida o Vuelta)',
        price: 200,
        shortDesc: 'Viaje a la Capital Nacional del Trekking (Ruta 40).',
        fullDesc: 'Un viaje escénico por la mítica Ruta 40. Traslado privado exclusivo hacia El Chaltén (aprox 220km). Disfruta de las vistas del Lago Argentino, el Río La Leona y la primera vista imponente del Fitz Roy y el Cerro Torre, con la libertad de detenerte para tomar fotos cuando quieras.',
        image: '/images/chalten-ruta-fitzroy.jpg',
        gallery: [
            '/images/chalten-ruta-fitzroy.jpg',
            '/images/chalten-cartel.jpg',
            '/images/chalten-bus.jpg',
            '/images/chalten-pueblo.png'
        ],
        category: 'traslados',
        galleryKeywords: 'road trip patagonia mountains fitz roy road',
        itinerary: [
            { title: 'Salida de El Calafate', subtitle: 'Te buscamos por tu hotel a la hora pactada.' },
            { title: 'Ruta 40 & Río La Leona', subtitle: 'Cruce del río y parada técnica histórica (opcional).' },
            { title: 'Mirador de los Glaciares', subtitle: 'Primera vista panorámica del lago Viedma y glaciares.' },
            { title: 'Llegada a El Chaltén', subtitle: 'Te dejamos en tu alojamiento al pie de la montaña.' }
        ],
        tips: [
            'Recomendamos salir temprano para aprovechar el día en Chaltén.',
            'Podemos hacer paradas fotográficas a pedido.',
            'Si vas por el día, consulta por la opción de espera.'
        ]
    },
    {
        id: 'trf-puerto-bandera',
        title: 'Puerto Punta Bandera',
        price: 90,
        shortDesc: 'Conexión para navegaciones.',
        fullDesc: 'Traslado privado hacia Puerto Punta Bandera (47 km), el puerto principal para las navegaciones entre los glaciares.\n\nDesde allí se realizan las navegaciones más destacadas del Parque Nacional Los Glaciares, como la Navegación Todo Glaciares (que recorre el brazo norte del Lago Argentino hacia los glaciares Upsala y Spegazzini) y la Experiencia Glaciares Gourmet, entre otras.\n\nLlegamos con la antelación necesaria para que realices el embarque con tranquilidad y disfrutes de una de las experiencias más completas para conocer los imponentes glaciares del sur argentino.',
        image: '/images/puerto-bandera-cover.jpg',
        gallery: [
            '/images/puerto-bandera-cover.jpg',
            '/images/puerto-bandera-aerea.jpg',
            '/images/puerto-bandera-hielo-new.jpg',
            '/images/puerto-bandera-cartel-new.jpg'
        ],
        category: 'traslados',
        galleryKeywords: 'lake port boat glacier patagonia',
        itinerary: [
            { title: 'Pick-up en Hotel', subtitle: 'Coordinado 1 hora antes del embarque.' },
            { title: 'Trayecto al Puerto', subtitle: '47km de ruta asfaltada con vistas al lago.' },
            { title: 'Llegada a Puerto Punta Bandera', subtitle: 'Asistencia para ubicar tu embarcación.' }
        ]
    },
    {
        id: 'exc-bandera-moreno',
        title: 'Puerto Punta Bandera + Glaciar Moreno',
        price: 220,
        shortDesc: 'Dos imperdibles en un solo día.',
        fullDesc: 'El "Combo Perfecto". Comenzamos temprano llevándote a Puerto Bandera para la navegación (Todo Glaciares o Spegazzini). Al regresar del barco, en lugar de volver al pueblo, te llevamos directo a las pasarelas del Perito Moreno. Optimizamos tu día al máximo para que veas todo sin perder tiempo en traslados innecesarios.',
        image: '/images/puerto-bandera-hielo-new.jpg',
        gallery: [
            '/images/puerto-bandera-hielo-new.jpg',
            '/images/puerto-bandera-cartel-new.jpg',
            '/images/puerto-bandera-cover.jpg',
            '/images/puerto-bandera-glaciar-personas.jpg'
        ],
        category: 'traslados',
        galleryKeywords: 'boat glacier lake navigation icebergs',
        itinerary: [
            { title: 'Pick-up Temprano', subtitle: 'Aprox 7:30 AM para llegar al puerto.' },
            { title: 'Navegación', subtitle: 'Experiencia lacustre (ticket no incluido en traslado).' },
            { title: 'Desembarque y Conexión', subtitle: 'Te esperamos en puerto y vamos directo al Glaciar.' },
            { title: 'Pasarelas Perito Moreno', subtitle: 'Visita por la tarde, con menos gente.' },
            { title: 'Regreso Final', subtitle: 'Vuelta al hotel al atardecer.' }
        ]
    },
    {
        id: 'trf-lagoroca',
        title: 'Lago Roca / Estancia Nibepo Aike',
        price: 200,
        shortDesc: 'Día de campo y naturaleza virgen.',
        fullDesc: 'Traslado privado hacia el sector del Lago Roca o Estancia Nibepo Aike, ubicado en la zona sur del Parque Nacional Los Glaciares, ideal para quienes buscan vivir un auténtico día de campo en plena Patagonia.\n\nEsta experiencia está pensada para disfrutar con calma: pasar la tarde al aire libre, compartir un picnic o almuerzo campestre, relajarse y contemplar paisajes únicos de lagos, estepa y montañas.\n\nDurante la jornada tendrás tiempo para recorrer la costa del Lago Roca, realizar caminatas cortas, observar flora y fauna autóctona y disfrutar del entorno natural en un ambiente tranquilo y poco transitado. Es una propuesta perfecta para desconectarse, descansar y vivir la Patagonia de una manera simple, natural y auténtica, sin exigencias físicas.',
        image: '/images/lago-roca-cover.png',
        gallery: [
            '/images/lago-roca-cover.png',
            '/images/lago-roca-horses.jpg',
            '/images/lago-roca-sheep.png',
            '/images/lago-roca-sign.png'
        ],
        category: 'traslados',
        galleryKeywords: 'lake farm nature camping patagonia estancia farm'
    },
    {
        id: 'exc-torres-paine',
        title: 'Torres del Paine (Chile)',
        price: 'Consultar',
        shortDesc: 'Excursión Full Day internacional.',
        fullDesc: 'Una experiencia internacional única que nos lleva a cruzar la frontera hacia Chile para recorrer el imponente Parque Nacional Torres del Paine, uno de los paisajes naturales más reconocidos del mundo.\n\nA lo largo de la jornada visitamos los principales sectores del parque, combinando recorridos panorámicos y paradas estratégicas en miradores naturales.\n\nDurante el trayecto se conocen lugares emblemáticos como Laguna Amarga, Lago Nordenskjöld, Salto Grande, Lago Pehoé y los imponentes Cuernos del Paine, con vistas abiertas a valles, ríos, lagos y formaciones montañosas únicas. El recorrido incluye caminatas cortas de baja dificultad y tiempo suficiente para disfrutar del entorno, tomar fotografías y conectar con la naturaleza.\n\nUna excursión ideal para quienes desean vivir Torres del Paine en profundidad en un solo día, disfrutando de sus paisajes más representativos en una experiencia intensa, completa e inolvidable.',
        image: '/images/torres-paine-cover.jpg',
        gallery: [
            '/images/torres-paine-cover.jpg',
            '/images/torres-paine-lake-bridge.jpg',
            '/images/torres-paine-sign.jpg',
            '/images/torres-paine-guanacos.png'
        ],
        category: 'traslados',
        galleryKeywords: 'mountains patagonia landscape lake nature',
        itinerary: [
            { title: 'Salida de Madrugada', subtitle: '5:30 - 6:00 AM requerida por la distancia.' },
            { title: 'Cruce de Frontera', subtitle: 'Trámites migratorios en Cancha Carrera / Cerro Castillo.' },
            { title: 'Parque Nacional', subtitle: 'Recorrido en vehículo por los miradores.' },
            { title: 'Regreso', subtitle: 'Llegada a El Calafate tarde por la noche.' }
        ],
        tips: [
            'Documentación obligatoria (DNI/Pasaporte) para salir del país.',
            'Verificar requisitos de ingreso a Chile vigentes.',
            'No se permite ingresar alimentos frescos (frutas/carnes) a Chile.'
        ]
    },
    {
        id: 'trf-rio-gallegos',
        title: 'Traslado a Río Gallegos',
        price: 'Consultar',
        shortDesc: 'Capital de Santa Cruz (Ida o Vuelta).',
        fullDesc: 'Traslado privado hacia Río Gallegos (300km). Opción ideal para conexiones aéreas, trámites o visitas a la capital. Un viaje largo realizado con total confort y seguridad.',
        image: '/images/rio-gallegos-sign.jpg',
        gallery: [
            '/images/rio-gallegos-sign.jpg',
            '/images/rio-gallegos-aerial.jpg',
            '/images/rio-gallegos-penguins.png',
            '/images/rio-gallegos-monument.jpg'
        ],
        category: 'traslados',
        galleryKeywords: 'city coast monument penguins patagonia',
        itinerary: [
            { title: 'Salida Programada', subtitle: 'Horario a tu elección.' },
            { title: 'Ruta Provincial 5', subtitle: 'Cruce de la estepa patagónica.' },
            { title: 'Llegada a Río Gallegos', subtitle: 'Destino final en domicilio o aeropuerto.' }
        ]
    },
    {
        id: 'trf-glaciarium',
        title: 'Visita al Glaciarium',
        price: 60,
        shortDesc: 'Museo del Hielo Patagónico.',
        fullDesc: 'Te llevamos y traemos al moderno centro de interpretación Glaciarium. Conoce cómo se forman los glaciares de manera interactiva. Incluye tiempo de espera para que recorras el museo a tu ritmo.',
        image: '/images/glaciarium-exterior.jpg',
        gallery: [
            '/images/glaciarium-exterior.jpg',
            '/images/glaciarium-bar.jpg',
            '/images/glaciarium-igloo.jpg',
            '/images/glaciarium-model.jpg'
        ],
        category: 'traslados',
        galleryKeywords: 'museum ice science architecture education bar',
        itinerary: [
            { title: 'Traslado al Museo', subtitle: 'A solo 10 minutos del centro.' },
            { title: 'Tiempo Libre', subtitle: 'Espera de 1.5 a 2 horas mientras visitas.' },
            { title: 'Regreso al Hotel', subtitle: 'Vuelta directa tras tu visita.' }
        ]
    },
    {
        id: 'exc-walichu',
        title: 'Cuevas del Walichu',
        price: 90,
        shortDesc: 'Historia y pinturas rupestres.',
        fullDesc: 'Un viaje al pasado a orillas del Lago Argentino. Visita las cuevas donde los primeros habitantes dejaron su huella hace miles de años. El sitio cuenta con audioguías y un sendero muy fácil de recorrer. Ideal para combinar con el día de llegada o salida.',
        image: '/images/cuevas-walichu.jpg',
        category: 'traslados',
        duration: '2-3 horas',
        galleryKeywords: 'caves ancient art paintings archaeology lake',
        itinerary: [
            { title: 'Traslado al Sitio', subtitle: 'A 15 minutos del centro.' },
            { title: 'Visita Guiada', subtitle: 'Recorrido por las cuevas y costa del lago.' },
            { title: 'Regreso', subtitle: 'Vuelta al hotel.' }
        ]
    },
    {
        id: 'exc-city-tour',
        title: 'City Tour Panorámico',
        price: 90,
        shortDesc: 'Lo mejor de El Calafate.',
        fullDesc: 'Descubre los rincones de nuestra ciudad. Visitamos la Reserva Laguna Nimez para ver flamencos y aves, la costanera de Bahía Redonda y subimos a la parte alta para tener las mejores vistas panorámicas de El Calafate y el lago.',
        image: '/images/navegacion-lago.jpg',
        category: 'traslados',
        duration: '2-3 horas',
        galleryKeywords: 'city birds lake flamingos sunset',
        itinerary: [
            { title: 'Centro Comercial', subtitle: 'Opcional: final en el centro o en tu hotel.' }
        ]
    }
];

// ============== EXCURSIONES DATA ==============
export const EXCURSIONES_DATA: ServiceItem[] = [
    {
        id: 'exc-minitrekking',
        title: 'Minitrekking (Caminata sobre Hielo)',
        price: 'Consultar',
        shortDesc: 'La experiencia más buscada. Camina sobre el Glaciar Perito Moreno.',
        fullDesc: 'Una aventura inigualable. Inicia con una navegación cruzando el Brazo Rico. Luego, guías de montaña te ayudarán a colocarte los crampones para iniciar una caminata de 1:30 hs sobre la superficie del glaciar, viendo grietas azules, sumideros y lagunas. Incluye visita a pasarelas. Dificultad: Media. Edad: 10 a 65 años.',
        image: '/images/minitrekking.jpg',
        gallery: [
            '/images/minitrekking.jpg',
            '/images/minitrekking-2.jpg',
            '/images/minitrekking-3.jpg',
            '/images/minitrekking-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'minitrekking glacier hiking crampons ice patagonia'
    },
    {
        id: 'exc-big-ice',
        title: 'Big Ice (Trekking Profundo)',
        price: 'Consultar',
        shortDesc: 'Para los amantes del trekking. 4 horas en el corazón del glaciar.',
        fullDesc: 'La versión extrema del Minitrekking. Una caminata intensa de 4 horas explorando el centro del glaciar, donde verás formaciones de hielo increíbles y cuevas azules. Exigencia física alta. Edad: 18 a 50 años. Incluye navegación y pasarelas.',
        image: '/images/big-ice.jpg',
        gallery: [
            '/images/big-ice.jpg',
            '/images/big-ice-2.jpg',
            '/images/big-ice-3.jpg',
            '/images/big-ice-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'ice cave blue glacier climbing adventure'
    },
    {
        id: 'exc-todo-glaciares',
        title: 'Navegación Todo Glaciares',
        price: 160,
        shortDesc: 'Navegación a los glaciares Upsala y Spegazzini.',
        fullDesc: 'Recorre el brazo Norte del Lago Argentino. Visita la barrera de témpanos, el Glaciar Upsala (el más grande) y el impactante Glaciar Spegazzini (el más alto, con paredes de 135m). Barcos modernos con excelente vista.',
        image: '/images/todo-glaciares.jpg',
        gallery: [
            '/images/todo-glaciares.jpg',
            '/images/todo-glaciares-2.jpg',
            '/images/todo-glaciares-3.jpg',
            '/images/todo-glaciares-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'catamaran boat glaciares icebergs lake argentino'
    },
    {
        id: 'exc-kayak',
        title: 'Kayak en el Perito Moreno',
        price: 'Consultar',
        shortDesc: 'Rema frente a la pared del glaciar.',
        fullDesc: 'Una perspectiva única al ras del agua. Navega en kayak frente a las paredes de 70 metros del Perito Moreno con guías expertos. No requiere experiencia previa. Incluye ropa técnica seca.',
        image: '/images/kayak-glaciar.jpg',
        gallery: [
            '/images/kayak-glaciar.jpg',
            '/images/kayak-glaciar-2.jpg',
            '/images/kayak-glaciar-3.jpg',
            '/images/kayak-glaciar-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'kayak water glacier adventure perito moreno'
    },
    {
        id: 'exc-safari-azul',
        title: 'Safari Azul (Tocá el Glaciar)',
        price: 'Consultar',
        shortDesc: 'Navegación y caminata hasta tocar la pared de hielo.',
        fullDesc: 'La alternativa perfecta al Minitrekking para quienes quieren vivir el hielo de cerca sin exigencia física técnica. Navegación de 20 minutos por el Brazo Rico y una caminata guiada de 1:30 hs por un bosque de lengas hasta llegar a la pared lateral del Glaciar Perito Moreno. ¡Podrás tocar el hielo y ver sus intensos colores azules! Incluye brindis y visita a las pasarelas. Apto para todas las edades (6 a 70 años).',
        image: '/images/safari-azul.jpg',
        gallery: [
            '/images/safari-azul.jpg',
            '/images/safari-azul-2.jpg',
            '/images/safari-azul-3.jpg',
            '/images/safari-azul-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'people touching glacier ice wall forest'
    },
    {
        id: 'exc-glaciares-gourmet',
        title: 'Glaciares Gourmet (Crucero María Turquesa)',
        price: 'Consultar',
        shortDesc: 'La navegación más exclusiva del Lago Argentino.',
        fullDesc: 'Una experiencia de lujo a bordo del crucero María Turquesa. Navega hacia los glaciares Upsala, Seco, Heim y Spegazzini con el máximo confort. Incluye almuerzo gourmet a bordo, cubiertas panorámicas y descenso en Puesto de Las Vacas para una caminata corta. Ideal para quienes buscan confort y gastronomía de primer nivel.',
        image: '/images/glaciares-gourmet.jpg',
        gallery: [
            '/images/glaciares-gourmet.jpg',
            '/images/glaciares-gourmet-2.jpg',
            '/images/glaciares-gourmet-3.jpg',
            '/images/glaciares-gourmet-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'luxury cruise food wine glacier view'
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
