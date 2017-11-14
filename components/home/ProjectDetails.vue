<template>
  <div class="project-details">
    <b-row>
      <b-col>
        <div class="project-details__img-wrapper">
          <img :src="details.imgSrc">
        </div>
      </b-col>
      <b-col>
        <div class="details-wrapper">
          <section class="details">
            <h1 class="details__title">{{ details.title }}</h1>
            <p class="details__info">{{ details.info }}</p>

            <footer class="details__footer details-footer">
              <div class="details-footer__links">
                <a :href="details.linkOnline">Online</a>
                <a :href="details.linkCode">Código</a>
              </div>
            </footer>
          </section>
          <div class="close-wrapper">
            <span class="close-wrapper__btn" @click="closeProjectDetails"><icon name="chevron-left" scale=".5"/> Home</span>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['details'],

  methods: {
    closeProjectDetails () {
      const htmlClassList = document.documentElement.classList
      this.$store.state.showProjectDetails = false
      htmlClassList.remove('no-overflow-y')
    }
  }
}
</script>

<style lang="scss" scoped>
.project-details {
  background: #FFF;
  position: fixed;
  z-index: 5000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  &__img-wrapper {
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    align-items: center;
  }

  img {
    max-width: 100%;
    margin: auto;
  }
}

.details {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__title {
    text-align: center;
    color: #D71B14;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 4px;
    font-size: 3em;
    font-family: "Lato", sans-serif;
  }

  &__info {
    font-family: "Lato", sans-serif;
    line-height: 1.5;
    padding: 0 8em;
  }
}

.details-wrapper {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  align-items: center;
  flex-direction: column;
}

.details-footer {
  &__links {
    display: flex;
    justify-content: space-around;
  }
}

.close-wrapper {
  text-align: center;
  margin-bottom: 2em;

  &__btn {
    cursor: pointer;
    text-transform: uppercase;
    font-size: .75em;
    font-family: "Lato", sans-serif;
    font-weight: 700;
  }
}
</style>

