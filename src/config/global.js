export default {
  global: {
    componenteFormativo: 'Comunidades virtuales para el <i>marketing</i>',
    descripcionCurso:
      'Una comunidad virtual es un espacio digital que congrega diferentes públicos con propósitos diversos, tal como el aprendizaje, los negocios, la comunicación, el entretenimiento, entre otros. Para este programa, es importante identificar las interacciones y los tipos de personas que hacen parte de estas comunidades para proponer estrategias que apoyen su fortalecimiento y su dinamización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.png'),
      },
      {
        clases: ['banner-principal-decorativo-10'],
        imagen: require('@/assets/curso/portada/10.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunidades Virtuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de comunidades virtuales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Plataformas para la creación de comunidades virtuales',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de investigación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de recolección de información',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas para la recolección de información',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<i>Insights</i> y medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Usos del <i>insight</i>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Variables para definir <i>insights</i>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Herramientas digitales para <i>insight</i> de <i>marketing</i>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Clasificación de herramientas digitales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Uso de las herramientas digitales en los <i>insights</i>',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Palabras clave (<i>keywords</i>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Uso de <i>keywords</i> en el <i>marketing</i> digital',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Herramientas de selección de <i>keywords</i>',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Comunidades virtuales',
      referencia:
        'Angular UNIVA. (2018). <i>Redes sociales, la comunidad virtual</i>. (2018). ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zM_p8MvLOyM',
    },
    {
      tema: '2. Recolección de información',
      referencia:
        'Rock Content. (2018). <i>Investigación de marketing y de mercado: ¿cuál es la mejor estrategia para mi negocio?</i> ',
      tipo: 'Página <i>web</i>',
      link:
        'https://rockcontent.com/es/blog/investigacion-de-marketing-y-de-mercados/',
    },
    {
      tema: '3. <i>Insights</i> y medios digitales',
      referencia:
        'Rodríguez-Caro, O. J., Montoya-Restrepo, L. A., y Montoya-Restrepo, I. A. (2022). Reconocimiento del valor storytelling y la co-creación en la construcción de microsegmentos a través de la estrategia de marketing digital. <i>I + D Revista de Investigaciones</i>, 17(2).',
      tipo: 'Documento en línea',
      link:
        'https://www.researchgate.net/publication/363757487_Reconocimiento_del_valor_Storytelling_y_la_Co-creacion_en_la_construccion_de_microsegmentos_a_traves_de_la_Estrategia_de_Marketing_Digital',
    },
    {
      tema: '3. <i>Insights</i> y medios digitales',
      referencia:
        'Program S. A. (2019). <i>Branding en la era digital | PragmaTalk.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vjf-XE6S0eU',
    },
    {
      tema: '4. Palabras claves (<i>keywords</i>)',
      referencia:
        'Rock Content. (2021). <i>¿Qué es una keyword y cómo influye en el SEO?</i> ',
      tipo: 'Página <i>web</i>',
      link: 'https://rockcontent.com/es/blog/keywords/',
    },
  ],
  glosario: [
    {
      termino: 'Comunidad <em>online</em>',
      significado:
        'conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'también llamada “<i>página de fans</i>”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una <i>fan page</i> no tiene límite de fans y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: '<em>Feed</em>',
      significado:
        'también conocido como RSS (<i>Really Simple Syndication</i>), es el formato en el que se comparte el contenido de los <i>blogs</i>.',
    },
    {
      termino: 'Influenciador',
      significado:
        'en social media es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas.',
    },
    {
      termino: 'Infografía ',
      significado:
        'imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información.',
    },
    {
      termino: 'KPI',
      significado:
        'siglas de <i>Key Performance Indicator</i>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de <i>social media marketing</i>.',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'estrategias de <i>marketing</i> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <i>blog</i> y del <i>social media marketing</i>.',
    },
    {
      termino: 'Metadatos ',
      significado:
        'código que se estructura al inicio de un sitio <i>web</i> para clasificar el tipo de información que describe a su vez otro elemento del cual se puede obtener información detallada de sus características.',
    },
    {
      termino: 'Reputación <em>online</em>',
      significado:
        'conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales.',
    },
    {
      termino: '<em>Retargeting</em>',
      significado:
        'una nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posibles si, y solo si, los usuarios admiten voluntariamente que aceptan <i>cookies</i> cuando navegan en determinado sitio.',
    },
    {
      termino: 'Segmentar',
      significado:
        'en redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'técnica de <i>marketing</i> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
    {
      termino: 'Viral',
      significado:
        'un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de <i>marketing</i> es “viralizar” sus contenidos.',
    },
    {
      termino: '<em>Webinars</em>',
      significado:
        'también llamados <i>webminars</i>, son eventos o conferencias que tienen lugar en el medio <i>online</i>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
    {
      termino: '<em>Youtubers</em>',
      significado:
        'personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <i>youtuber</i> gana dinero por los anuncios de los videos o por mostrar productos patrocinados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Báez, J., y Pérez, T. (2007). <i>Investigación cualitativa</i>. ESIC Editorial.',
    },
    {
      referencia:
        'Báez, J., y Pérez, T. (2014). <i>El método cualitativo de investigación desde la perspectiva de marketing: el caso de las universidades públicas de Madrid</i>.',
      link: 'https://eprints.ucm.es/id/eprint/29615/1/T35974.pdf',
    },
    {
      referencia:
        'Baym, N. (2002). Dimensiones intergrupales de internet. <i>Comunicación Intergrupal: múltiples perspectivas</i>, 213-238.',
    },
    {
      referencia:
        'Cabero, A., J. (2006). Comunidades virtuales para el aprendizaje. Su utilización en la enseñanza. <i>Edutec. Revista Electrónica de Tecnología Educativa</i>, (20), a053.',
      link: 'https://www.edutec.es/revista/index.php/edutec-e/article/view/510',
    },
    {
      referencia:
        'Fandos Garrido, M., y González Soto, A. P. (2009). <i>Estrategias de aprendizaje ante las nuevas posibilidades educativas de las TIC</i>.',
      link:
        'https://laverdaderamagnitud.files.wordpress.com/2009/08/metodologia-educativa-tic.pdf',
    },
    {
      referencia:
        'Hagel, III y Armstrong, A. G. (1997). Ganancia neta. <i>McKinsey Quarterly</i>, (1), 140-153.',
    },
    {
      referencia:
        'Jesús, S. (2022). <i>Qué es un insight en marketing: ejemplos prácticos</i>. Economia3.',
      link: 'https://economia3.com/que-es-insight',
    },
    {
      referencia:
        'Jiménez López, O., y Martínez, R. (2002). Comunidades virtuales: un modelo de aprendizaje para la nueva economía. <i>Formación XXI</i>, 3, 29-31.',
    },
    {
      referencia:
        'Jonassen, D. H., Carr, C. y Yueh, H. P. (1998). Las computadoras como herramientas mentales para involucrar a los estudiantes en el pensamiento crítico. <i>TechTrends</i>, 43(2), 24-32.',
    },
    {
      referencia: 'Lévi, P. (1999). <i>¿Qué es lo virtual?</i> P. Levi.',
    },
    {
      referencia:
        'Mercer. (2001). <i>Comunidades. Palabras y mentes. Cómo usamos el lenguaje para pensar juntos</i>. Paidós.',
    },
    {
      referencia:
        'Pazos, M., Pérez, A., y Salinas J. (2002). <i>Comunidades virtuales: de las listas de discusión a las comunidades de aprendizaje</i>.',
      link:
        'http://ardilladigital.com/DOCUMENTOS/TECNOLOGIA%20EDUCATIVA/TICs/T7%20APLICACIONES%20TICS-ED/CVIRTUALES01.pdf',
    },
    {
      referencia:
        'Ruiz de Querol, R. R. (2007). <i>La sociedad de la información</i>. UOC.',
    },
    {
      referencia:
        'Salinas, I., J. M. (2003). Acceso a la información y aprendizaje informal en Internet. <i>Comunicar: Revista Científica Iberoamericana de Comunicación y Educación</i>.',
    },
    {
      referencia:
        'Sallán, J. G. (2006). <i>Las comunidades virtuales de aprendizaje, Educar</i>, 37,41-64.',
      link: 'https://raco.cat/index.php/Educar/article/view/58020',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Paolo Andrés Cantillo Largo',
        cargo: 'Experto temático',
        centro: 'Regional Antioquia - Centro de Comercio',
      },
      {
        nombre: 'María Alejandra Tovar Bernal ',
        cargo: 'Experta temática ',
        centro: 'Regional Tolima - Centro de Industria y la Información ',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gomez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
