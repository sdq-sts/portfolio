<template>
  <div class="x">
    <div class="vertical-bar"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.x {
  position: absolute;
  left: 52%;
}

.vertical-bar {
  width: 40em;
  height: 1em;
  background: #D71B14;
  position: absolute;
  transform-origin: left bottom;
  transform: rotate(90deg);
  top: 5em;
}
</style>
