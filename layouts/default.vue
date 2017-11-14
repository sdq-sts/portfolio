<template>
  <div>
    <transition name="slide" mode="out-in">
      <site-video v-if="isIndex"/>
    </transition>
    <b-container class="main-container" id="top">
      <transition-group name="fading-slide" mode="out-in">
        <vertical-red-bar v-if="isIndex" :class="{ middle: isIndex }" :key="'index-bar'"/>
        <vertical-red-bar v-else-if="!isIndex && isMounted" :class="{ right: !isIndex }" :key="'not-index-bar'"/>
      </transition-group>

      <site-logo/>
      <nuxt/>
    </b-container>
    <transition name="details-transition" mode="out-in"> 
      <project-details v-if="getProjectDetailsState()" :details="getCurrentDetails()"/>
    </transition>
  </div>
</template>

<script>
import projects from '~/components/home/projects'
import VerticalRedBar from '~/components/common/VerticalRedBar'
import SiteLogo from '~/components/common/SiteLogo'
import SiteVideo from '~/components/home/SiteVideo'
import ProjectDetails from '~/components/home/ProjectDetails'

export default {
  data () {
    return {
      isIndex: false,
      isMounted: false
    }
  },

  watch: {
    '$route' (to, from) {
      this.$store.state.route = to.name
      if (to.name === 'index') {
        this.isIndex = true
      } else {
        this.isIndex = false
      }

      this.updateScrollBarState()
    }
  },

  methods: {
    updateScrollBarState () {
      this.$store.state.bodyHasVScrollBar = this.container.scrollHeight > window.innerHeight
    },

    getProjectDetailsState () {
      return this.$store.state.showProjectDetails
    },

    getCurrentDetails () {
      return projects[this.$store.state.currentDetails]
    }
  },

  mounted () {
    this.container = document.querySelector('.container')
    this.$store.state.route = this.$route.name
    this.isIndex = this.$route.name === 'index'
    this.updateScrollBarState()
    window.addEventListener('resize', this.updateScrollBarState)
    this.isMounted = true
  },

  components: {
    VerticalRedBar,
    SiteLogo,
    SiteVideo,
    ProjectDetails
  }
}
</script>

<style lang="scss">
:root {
   --red: #D71B14;
}

::-moz-selection {
  color: #fff;
  background: #D71B14;
}

::selection {
  color: #fff;
  background: #D71B14;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: 'Lato', sans-serif;
}

.main-container {
  position: relative;
}

.red-bar.middle {
  position: absolute;
  left: 52%;
}

.red-bar.right {
  position: absolute;
  right: 0;
  top: -6em;
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s ease-in-out;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(101%);
}

.fading-slide-enter-active, .fading-slide-leave-active {
  transition: all .5s ease-in-out;
}

.fading-slide-leave-active {
  transition: all .35s ease-in-out;
}

.fading-slide-enter-active {
  transition: all .5s ease-in-out;
  transition-delay: .35s;
}

.fading-slide-enter, .fading-slide-leave-to {
  opacity: 0;
  transform: translateY(-3em);
}

// details-transition
.details-transition-enter-active, .details-transition-leave-active {
  transition: all .5s ease-in-out;
}
.details-transition-enter, .details-transition-leave-to {
  transform: translateX(-101%);
}
</style>
