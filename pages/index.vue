<template>
  <div class="home-content">
    <page-header/>
    <site-projects/>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from '~/components/home/PageHeader'
import SiteProjects from '~/components/home/SiteProjects'
import PageFooter from '~/components/home/PageFooter'

export default {
  data () {
    return {}
  },

  watch: {
    '$route' (to, from) {
      this.$store.state.route = to.name
      this.updateScrollBarState()
    }
  },

  methods: {
    updateScrollBarState () {
      this.$store.state.bodyHasVScrollBar = this.container.scrollHeight > window.innerHeight
      console.log(this.$store.state.bodyHasVScrollBar)
    }
  },

  mounted () {
    this.container = document.querySelector('.container')
    this.$store.state.route = this.$route.name
    this.updateScrollBarState()
  },

  components: {
    PageHeader,
    SiteProjects,
    PageFooter
  },

  head () {
    return {
      title: 'Sadraque Santos | Desenvolvedor front-end',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      bodyAttrs: {
        class: !this.$store.state.bodyHasVScrollBar ? 'home-page add-right-gap' : 'home-page'
      }
    }
  }
}
</script>

<style>

</style>
