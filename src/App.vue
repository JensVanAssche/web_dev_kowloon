<template>
  <div id="app">
    <div class="nav_hamburger_mobile">
      <img src="@/assets/images/hamburger_icon.png">
    </div>
    <router-view/>
  </div>
</template>

<script>
 export default {
   methods: {
    kowloonLogo: function () {
      document.querySelector("nav .nav_kowloon span:first-child").classList.toggle("active");
      document.querySelector("nav .nav_kowloon span:last-child").classList.toggle("active");
    },
    navOnClick: function () {
      document.querySelector("nav").classList.toggle("active");

      if (!document.querySelector("nav").classList.contains("active")) {
        setTimeout(this.kowloonLogo, 400);
      }
      else {
        this.kowloonLogo();
      }
    }
  },
  mounted: function() {
    document.querySelector(".nav_hamburger_mobile").addEventListener('click', this.navOnClick);
  }
 }
</script>


<style lang="scss">
  @import 'assets/scss/style';
</style>