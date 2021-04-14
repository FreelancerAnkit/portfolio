<template>
  <div id="div-skills" class="pt-5 skill-container">
    <b-row align-h="center" class="pb-5">
      <b-col class="col-6 col-sm-12 col-md-6">
        <img src="../assets/hero-header-skills.svg" class="hero-title" />
      </b-col>
      <b-col class="col-6 d-md-block d-sm-none d-none">
        <img src="../assets/skills-svg.svg" class="hero-title" />
      </b-col>
    </b-row>

    <b-row class="skill-container">
      <img src="../assets/angular.svg" class="img-skills" />
      <img src="../assets/skills-hero-angular.svg" class="img-line" />
      <h1 class="skill-rating text-secondary">80%</h1>
    </b-row>
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
<style scoped>
.img-skills {
  width: 15vw;
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
