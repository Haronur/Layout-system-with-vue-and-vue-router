<template>
  <div id="app">
    
    <nav-bar />
    <hr>
    <div class="container-fluid">
      <div class="row content">

        <side-bar />      
        <router-view />

      </div>

      <footer-bar />
    </div>
  </div>
</template>

<script>
  import NavBar from "./components/partial/NavBar";
  import SideBar from "./components/partial/SideBar";
  import FooterBar from "./components/partial/FooterBar";
  export default {
    components: {
      NavBar,
      SideBar,
      FooterBar
    }
  }
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
#app {
  margin: 30px 39px;
}
nav a {
  margin: 9px;
  padding: 8px;
  background-color: #222;
  color: #fff;
  text-decoration: navajowhite;
  text-transform: uppercase;
}

.router-link-exact-active.router-link-active {
  margin: 9px;
  padding: 8px;
  background-color: #048e00;
}
/* Set height of the grid so .sidenav can be 100% (adjust if needed) */
.row.content {height: 500px}    
/* Set gray background color and 100% height */
.sidenav {
  background-color: #a8a8a8;
  /*height: 100%;*/
}    
/* Set black background color, white text and some padding */
footer {
  background-color: #555;
  color: white;
  padding: 15px;
}
</style>
