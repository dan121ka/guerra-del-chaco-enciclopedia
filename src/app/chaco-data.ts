export interface HistoricalEvent {
  id: string;
  date: string;
  year: number;
  phase: 'antecedentes' | '1932' | '1933' | '1934' | '1935';
  title: string;
  subtitle: string;
  location: string;
  coordinates: { x: number; y: number };
  casualtiesBolivia: string;
  casualtiesParaguay: string;
  commandersBolivia: string[];
  commandersParaguay: string[];
  summary: string;
  detailedAnalysis: string[];
  strategicImpact: string;
  primarySourceQuote: {
    quote: string;
    author: string;
    context: string;
  };
  tags: string[];
  audioFreq: number;
  imageCaption: string;
  svgTheme: 'fortin' | 'aviation' | 'tank' | 'trench' | 'peace' | 'march';
}

export interface TacticalLocation {
  id: string;
  name: string;
  type: 'fortin' | 'batalla' | 'logistica' | 'comandancia';
  x: number;
  y: number;
  year: string;
  control: 'Bolivia' | 'Paraguay' | 'Disputado';
  elevation: string;
  temperature: string;
  summary: string;
  strategicRole: string;
  keyFacts: string[];
}

export interface HistoricalProtagonist {
  id: string;
  name: string;
  role: string;
  country: 'Bolivia' | 'Paraguay' | 'Neutral';
  rank: string;
  years: string;
  biography: string;
  keyContribution: string;
  famousQuote: string;
  badges: string[];
}

