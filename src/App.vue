<template>
  <div id="container">
    <Header msg="Welcome to Your Vue.js App" />
    <Profile />
  </div>
</template>

<script>
import Header from "./components/Header";
import Profile from "./components/Profile";

export default {
  name: "App",
  components: {
    Header,
    Profile,
  },
};
</script>

<style>
#container {
}
</style>
