<template>
  <div class="container">
    <b-row align-h="center">
      <b-col class="d-flex justify-content-center col-lg-3 col-sm-12 mb-4">
        <div id="skills" class="d-flex nav-container">
          <img src="../assets/code.svg" class="code" />
          <p class="nav-text mx-2">SKILLS</p>
          <img src="../assets/code.svg" class="code-close" />
        </div>
      </b-col>
      <b-col class="d-flex justify-content-center col-lg-3 col-sm-12 mb-4">
        <div id="reviews" class="d-flex nav-container">
          <img src="../assets/code.svg" class="code" />
          <p class="nav-text mx-2">REVIEWS</p>
          <img src="../assets/code.svg" class="code-close" />
        </div>
      </b-col>

      <b-col class="d-flex justify-content-center col-lg-3 col-sm-12 mb-4">
        <div id="connect" class="d-flex nav-container">
          <img src="../assets/code.svg" class="code" />
          <p class="nav-text mx-2">CONNECT</p>
          <img src="../assets/code.svg" class="code-close" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes scale {
  50% {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
}
.nav-container:hover {
  animation: scale 1s linear infinite;
  -webkit-animation: scale 1s linear infinite;
  -o-animation: scale 1s linear infinite;
  -moz--o-animation: scale 1s linear infinite;
}
</style>
