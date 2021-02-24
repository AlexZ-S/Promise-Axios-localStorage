<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <text1/>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import text1 from './components/text1.vue'

  export default {
    name: 'App',
    components: {
      // HelloWorld
      text1
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>