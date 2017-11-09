<template>
  <div class="links">
    <div class="link left">
      <a href="https://www.facebook.com/sadraquesantos" target="_blank">
        <icon name="facebook"/> <span class="link-name"> Facebook</span>
      </a>
    </div>

    <div class="link center">
      <a href="mailto:oi@sadraque.com.br?Subject=Olá">
        <icon name="envelope"/> <span class="link-name"> Email</span>
      </a>
    </div>

    <div class="link right">
      <a href="http://github.com/sdq-sts" target="_blank">
        <icon name="github-alt"/> <span class="link-name"> Github</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a {
  text-align: center;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}

.fa-icon {
  color: #000;
}
.links {
  display: flex;
  justify-content: space-between;
}

.link {
  // display: inline;
  // align-items: center;

  &.left {
    // align-self: start;
  }

  &.center {
    // margin: 0 auto;
  }

  &.right {
    // align-self: end;
  }
}

.link-name {
  margin-left: .25em;
  text-transform: uppercase;
  color: #D71B14;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
}
</style>
