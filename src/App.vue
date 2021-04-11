<template>
  <div id="container">
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700');

#container {
  font-family: "Montserrat", sans-serif;
}
body{
  margin:0;
}
</style>
