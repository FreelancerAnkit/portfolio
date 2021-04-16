<template>
  <div id="div-skills" data-animation="slideInUp" class="pt-5 skill-container">
    <b-row align-h="center" class="pb-5">
      <b-col class="col-6 col-sm-12 col-md-6">
        <img src="../assets/hero-header-skills.svg" class="hero-title" />
      </b-col>
      <b-col class="col-6 d-md-block d-sm-none d-none">
        <img src="../assets/skills-svg.svg" class="hero-title" />
      </b-col>
    </b-row>

    <b-row class="skill-container" data-animation="slideInRight">
      <img src="../assets/angular.svg" class="img-skills" />
      <img src="../assets/skills-hero-angular.svg" class="img-line" />
      <h1 class="skill-rating text-secondary">80%</h1>
    </b-row>

    <b-row class="skill-container" data-animation="slideInRight">
      <img src="../assets/node.svg" class="img-skills p-3" />
      <img src="../assets/nodejs.svg" class="img-line" />
      <h1 class="skill-rating text-secondary">70%</h1>
    </b-row>

    <b-row class="skill-container" data-animation="slideInRight">
      <img src="../assets/jenkins.png" class="img-skills" />
      <img src="../assets/devops.svg" class="img-line" />
      <h1 class="skill-rating text-secondary">60%</h1>
    </b-row>

    <div class="gif-container d-flex justify-content-center align-items-center" data-animation="zoomIn">
      <img src="../assets/skills.gif" class="gif-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.gif-container {
  background-color: rgba(255, 255, 255, 0.8);
  width: 35vw;
  height: 35vw;
  border-radius: 25vw;
  margin-top:100px;
}
.gif-img {
  position: absolute;
  width: 28vw;
  height: 30vw;
}
.img-skills {
  width: 15vw;
  height: 15vw;
}
.img-line {
  width: 30vw;
  margin-top: -10%;
}
.skill-rating {
  font-size: 120px;
  margin-left: 60px;
}
.skill-container {
  padding-top: 10%;
}
</style>
