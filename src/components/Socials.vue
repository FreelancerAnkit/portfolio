<template>
  <div id="div-connect" class="container">
    <b-row align-h="center">
      <b-col class="col-6 col-sm-12 col-md-6" data-animation="zoomIn">
        <img src="../assets/connect-svg.svg" class="hero-title" />
      </b-col>
      <b-col class="col-7 col-md-6" data-animation="zoomIn">
        <img src="../assets/hero-header-connect.svg" class="hero-title" />
      </b-col>
    </b-row>

    <b-row align-h="center" class="mt-5 text-center socials" data-animation="slideInUp">
      <b-col class="col-md-4 col-sm-12">
        <a href="https://www.linkedin.com/in/ankit-3547b8115/" target="_blank"><img src="../assets/social/linkedin.svg" class="social-icons zoominout" /></a>
        <h3 class="mt-3 font-weight-bold	">LinkedIn</h3>
      </b-col>
      <b-col class="col-md-4 col-sm-12">
        <a href="https://angel.co/u/ankit-palli" target="_blank"> <img src="../assets/social/angelco.svg" class="social-icons zoominout" /></a>
        <h3 class="mt-3 font-weight-bold	">Angel.co</h3>
      </b-col>
      <b-col class="col-md-4 col-sm-12">
       <a href="https://gitlab.com/ankitpalli/resume" target="_blank">  <img src="../assets/social/github.svg" class="social-icons zoominout" /></a>
        <h3 class="mt-3 font-weight-bold	">Github</h3>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Socials",
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
.reviews-question {
  position: absolute;
  top: 30%;
  left: 50px;
  font-style: bold;
  line-height: 1.5;
  width: 100%;
  font-size: 3vw;
}
.review-content {
  position: absolute;
  margin-top: 4vw;
  width: 70vw;
}
.social-icons {
  width: 20vw;
}
.socials{
  padding:5vw 0;
}
.container{
  padding-top:10vw;
}
</style>
