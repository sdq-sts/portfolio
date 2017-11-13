<template>
  <footer class="page-footer">
    <b-row>
      <b-col cols="5">
        <div class="name-year">sdq sts &nbsp;&nbsp; . &nbsp;&nbsp; {{ year }}</div>
      </b-col>
      <b-col cols="2">
        <a class="scroll-top" href="#top" v-smooth-scroll>UP</a>
      </b-col>
      <b-col cols="5">
        <div class="github-link"><a href="https://github.com/sdq-sts" target="_blank">Github</a></div>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  text-align: center;
  margin-bottom: 3em;
}

.name-year,
.github-link {
  border: 2px solid #000;
  padding: .75em 0;
  color: #D71B14;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Lato", sans-serif;

  > a {
    color: #D71B14;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
  }
}

.scroll-top {
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  color: #D71B14;
  font-size: 1.4em;
  font-weight: 900;
  transform: rotate(-90deg);
  display: block;
  text-decoration: none;

  &:before {
    content: '';
    height: 3px;
    width: 70px;
    background: #000;
    display: block;
    transform: translateY(calc(1em - 4px)) translateX(-20px);
  }
}
</style>
