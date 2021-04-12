<template>
  <div class="container d-flex align-items-end justify-content-center">
    <h3 class="footer-text">Designed & Developed by Ankit</h3>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: center;
  margin-top:10vw;
}
.footer-text {
  font-style: bold;
  font-size: 20px;
  color: rgba(226, 226, 226, 0.5);
}
</style>
