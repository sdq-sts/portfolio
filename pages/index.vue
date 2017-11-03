<template>
  <div class="home-page">
    <div class="links">
      <nuxt-link to="/contato">Contato</nuxt-link>
      <nuxt-link to="/sobre">Sobre</nuxt-link>
    </div>
  </div>
</template>

<script>
import SiteLogo from '~/components/common/SiteLogo.vue'
import HomeVideo from '~/components/home/Video'

export default {
  data () {
    return {}
  },

  watch: {
    '$route' (to, from) {
      this.$store.state.route = to.name
    }
  },

  mounted () {
    this.$store.state.route = this.$route.name
  },

  components: {
    SiteLogo,
    HomeVideo
  }
}
</script>

<style>

</style>
