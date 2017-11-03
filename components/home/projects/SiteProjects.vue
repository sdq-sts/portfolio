<template>
  <section class="projects">
    <b-row no-gutters>
      <b-col class="projects-title">
        <h1>Projetos</h1>
      </b-col>

      <b-col xl="8" offset-xl="2"
             lg="10" offset-lg="1"
             md="12" offset-md="0"
             sm="12" offset-sm="0"
             cols="12" offset="0" 
             v-for="(project, index) in projects" :key="index">
        <div class="project">
          <div class="project__overlay project-overlay">
            <h2 class="project-overlay__title">{{ project.name }}</h2>
          </div>  
          <div class="project__thumb">
            <img :src="project.thumbSrc" :alt="project.alt">
          </div>
        </div>
      </b-col>

    </b-row>
  </section>
</template>

<script>
import WanderlustThumb from '~/assets/projects/wanderlust-thumb.jpg'
import InTimeThumb from '~/assets/projects/in-time-thumb.jpg'
import DotaQuotesThumb from '~/assets/projects/dota-quotes-thumb.jpg'

export default {
  data () {
    return {
      projects: [
        { name: 'Wanderlust', thumbSrc: WanderlustThumb, alt: 'Site Wanderlust' },
        { name: 'In time . Droeloe', thumbSrc: InTimeThumb, alt: 'Site In Time' },
        { name: 'Dota Quotes', thumbSrc: DotaQuotesThumb, alt: 'Site Dota Quotes' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  margin-top: 20em;
}

.projects-title {
  text-align: center;
  text-transform: uppercase;
  color: #F1F1F1;

  > h1 {
    margin: 0 0 -.3em;
    font-size: 8em;
    font-weight: 900;
    font-family: "Lato", sans-serif;
    letter-spacing: 30px;
    margin-right: -30px;
  }
}

.project {
  position: relative;
  margin-bottom: 4em;

  &__thumb {
    width: 100%;
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__title {
    text-transform: uppercase;
    font-size: 4.2em;
    letter-spacing: .1em;
    font-family: "Lato", sans-serif;
    font-weight: 900;
    color: #D71B14;
  }
}

img {
  width: 90%;
  margin: 0 auto;
  display: block;
}
</style>
