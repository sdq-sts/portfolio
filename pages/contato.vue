<template>
    <div class="contact-content">
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

      <b-row>
        <b-col cols="8" offset="2">
          <contact-form/>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="8" offset="2">
          <footer-links/>
        </b-col>
      </b-row>

      <b-row >
        <b-col cols="12">
          <div class="link-to-home">
            <nuxt-link to="/"><icon name="chevron-left" scale=".65"/>Home</nuxt-link> 
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import PageTitle from '~/components/contact/PageTitle'
import PageText from '~/components/contact/PageText'
import ContactForm from '~/components/contact/ContactForm'
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
      // script: [
      //   { src: 'https://cdn.emailjs.com/dist/email.min.js', type: 'text/javascript' }
      // ]
    }
  },

  components: {
    PageTitle,
    PageText,
    ContactForm,
    FooterLinks
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 150vh;
}

.link-to-home {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: .75em;
  letter-spacing: 2px;
  margin-top: 5em;
  margin-bottom: 5em;

  .fa-icon {
    margin-right: .5em;
  }

  a {
    display: flex;
    align-items: center;
    font-family: "Lato", sans-serif;
    color: #000;
    font-weight: 600;
  }
}
</style>
