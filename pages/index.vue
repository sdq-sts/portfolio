<template>
  <div class="home-page">
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
    }
  },

  mounted () {
    this.$store.state.route = this.$route.name
  },

  components: {
    PageHeader,
    SiteProjects,
    PageFooter
  },

  head: {
    title: 'Sadraque Santos | Desenvolvedor front-end',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  }
}
</script>

<style>

</style>
