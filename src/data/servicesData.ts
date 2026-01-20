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
    activityDetails?: {
        duration?: string;
        season?: string;
        languages?: string;
        optional?: string;
        requirements?: string[];
        included?: string[];
        notIncluded?: string[];
        difficulty?: string;
    };
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
        image: '/images/puerto-bandera-aerea.jpg',
        gallery: [
            '/images/puerto-bandera-aerea.jpg',
            '/images/puerto-bandera-cover.jpg',
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
        image: '/images/puerto-bandera-hielo.jpg',
        gallery: [
            '/images/puerto-bandera-hielo.jpg',
            '/images/puerto-bandera-cartel.jpg',
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
        title: 'Traslado Cuevas del Walichu',
        price: 60,
        shortDesc: 'Traslado ida y vuelta a las Cuevas del Walichu.',
        fullDesc: 'Te llevamos y buscamos de las famosas Cuevas del Walichu, ubicadas a orillas del Lago Argentino a solo 15 minutos del centro de El Calafate. Este servicio incluye únicamente el traslado ida y vuelta desde tu hotel.\n\nUna vez en el lugar, podrás adquirir tu entrada y realizar la visita guiada por tu cuenta. El sitio cuenta con audioguías disponibles y un sendero muy fácil de recorrer donde podrás apreciar arte rupestre de miles de años de antigüedad.\n\nIdeal para combinar con el día de llegada o salida. Te esperamos en el estacionamiento del sitio a la hora acordada para el regreso.',
        image: '/images/walichu-landscape.png',
        gallery: [
            '/images/walichu-landscape.png',
            '/images/walichu-rupestre.jpg',
            '/images/walichu-cave.png',
            '/images/walichu-guide.jpg'
        ],
        category: 'traslados',
        duration: '2-3 horas (tiempo libre en el sitio)',
        galleryKeywords: 'caves ancient art paintings archaeology lake',
        itinerary: [
            { title: 'Pick up en Hotel', subtitle: 'Te buscamos en tu alojamiento.' },
            { title: 'Traslado al Sitio', subtitle: 'A 15 minutos del centro de El Calafate.' },
            { title: 'Tiempo Libre', subtitle: 'Adquirí tu entrada y recorré las cuevas por tu cuenta.' },
            { title: 'Regreso', subtitle: 'Te esperamos para llevarte de vuelta al hotel.' }
        ],
        activityDetails: {
            notIncluded: [
                'Entrada al sitio',
                'Visita guiada'
            ]
        }
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
        fullDesc: 'La excursión comienza con la búsqueda de los pasajeros en El Calafate. En nuestros confortables buses, camino al Parque Nacional Los Glaciares, los guías de turismo les brindarán información sobre el lugar, el glaciar y la excursión.\n\nUna vez en el Puerto “Bajo de las Sombras” (Ruta 11, a 70 km de El Calafate) se embarca para cruzar el Lago Rico, llegando a la costa opuesta luego de aproximadamente 10 minutos de navegación frente a la imponente pared sur del Glaciar Perito Moreno.\n\nAl desembarcar en la Bahía Puma, a solo 500mts del Glaciar, serán recibidos por nuestros expertos guías de montaña. A partir de aquí, comenzaremos el recorrido con una caminata de una hora aproximadamente por la costa del lago y luego por la morena al lado del hielo (terreno de rocas y tierra inestable).\n\nAl llegar al borde del glaciar, con las sorprendentes tonalidades azules del hielo, se organizarán subgrupos de un máximo de 20 personas cada uno y se les colocarán los crampones y cascos provistos por la empresa a pocos metros de la hermosa Cascada de las Cotorras. Esta excursión es altamente personalizada (un guía cada 10 pasajeros máximo). Una vez sobre el glaciar, recibirán una charla de seguridad y exploraremos juntos durante una hora aprox. este paraíso helado, declarado Patrimonio de la Humanidad (1981).\n\nEl circuito sobre el glaciar es de dificultad media/alta, la superficie del hielo es irregular pero firme y segura. El ritmo de marcha es constante y se recorren 5.5 km aprox. en terreno de rocas, tierra y hielo con crampones (El mini normal es 3.5km de recorrido). El tiempo de caminata total es de 4 horas aproximadamente.\n\nDurante la caminata se podrá apreciar las formaciones típicas y cambiantes de un glaciar como profundas grietas, sumideros azules, enormes seracs y lagunas turquesas. Siempre acompañados del sonido único de los crampones clavándose en el hielo.\n\nAl finalizar la caminata sobre el hielo, se visitará la base del salto de agua, desde donde caminaremos de regreso por la morena lateral hasta llegar nuevamente a la Bahía Puma. Una vez allí, embarcaremos de regreso hacia el Puerto Bajo de las Sombras, siempre mirando la pared de hielo por si nos sorprende con un estruendoso desprendimiento.\n\nLa duración de la excursión con el traslado desde El Calafate, es de 10 horas aproximadamente e incluye la visita de alrededor de 1 hora a las pasarelas del Glaciar Perito Moreno, ubicadas a 7 km de nuestro Puerto. Allí podrán disfrutar de la espectacular vista panorámica del glaciar y recorrer alguno de los senderos autoguiados. En caso de no optar por nuestro transporte con visita a pasarelas e ir por sus propios medios, esta excursión dura 5 h aprox., saliendo desde el Puerto y regresando al mismo punto de partida.\n\nEsta excursión se realiza en un ambiente natural por lo cual las condiciones climáticas y características del glaciar y sus alrededores cambian diariamente.\n\nSin embargo, no se suspende, mientras que las condiciones de seguridad lo permitan.\n\nLas salidas durante el mes de mayo, están sujetas a las condiciones climáticas y del terreno. ¡Los esperamos!',
        image: '/images/minitrekking-cover-new.jpg',
        gallery: [
            '/images/minitrekking-cover-new.jpg',
            '/images/minitrekking-2-new.jpg',
            '/images/minitrekking-3-new.jpg',
            '/images/minitrekking-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'minitrekking glacier hiking crampons ice patagonia',
        activityDetails: {
            duration: '10hs aprox. (No organizar otros planes)',
            season: '15 de Agosto al 30 de Abril',
            languages: 'Español e Inglés',
            optional: 'Traslado con guía y visita a pasarelas (1h)',
            difficulty: 'Media/Alta',
            requirements: [
                'Edad: 18 a 55 años (Sin excepción)',
                'No apto para personas sedentarias',
                'Capacidad para caminar 3hs constantes'
            ],
            notIncluded: [
                'Entrada al Parque Nacional',
                'Comida y bebida',
                'Ropa personal (frío/lluvia)'
            ]
        }
    },
    {
        id: 'exc-big-ice',
        title: 'Big Ice (Trekking Profundo)',
        price: 'Consultar',
        shortDesc: 'Para los amantes del trekking. 4 horas en el corazón del glaciar.',
        fullDesc: 'El Big Ice es una excursión de día completo que comienza con la búsqueda de los pasajeros en El Calafate. En nuestros confortables buses, camino al Parque Nacional Los Glaciares, los guías de turismo les brindarán información sobre la actividad, el lugar y el glaciar.\n\nUna vez en el puerto “Bajo de las Sombras” (Ruta 11, a 70 km de El Calafate) embarcarán para cruzar el Lago Rico, llegando a la costa opuesta luego de aproximadamente 20 minutos de navegación frente a la imponente cara sur del Glaciar Perito Moreno.\n\nAl llegar al refugio el grupo será recibido por expertos guías de montaña, quienes los dividirán en subgrupos y los acompañarán durante todo el recorrido. El trekking comienza con una caminata por la morrena de aproximadamente 2 horas, donde se podrán observar diferentes vistas panorámicas del glaciar y del bosque.\n\nEl Big Ice es una excursión altamente personalizada: los grupos sobre el hielo serán de hasta 10 personas, acompañados por dos guías de montaña quienes les colocarán los crampones, cascos y arneses y les explicarán las normas básicas de seguridad.\n\nLa exigencia física es alta tanto en el bosque como sobre el hielo, donde la superficie es irregular pero firme y segura.\n\nUna vez en el glaciar y con los crampones puestos, el mundo toma una nueva perspectiva: lagunas azules, profundas grietas, enormes sumideros, mágicas cuevas, y la sensación única de sentirse en el corazón del glaciar.\n\nExplorarán durante tres horas aproximadamente los rincones del glaciar más especial del mundo. Durante el recorrido, los guías de montaña los ayudarán a conocer mejor el hielo, su entorno y podrán dimensionar la magnitud del glaciar y disfrutar de la vista de las montañas aledañas, como los cerros Dos Picos, Pietrobelli y Cervantes. Además, contarán con media hora para almorzar y sorprenderse en un lugar de inigualable belleza.\n\nAl finalizar la caminata sobre el glaciar, emprenderán el regreso por el mismo camino hasta llegar al Refugio, donde tendrán unos minutos para contemplar este lugar de inigualable belleza. Al tomar la embarcación de regreso, navegarán muy cerca de la cara sur del Glaciar Perito Moreno para luego volver a la “civilización”, ¡después de haber disfrutado uno de los treks sobre hielo más espectaculares del mundo!\n\nLa duración de la excursión con el traslado es de alrededor de doce horas en total e incluye la visita guiada de una hora aproximadamente a las pasarelas del Glaciar Perito Moreno, a 7 km del puerto. Allí podrán disfrutar de la espectacular vista panorámica del glaciar y recorrer alguno de los senderos auto-guiados. En caso de no optar por nuestro transporte e ir por sus propios medios, el Big Ice dura siete horas y media aproximadamente, saliendo desde el Puerto y regresando al mismo punto de partida.\n\nEl Big Ice se realiza en un ambiente natural por lo cual las condiciones climáticas y características del glaciar y sus alrededores cambian diariamente. Sin embargo, la excursión no se suspende, mientras que las condiciones de seguridad lo permitan. ¡Los esperamos!',
        image: '/images/big-ice.jpg',
        gallery: [
            '/images/big-ice.jpg',
            '/images/big-ice-2.jpg',
            '/images/big-ice-3.jpg',
            '/images/big-ice-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'big ice glacier trekking extreme adventure',
        activityDetails: {
            duration: 'Todo el día (7.5hs caminata)',
            season: '15 de Septiembre al 30 de Abril',
            languages: 'Español e Inglés',
            optional: 'Traslado con guía y visita a pasarelas (1h)',
            difficulty: 'Alta',
            requirements: [
                'Edad: 18 a 50 años (Sin excepción)',
                'Complejidad ALTA',
                'Capacidad para caminar 7.5hs constantes'
            ],
            notIncluded: [
                'Entrada al Parque Nacional',
                'Comida y bebida',
                'Ropa personal (frío/lluvia)'
            ]
        }
    },
    {
        id: 'exc-todo-glaciares',
        title: 'Navegación Todo Glaciares',
        price: 'Consultar',
        shortDesc: 'Navegación a los glaciares Upsala y Spegazzini.',
        fullDesc: 'Zarpamos desde el Puerto Punta Bandera a 47km de la ciudad de El Calafate. Cuando llegues, te daremos la bienvenida en nuestra cálida terminal de embarque. Nuestro experimentado equipo te indicará cómo realizar el proceso de pre-embarque, para comenzar tu mejor experiencia en glaciares. Si para este momento, aún no tenés la entrada al Parque Nacional Los Glaciares, te indicaremos dónde podrás adquirirla. En cada momento estaremos brindándote el mejor servicio para que vivas un momento inolvidable y puedas dedicarte a disfrutar de cada detalle de la experiencia.\n\nUna vez a bordo de nuestras confortables embarcaciones, Todo Glaciares inicia navegando por el Brazo Norte del Lago Argentino, atravesando la Boca del Diablo, dirigiéndose hacia el Canal Upsala para vivir la sensación inigualable de navegar entre témpanos, algunos de muy gran tamaño, que se desprenden del Glaciar Upsala. ¡Una experiencia realmente maravillosa y única!\n\nLuego, navegaremos hacia el Canal Spegazzini, que te ofrecerá vistas únicas de increíbles glaciares colgantes como el Glaciar Seco, el Glaciar Heim Sur y el Glaciar Peineta, que son la antesala del espectáculo mayor: el imponente Glaciar Spegazzini. El más grande de todos, que te espera para ofrecerte una majestuosa vista con su alto de más de 135 metros.\n\nY para coronar ese momento, descenderemos en la Base Spegazzini justo frente al Glaciar, para disfrutar de nuestro moderno Refugio Spegazzini, que cuenta con todos los servicios que necesitás durante tu jornada y que te permitirá vivir momentos realmente únicos, con sus vistas panorámicas deslumbrantes. Opcionalmente, podrás degustar exquisitos menús regionales con variantes para todos los gustos.\n\nTenemos implementada una infraestructura 100% accesible que permite que no existan limitaciones. Contamos con rampas de acceso, elevador en muelle de Punta Bandera, muelle flotante para desembarque en Base Spegazzini y sanitarios adaptados en embarcaciones y en el Refugio Spegazzini. Nuestros senderos y sus miradores también son 100% accesibles.\n\nPor si fuera poco, ya hemos inaugurado las nuevas pasarelas del Glaciar Spegazzini y el Mirador de Agostini, el cual permite disfrutar una vista magnánima del glaciar más alto del Parque Nacional Los Glaciares. Absolutamente imperdible, una obra en completa armonía con la naturaleza y la conservación.\n\nTODO GLACIARES es mucho más que una navegación. Es una experiencia difícil de comparar por lo única que es y por tanto, es muy difícil de ser descrita por palabras. Estamos seguros de que jamás la olvidarás. Tenés que estar allí para vivirla.',
        image: '/images/todo-glaciares-3.jpg',
        gallery: [
            '/images/todo-glaciares-3.jpg',
            '/images/todo-glaciares-2.jpg',
            '/images/todo-glaciares-costa.jpg',
            '/images/todo-glaciares-deck.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'catamaran boat glaciares icebergs lake argentino',
        activityDetails: {
            duration: 'Día Completo (Aprox. 8hs)',
            season: 'Todo el año',
            languages: 'Español e Inglés',
            included: [
                'Navegación frente al Glaciar Upsala y Spegazzini',
                'Desembarque en Bahía de los Glaciares',
                'Guía durante toda la navegación',
                'Cancelación gratis hasta 24 horas antes del inicio del tour'
            ],
            notIncluded: [
                'Ticket de acceso al Parque Nacional'
            ]
        }
    },
    {
        id: 'exc-kayak',
        title: 'Darwin Experience (Kayak)',
        price: 'Consultar',
        shortDesc: 'Aventura en kayak por el histórico Río Santa Cruz.',
        fullDesc: 'Viví la historia y la naturaleza en primera persona remando por el mítico Río Santa Cruz, siguiendo la ruta que realizó Charles Darwin. Una experiencia que combina aventura, paisajes esteparios y un almuerzo patagónico en una estancia histórica.\n\nLa jornada comienza con el pick-up por tu hotel para trasladarnos hacia la orilla del río. Allí, nuestros guías expertos te proveerán de todo el equipo técnico necesario (trajes secos Gore-Tex, chalecos, botas) y brindarán una charla de seguridad y técnica de remo.\n\nNavegaremos en kayaks dobles a favor de la corriente, disfrutando de la inmensidad de la estepa y las aguas color turquesa del río glaciar. Al finalizar la remada, compartiremos un delicioso almuerzo en una estancia típica, completando un día inolvidable de conexión con la Patagonia más auténtica.',
        image: '/images/darwin-kayak-cover.jpg',
        gallery: [
            '/images/darwin-kayak-cover.jpg',
            '/images/kayak-glaciar-2.jpg',
            '/images/kayak-glaciar-3.jpg',
            '/images/darwin-kayak-river.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'kayak river santa cruz darwin adventure',
        activityDetails: {
            duration: '5 horas',
            season: 'Todo el año',
            languages: 'Español e Inglés',
            difficulty: 'Media',
            included: [
                'Traslados Desde/Hacia Hotel',
                'Almuerzo',
                'Coordinador permanente y guías locales',
                'Asistencia médica de emergencia',
                'Kayaks dobles y equipo técnico completo',
                'Cancelación gratis hasta 24 horas antes'
            ],
            requirements: [
                'Edad mínima 16 años',
                'No apto para embarazadas',
                'No apto para movilidad reducida',
                'No se aceptan personas con sobrepeso',
                'Sujeto a cupo mínimo de pasajeros'
            ]
        }
    },
    {
        id: 'exc-safari-azul',
        title: 'Safari Azul (Tocá el Glaciar)',
        price: 'Consultar',
        shortDesc: 'Navegación y caminata hasta tocar la pared de hielo.',
        fullDesc: 'El Safari Azul está pensado para aquellos que, además de navegar frente al Glaciar Perito Moreno, sueñan con acercarse al hielo glaciar!\n\nLa excursión comienza en El Calafate cuando el bus parte con destino al Parque Nacional Los Glaciares. Una vez en el Puerto Bajo de las Sombras, a solo 7 km de las pasarelas, tomaremos un barco para cruzar el Lago Rico y, luego de navegar 20 minutos, desembarcaremos en la costa opuesta.\n\nPoco a poco caminaremos por 30 minutos siempre con vista a la pared sur del Glaciar por si nos sorprende algún estruendoso desprendimiento. Una vez al lado del hielo será tiempo de una experiencia inolvidable… ¡Podremos disfrutar plenamente de sus intensos y variados azules, blancos y sus caprichosas formas.\n\nTendremos tiempo para tomar muchas fotos y luego regresaremos al lugar de embarque siempre acompañados por un guía experimentado. La caminata total es de 1.30 hs aproximadamente por un terreno natural de arena y piedras con alguna pendientes y escaleras. El recorrido, de un kilometro y medio, será por la costa del lago y por un frondoso bosque con vista al Glaciar.\n\nFinalmente tomaremos el barco para apreciar desde el agua y, a pocos metros de distancia, toda la cara sur del glaciar y poder ver cada detalle de la marmolada pared helada.\n\nUna vez en el puerto, en caso de haber contratado el servicio de transfer con Hielo y Aventura, tomaremos el bus hacia las pasarelas donde tendremos 2 horas para disfrutar la increíble vista panorámica. En caso de haberse trasladado por sus propios medios, podrá optar libremente por el tiempo de visita en las pasarelas. Además, podrán aprovechar este tiempo para consumir la vianda que deberán traer desde El Calafate.\n\nLlegaremos a El Calafate luego de recorrer la estepa patagónica, con el alma cargada de la energía natural de este glaciar único. ¡Estamos ansiosos por ser sus anfitriones!\n\nEl Safari Azul se realiza en un ambiente natural por lo cual las condiciones climáticas y características del glaciar y sus alrededores cambian diariamente. Sin embargo, la excursión no se suspende, mientras que las condiciones de seguridad lo permitan. ¡Los esperamos!',
        image: '/images/safari-azul-kids.jpg',
        gallery: [
            '/images/safari-azul-kids.jpg',
            '/images/safari-azul-3.jpg',
            '/images/safari-azul-cave.jpg',
            '/images/safari-azul-4.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'people touching glacier ice wall forest',
        activityDetails: {
            duration: '9hs (Con traslados) / 3hs (Sin traslados)',
            season: 'Todo el año',
            languages: 'Español e Inglés',
            difficulty: 'Baja',
            optional: 'Traslado con guía y visita a pasarelas (2h)',
            included: [
                'Navegación por el Brazo Rico (20 min por tramo)',
                'Caminata guiada hasta la pared del glaciar',
                'Guía local y Coordinador permanente',
                'Asistencia médica de emergencia'
            ],
            requirements: [
                'Edad: 6 a 70 años (Sin excepción)',
                'No apto para movilidad reducida',
                'Capacidad para caminar en terreno irregular (piedras/arena)'
            ],
            notIncluded: [
                'Entrada al Parque Nacional',
                'Comida y bebida',
                'Ropa personal (frío/lluvia)'
            ]
        }
    },
    {
        id: 'exc-glaciares-gourmet',
        title: 'Glaciares Gourmet (Crucero María Turquesa)',
        price: 'Consultar',
        shortDesc: 'La navegación más exclusiva del Lago Argentino.',
        fullDesc: 'Una experiencia entre hielo, historia y paisajes\n\nNavegá entre témpanos gigantes, caminá en bosques patagónicos y brindá frente a los glaciares más imponentes del Parque Nacional. La experiencia comienza a las 9:00 AM en el puerto privado La Soledad, ubicado a 47 km de El Calafate. Desde allí zarparemos hacia el Canal Norte del Lago Argentino, mientras enormes témpanos de hielo nos acompañan en la travesía.\n\nDurante la navegación por el Canal Upsala, podrás observar el Glaciar Upsala, uno de los más grandes del Hielo Patagónico Sur, a unos 15 km de distancia. Luego, el recorrido continúa por el Canal Spegazzini, hogar de glaciares colgantes como el Seco, Heim Sur y Peineta, hasta desembarcar en Puesto de las Vacas.\n\nAllí realizaremos una caminata de 30 minutos por un encantador bosque andino patagónico y sus playas, acompañados por nuestro guía. De regreso en la embarcación, será el momento ideal para disfrutar el almuerzo: podés traer tu propia comida o seleccionar la opción con vianda.\n\nContinuaremos navegando hasta encontrarnos con el imponente Glaciar Spegazzini, el más alto del Parque Nacional. Tendremos tiempo para sacar fotos, contemplar el paisaje y simplemente dejarnos maravillar por este entorno único.\n\nPara cerrar esta jornada inolvidable, nos dirigiremos al Glaciar Perito Moreno. Quienes hayan contratado la opción con pasarelas, podrán desembarcar y disfrutar de una hora y media libre recorriendo sus balcones panorámicos. Finalmente, regresaremos al puerto La Soledad alrededor de las 17:00 hs, después de un día repleto de naturaleza, sabores y postales patagónicas que quedarán en la memoria.\n\nIdeal para quienes buscan combinar naturaleza imponente con momentos de calma y confort.',
        image: '/images/glaciares-gourmet-3.jpg',
        gallery: [
            '/images/glaciares-gourmet-3.jpg',
            '/images/glaciares-gourmet-inside.jpg',
            '/images/glaciares-gourmet-ship.jpg',
            '/images/glaciares-gourmet-land.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'luxury cruise food wine glacier view',
        activityDetails: {
            duration: '9:00 a 17:00 (Aprox. 8hs)',
            season: 'Todo el año',
            languages: 'Español e Inglés',
            included: [
                'Navegación frente al Glaciar Upsala, Spegazzini y Perito Moreno',
                'Desembarque en Bahía de las Vacas',
                'Guía durante toda la navegación',
                'Cancelación gratis hasta 24 horas antes del inicio del tour'
            ],
            notIncluded: [
                'Ticket de acceso al Parque Nacional',
                'Almuerzo (Opcional)'
            ]
        }
    },
    {
        id: 'exc-cerro-frias',
        title: 'Cerro Frías 4x4',
        price: 'Consultar',
        shortDesc: 'Aventura off-road con vistas panorámicas únicas.',
        fullDesc: 'Ubicado a tan solo 25 kilómetros de El Calafate, en el corazón de la Estancia Alice sobre la Ruta Provincial 11 rumbo al Glaciar Perito Moreno, el Cerro Frías ofrece una experiencia diferente para quienes buscan adrenalina y paisajes extraordinarios.\n\nEsta travesía en vehículos 4x4 te llevará a ascender por senderos de montaña hasta alcanzar dos miradores espectaculares: uno a 450 metros y otro a 1.030 metros sobre el nivel del mar, incluyendo el famoso Balcón del Parque Nacional. Durante el recorrido atravesarás la estepa patagónica y te adentrarás en un bosque nativo de lengas, pudiendo observar la flora y fauna característica de la región.\n\nAl llegar a la base del cerro, según el turno elegido, podrás disfrutar de un almuerzo campestre, un snack de media tarde o una cena típica patagónica con vistas inolvidables. El regreso se realiza por la ladera del cerro, completando una jornada cargada de emociones y la energía vibrante del sur patagónico.\n\nIdeal para quienes desean vivir la Patagonia desde las alturas, sin necesidad de realizar esfuerzo físico y con la posibilidad de disfrutar de gastronomía regional en un entorno natural único.',
        image: '/images/cerro-frias-forest.png',
        gallery: [
            '/images/cerro-frias-forest.png',
            '/images/cerro-frias-cover.jpg',
            '/images/cerro-frias-truck.jpg',
            '/images/cerro-frias-sunset.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: '4x4 mountain panoramic view patagonia estancia',
        activityDetails: {
            duration: '4 horas',
            season: 'Todo el año',
            languages: 'Español e Inglés',
            difficulty: 'Baja',
            included: [
                'Traslados desde/hacia hotel',
                'Ascenso en vehículo 4x4',
                'Guía y coordinador permanente',
                'Comida según turno (Almuerzo/Snack/Cena)',
                'Asistencia médica de emergencia'
            ],
            requirements: [
                'Apto para movilidad reducida',
                'Adaptación de menú para vegetarianos y celíacos disponible'
            ]
        }
    },
    {
        id: 'exc-nativo-experience',
        title: 'Nativo Experience',
        price: 'Consultar',
        shortDesc: 'Historia, cuevas milenarias y gastronomía bajo las estrellas.',
        fullDesc: 'Una experiencia perfecta para quienes llegan o se despiden de El Calafate al mediodía. A bordo de vehículos 4x4, recorreremos la costa del Lago Argentino dentro de la Reserva Natural Estancia 25 de Mayo, descubriendo los secretos que guarda esta tierra.\n\nEl recorrido es un verdadero viaje en el tiempo: conoceremos las historias de las primeras expediciones y los pioneros que se aventuraron hacia lo desconocido. Visitaremos las míticas Cuevas de Walichu y el Mirador del Lago Argentino, donde antiguas culturas dejaron sus huellas plasmadas en la roca hace miles de años.\n\nNos adentraremos en estas cuevas ancestrales para contemplar el arte rupestre y comprender su significado. En este entorno único, disfrutaremos de un almuerzo o cena según el horario elegido, reviviendo la experiencia de los primeros exploradores en un escenario natural incomparable.\n\nSi elegís el turno nocturno, te espera un cielo estrellado de una intensidad difícil de olvidar. Te aseguramos que la experiencia será extraordinaria.',
        image: '/images/nativo-stars.jpg',
        gallery: [
            '/images/nativo-stars.jpg',
            '/images/nativo-cave.jpg',
            '/images/nativo-4x4.jpg',
            '/images/nativo-sunset.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'cave stars night 4x4 lake sunset patagonia',
        activityDetails: {
            duration: '3 horas',
            season: 'Todo el año',
            languages: 'Español e Inglés',
            difficulty: 'Baja',
            included: [
                'Traslados desde/hacia hotel',
                'Recorrido en 4x4',
                'Almuerzo o Cena (según turno)',
                'Guía y coordinador permanente',
                'Asistencia médica de emergencia'
            ],
            requirements: [
                'Apto para movilidad reducida'
            ],
            notIncluded: [
                'Indumentaria adecuada para condiciones climáticas'
            ]
        }
    },
    {
        id: 'exc-balcones-calafate',
        title: 'Balcones de Calafate',
        price: 'Consultar',
        shortDesc: 'La vista más alta e imponente de El Calafate.',
        fullDesc: 'Perfecta para el primer o último día de tu estadía, esta aventura te llevará al Cerro Huyliche, alcanzando los 1.050 metros sobre el nivel del mar, donde disfrutarás de la panorámica más espectacular de la ciudad y el Lago Argentino.\n\nLa travesía comienza con el recogido en tu hotel. La primera parada es un mirador natural que regala una vista única y privilegiada de El Calafate y el extenso cuerpo central del lago. Continuando el ascenso, llegamos al famoso Laberinto de Piedras, formaciones rocosas que invitan a explorar y fotografiar.\n\nDesde allí, iniciamos el descenso por la ladera norte hasta alcanzar la Piedra de los Sombreros, otro punto icónico del recorrido. Finalmente, regresamos hacia la ciudad descendiendo sin perder de vista el imponente Lago Argentino en todo su esplendor.\n\nDisponible en dos turnos (mañana o tarde), con snack incluido según el horario elegido. Recomendamos llevar lentes de sol, protector solar, gorro, ropa cómoda y calzado apropiado para caminatas.',
        image: '/images/balcones-cover.jpg',
        gallery: [
            '/images/balcones-cover.jpg',
            '/images/balcones-cliff.jpg',
            '/images/balcones-ice.jpg',
            '/images/balcones-refuge.jpg'
        ],
        category: 'excursiones',
        galleryKeywords: 'panoramic view city lake mountain 4x4 calafate',
        activityDetails: {
            duration: '3.5 horas',
            season: 'Septiembre a Marzo',
            languages: 'Español e Inglés',
            difficulty: 'Baja',
            included: [
                'Traslados desde/hacia hotel',
                'Recorrido en 4x4',
                'Snack (almuerzo o merienda según turno)',
                'Guía y coordinador permanente',
                'Asistencia médica de emergencia'
            ],
            requirements: [
                'Apto para movilidad reducida',
                'Se recomienda calzado cómodo para caminatas'
            ]
        }
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
