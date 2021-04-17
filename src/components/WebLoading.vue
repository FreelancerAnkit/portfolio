<template>
  <div id="loading">
    <div id="loading-center">
      <div id="loading-center-absolute">
        <div id="object"></div><br />
        <h5 class="text-center text-secondary">Loading...</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebLoading",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loading {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999;
  margin-top: 0px;
  top: 0px;
  left: 0px;
  background: rgb(37, 37, 37) ;
}

#loading-center {
  width: 100%;
  height: 100%;
  position: relative;
}

#loading-center-absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 200px;
  width: 200px;
  margin-top: -100px;
  margin-left: -100px;
}

#object {
  width: 40px;
  height: 40px;
  background-color: #6930c3;
  -webkit-animation: animate 1s infinite ease-in-out;
  animation: animate 1s infinite ease-in-out;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
}

@-webkit-keyframes animate {
  0% {
    -webkit-transform: perspective(160px);
  }
  50% {
    -webkit-transform: perspective(160px) rotateY(-180deg);
  }
  100% {
    -webkit-transform: perspective(160px) rotateY(-180deg) rotateX(-180deg);
  }
}

@keyframes animate {
  0% {
    transform: perspective(160px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(160px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(160px) rotateX(-180deg) rotateY(0deg);
    -webkit-transform: perspective(160px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(160px) rotateX(-180deg) rotateY(-180deg);
    -webkit-transform: perspective(160px) rotateX(-180deg) rotateY(-180deg);
  }
}
</style>
