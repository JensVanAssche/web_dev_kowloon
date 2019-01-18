<template>
  <nav class="d-flex flex-column">
      <div class="nav_hamburger">
        <img src="@/assets/images/hamburger_icon.png">
      </div>
      <div class="nav_util">
        <div class="nav_search d-flex align-items-center">
          <img src="@/assets/images/search_icon.png">
          <span class="ml-2">Search</span>
        </div>
        <div class="nav_faq d-flex align-items-center">
          <img src="@/assets/images/question_icon.png">
          <span class="ml-2">FAQ</span>
        </div>
      </div>
      <div class="nav_divider"></div>
      <div class="nav_contact">
        <router-link to="about" class="d-flex align-items-center">
          <img src="@/assets/images/contact.png">
          <span class="ml-1">Contact</span>
        </router-link>
      </div>
      <div class="nav_divider"></div>
      <div class="nav_categories">
        <router-link to="dogarticles" class="d-flex align-items-center">
          <img src="@/assets/images/dog.png">
          <span class="ml-2">Dogs</span>
        </router-link>
        <router-link to="catarticles" class="d-flex align-items-center">
          <img src="@/assets/images/cat.png">
          <span class="ml-2">Cats</span>
        </router-link>
        <router-link to="fisharticles" class="d-flex align-items-center">
          <img src="@/assets/images/fish.png">
          <span class="ml-2">Fish</span>
        </router-link>
        <router-link to="birdarticles" class="d-flex align-items-center">
          <img src="@/assets/images/bird.png">
          <span class="ml-2">Birds</span>
        </router-link>
        <router-link to="smallarticles" class="d-flex align-items-center">
          <img src="@/assets/images/hamster.png">
          <span class="ml-2">Small</span><span class="ml-1">animals</span>
        </router-link>
      </div>
      <div class="flex-grow-1"></div>
      <div class="nav_kowloon">
        <router-link to="/">
        <span class="active">K</span>
        <span>KOWLOON</span>
        </router-link>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'nav',
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
      document.querySelector("nav .nav_hamburger").addEventListener('click', this.navOnClick);
    }
}
</script>
