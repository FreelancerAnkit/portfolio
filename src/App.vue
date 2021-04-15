<template>
  <div id="container">
    <ParallaxIcons class="position-absolute"/>
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
import {scrollToView, scrollVisible} from "./js/scroll.module";

export default {
  name: "App",
  components: {
    Header,
    Profile, Skills, Reviews, Socials, Footer,ParallaxIcons
  },
  mounted() {
    scrollToView();
    scrollVisible();
  },
};
</script>

<style lang="scss">
@import './styles/scroll-animation.scss'; 

#container {
}
</style>
