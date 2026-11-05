export interface MemorialEntry {
  id: string;
  babyName: string;
  parentsOrFamily: string;
  message: string;
  dateStr?: string;
  city?: string;
  createdAt: number;
}

export const INITIAL_MEMORIAL_ENTRIES: MemorialEntry[] = [
  {
    id: '1',
    babyName: 'Salvador',
    parentsOrFamily: 'Nicole y familia',
    message: 'Naciste para cambiar nuestras vidas y abrir este círculo de amor. Siempre en cada latido.',
    dateStr: 'Octubre 2021',
    city: 'Lima',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    id: '2',
    babyName: 'Luana',
    parentsOrFamily: 'France',
    message: 'Mi estrellita más brillante en el cielo, tu luz guía cada abrazo que damos a otras mamás.',
    dateStr: 'Mayo 2022',
    city: 'Lima',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 20,
  },
  {
    id: '3',
    babyName: 'Emilia',
    parentsOrFamily: 'Dora y Carlos',
    message: 'Exististe, fuiste y eres inmensamente amada. Tu nombre resonará por siempre.',
    dateStr: 'Agosto 2022',
    city: 'Sullana, Piura',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 15,
  },
  {
    id: '4',
    babyName: 'Mateo',
    parentsOrFamily: 'Carla y Miguel',
    message: 'Volaste alto antes de tiempo mi mariposa dulce. Te amamos hasta el infinito y más allá.',
    dateStr: 'Febrero 2023',
    city: 'Lima',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10,
  },
  {
    id: '5',
    babyName: 'Valentina & Sofía',
    parentsOrFamily: 'Mamá Andrea',
    message: 'Dos estrellas que danzan juntas en el firmamento. Nunca las olvidaré, mis pequeñas.',
    dateStr: 'Noviembre 2023',
    city: 'Arequipa',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
  },
  {
    id: '6',
    babyName: 'Thiago',
    parentsOrFamily: 'Papá Daniel y Mamá Claudia',
    message: 'Aunque tus pasos en este mundo fueron breves, tu huella en nuestro pecho es eterna.',
    dateStr: 'Junio 2024',
    city: 'Trujillo',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
];

export interface Founder {
  name: string;
  role: string;
  motherOf: string;
  quote: string;
  initials: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Nicole Acosta',
    role: 'Co-fundadora & Facilitadora',
    motherOf: 'Mamá de Salvador',
    quote: 'Cuando el dolor de perder a mi bebé me dejó sin aire, descubrí que sanar juntas en círculo era la única forma de volver a respirar.',
    initials: 'NA',
  },
  {
    name: 'France Vences',
    role: 'Co-fundadora & Comunicaciones',
    motherOf: 'Mamá de Luana',
    quote: 'Nombrar a nuestros bebés no es abrir una herida, es honrar su existencia con la dignidad y el amor que merecen.',
    initials: 'FV',
  },
  {
    name: 'Dora Pérez',
    role: 'Co-fundadora & Enlace en Regiones',
    motherOf: 'Mamá de Emilia',
    quote: 'Llevar este abrazo a Piura y a cada rincón del Perú es nuestra promesa: ninguna madre debe llorar a su hijo en soledad.',
    initials: 'DP',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  detail: string;
  badge?: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'grupo-apoyo',
    title: 'Grupo de apoyo',
    iconName: 'butterfly',
    shortDesc: 'Un espacio en WhatsApp donde compartir lo que sientes con otras familias que entienden tu dolor. Escríbenos y te sumamos.',
    detail: 'Un canal seguro, confidencial y moderado por madres que han vivido la pérdida. Sin frases hechas, sin consejos no pedidos. Puedes escribir cuando quieras o simplemente leer hasta que te sientas con fuerzas.',
    badge: 'WhatsApp',
  },
  {
    id: 'reuniones-virtuales',
    title: 'Reuniones virtuales',
    iconName: 'screen',
    shortDesc: 'Encuentros en línea para conversar, acompañarnos y sentirnos menos solas, estés donde estés.',
    detail: 'Círculos mensuales por videollamada para familias de todo el Perú y del extranjero. Con dinámicas de expresión emocional, respiración y escucha activa.',
    badge: 'Zoom / Meet',
  },
  {
    id: 'encuentros-presenciales',
    title: 'Encuentros presenciales',
    iconName: 'table',
    shortDesc: 'Actividades de la comunidad, especialmente en fechas que duelen más: Día de la Madre, octubre y Navidad.',
    detail: 'Espacios de encuentro físico en parques y salas cálidas: círculos de tejido, encendido de velas el 15 de octubre (Ola de Luz), picnics de memoria y homenajes en Navidad.',
    badge: 'Comunidad',
  },
  {
    id: 'cajitas-recuerdo',
    title: 'Cajitas de recuerdo 🦋🌸',
    iconName: 'box',
    shortDesc: 'Cajas preparadas con amor para guardar la memoria de tu bebé, para las familias que las solicitan.',
    detail: 'Cada caja de madera o cartón rígido artesanal incluye una estrella de crochet tejida a mano, tarjeta para huellitas o mensaje, cinta de seda lila y frasco para mechón de cabello o brazalete hospitalario.',
    badge: 'Artesanal',
  },
  {
    id: 'informacion-orientacion',
    title: 'Información y orientación',
    iconName: 'book',
    shortDesc: 'Contenido sobre mortinato, lactancia después de la pérdida y los trámites que puedes necesitar.',
    detail: 'Guías claras sobre inhibición respetuosa de la lactancia materna, derechos laborales, certificado de defunción fetal (SINADEF / RENIEC) y cómo hablar del duelo con los hermanitos.',
    badge: 'Educación',
  },
  {
    id: 'cad-regiones',
    title: 'CAD en regiones',
    iconName: 'map',
    shortDesc: 'Además de Lima, tenemos presencia en Sullana. Queremos llegar a más rincones del país.',
    detail: 'Coordinadoras locales en Piura / Sullana, facilitando encuentros descentralizados y acompañamiento presencial a hospitales del norte del país.',
    badge: 'Lima & Sullana',
  },
];

