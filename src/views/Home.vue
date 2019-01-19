<template>
  <div>
    <!-- <Cookies></Cookies> -->
    <Search></Search>
    <FAQ></FAQ>
    <Navigation></Navigation>
    <main>
      <HeaderCarousel></HeaderCarousel>
      <div class="content">
        <b-container>
          <b-row class="mb-5">
            <b-col md="1" sm="0" ></b-col>
            <b-col md="10" sm="12">
              <p class="text-sm-center text-xs-left text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </b-col>
            <b-col md="1" sm="0"></b-col>
          </b-row>
          <b-row class="category_overview my-4">
            <b-col cols="6" sm="4" md="2" class="d-flex flex-column align-items-center justify-content-center">
              <router-link to="dogarticles" class="d-flex flex-column align-items-center">
                <img src="@/assets/images/dog.png" class="mb-2">
                <p>Dogs</p>
              </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="2" class="d-flex flex-column align-items-center justify-content-center">
              <router-link to="catarticles" class="d-flex flex-column align-items-center">
                <img src="@/assets/images/cat.png" class="mb-2">
                <p>Cats</p>
              </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="2" class="d-flex flex-column align-items-center justify-content-center">
              <router-link to="fisharticles" class="d-flex flex-column align-items-center">
                <img src="@/assets/images/fish.png" class="mb-2">
                <p>Fish</p>
              </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="2" class="d-flex flex-column align-items-center justify-content-center">
              <router-link to="birdarticles" class="d-flex flex-column align-items-center">
                <img src="@/assets/images/bird.png" class="mb-2">
                <p>Birds</p>
              </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="2" class="d-flex flex-column align-items-center justify-content-center">
              <router-link to="smallarticles" class="d-flex flex-column align-items-center">
                <img src="@/assets/images/hamster.png" class="mb-2">
                <p>Small<br>animals</p>
              </router-link>
            </b-col>
            <b-col cols="6" sm="4" md="2" class="d-flex flex-column align-items-center justify-content-center">
              <img src="@/assets/images/+.png" class="mb-2">
              <p>Other</p>
            </b-col>
          </b-row>
          <b-row class="hotitems" no-gutters>
            <b-col cols="12">
              <h1 class="title">HOT ITEMS.</h1>
            </b-col>
            <b-col cols="3" md="4" lg="3">
              <ItemThumbnailSmall :details="true" :dots="true"></ItemThumbnailSmall>
            </b-col>
            <b-col cols="3" md="4" lg="3">
              <ItemThumbnailSmall :details="true" :dots="true"></ItemThumbnailSmall>
            </b-col>
            <b-col cols="3" class="d-md-none d-lg-block">
              <ItemThumbnailSmall :details="true" :dots="true"></ItemThumbnailSmall>
            </b-col>
            <b-col cols="3" md="4" lg="3">
              <ItemThumbnailMultiple></ItemThumbnailMultiple>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="d-flex justify-content-start justify-content-md-end mb-4 mb-md-0">
              <router-link to="dogarticles" class="emphasis">Visit the store</router-link>
            </b-col>
          </b-row>
          <NewsLetter class="my-3 mx-1"></NewsLetter>
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
import NewsLetter from '@/components/NewsLetter.vue';
import HeaderCarousel from '@/components/HeaderCarousel.vue';
import ItemThumbnailSmall from '@/components/ItemThumbnailSmall.vue';
import ItemThumbnailMultiple from '@/components/ItemThumbnailMultiple.vue';

export default {
  name: 'home',
  components: {
    Navigation,
    Cookies,
    Search,
    FAQ,
    NewsLetter,
    HeaderCarousel,
    ItemThumbnailSmall,
    ItemThumbnailMultiple
  }
}
</script>
