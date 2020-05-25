<template>
  <div id="app">
    
    <nav-bar />
    <hr>
    <div class="container-fluid">
      <div class="row content">     
       <slot />

      </div>

      <footer-bar />
    </div>
  </div>
</template>

<script>
  import NavBar from "../components/partial/NavBar";
  import FooterBar from "../components/partial/FooterBar";
  export default {
    components: {
      NavBar,
      FooterBar
    }
  }
</script>

<style>

</style>
