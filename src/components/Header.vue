<template>
  <div class="container">
    <b-row align-h="center">
      <b-col class="d-flex justify-content-center col-lg-3 col-sm-12 mb-4">
        <div class="d-flex nav-container">
          <img src="../assets/code.svg" class="code" />
          <p class="nav-text mx-2">SKILLS</p>
          <img src="../assets/code.svg" class="code-close" />
        </div>
      </b-col>
      <b-col class="d-flex justify-content-center col-lg-3 col-sm-12 mb-4">
        <div class="d-flex nav-container">
          <img src="../assets/code.svg" class="code" />
          <p class="nav-text mx-2">PROJECTS</p>
          <img src="../assets/code.svg" class="code-close" />
        </div>
      </b-col>

      <b-col  class="d-flex justify-content-center col-lg-3 col-sm-12 mb-4">
        <div class="d-flex nav-container">
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
</style>
