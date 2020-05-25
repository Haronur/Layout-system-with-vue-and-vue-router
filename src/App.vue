<template>
  <div id="app">
    <component :is="layout">    
    </component>
  </div>
</template>

<script>
  const default_layout = "default";
  export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },

  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },

  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
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
