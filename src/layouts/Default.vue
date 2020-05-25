<template>
  <div id="app">
    
    <nav-bar />
    <hr>
    <div class="container-fluid">
      <div class="row content">

        <side-bar />      
        <slot />

      </div>

      <footer-bar />
    </div>
  </div>
</template>

<script>
  import NavBar from "../components/partial/NavBar";
  import SideBar from "../components/partial/SideBar";
  import FooterBar from "../components/partial/FooterBar";
  export default {
    components: {
      NavBar,
      SideBar,
      FooterBar
    }
  }
</script>

<style>

</style>
