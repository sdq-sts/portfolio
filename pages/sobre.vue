<template>
    <div class="about-page">
      <h1>Página de sobre</h1>
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

</style>
