<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Recolección de información

    p(data-aos="fade-down").mb-5 Las diferentes actividades empresariales que han sucedido en este siglo, se han enfocado en el manejo de la información y de acuerdo con Ruiz (2007), “hoy en día se tiene tanto acceso a la información que se ha convertido en una desventaja competitiva”. Es importante entender conceptos como datos, información, conocimiento y sistemas de información:

    TabsB.color-acento-contenido.mb-5(data-aos="fade") 
      .py-4.py-md-5(titulo="Datos" :icono="require('@/assets/curso/temas/33.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-8.mb-4.mb-lg-0
            h4 Datos 
            p.mb-0 Se considera dato a toda información específica y concreta acerca de un elemento, hecho, o situación que permite analizarlos, estudiarlos, diagnosticarlos y conocerlos. Por ejemplo: crecimiento económico del 3 %, donde 3 % es la expresión que debe analizarse en relación con el contexto “crecimiento económico”.      
          .col-lg-3.col-6
            figure
              img(src="@/assets/curso/temas/34.png", alt="alt")
      .py-4.py-md-5(titulo="Información" :icono="require('@/assets/curso/temas/33.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-8.mb-4.mb-lg-0
            h4 Información 
            p.mb-0 Se denomina información a la presentación o agrupación de los datos significativos y en conjunto describen eventos, sucesos o eventos y con su procesamiento se puede elaborar un mensaje con sentido crítico.      
          .col-lg-3.col-6
            figure
              img(src="@/assets/curso/temas/35.png", alt="alt")
      .py-4.py-md-5(titulo="Conocimiento" :icono="require('@/assets/curso/temas/33.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-8.mb-4.mb-lg-0
            h4 Conocimiento 
            p.mb-0 Es el resultado de analizar, procesar, comparar y combinar los datos convertidos en información confiable de acuerdo con los intereses de la empresa. De esta forma, el sujeto o empresa pueden argumentar el manejo de la información.      
          .col-lg-3.col-6
            figure
              img(src="@/assets/curso/temas/36.png", alt="alt")
      .py-4.py-md-5(titulo="Sistemas de información" :icono="require('@/assets/curso/temas/33.svg')")
        .row.justify-content-center.align-items-start
          .col-lg-8.mb-4.mb-lg-0
            h4 Sistemas de información 
            p.mb-0 El sistema de información (SI) es una serie de elementos que se relacionan y se integran (hardware y software) para recopilar, almacenar y procesar información que apoye la toma de decisiones. Adicionalmente, los sistemas de información apoyan el control y supervisión de la misma      
          .col-lg-3.col-6
            figure
              img(src="@/assets/curso/temas/37.png", alt="alt")

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Tipos de investigación

    p(data-aos="fade-down").mb-5 La investigación de mercado es un proceso que aplica la empresa para obtener información del sector mediante la búsqueda y análisis de datos, bien sea de fuentes primarias o secundarias. En la investigación de mercados se pueden distinguir dos tipos de investigación: investigación de mercados cualitativa e investigación de mercados cuantitativa.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg11.p-5(data-aos="fade-right")
        h4(data-aos="fade-down") Investigación de mercados cualitativa
        p(data-aos="fade-down").mb-5 Se denomina investigación de mercados cualitativa al conjunto de técnicas que se utilizan para obtener una visión general del comportamiento y la percepción de las personas sobre un tema en particular. Según Báez y Pérez (2014) la investigación cualitativa es:
        .row.justify-content-center.align-items-center         
          .col-lg-10
            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr
                    th(colspan='2') Investigación de mercados cualitativos
                tbody
                  tr.bgt1
                    td.text-bold.text-center Ventajas
                    td.text-bold.text-center Desventajas 
                  tr.bgt2
                    td
                      ul.lista-ul.ps-1
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 No necesita un plan estrictamente diseñado.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Se adquiere información detallada y enriquecida en descripciones.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Observa el contexto y el sentido social.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 La comunicación es horizontal.
                    
                    td
                      ul.lista-ul.ps-1
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Se interpreta la investigación con una visión sesgada.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Consume mucho tiempo.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Puede tardar meses.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Hay demasiado involucramiento por parte del investigador.

        p(data-aos="fade-down").mb-0 Para concretar, la investigación cualitativa pretende profundizar en los conceptos y valores, detectar motivadores y valorar las reacciones y para su ejecución requiere un soporte de psicología.             

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg11.p-5(data-aos="fade-left")
        h4(data-aos="fade-down") Investigación de mercados cuantitativa 
        p(data-aos="fade-down").mb-5 Se denomina investigación de mercados cuantitativa aquella que busca obtener información acerca de la población objeto o público objetivo. Los datos obtenidos como resultado de la investigación se pueden analizar con modelos matemáticos o estadísticos, entre otras ayudas técnicas.
        .row.justify-content-center.align-items-center         
          .col-lg-10
            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr
                    th(colspan='2') Investigación de mercados cualitativa
                tbody
                  tr.bgt1
                    td.text-bold.text-center Ventajas
                    td.text-bold.text-center Desventajas 
                  tr.bgt2
                    td
                      ul.lista-ul.ps-1
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Permite al investigador medir y analizar datos.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Relación variable independiente y dependiente.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Objetividad en la investigación.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Puede utilizarse para probar hipótesis.

                    
                    td
                      ul.lista-ul.ps-1
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 El contexto del estudio o experimento es ignorado.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 No hay discusiones en los resultados, porque son exactos.
                        li 
                          i.fas.fa-check.color-v1
                          p.mb-0 Debe estudiarse una amplia porción de la población.


        p(data-aos="fade-down").mb-0 Para sintetizar, la investigación cuantitativa pretende cuantificar, establecer proporciones y diferencias e importancia relativa y para su ejecución requiere un soporte estadístico.

    p(data-aos="fade-down") Para sintetizar, la investigación cuantitativa pretende cuantificar, establecer proporciones y diferencias e importancia relativa y para su ejecución requiere un soporte estadístico.
    p(data-aos="fade-down").mb-5 Se invita a observar el siguiente video para ampliar el concepto de investigación y la clasificación según el objeto de estudio:

    h5.text-center(data-aos="fade-down").my-5 El concepto de investigación y la clasificación según el objeto de estudio

    .row.justify-content-center.align-items-center.bg1.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure.p-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Modelo de negocio
    .row.justify-content-center.align-items-center.mb-2           
      .col-lg-3.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')   
      .col-lg-9.my-3
        p(data-aos="fade-down") Cuando se realiza una investigación, es necesario obtener una información del mercado y definir la manera como se obtiene esa información, eso se denomina recolección de datos. Una vez definido el método de recolección, se procede a realizar el trabajo de campo.

        p(data-aos="fade-down") El trabajo de campo, requiere varias actividades previas para su ejecución, como la identificación, formación y seguimiento de las personas que recopilan los datos, selección adecuada de la modalidad (presencial o virtual) y la técnica para la obtención de los datos, bien sea la observación, entrevistas telefónicas, entrevistas personales, por correo o electrónicas, encuestas, entre otras. 
      
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.bg2.p-4(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 Hay diferentes métodos y técnicas para obtener la información del mercado que puede ser importante en la investigación. La selección del método de recolección de información, depende del enfoque de la estrategia, las variables seleccionadas, la exactitud esperada, la zona de recolección y las capacidades del encuestador.

    p(data-aos="fade-down").mb-5 Las siguientes técnicas reúnen y ayudan a organizar la información de acuerdo con el objetivo trazado (Caro, 2019).

    .tarjeta.tarjeta--gris.p-3.py-5.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Observación 
            p La observación consiste en obtener información del entorno, objeto o hecho en el cual enfocamos la investigación, mediante el registro de datos para su diagnóstico. En esta técnica, el investigador forma parte de la situación observada, persona o grupo de personas, analizando sus comportamientos.  
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Observación directa 
            p El investigador se encuentra en el lugar de los hechos sin realizar algún tipo de intervención para no alterar la situación o los datos. Sus características son: 
            ul.lista-ul.ps-1
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[u No es intrusiva:] el foco de investigación (objeto observado) no es intervenido.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[u No es participativa:] no se hacen recomendaciones a los participantes para no alterar los datos.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[u Es de larga duración:] con la finalidad que los hechos se desarrollen de forma natural.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[u Resultados variados:] en este método, los resultados pueden ser tanto reales como condicionados.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[u Participante:] el investigador participa de la acción a la vez que obtiene los datos.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[u No participante:] el investigador no interactúa con la población objeto de investigación.
             
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Observación indirecta 
            p Aquí el investigador recolecta la información a partir de fuentes secundarias como bases de datos, documentación digital, tesis de grados, entrevistas realizadas, entre otros. La observación indirecta se caracteriza porque:
            ul.lista-ul.ps-1
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Se basa en fuentes secundaras.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 No es intrusiva, pues no se interactúa de forma directa con la investigación.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Los datos obtenidos son esencialmente cualitativos.
              
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Entrevista 
            p Es una técnica muy utilizada para obtener información. Consiste en una conversación realizada entre dos o más personas por medio de preguntas que pueden ser abiertas o cerradas. Se elabora un guion que permita orientar la conversación hacia la obtención de la información, puede ser presencial, telefónica o en línea.

            p Usualmente, en la entrevista se presentan preguntas abiertas para que la persona entrevistada brinde la mayor cantidad de información posible, mientras que, en las preguntas cerradas, las respuestas son limitadas y no hay lugar para alternativas.
 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Entrevistas estructuradas o enfocadas 
            p Las preguntas se prestablecen mediante un guion organizado y estructurado para que el entrevistador elija las respuestas y se aplica, de igual forma, a toda la muestra. Su sistematización es más sencilla, lo que permite un mejor análisis y los resultados son más objetivos y confiables. Así mismo, se convierte en un formato poco flexible, con bajo nivel de adaptabilidad y poca profundidad en las respuestas obtenidas. 
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Entrevistas semiestructuradas
            p Son más flexibles que las estructuradas porque gran parte de las preguntas se pueden ajustar al entrevistado. Aquí el entrevistador puede adaptar las preguntas a medida que se va desarrollando la entrevista sin modificar el guion previamente establecido; es posible aclarar respuestas, ampliar conceptos, profundizar términos, entre otros.
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Entrevistas no estructurada 
            p Son más flexibles e informales que la estructurada y semiestructurada. Se planifica con la finalidad que pueda adaptarse completamente a las condiciones del entrevistado sin perder su foco. Los participantes (entrevistador y entrevistados) pueden profundizar los conceptos y ampliar las respuestas, hasta el punto de desviarse del plan original. En este proceso, se pueden presentar “lagunas” en la información obtenida que puede variar de un entrevistador a otro.
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Encuesta 
            p Utilizada para obtener información de un grupo de individuos sobre diversos temas mediante una serie de preguntas organizadas. A diferencia de la entrevista, no requieren de una interacción directa entre el entrevistador y el entrevistado, incluso, puede desarrollarse telefónicamente y online. Puede tener preguntas abiertas y cerradas, así:
            ul.lista-ul.ps-1
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[b Pregunta abierta] ¿Cómo le pareció el diseño del producto?
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[b Pregunta dicotómica] ¿Cómo le pareció el producto?  a. Bueno o b. Malo.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[b Pregunta de opción múltiple] ¿Cómo le pareció el producto? 
                  br
                  span a. Excelente; b. Bueno; c. Regular; d. Malo. 
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[b Pregunta de escala de calificación] ¿El producto suplió perfectamente sus necesidades? 
                  br
                  span a. Nada satisfecho; b. Poco satisfecho; c. Neutral; d. Muy satisfecho; e. Totalmente satisfecho.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 #[b Pregunta de orden de rangos:] "Coloque en orden de mayor a menor importancia las siguientes opciones, siendo 5 la más importante y 1 la menos importante para el producto:
                  br
                  span __ Marca; __ Diseño; __ Empaque; __ Tamaño; __ Color.
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/47.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-7.mb-4.mb-md-0
            h4.mb-3 Focus Group 
            p Se desarrolla mediante un encuentro presencial o virtual con un grupo de personas y permite conocer de forma rápida lo que piensan los participantes del tema objeto de investigación, por lo general estudios de mercado. Se caracteriza porque:
            ul.lista-ul.ps-1
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Se obtienen datos directamente del consumidor.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 El moderador orienta las preguntas al grupo y dirige el encuentro para que los participantes puedan expresarse con naturalidad.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Tienen una duración limitada.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Los grupos pueden estar conformados entre 5 y 10 personas para un mejor control.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Normalmente, los miembros del grupo no se conocen entre sí. 
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Son útiles para explorar al público objetivo antes de lanzar un producto o hacer un relanzamiento de marca.              
          .col-lg-4
            img.img-a.img-t(src='@/assets/curso/temas/48.png', alt='')

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Herramientas para la recolección de información

    p(data-aos="fade-down").mb-5 La recolección de información varía según el tipo de investigación que se esté desarrollando y las técnicas establecidas para tal fin; es así que, a continuación, se destacan los cuestionarios y las escalas de actitudes como dos herramientas de relevancia para la administración de la información que se obtiene:

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .list.bg6(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1 Los cuestionarios

    p(data-aos="fade-down").mb-5 Los cuestionarios contienen un conjunto de preguntas para obtener, procesar y analizar información de la muestra o segmento de la población seleccionada. Este instrumento se utiliza mucho en la investigación cuantitativa de mercados, pues los datos pueden ser exactos para una correcta medición.
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg12.p-4
        .row.justify-content-center.align-items-center        
          .col-lg-8    
            h5(data-aos="fade-down").mb-4 Para crear un cuestionario es importante tener en cuenta:
            ul.lista-ul.ps-1
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Identificar qué información necesitamos obtener.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Determinar el tipo de pregunta.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Determinar la forma para recopilar la información, que puede ser presencial (encuesta personal) o virtual (formulario en línea).
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Diseñar las preguntas con sus respectivas formas de respuesta y orden.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Realizar un test de prueba, antes de realizar la encuesta.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Realizar la encuesta.
               
          .col-lg-4    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.svg', alt='')

    p(data-aos="fade-down").mb-5 Las preguntas juegan un papel importante para el cuestionario, pues su correcta elaboración garantizará que la respuesta permita obtener la información correcta. Entre los diferentes tipos de preguntas, tenemos:

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg', alt='')


    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.bg5.p-4(data-aos="fade-left")
        .row.justify-content-center.align-items-center         
          .col-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='')          
          .col
            p(data-aos="fade-down") Surveymonkey es una plataforma especializada para el desarrollo de encuestas en línea, muy útil, no solo para el diseño del cuestionario, sino también para la organización y graficación de los resultados. El siguiente es un ejemplo de cuestionario, que puede servir para una investigación básica de un producto o servicio y que incluye diferentes tipos de preguntas.
            .tarjeta.color-acento-contenido.p-3
              .row.justify-content-around.align-items-center
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0.text-white Ejemplo de cuestionario
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Formulario.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .list.bg6(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1 Las escalas de actitudes

    .row.justify-content-center.align-items-center.mb-2           
      .col-lg-3.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')   
      .col-lg-9.my-3
        p(data-aos="fade-down") Las escalas de actitudes obtienen información a partir del análisis objetivo de las actitudes de la población. Implican procedimientos para darle un valor cuantitativo o medible a la aceptación o rechazo por parte de los implicados. Por ejemplo: si un encuestado responde que no está satisfecho con el servicio porque todos los días lo atiende mal, se le puede dar un valor de “2”, porque es “mala atención”, de esta forma, el resultado se convierte en cuantitativo y se puede medir.

        p(data-aos="fade-down") La escala de Likert es un instrumento que, a diferencia de los cuestionarios, deben ser estandarizados y con una mejor preparación, para obtener los datos con mayor confiabilidad y validez. Se le da este nombre por el psicólogo Rensis Likert, quien distinguió entre una escala apropiada, que se deriva de respuestas colectivas a un grupo de ítems (ocho o más) y las respuestas son puntuadas en un rango de valores
        

    p(data-aos="fade-down").mb-5 La escala de Likert tiene dos propiedades referidas para su medición, estas son:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg2.p-4.mb-4.brad(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 #[b Dirección de la respuesta:] La cual puede ser negativa o positiva o neutral.
      .col-lg-10.bg2.p-4.brad(data-aos="flip-down")            
        p(data-aos="fade-down").mb-0 #[b Intensidad de la respuesta:] Que puede ser alta si la persona está convencida y que su actitud o comportamiento es justificado o baja si la persona no piensa así.                                                                       
    p(data-aos="fade-down").mb-5 Para construir una encuesta con preguntas y respuestas basadas en la escala de Likert, se debe llevar a cabo el siguiente procedimiento:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg11(data-aos="fade-right") 
        .row.justify-content-center.align-items-end        
          .col-lg-7.p-5
            ul.lista-ul
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Definir la actitud o variable que se va a medir.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Determinar los indicadores de la variable.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Determinar la dirección positiva o negativa.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Asignar los valores a cada ítem.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Distribuir los ítems en la encuesta.
              li 
                i.fas.fa-check.color-v1
                p.mb-0 Construir la escala final con base a los ítems seleccionados.               
          .col-lg-4.p-0    
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.svg', alt='')

    p(data-aos="fade-down").mb-5 Algunas de las alternativas que se presentan en una escala Likert, son:  

    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th Línea de Opciones
            th Alternativa 1
            th Alternativa 2
            th Alternativa 3
            th Alternativa 4
            th Alternativa 5
        tbody
          tr.text-center 
            td 1 >                        
            td Muy de acuerdo.                        
            td De acuerdo.                        
            td Ni de acuerdo ni en desacuerdo.                        
            td En desacuerdo.                       
            td Muy en desacuerdo. 
          tr.text-center 
            td 2 >                                    
            td Totalmente de acuerdo.                                   
            td De acuerdo.                                  
            td Neutral.                                    
            td En desacuerdo.                                    
            td Totalmente en desacuerdo.
          tr.text-center 
            td 3 >                                    
            td Definitivamente sí.                                    
            td Probablemente sí.                                    
            td Indeciso.                                    
            td Probablemente no.                                    
            td Definitivamente no. 
          tr.text-center 
            td 4 >                                    
            td Completamente verdadero.
            td Verdadero.                                    
            td Ni falso ni verdadero.                                   
            td Falso.                                    
            td Completamente falso. 
          tr.text-center 
            td 5 >                                   
            td Mucho.                                    
            td Bastante.                                    
            td Neutral.                                   
            td Un poco.                                    
            td No, en lo absoluto.

    p(data-aos="fade-down").mb-5 A cada una de las alternativas se les asigna un valor o peso representado en un número, de manera que solo se pueda marcar una sola respuesta, de lo contrario, el dato no es válido. Por ejemplo:

    .tabla-a.color-acento-botones
      table
        thead
          tr
            th N.°
            th Pregunta
            th Muy de acuerdo
            th De acuerdo
            th Ni de acuerdo ni en desacuerdo
            td En desacuerdo                 
            th Muy en desacuerdo
        tbody
          tr.text-center 
            td 1         
            td El cliente no comprendió las necesidades de la aplicación.                    
            td 5                 
            td 4                       
            td 3                
            td 2               
            td 1
          tr.text-center 
            td 1         
            td Al cliente le gusta el producto, pero no lo usa.                    
            td 5                 
            td 4                       
            td 3                
            td 2               
            td 1                          
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
