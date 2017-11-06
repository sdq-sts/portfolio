<template>
  <div class="video-container">
    <video src="~/assets/videos/home-video.mp4" autoplay loop>
      <p>Your browser does not support the video tag.</p>
    </video>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
.video-container {
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  height: 40em;
  overflow: hidden;
  filter: grayscale(100%);
}
</style>
