<template>
    <div class="contact-page">
      <h1>Página de contato</h1>
      <nuxt-link to="/">Home</nuxt-link>
    </div>
</template>

<script>
export default {
  watch: {
    '$route' (to, from) {
      this.$store.state.route = to.name
    }
  },

  mounted () {
    this.$store.state.route = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 150vh;
}
</style>
