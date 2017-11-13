<template>
  <div class="contact-form" @keyup="showOrHideSubmitBtn">
    <b-form v-on:submit.prevent="submitForm">
      <b-row class="upper-form">
        <b-col>
          <div class="group-name">
            <label for="name" class="group-name__label name-label">Nome</label>
            <input type="text" name="name" class="group-name__input name-input" v-model="formName">
          </div>
        </b-col>

        <b-col>
          <div class="group-email">
            <label for="name" class="group-email__label email-label">Email</label>
            <input type="email" name="name" class="group-email__input email-input" v-model="formEmail">
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="group-message">
            <textarea name="message"
                      cols="30"
                      rows="10"
                      v-model="formMessage"
                      @focus="handlePlaceholder"
                      @blur="handlePlaceholder"
                      placeholder="Mensagem"
                      class="group-message__text message-text"
            ></textarea>
          </div>
        </b-col>
      </b-row>

      <b-row align-v="center" class="form-footer">
        <b-col cols="8">
          <transition name="submit-msg">
            <p class="form-sumited-message"
              v-show="submited"
              :class="{ error: (submitMessageClass === 'error'), success: (submitMessageClass === 'success') }"
            >{{ submitedMessage }}</p>
          </transition>
        </b-col>
        <b-col cols="2" offset="2">
          <transition name="submit-btn">
            <input v-show="showSubmitBtn" type="submit" value="enviar" class="submit-input">
          </transition>
        </b-col>
      </b-row>

    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      formName: '',
      formEmail: '',
      formMessage: '',
      showSubmitBtn: false,
      successMessage: 'Sua mensagem foi enviada com sucesso',
      errorMessage: 'Houve um erro e sua mensagem não pode ser enviada',
      submitedMessage: '',
      submitMessageClass: '',
      submited: false
    }
  },

  methods: {
    handlePlaceholder () {
      const textArea = this.$el.querySelector('.message-text')

      if (textArea.placeholder) {
        textArea.placeholder = ''
      } else {
        textArea.placeholder = 'Mensagem'
      }
    },

    showOrHideSubmitBtn () {
      if (this.formName && this.formEmail && this.formMessage) {
        this.showSubmitBtn = true
      } else {
        this.showSubmitBtn = false
      }
    },

    handleSubmitedForm (cl, msg) {
      this.submited = true
      this.submitMessageClass = cl
      this.submitedMessage = msg

      if (cl === 'success') {
        this.formName = ''
        this.formEmail = ''
        this.formMessage = ''
        this.showSubmitBtn = false
      }
    },

    submitForm () {
      axios.post('https://formspree.io/oi@sadraque.com.br', {
        message: `Nome: ${this.formName}\n\nEmail: ${this.formEmail}\n\nMensagem:\n\t${this.formMessage}`
      })
        .then((res) => {
          this.handleSubmitedForm('success', this.successMessage, res)
        })
        .catch((err) => {
          this.handleSubmitedForm('error', this.errorMessage, err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  display: block;
}

textarea,
input[type="text"],
input[type="email"] {
  width: 100%;
}

.contact-form {
  margin-bottom: 3em;
}

.name-label,
.email-label {
  font-weight: 900;
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-left: 1em;
  margin-bottom: -.6em;
  z-index: 1000;
}

.name-input,
.email-input {
  background: #F1F1F1;
  line-height: 2;
  padding: .5em;
  border: none;
  z-index: 1;
  display: block;
  font-family: "Lato", sans-serif;

  &:focus {
    outline: none;
    background: #E1E1E1;
  }
}

.upper-form {
  margin-top: 2.5em;
  margin-bottom: 2.5em;
}

.message-text {
  border: none;
  border: 3px solid #D71B14;
  padding: 2em;
  font-family: "Lato", sans-serif;

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    color: #000;
    font-family: "Lato", sans-serif;
    font-size: 1.1em;
  }
  &::-moz-placeholder { /* Firefox 19+ */
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    color: #000;
    font-family: "Lato", sans-serif;
    font-size: 1.1em;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    color: #000;
    font-family: "Lato", sans-serif;
    font-size: 1.1em;
  }
  &:-moz-placeholder { /* Firefox 18- */
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    color: #000;
    font-family: "Lato", sans-serif;
    font-size: 1.1em;
  }

  &:focus {
    outline: none;
  }
}

.form-footer {
  margin-top: 1em;
}

.submit-input {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: right;
  text-transform: uppercase;
  padding: 0;
}

.form-sumited-message {
  font-size: .8em;
  margin: auto;

  &.error {
    color: #D71B14;
  }

  &.success {
    color: #C1C1C1;
  }
}

.submit-btn-enter-active, .submit-btn-leave-active {
  transition: all .5s;
}
.submit-btn-enter, .submit-btn-leave-active {
  transform: translateX(-15px);
  opacity: 0;
}

.submit-msg-enter-active, .submit-msg-leave-active {
  transition: all .5s;
}
.submit-msg-enter, .submit-msg-leave-active {
  transform: translateY(15px);
  opacity: 0;
}

</style>
