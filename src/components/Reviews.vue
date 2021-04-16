<template>
  <div id="div-reviews" class="pt-5 container">
    <b-row align-h="center" class="pb-5" >
      <b-col class="col-6 pt-5 mt-5 d-md-block d-sm-none d-none" data-animation="slideInRight">
        <img src="../assets/reviews.svg" class="hero-title" />
      </b-col>
      <b-col class="col-6" data-animation="zoomIn">
        <img src="../assets/hero-circle.svg" class="hero-circle" />
        <img src="../assets/hero-circle-small.svg" class="hero-circle-small" />
        <h5 class="reviews-question pl-2">
          What do international client say about quality of work ?
        </h5>
      </b-col>
    </b-row>

    <b-row>
      <div class="review-container" data-animation="fadeIn" >
        <img src="../assets/reviews-quote.svg" class="reviews-quote" />
        <img src="../assets/reviews/1.png" class="review-content"/>
      </div>
    </b-row>

    <b-row>
      <div class="review-container" data-animation="fadeIn" >
        <img src="../assets/reviews-quote.svg" class="reviews-quote" />
        <img src="../assets/reviews/2.png" class="review-content"/>
      </div>
    </b-row>

    <b-row>
      <div class="review-container" data-animation="fadeIn" >
        <img src="../assets/reviews-quote.svg" class="reviews-quote" />
        <img src="../assets/reviews/3.png" class="review-content"/>
      </div>
    </b-row>
    <b-row>
      <div class="review-container" data-animation="fadeIn" >
        <img src="../assets/reviews-quote.svg" class="reviews-quote" />
        <img src="../assets/reviews/4.png" class="review-content"/>
      </div>
    </b-row>

  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-top:7%;
}
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
.review-content{
  position:absolute;margin-top:4vw;
  width:70vw;
}
.review-container{
  height:300px;
}
</style>
