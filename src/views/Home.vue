<template>
  <div>
    <!-- <Cookies></Cookies> -->
    <Search></Search>
    <FAQ></FAQ>
    <Navigation></Navigation>
    <main>
      <div class="header">
        <img src="@/assets/images/kowloon_logo.png" class="header_logo">
        <img src="@/assets/images/banner1_filter.png" class="image">
      </div>
      <div class="content">
        <b-container>
          <b-row class="my-5">
            <b-col cols="1"></b-col>
            <b-col cols="10">
              <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </b-col>
            <b-col cols="1"></b-col>
          </b-row>
          <b-row class="category_overview my-5">
            <b-col class="d-flex flex-column align-items-center justify-content-center">
              <img src="@/assets/images/dog.png" class="mb-2">
              <p>Dogs</p>
            </b-col>
            <b-col class="d-flex flex-column align-items-center justify-content-center">
              <img src="@/assets/images/cat.png" class="mb-2">
              <p>Cats</p>
            </b-col>
            <b-col class="d-flex flex-column align-items-center justify-content-center">
              <img src="@/assets/images/fish.png" class="mb-2">
              <p>Fish</p>
            </b-col>
            <b-col class="d-flex flex-column align-items-center justify-content-center">
              <img src="@/assets/images/bird.png" class="mb-2">
              <p>Birds</p>
            </b-col>
            <b-col class="d-flex flex-column align-items-center justify-content-center">
              <img src="@/assets/images/hamster.png" class="mb-2">
              <p>Small<br>animals</p>
            </b-col>
            <b-col class="d-flex flex-column align-items-center justify-content-center">
              <img src="@/assets/images/+.png" class="mb-2">
              <p>Other</p>
            </b-col>
          </b-row>
          <b-row class="hotitems" no-gutters>
            <b-col cols="12">
              <h1 class="title">HOT ITEMS.</h1>
            </b-col>
            <b-col cols="3">
              <div class="itemthumbnail">
                <div class="itemthumbnail-image">
                  <img src="@/assets/images/cooling_mat_small.png" alt="">
                  <div class="itemthumbnail-overlay">
                    <img src="@/assets/images/information.png" alt="">
                    <span>view details</span>
                  </div>
                </div>
                <div class="itemthumbnail-details">
                  <span>Cooling mat</span>
                  <span>€ 15,49</span>
                </div>
              </div>
            </b-col>
            <b-col cols="3">
              <div class="itemthumbnail">
                <div class="itemthumbnail-image">
                  <img src="@/assets/images/cooling_mat_small.png" alt="">
                  <div class="itemthumbnail-overlay">
                    <img src="@/assets/images/information.png" alt="">
                    <span>view details</span>
                  </div>
                </div>
                <div class="itemthumbnail-details">
                  <span>Cooling mat</span>
                  <span>€ 15,49</span>
                </div>
              </div>
            </b-col>
            <b-col cols="3">
              <div class="itemthumbnail">
                <div class="itemthumbnail-image">
                  <img src="@/assets/images/cooling_mat_small.png" alt="">
                  <div class="itemthumbnail-overlay">
                    <img src="@/assets/images/information.png" alt="">
                    <span>view details</span>
                  </div>
                </div>
                <div class="itemthumbnail-details">
                  <span>Cooling mat</span>
                  <span>€ 15,49</span>
                </div>
              </div>
            </b-col>
            <b-col cols="3">
              <div class="itemthumbnail">
                <div class="itemthumbnail-image">
                  <img src="@/assets/images/cooling_mat_small.png" alt="">
                  <div class="itemthumbnail-overlay">
                    <img src="@/assets/images/information.png" alt="">
                    <span>view details</span>
                  </div>
                </div>
                <div class="itemthumbnail-details">
                  <span>Cooling mat</span>
                  <span>€ 15,49</span>
                </div>
              </div> 
            </b-col>
          </b-row>
          <b-row>
            <b-col class="d-flex justify-content-end">
              <span class="emphasis">Visit the store</span>
            </b-col>
          </b-row>
          <b-row class="newsletter my-5">
            <b-col cols="7">
              <h1 class="mb-4 text-center">discover amazing<br />
                Kowloon deals!
              </h1>
              <h4>only in our newsletter</h4>
            </b-col>
            <b-col cols="5">
              <h2>Subscribe to our newsletter</h2>
              <p>Lorum ipsum dolor sit amet.</p>
              <form>
                <input type="text" class="button" placeholder="name@domain.com" v-model="email">
                <input type="button" value="OK" class="greybutton" @click="saveEmail">
              </form>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Nav.vue';
import Cookies from '@/components/Cookies.vue';
import Search from '@/components/Search.vue';
import FAQ from '@/components/FAQ.vue';
import Firebase from 'firebase';

var db = Firebase.initializeApp({
  apiKey: "AIzaSyDyvtxr4z2BmOee1goy6H1WAz_mRw4HgtQ",
  authDomain: "kowloon-opdracht-vue.firebaseapp.com",
  databaseURL: "https://kowloon-opdracht-vue.firebaseio.com",
  projectId: "kowloon-opdracht-vue",
  storageBucket: "kowloon-opdracht-vue.appspot.com",
  messagingSenderId: "666990527999"
}).database();

export default {
  name: 'home',
  data: function() {
    return {
      email: ""
    }
  },
  components: {
    Navigation,
    Cookies,
    Search,
    FAQ
  },
  methods: {
    saveEmail () {
      db.ref('emails').push(this.email)
    }
  }
}
</script>
