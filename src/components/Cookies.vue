<template>
  <div class="cookie">
    <div class="cookie_alert">
      <b-container>
        <b-row>
          <b-col>
            <div>
              <img src="@/assets/images/cookie.png" alt="">
            </div>
            <div>
              <h1 class="title">Cookies</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <span class="orange_button" @click="closeCookie">ok, verder surfen</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="cookie_overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'cookies',
  methods: {
    closeCookie: function () {
      document.querySelector(".cookie").classList.add("close");
      localStorage.setItem('cookie', '1');
    }
  }
}
</script>
