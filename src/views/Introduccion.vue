<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-2           
      .col-lg-2.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')   
      .col-lg-10.my-3
        p(data-aos="fade-down").mb-0 Las comunidades virtuales se han convertido en espacios de interacción a través de internet. El envío y recibo de mensajes, el trabajo colaborativo, la resolución de problemas y el intercambio de productos usando diferentes canales digitales, son solo algunas de las actividades que pueden desarrollarse en estos espacios. En el siguiente video se pueden identificar elementos adicionales de esta temática: 
    .row.justify-content-center.align-items-center.bg1.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure.p-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
