<template>
  <div class="faq closed">
      <b-container>
          <b-row>
              <b-col class="d-flex justify-content-end">
                  <div class="close_faq" @click="closeFAQ">X</div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                  <h1 class="title">FREQUENTLY ASKED QUESTIONS</h1>
              </b-col>
          </b-row>
          <b-row>
              <b-col class="faq_searchinput" cols="12">
                <div class="d-flex align-items-center">
                    <img src="@/assets/images/search_icon_fat.png" alt="">
                    <span>Search on keyword</span>
                    <img src="@/assets/images/break.png" alt="">
                </div>
              </b-col>
              <b-col class="faq_clear" cols="12">
                <span>Clear</span>
              </b-col>
              <b-col class="faq_help" cols="12">
                <span>Don’t find what you’re looking for?<br>
                You can always contact our customer service. We’re happy to help you!</span>
              </b-col>
          </b-row>
          <b-row class="faq_questions mx-1">
              <b-col cols="12">
                  <h2>Dit is een vraag</h2>
                  <div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</span>
                  </div>
              </b-col>
              <b-col cols="12">
                  <h2>Dit is een vraag</h2>
                  <div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</span>
                  </div>
              </b-col>
              <b-col cols="12">
                  <h2>Dit is een vraag</h2>
                  <div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</span>
                  </div>
              </b-col>
              <b-col cols="12">
                  <h2>Dit is een vraag</h2>
                  <div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</span>
                  </div>
              </b-col>
              <b-col cols="12">
                  <h2>Dit is een vraag</h2>
                  <div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</span>
                  </div>
              </b-col>
              <b-col cols="12">
                  <h2>Dit is een vraag</h2>
                  <div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</span>
                  </div>
              </b-col>
          </b-row>
      </b-container>
      
  </div>
</template>

<script>
export default {
    name: 'search',
    methods: {
        closeFAQ: function () {
            document.querySelector(".faq").classList.toggle("closed");
            document.querySelector(".nav_faq").classList.toggle("active");
        }
    }
}
</script>
