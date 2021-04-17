<template>
  <div class="container col-6 d-md-block d-sm-none d-none">
    <!-- Top Icons -->
    <img src="../assets/angular.svg" data-speed="1" width="80px" class="layer" style="left:-250px;top:-100px;"/>
    <img src="../assets/node.svg" data-speed="1" width="60px" class="layer" style="left:70%;top:-100px"/>
    <!-- Center Icons -->
    <img src="../assets/react.svg" data-speed="2" width="120px" class="layer" style="left:20%;top:250px"/> 
    <img src="../assets/aws.png" data-speed="3" width="100px" class="layer" style="left:20%;top:50px"/> 
    <!-- Bottom Icons -->
    <img src="../assets/android.png" data-speed="1" width="90px" class="layer" style="left:70%;top:400px"/> 
    <img src="../assets/jenkins.png" data-speed="2" width="80px" class="layer" style="left:2%;top:400px"/> 

  </div>
</template>

<script>
export default {
  name: "ParallaxIcons",
  props: {
    msg: String,
  },
  mounted() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const width = layer.getAttribute("width");
        const x = (window.innerWidth + e.pageX * speed) / 10;
        const y = (window.innerHeight + e.pageY * speed) / 10;
        layer.style.width = width;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
      // console.log("mousemove",e);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layer{
  position:absolute;
}
</style>
