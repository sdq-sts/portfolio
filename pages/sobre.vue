<template>
    <div class="about-content">

      <b-row>
        <b-col cols="10" offset="1">
          <page-title/>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="8" offset="2">
          <page-text/>
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col cols="8" offset="2">
          <footer-links/>
        </b-col>
      </b-row>

      <b-row >
        <b-col cols="12">
          <div class="link-to-home">
            <nuxt-link to="/">Home<icon name="chevron-right" scale=".65"/></nuxt-link> 
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import PageTitle from '~/components/about/PageTitle'
import PageText from '~/components/about/PageText'
import FooterLinks from '~/components/common/FooterLinks'

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

  beforeMount () {
    console.log('BEFORE MOUNT')
  },

  mounted () {
    this.container = document.querySelector('.container')
    this.$store.state.route = this.$route.name
    this.updateScrollBarState()
  },

  components: {
    PageTitle,
    PageText,
    FooterLinks
  },

  head () {
    return {
      bodyAttrs: {
        class: !this.$store.state.bodyHasVScrollBar ? 'about-page add-right-gap' : 'about-page'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link-to-home {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: .75em;
  letter-spacing: 2px;

  a {
    display: flex;
    align-items: center;
    font-family: "Lato", sans-serif;
    color: #000;
    font-weight: 600;
  }
}

.link-to-home {
  margin-top: 5em;
}
</style>
