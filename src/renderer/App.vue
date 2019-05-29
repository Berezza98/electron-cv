<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/layouts/Navbar';

  export default {
    components : {
      Navbar
    }
  }
</script>

<style>
  /* CSS */
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