export interface ArsenalItem {
  id: string;
  name: string;
  category: 'Aviación' | 'Blindados y Artillería' | 'Infantería' | 'Logística y Sanidad';
  origin: string;
  users: 'Bolivia' | 'Paraguay' | 'Ambos';
  specs: { label: string; value: string }[];
  history: string;
  tacticalAdvantage: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const CHACO_EVENTS: HistoricalEvent[] = [
  {
    id: 'laguna-pitiantuta',
    date: '15 de Junio de 1932',
    year: 1932,
    phase: '1932',
    title: 'Incidente de Laguna Chuquisaca (Pitiantuta)',
    subtitle: 'El detonante bélico por el recurso más escaso del Chaco Boreal: el agua dulce',
    location: 'Laguna Chuquisaca / Pitiantuta (Centro del Chaco Boreal)',
    coordinates: { x: 58, y: 46 },
    casualtiesBolivia: '15 bajas iniciales',
    casualtiesParaguay: '6 bajas iniciales',
    commandersBolivia: ['My. Óscar Moscoso', 'Gral. Filiberto Osorio'],
    commandersParaguay: ['Cnel. José Félix Estigarribia', 'Cap. Abdón Palacios'],
    summary: 'El destacamento boliviano al mando del Mayor Óscar Moscoso ocupó el fortín paraguayo Carlos Antonio López a orillas de la única laguna de agua dulce en cientos de kilómetros, desatando la escalada militar irreversible.',
    detailedAnalysis: [
      'En el árido Chaco Boreal, el control de las fuentes de agua determinaba la supervivencia de cualquier división militar. La laguna fue descubierta en 1931 por exploradores paraguayos con ayuda de indígenas Chamacoco y bautizada como Pitiantuta.',
      'En abril de 1932, vuelos de reconocimiento de la aviación boliviana avistaron el espejo de agua. El Mayor Óscar Moscoso recibió órdenes de ocupar la margen occidental, pero al encontrar solo un pequeño puesto paraguayo en la orilla oriental, lo tomó el 15 de junio.',
      'Tras el contraataque paraguayo del 15 de julio y las represalias bolivianas sobre los fortines Corrales, Toledo y Boquerón a fines de julio, fracasaron las gestiones diplomáticas en Washington.'
    ],
    strategicImpact: 'Transformó una disputa fronteriza secular y escaramuzas aisladas (como Vanguardia en 1928) en una guerra total a gran escala con movilización nacional en ambos países.',
    primarySourceQuote: {
      quote: 'En el Chaco no se combate por trincheras ni por colinas; se combate y se muere por cada gota de agua turbia.',
      author: 'Crónica de campaña del Destacamento Moscoso (1932)',
      context: 'Reporte logístico sobre la sed en el sector central'
    },
    tags: ['Detonante', 'Recurso Hídrico', 'Diplomacia', 'Fortines'],
    audioFreq: 392,
    imageCaption: 'Esquema cartográfico de la Laguna Chuquisaca / Pitiantuta y los fortines circundantes (junio 1932).',
    svgTheme: 'fortin'
  },
  {
    id: 'batalla-boqueron',
    date: '9 al 29 de Septiembre de 1932',
    year: 1932,
    phase: '1932',
    title: 'Sitio y Batalla de Boquerón',
    subtitle: '20 días de heroica resistencia boliviana ante el cerco de 10.000 efectivos',
    location: 'Fortín Boquerón (Sector Yucra - Ramírez)',
    coordinates: { x: 52, y: 62 },
    casualtiesBolivia: '619 defensores (caídos y prisioneros tras agotar munición)',
    casualtiesParaguay: '~1.500 a 2.000 bajas entre muertos y heridos',
    commandersBolivia: ['Tcnl. Manuel Marzana', 'Cap. Víctor Ustárez', 'Subtte. Clemente Inofuentes'],
    commandersParaguay: ['Tcnl. José Félix Estigarribia', 'My. Arturo Bray', 'Cap. Abdón Palacios'],
    summary: 'Unos 619 soldados bolivianos al mando del Tcnl. Manuel Marzana resistieron durante 20 días el asedio de más de 9.500 soldados paraguayos sin agua, víveres ni suministros médicos.',
    detailedAnalysis: [
      'El Fortín Boquerón fue fortificado con trincheras circulares, nidos de ametralladoras ocultos en los quebrachos y alambradas. Los defensores bolivianos rechazaron múltiples olas de asalto frontal.',
      'El Cuerpo de Aviación Boliviano realizó lanzamientos aéreos de hielo, municiones y víveres desde aviones Vickers Vespy y Junkers, aunque gran parte caía fuera del perímetro debido al fuego antiaéreo.',
      'El Capitán Víctor Ustárez protagonizó audaces incursiones de ruptura antes de caer en combate. El 29 de septiembre, sin un solo proyectil ni gota de agua, Marzana solicitó parlamento; los soldados paraguayos rindieron honores al coraje de los sobrevivientes.'
    ],
    strategicImpact: 'Demostró la letalidad de las armas automáticas defensivas y obligó a ambos ejércitos a replantear sus doctrinas tácticas y logísticas.',
    primarySourceQuote: {
      quote: 'No nos rendimos por miedo, sino porque ya no queda un solo cartucho en los fusiles ni una gota de agua para los heridos.',
      author: 'Tcnl. Manuel Marzana Oroza',
      context: 'Último parte del comando de defensa de Boquerón, 29 de septiembre de 1932'
    },
    tags: ['Cerco Táctico', 'Heroísmo', 'Abastecimiento Aéreo', 'Trincheras'],
    audioFreq: 440,
    imageCaption: 'Perímetro defensivo del Fortín Boquerón con reductos de quebracho y sectores de lanzamiento aéreo.',
    svgTheme: 'trench'
  },
  {
    id: 'kilometro-siete',
    date: '7 de Noviembre de 1932',
    year: 1932,
    phase: '1932',
    title: 'Defensa de Kilómetro 7 (Campo Jordán)',
    subtitle: 'El freno estratégico al avance paraguayo y el nacimiento del duelo aéreo',
    location: 'Línea Saavedra – Alihuatá (Km 7)',
    coordinates: { x: 47, y: 68 },
    casualtiesBolivia: '~900 bajas',
    casualtiesParaguay: '~1.200 bajas',
    commandersBolivia: ['Cnel. Bernardino Bilbao Rioja', 'My. Germán Busch', 'My. Rafael Pabón'],
    commandersParaguay: ['Cnel. José Félix Estigarribia', 'My. Nicolás Delgado'],
    summary: 'Tras la caída de Boquerón y Arce, el Cnel. Bernardino Bilbao Rioja organizó en el pajonal del Km 7 de Saavedra una defensa elástica apoyada por artillería y aviación que detuvo la ofensiva paraguaya.',
    detailedAnalysis: [
      'Bilbao Rioja implementó un sistema moderno de fuego cruzado, reglaje aéreo de artillería y contraataques móviles en el cañadón conocido luego como Campo Jordán.',
      'En los cielos de Km 7, el piloto boliviano Mayor Rafael Pabón protagonizó el primer combate aéreo de América del Sur el 4 de diciembre de 1932 a bordo de su biplano Curtiss Hawk II, derribando un Potez 25 paraguayo.',
      'La estabilización del frente en Km 7 salvó al Fortín Saavedra y permitió a Bolivia reorganizar sus fuerzas para las campañas de 1933.'
    ],
    strategicImpact: 'Consolidó el rol decisivo de la aviación de caza y reconocimiento en Sudamérica y frenó el impulso paraguayo de 1932.',
    primarySourceQuote: {
      quote: 'Aquí en el pajonal del Kilómetro Siete termina la retirada; desde esta línea cada metro se defiende con ciencia y acero.',
      author: 'Cnel. Bernardino Bilbao Rioja',
      context: 'Orden del Día en el sector Saavedra, noviembre de 1932'
    },
    tags: ['Combate Aéreo', 'Artillería', 'Defensa Elástica', 'Rafael Pabón'],
    audioFreq: 493.88,
    imageCaption: 'Duelo aéreo sobre el cañadón de Kilómetro 7 (Curtiss Hawk II vs Potez 25).',
    svgTheme: 'aviation'
  },
  {
    id: 'batalla-nanawa',
    date: 'Enero y Julio de 1933',
    year: 1933,
    phase: '1933',
    title: 'Primera y Segunda Batalla de Nanawa',
    subtitle: 'El "Verdún del Chaco": guerra de tanques, lanzallamas y minas subterráneas',
    location: 'Fortín Nanawa (Sector Sur)',
    coordinates: { x: 54, y: 76 },
    casualtiesBolivia: '~2.000 bajas en julio de 1933',
    casualtiesParaguay: '~600 bajas en posiciones fortificadas',
    commandersBolivia: ['Gral. Hans Kundt', 'Tcnl. Gerardo Rodríguez'],
    commandersParaguay: ['Cnel. Luis Irrazábal', 'Tcnl. Juan Bautista Ayala'],
    summary: 'Las mayores batallas frontales de posición del conflicto, donde el Gral. Hans Kundt empleó por primera vez en América tanques Vickers, lanzallamas y galerías de minas contra las fortificaciones de quebracho de Nanawa.',
    detailedAnalysis: [
      'En enero de 1933 se libró el primer asalto bajo lluvias torrenciales y barro. Tras su fracaso, el Gral. alemán Hans Kundt preparó durante meses un segundo ataque masivo para el 4 de julio de 1933.',
      'Bolivia desplegó tanques Vickers Carden-Loyd y Vickers de 6 toneladas, grupos de asalto con lanzallamas, apoyo de 12 aviones de bombardeo y una mina subterránea detonada bajo el reducto "Punta Mojoli".',
      'La tenaz defensa paraguaya dirigida por Luis Irrazábal, protegida por troncos de quebracho blanco (madera tan dura que desviaba proyectiles) y campos minados, resistió y desgastó severamente al ejército atacante.'
    ],
    strategicImpact: 'Marcó el apogeo y agotamiento de la doctrina de asaltos frontales de estilo Primera Guerra Mundial en el teatro chaqueño.',
    primarySourceQuote: {
      quote: 'El quebracho chaqueño resultó más duro que el blindaje europeo, y el calor del monte más implacable que el fuego de artillería.',
      author: 'Informe Técnico de Oficiales de Blindados Vickers (1933)',
      context: 'Evaluación táctica tras la Segunda Batalla de Nanawa'
    },
    tags: ['Tanques Vickers', 'Guerra de Trincheras', 'Lanzallamas', 'Fortificaciones'],
    audioFreq: 523.25,
    imageCaption: 'Avance de tanques Vickers de 6 toneladas frente a las casamatas de quebracho en Nanawa (julio 1933).',
    svgTheme: 'tank'
  },
  {
    id: 'canada-strongest',
    date: '18 al 25 de Mayo de 1934',
    year: 1934,
    phase: '1934',
    title: 'Batalla de Cañada Strongest (Cañada Cochabamba)',
    subtitle: 'La maniobra envolvente más exitosa del Ejército de Bolivia',
    location: 'Noroeste de Ballivián (Sector Central-Oeste)',
    coordinates: { x: 35, y: 58 },
    casualtiesBolivia: '~500 bajas',
    casualtiesParaguay: '1.389 prisioneros y ~500 bajas',
    commandersBolivia: ['Gral. Enrique Peñaranda', 'Cnel. Ángel Rodríguez', 'Tcnl. Bernardino Bilbao Rioja'],
    commandersParaguay: ['Cnel. José Rosa Vera', 'Cap. Joel Estigarribia'],
    summary: 'Mediante una maniobra de triple cerco concéntrico planificada por el Estado Mayor boliviano y ejecutada con el 2.º Cuerpo, Bolivia rodeó a dos divisiones paraguayas y capturó cerca de 1.400 efectivos.',
    detailedAnalysis: [
      'Tras el repliegue de fines de 1933, el nuevo mando boliviano encabezado por Enrique Peñaranda y Ángel Rodríguez diseñó una trampa estratégica cuando tres divisiones paraguayas avanzaban por picadas aisladas hacia el río Pilcomayo.',
      'La 9.ª División boliviana abrió en secreto una picada por el monte cerrado para cortar la retaguardia paraguaya, mientras el Destacamento Pinto sostuvo un bloqueo heroico contra los intentos de escape.',
      'Con la participación masiva de conscriptos e integrantes del club The Strongest de La Paz, la victoria elevó la moral boliviana y frenó durante meses el avance hacia Villa Montes.'
    ],
    strategicImpact: 'Demostró la maestría operativa boliviana en maniobras de contracerco en monte cerrado y retrasó medio año la ofensiva adversaria.',
    primarySourceQuote: {
      quote: 'Las picadas abiertas a machete en silencio nocturno cerraron el anillo antes de que el adversario sospechara nuestra presencia.',
      author: 'Estado Mayor del Primer Cuerpo Boliviano',
      context: 'Memoria operativa de Cañada Strongest, mayo de 1934'
    },
    tags: ['Maniobra Envolvente', 'Victoria Táctica', 'Monte Cerrado', 'Estrategia'],
    audioFreq: 587.33,
    imageCaption: 'Diagrama del triple anillo envolvente ejecutado en Cañada Strongest (mayo 1934).',
    svgTheme: 'march'
  },
  {
    id: 'defensa-villamontes',
    date: 'Febrero a Marzo de 1935',
    year: 1935,
    phase: '1935',
    title: 'Defensa de Villa Montes y Contraofensiva del Parapetí',
    subtitle: 'El escudo inexpugnable de los campos petrolíferos y el pie de monte andino',
    location: 'Villa Montes y Río Parapetí (Tarija / Santa Cruz)',
    coordinates: { x: 22, y: 64 },
    casualtiesBolivia: '~1.200 bajas en toda la línea defensiva',
    casualtiesParaguay: '~3.500 bajas ante las defensas de artillería',
    commandersBolivia: ['Cnel. Bernardino Bilbao Rioja', 'My. Germán Busch'],
    commandersParaguay: ['Gral. José Félix Estigarribia', 'Cnel. Eugenio Garay'],
    summary: 'En las estribaciones subandinas, el Cnel. Bernardino Bilbao Rioja tendió un cinturón fortificado de artillería moderna y nidos de ametralladoras en Villa Montes que quebró definitivamente la ofensiva paraguaya y permitió recuperar Charagua y el río Parapetí.',
    detailedAnalysis: [
      'Al llegar la guerra al pie de la cordillera aguaragüe, las líneas de abastecimiento bolivianas se acortaron drásticamente mientras que las paraguayas se extendían por más de 500 km de desierto.',
      'Bilbao Rioja diseñó un sistema defensivo escalonado con 36 baterías de artillería Schneider y Vickers, campos de tiro despejados y reservas móviles. Todos los asaltos de febrero de 1935 fueron rechazados con enormes pérdidas para los atacantes.',
      'En abril de 1935, la contraofensiva boliviana en el sector norte obligó a las fuerzas paraguayas a replegarse más allá del río Parapetí, asegurando los yacimientos petrolíferos de Camiri y Sanandita.'
    ],
    strategicImpact: 'Impuso un equilibrio militar estratégico que convenció a ambas naciones de que una solución puramente militar era imposible, abriendo paso a la paz.',
    primarySourceQuote: {
      quote: 'Villa Montes no caerá jamás: cada cañón y cada soldado defienden aquí el corazón energético y territorial de la Patria.',
      author: 'Cnel. Bernardino Bilbao Rioja',
      context: 'Directiva del Comando del Sector Sur, febrero de 1935'
    },
    tags: ['Defensa Estratégica', 'Petróleo', 'Artillería Pesada', 'Contraofensiva'],
    audioFreq: 659.25,
    imageCaption: 'Cinturón fortificado de Villa Montes al pie de la serranía del Aguaragüe (1935).',
    svgTheme: 'fortin'
  },
  {
    id: 'protocolo-paz-1935',
    date: '12 de Junio de 1935',
    year: 1935,
    phase: '1935',
    title: 'Protocolo de Paz de Buenos Aires y Cese de Hostilidades',
    subtitle: 'El abrazo histórico en las trincheras el 14 de junio al mediodía y el nacimiento de una nueva conciencia nacional',
    location: 'Buenos Aires (Firma) / Frente de Puesto Merino - Villazón (Cese del fuego)',
    coordinates: { x: 28, y: 55 },
    casualtiesBolivia: '~50.000 caídos en toda la guerra (1932–1935)',
    casualtiesParaguay: '~36.000 a 40.000 caídos en toda la guerra',
    commandersBolivia: ['Canciller Tomás Manuel Elío', 'Gral. Enrique Peñaranda'],
    commandersParaguay: ['Canciller Luis Alberto Riart', 'Gral. José Félix Estigarribia'],
    summary: 'Con la mediación de Argentina, Brasil, Chile, Perú, Uruguay y Estados Unidos, se firmó el 12 de junio de 1935 el Protocolo de Paz en Buenos Aires. El fuego cesó a las 12:00 del 14 de junio, seguido por el histórico encuentro fraternal entre ambos comandantes y soldados.',
    detailedAnalysis: [
      'Durante los últimos 30 minutos antes de las 12:00 del 14 de junio de 1935, la artillería de ambos bandos disparó salvas al aire para agotar sus municiones. Al sonar los silbatos del mediodía, un silencio sobrecogedor cubrió el Chaco.',
      'Soldados bolivianos y paraguayos salieron de sus trincheras para abrazarse, intercambiar caramañolas, recuerdos y entonar canciones juntos en medio del monte.',
      'En Bolivia, la experiencia de las trincheras —donde indígenas, obreros, campesinos y estudiantes convivieron como iguales— gestó la "Generación del Chaco", semilla directa del nacionalismo revolucionario, la nacionalización de Standard Oil (1937), la creación de YPFB y la Revolución Nacional de 1952.'
    ],
    strategicImpact: 'Cerró el conflicto bélico interestatal más grande del siglo XX en Sudamérica y transformó profundamente la estructura social, política y cultural de Bolivia y Paraguay.',
    primarySourceQuote: {
      quote: 'A las doce en punto callaron las ametralladoras y de los montes salieron hombres harapientos que, en lugar de odiarse, se abrazaron llorando como hermanos.',
      author: 'Augusto Céspedes ("Sangre de Mestizos")',
      context: 'Crónica literaria e histórica del cese de hostilidades, 14 de junio de 1935'
    },
    tags: ['Paz del Chaco', 'Confraternidad', 'Generación del Chaco', 'Diplomacia'],
    audioFreq: 783.99,
    imageCaption: 'Encuentro de confraternidad en Puesto Merino tras el alto al fuego del 14 de junio de 1935.',
    svgTheme: 'peace'
  }
];

export const TACTICAL_LOCATIONS: TacticalLocation[] = [
  {
    id: 'map-villamontes',
    name: 'Villa Montes',
    type: 'comandancia',
    x: 20,
    y: 66,
    year: '1932–1935',
    control: 'Bolivia',
    elevation: '388 m s.n.m.',
    temperature: '38 °C máx.',
    summary: 'Centro neurálgico logístico del Ejército de Bolivia sobre el río Pilcomayo y bastión inexpugnable en 1935.',
    strategicRole: 'Resguardo de la serranía del Aguaragüe, los pozos petroleros de Sanandita/Camiri y cruce vital hacia Tarija y Santa Cruz.',
    keyFacts: [
      'Contaba con hospital militar central, pista de aviación y maestranza.',
      'En febrero de 1935 su línea fortificada por Bilbao Rioja detuvo la ofensiva final paraguaya.',
      'Sede del famoso "Corralito de Villamontes" en noviembre de 1934.'
    ]
  },
  {
    id: 'map-parapeti',
    name: 'Río Parapetí / Charagua',
    type: 'batalla',
    x: 24,
    y: 34,
    year: 'Abril–Mayo 1935',
    control: 'Bolivia',
    elevation: '620 m s.n.m.',
    temperature: '36 °C máx.',
    summary: 'Escenario de la exitosa contraofensiva boliviana de abril de 1935 que recuperó Charagua y Boyuibe.',
    strategicRole: 'Protección directa de Santa Cruz de la Sierra y los yacimientos de Camiri.',
    keyFacts: [
      'El 2.º Cuerpo boliviano hizo retroceder más de 100 km a las fuerzas adversarias.',
      'Demostró la vitalidad operativa del ejército boliviano en el último tramo de la guerra.'
    ]
  },
  {
    id: 'map-strongest',
    name: 'Cañada Strongest',
    type: 'batalla',
    x: 36,
    y: 56,
    year: 'Mayo 1934',
    control: 'Bolivia',
    elevation: '290 m s.n.m.',
    temperature: '41 °C máx.',
    summary: 'Lugar de la mayor victoria táctica boliviana de maniobra en monte cerrado.',
    strategicRole: 'Defensa adelantada del sector Ballivián y bloqueo de las picadas centrales.',
    keyFacts: [
      'Más de 1.380 efectivos capturados tras el cerco concéntrico.',
      'Bautizada en honor a los voluntarios del Club The Strongest.'
    ]
  },
  {
    id: 'map-picuiba',
    name: 'Picuiba – Yrendagüé',
    type: 'logistica',
    x: 34,
    y: 44,
    year: 'Agosto–Diciembre 1934',
    control: 'Disputado',
    elevation: '310 m s.n.m.',
    temperature: '45 °C máx.',
    summary: 'El sector más árido e implacable del Chaco Boreal, donde la sed cobró miles de vidas.',
    strategicRole: 'Corredor septentrional entre Carandaití y el centro del Chaco.',
    keyFacts: [
      'Los pozos de agua en Yrendagüé definieron el destino de toda la División de Caballería en diciembre de 1934.',
      'Las temperaturas superaban los 44 °C a la sombra sin cursos de agua superficial.'
    ]
  },
  {
    id: 'map-boqueron',
    name: 'Fortín Boquerón',
    type: 'fortin',
    x: 53,
    y: 61,
    year: 'Septiembre 1932',
    control: 'Disputado',
    elevation: '165 m s.n.m.',
    temperature: '40 °C máx.',
    summary: 'Símbolo inmortal de la resistencia boliviana bajo el mando del Tcnl. Manuel Marzana.',
    strategicRole: 'Nudo estratégico de caminos entre Isla Poí, Arce y Yucra.',
    keyFacts: [
      '619 soldados bolivianos resistieron 20 días contra casi 10.000 atacantes.',
      'Escenario de los primeros abastecimientos aéreos en combate de Sudamérica.'
    ]
  },
  {
    id: 'map-km7',
    name: 'Kilómetro 7 (Campo Jordán)',
    type: 'batalla',
    x: 48,
    y: 69,
    year: 'Nov 1932 – Mar 1933',
    control: 'Disputado',
    elevation: '155 m s.n.m.',
    temperature: '39 °C máx.',
    summary: 'Pajonal frente al Fortín Saavedra donde Bilbao Rioja frenó el avance de 1932.',
    strategicRole: 'Muralla defensiva que cubría el acceso a Muñoz, comando general boliviano en el sur.',
    keyFacts: [
      'Cielo del histórico combate aéreo y victoria del Mayor Rafael Pabón (4 dic 1932).',
      'Empleo intensivo de artillería reglada desde el aire.'
    ]
  },
  {
    id: 'map-nanawa',
    name: 'Fortín Nanawa',
    type: 'fortin',
    x: 56,
    y: 77,
    year: 'Enero y Julio 1933',
    control: 'Paraguay',
    elevation: '140 m s.n.m.',
    temperature: '38 °C máx.',
    summary: 'Fortificación en isla de monte escenario de los mayores combates de tanques, minas y lanzallamas.',
    strategicRole: 'Pivote meridional que resguardaba el acceso hacia el río Paraguay y Concepción.',
    keyFacts: [
      'Primer empleo de blindados Vickers en la historia militar latinoamericana.',
      'Trincheras reforzadas con troncos de quebracho blanco.'
    ]
  },
  {
    id: 'map-pitiantuta',
    name: 'Laguna Chuquisaca / Pitiantuta',
    type: 'logistica',
    x: 59,
    y: 44,
    year: 'Junio–Julio 1932',
    control: 'Disputado',
    elevation: '190 m s.n.m.',
    temperature: '42 °C máx.',
    summary: 'Único gran reservorio natural de agua dulce en el corazón árido del Chaco Boreal.',
    strategicRole: 'Oasis estratégico indispensable para proyectar tropas entre el norte y el centro chaqueño.',
    keyFacts: [
      'Su ocupación el 15 de junio de 1932 desató la Guerra del Chaco.',
      'Medía cerca de 5 km de diámetro en época de lluvias.'
    ]
  },
  {
    id: 'map-islapoi',
    name: 'Isla Poí (Villa Militar)',
    type: 'comandancia',
    x: 64,
    y: 59,
    year: '1932–1935',
    control: 'Paraguay',
    elevation: '150 m s.n.m.',
    temperature: '39 °C máx.',
    summary: 'Base principal de operaciones y terminal logística conectada con Puerto Casado.',
    strategicRole: 'Conectaba el ferrocarril de Puerto Casado con los fortines del frente central.',
    keyFacts: [
      'Sede inicial del cuartel general de José Félix Estigarribia.',
      'Concentró talleres, hospitales de campaña y pista aérea.'
    ]
  }
];

export const HISTORICAL_PROTAGONISTS: HistoricalProtagonist[] = [
  {
    id: 'marzana',
    name: 'Mcal. Bernardino Bilbao Rioja',
    role: 'Estratega de Kilómetro 7, Cañada Strongest y Defensor de Villa Montes',
    country: 'Bolivia',
    rank: 'Mariscal de Kilómetro 7 (Cnel. en campaña)',
    years: '1895 – 1983',
    biography: 'Militar, piloto aviador e ingeniero militar potosino. Organizó la aviación militar boliviana, frenó la ofensiva paraguaya en Kilómetro 7 (1932), participó en la planificación de Cañada Strongest (1934) y dirigió la histórica e inexpugnable defensa de Villa Montes (1935).',
    keyContribution: 'Doctrina de defensa elástica combinada con reglaje aéreo de artillería y fortificación moderna subandina.',
    famousQuote: 'La defensa científica multiplica por diez el valor del soldado en la trinchera.',
    badges: ['Estratega Maestro', 'Pionero Aéreo', 'Defensor de Villa Montes']
  },
  {
    id: 'manuel-marzana',
    name: 'Gral. Manuel Marzana Oroza',
    role: 'Comandante de la Defensa Heroica de Boquerón',
    country: 'Bolivia',
    rank: 'Teniente Coronel en campaña',
    years: '1888 – 1983',
    biography: 'Oficial chuquisaqueño que lideró a los 619 defensores del Fortín Boquerón en septiembre de 1932. Durante 20 días sostuvo el reducto frente a una fuerza diez veces superior bajo asedio total, convirtiéndose en arquetipo de liderazgo moral y serenidad.',
    keyContribution: 'Organización táctica del perímetro circular de Boquerón y cohesión moral absoluta bajo asedio extremo.',
    famousQuote: 'Cumplimos con el deber hasta que el último fusil quedó en silencio.',
    badges: ['Héroe de Boquerón', 'Resistencia Épica', 'Honor Militar']
  },
  {
    id: 'german-busch',
    name: 'Tcnl. Germán Busch Becerra',
    role: 'Explorador legendario, Comandante del "Escuadrón de la Muerte" y Presidente',
    country: 'Bolivia',
    rank: 'Mayor / Teniente Coronel',
    years: '1903 – 1939',
    biography: 'conocido como el "Corsario de la Selva", lideró las misiones más audaces de reconocimiento y ruptura de cercos en Boquerón, Alihuatá y el Parapetí. Tras la guerra fue Presidente de Bolivia, promulgando el Código del Trabajo y la Constitución Social de 1938.',
    keyContribution: 'Guerra de patrullas profundas en monte cerrado y liderazgo de la Generación del Chaco en la posguerra.',
    famousQuote: 'No he llegado a la Presidencia para servir a los poderosos, sino a los que sangraron en el Chaco.',
    badges: ['Corsario de la Selva', 'Ruptura de Cercos', 'Reforma Social']
  },
  {
    id: 'rafael-pabon',
    name: 'Tcnl. Rafael Pabón Cuevas',
    role: 'As de la Aviación Militar Boliviana',
    country: 'Bolivia',
    rank: 'Mayor Aviador',
    years: '1903 – 1934',
    biography: 'Piloto paceño formado en Estados Unidos, héroe del primer combate aéreo de Sudamérica el 4 de diciembre de 1932 sobre Kilómetro 7 a los mandos de su biplano Curtiss Hawk II. Realizó decenas de misiones de reconocimiento y escolta hasta caer en combate aéreo en Florida (agosto de 1934).',
    keyContribution: 'Supremacía aérea táctica y doctrina de caza e intercepción en el teatro chaqueño.',
    famousQuote: 'Desde las nubes del Chaco vigilamos el sueño de nuestros hermanos en la trinchera.',
    badges: ['As del Aire', 'Curtiss Hawk II', 'Primer Duelo Aéreo']
  },
  {
    id: 'estigarribia',
    name: 'Mcal. José Félix Estigarribia',
    role: 'Comandante en Jefe del Ejército Paraguayo en el Chaco',
    country: 'Paraguay',
    rank: 'General / Mariscal póstumo',
    years: '1888 – 1940',
    biography: 'Oficial formado en la Escuela Superior de Guerra de París (discípulo del Mariscal Foch). Diseñó la estrategia de guerra de movimiento y cercos por el desierto chaqueño desde Boquerón y Campo Vía hasta el río Parapetí.',
    keyContribution: 'Conducción estratégica de guerra de maniobra y aprovechamiento logístico del terreno chaqueño.',
    famousQuote: 'En el Chaco el verdadero enemigo común fue la sed y la inmensidad del desierto.',
    badges: ['Guerra de Maniobra', 'Escuela de París', 'Alto Mando']
  },
  {
    id: 'enrique-finot',
    name: 'Cuerpo de Enfermeras y Madrinas de Guerra',
    role: 'Sanidad Militar, Cruz Roja y Asistencia Humanitaria en el Frente',
    country: 'Neutral',
    rank: 'Voluntariado Civil y Sanidad Militar',
    years: '1932 – 1935',
    biography: 'Miles de mujeres bolivianas y paraguayas —como Ignacia Zeballos, María Teresa Mercado, enfermeras de la Cruz Roja y las "Madrinas de Guerra"— sostuvieron los hospitales de sangre en Villa Montes, Muñoz, Isla Poí y los trenes hospitalarios bajo epidemias de malaria y avitaminosis.',
    keyContribution: 'Salvamento de más de 40.000 heridos y heridos por deshidratación, además de soporte moral epistolar.',
    famousQuote: 'Donde terminaba el estruendo del cañón comenzaba la batalla silenciosa por salvar cada vida.',
    badges: ['Sanidad Militar', 'Humanitarismo', 'Memoria Histórica']
  }
];

export const ARSENAL_ITEMS: ArsenalItem[] = [
  {
    id: 'curtiss-hawk',
    name: 'Curtiss Falcon / Curtiss P-6 Hawk II',
    category: 'Aviación',
    origin: 'Estados Unidos (Curtiss-Wright)',
    users: 'Bolivia',
    specs: [
      { label: 'Velocidad máxima', value: '320 km/h' },
      { label: 'Motor', value: 'Wright Cyclone 710 HP radial' },
      { label: 'Armamento', value: '2 ametralladoras Browning cal. 7.65 mm + 100 kg bombas' },
      { label: 'Rol táctico', value: 'Caza interceptor, escolta y apoyo cercano' }
    ],
    history: 'Espina dorsal del Cuerpo de Aviación de Bolivia. A bordo del Curtiss Hawk II "Chaco", el Mayor Rafael Pabón logró la primera victoria aérea de América del Sur en Kilómetro 7.',
    tacticalAdvantage: 'Otorgó a Bolivia superioridad en reconocimiento fotográfico, reglaje de artillería y bombardeo táctico durante casi todo el conflicto.'
  },
  {
    id: 'junkers-ju52',
    name: 'Junkers Ju 52 / 3m ("Tante Ju")',
    category: 'Aviación',
    origin: 'Alemania (Junkers Flugzeugwerk)',
    users: 'Bolivia',
    specs: [
      { label: 'Capacidad de carga', value: '3.000 kg o 17 heridos en camilla' },
      { label: 'Motores', value: '3 motores radiales Pratt & Whitney Hornet' },
      { label: 'Autonomía', value: '1.300 km' },
      { label: 'Operador', value: 'Lloyd Aéreo Boliviano (LAB) incorporado al Ejército' }
    ],
    history: 'Tres trimotores Junkers Ju 52 ("Chorolque", "Huanuni" y "Juan del Valle") donados por Simón I. Patiño operaron con el LAB, transportando más de 4.000 toneladas de pertrechos y evacuando a miles de heridos desde Villa Montes a Santa Cruz y Cochabamba.',
    tacticalAdvantage: 'Primer puente aéreo logístico y de evacuación aeromédica a gran escala en la historia de Sudamérica.'
  },
  {
    id: 'vickers-6ton',
    name: 'Tanque Vickers Mark E (6 Toneladas)',
    category: 'Blindados y Artillería',
    origin: 'Reino Unido (Vickers-Armstrongs)',
    users: 'Bolivia',
    specs: [
      { label: 'Peso y blindaje', value: '6,5 toneladas / 13 mm de acero remachado' },
      { label: 'Armamento Tipo A', value: '2 torretas con ametralladoras Vickers .303' },
      { label: 'Armamento Tipo B', value: '1 cañón corto de 47 mm + 1 ametralladora coaxial' },
      { label: 'Debut histórico', value: 'Segunda Batalla de Nanawa (Julio de 1933)' }
    ],
    history: 'Primeros tanques de combate empleados en una guerra en el continente americano. A pesar de que la temperatura interna superaba los 55 °C en el monte chaqueño, abrieron brechas frente a casamatas fortificadas.',
    tacticalAdvantage: 'Poder de fuego móvil blindado para apoyo directo de infantería en asaltos a fortines.'
  },
  {
    id: 'vickers-zb26',
    name: 'Ametralladora Liviana ZB vz. 26 ("Piripipí") y Fusil Mauser',
    category: 'Infantería',
    origin: 'Checoslovaquia (Zbrojovka Brno) / Alemania',
    users: 'Ambos',
    specs: [
      { label: 'Calibre', value: '7.65 x 53 mm Mauser' },
      { label: 'Cadencia de tiro', value: '500 disparos por minuto' },
      { label: 'Peso', value: '9,6 kg con bípode' },
      { label: 'Apodo en campaña', value: '"Piripipí" (por el sonido de su ráfaga en el monte)' }
    ],
    history: 'Adquirida originalmente por Bolivia y luego capturada y empleada también por Paraguay, la ZB-26 y la subametralladora Schmeisser MP-28 definieron el combate a corta distancia en las picadas del monte espinoso.',
    tacticalAdvantage: 'Alta fiabilidad frente al polvo fino del Chaco y cambio rápido de cañón recalentado.'
  },
  {
    id: 'mortero-stokes',
    name: 'Mortero Stokes-Brandt de 81 mm y Cañón Schneider 75 mm',
    category: 'Blindados y Artillería',
    origin: 'Francia (Brandt / Schneider)',
    users: 'Ambos',
    specs: [
      { label: 'Alcance mortero 81 mm', value: '2.850 metros con granada estándar' },
      { label: 'Cadencia mortero', value: '18 a 25 proyectiles por minuto' },
      { label: 'Alcance cañón Schneider', value: '9.000 metros en tiro curvo de montaña' },
      { label: 'Transporte', value: 'Desmontable en 3 cargas a lomo o camión' }
    ],
    history: 'En el bosque bajo chaqueño donde la artillería de tiro tenso chocaba con los árboles, el tiro parabólico vertical del mortero Stokes-Brandt de 81 mm y de las baterías Schneider en Villa Montes resultó devastador.',
    tacticalAdvantage: 'Capacidad de batir trincheras ocultas tras cortinas de quebracho sin línea visual directa.'
  },
  {
    id: 'camion-aguatero',
    name: 'Camiones Aguateros Ford / Chevrolet y Caramañola Militar',
    category: 'Logística y Sanidad',
    origin: 'Estados Unidos / Industria Nacional',
    users: 'Ambos',
    specs: [
      { label: 'Ración mínima diaria', value: '0,5 a 1 litro por soldado en combate' },
      { label: 'Distancia logística BO', value: 'Hasta 1.600 km desde La Paz (ferrocarril + camión)' },
      { label: 'Distancia logística PY', value: '450 a 700 km desde Puerto Casado' },
      { label: 'Enemigo ambiental', value: 'Deshidratación, polvo ("tuscal") y malaria' }
    ],
    history: 'La Guerra del Chaco fue la primera guerra motorizada de Sudamérica. Miles de camiones Ford AA y Chevrolet recorrían picadas de polvo ("colchón de tierra") llevando turriles de agua que valían más que el combustible.',
    tacticalAdvantage: 'Un regimiento sin camiones aguateros colapsaba en menos de 48 horas bajo el sol de 43 °C del Chaco Boreal.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cuál fue el factor geográfico y logístico determinante que originó el incidente de Laguna Chuquisaca / Pitiantuta en junio de 1932?',
    options: [
      'El hallazgo de minas de estaño superficiales en el centro del Chaco.',
      'El control de la única gran laguna de agua dulce en cientos de kilómetros de desierto árido.',
      'La construcción de un puente ferroviario sobre el río Amazonas.',
      'La disputa por un puerto marítimo en el océano Atlántico.'
    ],
    correctIndex: 1,
    explanation: 'En el árido Chaco Boreal, la Laguna Chuquisaca (Pitiantuta) era el único reservorio natural de agua dulce en el sector central, indispensable para sostener tropas.'
  },
  {
    id: 2,
    question: '¿Quién comandó a los 619 soldados bolivianos durante los 20 días de heroica resistencia en el Sitio de Boquerón (septiembre de 1932)?',
    options: [
      'Gral. Hans Kundt',
      'Tcnl. Manuel Marzana Oroza',
      'My. Óscar Moscoso',
      'Canciller Tomás Manuel Elío'
    ],
    correctIndex: 1,
    explanation: 'El Teniente Coronel Manuel Marzana Oroza lideró la defensa épica del Fortín Boquerón del 9 al 29 de septiembre de 1932 hasta agotar el último proyectil.'
  },
  {
    id: 3,
    question: '¿Qué hito aeronáutico protagonizó el Mayor boliviano Rafael Pabón el 4 de diciembre de 1932 sobre el sector de Kilómetro 7?',
    options: [
      'El primer vuelo supersónico del continente.',
      'El primer combate aéreo con derribo en la historia de América del Sur.',
      'El primer bombardeo nocturno transatlántico.',
      'La invención del helicóptero de transporte.'
    ],
    correctIndex: 1,
    explanation: 'A bordo de su caza biplano Curtiss Hawk II, el Mayor Rafael Pabón protagonizó y ganó el primer combate aéreo de Sudamérica sobre el cañadón de Kilómetro 7.'
  },
  {
    id: 4,
    question: '¿En qué batalla de mayo de 1934 el Ejército de Bolivia ejecutó un triple cerco concéntrico capturando a cerca de 1.400 efectivos?',
    options: [
      'Batalla de Cañada Strongest (Cañada Cochabamba)',
      'Primera Batalla de Nanawa',
      'Incidente de Fortín Vanguardia',
      'Combate de Puerto Suárez'
    ],
    correctIndex: 0,
    explanation: 'Del 18 al 25 de mayo de 1934, en Cañada Strongest, el Ejército de Bolivia ejecutó su maniobra envolvente más exitosa de toda la contienda.'
  },
  {
    id: 5,
    question: '¿Qué estratega boliviano diseñó la línea fortificada de artillería que hizo inexpugnable a Villa Montes en febrero y marzo de 1935?',
    options: [
      'Cnel. Bernardino Bilbao Rioja',
      'Gral. Filiberto Osorio',
      'Dr. Daniel Salamanca',
      'Cnel. Arturo Bray'
    ],
    correctIndex: 0,
    explanation: 'El Coronel (luego Mariscal) Bernardino Bilbao Rioja organizó la defensa escalonada de Villa Montes con 36 baterías de artillería, deteniendo definitivamente la ofensiva adversaria.'
  }
];
