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
      <div class="nav_categories">
        <a href="/dogarticles" class="d-flex align-items-center">
          <img src="@/assets/images/dog.png">
          <span class="ml-2">Dogs</span>
        </a>
        <a href="#" class="d-flex align-items-center">
          <img src="@/assets/images/cat.png">
          <span class="ml-2">Cats</span>
        </a>
        <a href="#" class="d-flex align-items-center">
          <img src="@/assets/images/fish.png">
          <span class="ml-2">Fish</span>
        </a>
        <a href="#" class="d-flex align-items-center">
          <img src="@/assets/images/bird.png">
          <span class="ml-2">Birds</span>
        </a>
        <a href="#" class="d-flex align-items-center">
          <img src="@/assets/images/hamster.png">
          <span class="ml-2">Small</span><span class="ml-1">animals</span>
        </a>
      </div>
      <div class="flex-grow-1"></div>
      <div class="nav_kowloon">
        <span class="active">K</span>
        <span>KOWLOON</span>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'nav',
    methods: {
      navOnClick: function () {
        document.querySelector("nav").classList.toggle("active");
        document.querySelector("nav .nav_kowloon span:first-child").classList.toggle("active");
        document.querySelector("nav .nav_kowloon span:last-child").classList.toggle("active");
      }
    },
    mounted: function() {
      document.querySelector("nav .nav_hamburger").addEventListener('click', this.navOnClick);
    }
}
</script>
