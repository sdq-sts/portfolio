<template>
  <div>
    <transition name="slide">
      <home-video v-if="isIndex"/>
    </transition>
    <b-container>
      <site-logo/>
      <nuxt/>
    </b-container>
  </div>
</template>

<script>
import SiteLogo from '~/components/common/SiteLogo.vue'
import HomeVideo from '~/components/home/Video'

export default {
  data () {
    return {
      isIndex: false
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
    }
  },

  mounted () {
    this.$store.state.route = this.$route.name
    this.isIndex = this.$route.name === 'index'
  },

  components: {
    SiteLogo,
    HomeVideo
  }
}
</script>

<style lang="scss">
:root {
   --red: #D71B14;
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
  font-family: 'Lato', sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s ease-out;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(101%);
}
</style>
