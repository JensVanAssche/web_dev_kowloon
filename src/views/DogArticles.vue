<template>
  <div>
    <Search></Search>
    <FAQ></FAQ>
    <Navigation></Navigation>
    <main>
      <div class="header">
        <carousel :per-page="1">
          <slide>
            <img src="@/assets/images/kowloon_logo.png">
            <img src="@/assets/images/banner1_filter.png">
          </slide>
          <slide>
            <img src="@/assets/images/kowloon_logo.png">
            <img src="@/assets/images/banner1_filter.png">
          </slide>
          <slide>
            <img src="@/assets/images/kowloon_logo.png">
            <img src="@/assets/images/banner1_filter.png">
          </slide>
        </carousel>
      </div>
      <div class="content">
        <b-container>
          <b-row>
            <b-col>
              <div class="tags">
                <h1>K</h1>
                <span class="tag">Dogs</span>
                <span class="tag">Splash 'n Fun</span>
              </div>
              <h1 class="title mb-4">DOG ARTICLES.</h1>
            </b-col>
          </b-row>
          <b-row class="article_filter">
              <b-col cols="12" class="article_filter_header d-flex align-items-center mb-3">
                  <h2 class="title mb-0 mr-3">Filter</h2>
                  <img src="@/assets/images/dropdown.png" alt="">
              </b-col>
              <b-col cols="12" class="article_filter_content closed">
                  <div class="ml-5">
                      <h4 class="title">By collection</h4>
                      <div class="mb-4">
                          <label class="checkbox_container">Splash 'n Fun
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox_container">Luxury
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox_container">New
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox_container">On Sale
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox_container">Other
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                      </div>
                      <h4 class="title">Price range</h4>
                      <div class="mb-5">
                          <b-row>
                            <b-col class="mt-2">
                                <vueSlider v-model="slidervalue" v-bind="options"></vueSlider>  
                            </b-col>
                            <b-col class="d-flex align-items-center">
                                <div class="priceinput mr-4">
                                    <input type="text" v-model="slidervalue[0]" class="px-5">
                                    <span>€</span>
                                </div>
                                -
                                <div class="priceinput ml-4">
                                    <input type="text" v-model="slidervalue[1]" class="px-5">
                                    <span>€</span>
                                </div>
                            </b-col>
                          </b-row>
                      </div>
                  </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col cols="12" class="d-flex justify-content-between align-items-center">
                  <select name="articles">
                      <option value="">Sort by relevance</option>
                      <option value="">Price: low to high</option>
                      <option value="">Price: high to low</option>
                      <option value="">Latest</option>
                      <option value="">Oldest</option>
                  </select>
                  <div>
                      <span>Dog items: 5 of 56</span>
                  </div>
              </b-col>
          </b-row>
          <b-row no-gutters>
              <b-col col="6">
                  <b-row no-gutters>
                      <b-col cols="6">
                        <div class="itemthumbnail">
                            <div class="itemthumbnail-image">
                            <img src="@/assets/images/cooling_mat_small.png" alt="">
                            <router-link to="coolingmat" class="itemthumbnail-overlay">
                                <img src="@/assets/images/information.png" alt="">
                                <span>view details</span>
                            </router-link>
                            </div>
                            <div class="itemthumbnail-details">
                                <span>Cooling mat</span>
                                <span>€ 15,49</span>
                            </div>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <div class="itemthumbnail">
                            <div class="itemthumbnail-image">
                            <img src="@/assets/images/cooling_mat_small.png" alt="">
                            <router-link to="coolingmat" class="itemthumbnail-overlay">
                                <img src="@/assets/images/information.png" alt="">
                                <span>view details</span>
                            </router-link>
                            </div>
                            <div class="itemthumbnail-details">
                                <span>Cooling mat</span>
                                <span>€ 15,49</span>
                            </div>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <div class="itemthumbnail">
                            <div class="itemthumbnail-image">
                            <img src="@/assets/images/cooling_mat_small.png" alt="">
                            <router-link to="coolingmat" class="itemthumbnail-overlay">
                                <img src="@/assets/images/information.png" alt="">
                                <span>view details</span>
                            </router-link>
                            </div>
                            <div class="itemthumbnail-details">
                                <span>Cooling mat</span>
                                <span>€ 15,49</span>
                            </div>
                        </div>
                      </b-col>
                      <b-col cols="6">
                        <div class="itemthumbnail-multiple">
                            <div class="itemthumbnail-image">
                            <img src="@/assets/images/cooling_mat_small.png" alt="">
                            <span class="item-count">4</span>
                            <router-link to="coolingmat" class="itemthumbnail-overlay">
                                <img src="@/assets/images/information.png" alt="">
                                <span>view details</span>
                            </router-link>
                            </div>
                            <div class="itemthumbnail-details">
                            <span>Cooling mat</span>
                            <span>€ 15,49</span>
                            </div>
                            <div class="multiple-1"></div>
                            <div class="multiple-2"></div>
                        </div>
                       </b-col>
                  </b-row>
              </b-col>
              <b-col col="6">
                  <b-row>
                      <b-col cols="12">
                        <div class="bigitemthumbnail">
                        <div class="itemthumbnail-image">
                        <img src="@/assets/images/cooling_mat_big.png" alt="">
                        <router-link to="coolingmat" class="itemthumbnail-overlay">
                            <img src="@/assets/images/information.png" alt="">
                            <span>view details</span>
                        </router-link>
                        </div>
                        <div class="itemthumbnail-details">
                            <h1>Cooling mat</h1>
                            <p>Hier komt een deel van de beschrijvende tekst die bij elk product hoort. Ook terug te vinden in het product detail.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius....</p>
                            <div>
                                <span>€ 15,49</span>
                                <router-link to="coolingmat" class="pinkbutton">Want to know more?</router-link>
                            </div>
                        </div>
                        </div>
                      </b-col>
                  </b-row>
              </b-col>
          </b-row>
        </b-container>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Nav.vue';
import Search from '@/components/Search.vue';
import FAQ from '@/components/FAQ.vue';
import vueSlider from 'vue-slider-component';

export default {
  name: 'dogarticles',
  components: {
    Navigation,
    Search,
    FAQ,
    vueSlider
  },
  data () {
    return {
        options: {
            enableCross: true,
            tooltip: false,
            min: 8,
            max: 499,
            height: 4,
            processStyle: {
                backgroundColor: '#9a9a9a'
            },
            bgStyle: {
                backgroundColor: "#fff"
            }
        },
        slidervalue: [8, 499]
    }
  },
  methods: {
    filterOnClick: function () {
        document.querySelector(".article_filter_header").classList.toggle("opened");
        document.querySelector(".article_filter_content").classList.toggle("closed");
    }
  },
  mounted: function() {
    document.querySelector(".article_filter_header").addEventListener('click', this.filterOnClick);
  }
}
</script>
