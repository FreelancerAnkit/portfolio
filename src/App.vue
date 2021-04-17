<template>
  <div id="container">
    <div id="goTop"></div>
    <WebLoading v-if="!isLoaded"/>
    <ParallaxIcons class="position-absolute" />
    <Header msg="Welcome to Your Vue.js App" />
    <Profile />
    <Skills />
    <Reviews />
    <Socials />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import ParallaxIcons from "./components/ParallaxIcons";
import WebLoading from "./components/WebLoading";
import { scrollToTop, scrollToView, scrollVisible } from "./js/scroll.module";

export default {
  name: "App",
  components: {
    Header,
    Profile,
    Skills,
    Reviews,
    Socials,
    Footer,
    ParallaxIcons,WebLoading
  },
  data: ()=>{
    return{
      isLoaded:false,
    }
  },
  mounted() {
    scrollToView();
    scrollVisible();
    scrollToTop();
    document.onreadystatechange = ()=>{
      if(document.readyState == "complete"){
        this.isLoaded = true;
      }
    }
  },
};
</script>

<style lang="scss">
@import "./styles/scroll-animation.scss";
#container {
  position: relative;
}
#goTop {
  position: fixed;
  width:60px;
  height:90px;
  background: url("./assets/scrolltop.svg")  transparent no-repeat bottom center;
  background-size: 90px 60px;
  z-index: 999;
  right: 60px;
  bottom: 10%;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s linear;
  cursor: pointer;
}
#goTop.is-visible {
  opacity: 1;
}
</style>
