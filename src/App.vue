<template>
  <div id="container">
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

export default {
  name: "App",
  components: {
    Header,
    Profile, Skills, Reviews, Socials, Footer
  },
};
</script>

<style>
#container {
}
</style>
