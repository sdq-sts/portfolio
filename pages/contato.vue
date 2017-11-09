<template>
    <div class="contact-content">
      <h1>Página de contato</h1>
      <nuxt-link to="/">Home</nuxt-link>
    </div>
</template>

<script>
export default {
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

  head () {
    return {
      bodyAttrs: {
        class: !this.$store.state.bodyHasVScrollBar ? 'contact-page add-right-gap' : 'contact-page'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 150vh;
}
</style>
