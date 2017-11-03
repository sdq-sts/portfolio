<template>
  <header class="page-header">
    <b-row>
      <b-col cols="12">
        <p class="page-description">Desenvolvedor front-end</p>
      </b-col>
      <b-col cols="5">
        <nav class="nav-links">
          <nuxt-link class="nav-links__item" to="/sobre">Sobre</nuxt-link>
          <nuxt-link class="nav-links__item" to="/contato">Contato</nuxt-link>
        </nav>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-description {
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Lato', sans-serif;
  margin: 7em 0;
  font-size: 1.1em;
}

.nav-links {
  display: flex;
  justify-content: space-between;

  &__item {
    padding-bottom: .75em;
    border-bottom: 3px solid #D71B14;
    text-transform: lowercase;
    color: #000;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
  }
}
</style>