export interface DerechoLeyEstrella {
  title: string;
  summary: string;
  peruLaw: string;
  steps: string[];
}

export const DERECHOS_LEY_ESTRELLA: DerechoLeyEstrella[] = [
  {
    title: 'Inscripción con Nombre y Apellidos (Ley Estrella)',
    summary: 'Tu bebé tiene derecho a ser inscrito con su nombre y los apellidos de sus padres en el certificado de defunción fetal.',
    peruLaw: 'Ley N° 31693 y normativa RENIEC',
    steps: [
      'Solicitar al médico tratante o centro de salud el Certificado de Defunción Fetal del SINADEF.',
      'Verificar que se consigne el nombre y apellidos elegidos por los padres, no solo "Feto de..." o "N.N."',
      'Realizar el registro ante RENIEC para obtener el acta de defunción con valor legal y reconocimiento identitario.',
    ],
  },
  {
    title: 'Entrega Digna del Cuerpo para Sepelio',
    summary: 'Los padres tienen el derecho inviolable de recibir los restos de su bebé, sin importar las semanas de gestación, para darle sepultura o cremación.',
    peruLaw: 'Ley General de Salud y Directivas del MINSA',
    steps: [
      'Comunicar formalmente al área de obstetricia/servicio social su deseo de retirar el cuerpo.',
      'El hospital no puede considerar al bebé como residuo patológico o biomédico si la familia solicita su entrega.',
      'Coordinar con la funeraria o cementerio acreditado con el certificado médico correspondiente.',
    ],
  },
  {
    title: 'Atención Hospitalaria Humanizada y Separada',
    summary: 'Derecho a no ser internada en salas de maternidad compartidas con madres que tienen a sus recién nacidos sanos.',
    peruLaw: 'Guías de Humanización del Parto - MINSA',
    steps: [
      'Exigir habitación individual o área ginecológica no obstétrica siempre que la capacidad hospitalaria lo permita.',
      'Uso del "Código Mariposa" en la puerta o historia clínica para advertir al personal médico.',
      'Derecho a estar acompañada permanentemente por su pareja o persona de confianza.',
    ],
  },
  {
    title: 'Despedida Respetuosa y Creación de Recuerdos',
    summary: 'Derecho a ver, cargar, vestir y tomar fotos o huellitas de su bebé en un entorno de paz y sin apresuramientos.',
    peruLaw: 'Derechos del Paciente y Buenas Prácticas Perinatales',
    steps: [
      'El equipo médico debe ofrecer la oportunidad de conocer al bebé con calma y delicadeza.',
      'Se pueden tomar huellas de manitos y pies con tinta suave o arcilla.',
      'Conservar el brazalete de identificación hospitalario.',
    ],
  },
  {
    title: 'Lactancia y Salud Física Posparto',
    summary: 'Información oportuna sobre la subida de la leche y opciones respetuosas de inhibición farmacológica o donación.',
    peruLaw: 'Atención Integral del Puerperio',
    steps: [
      'Recibir medicación oportuna (como cabergolina) si la madre decide no lactar, evitando compresiones dolorosas.',
      'Acompañamiento en caso de ingurgitación mamaria con paños fríos y analgesia.',
      'Atención médica ginecológica y psicológica de seguimiento a los 7 y 30 días.',
    ],
  },
];
