<template>
  <div class="search closed">
      <b-container>
          <b-row>
              <b-col class="d-flex justify-content-end">
                  <div class="close_search">X</div>
              </b-col>
          </b-row>
          <b-row class="advancedfilter closed">
              <b-col class="advancedfilter_header" cols="12">
                <h1>Advanced filter</h1>
                <img src="@/assets/images/dropdown.png" alt="">
              </b-col>
              <b-col class="advancedfilter_content" cols="12">
                  <b-row>
                      <b-col cols="12" lg="6" class="advancedfilter_content_category">
                          <div>
                              <h4 class="title">Category</h4>
                          </div>
                          <div>
                              <label class="checkbox_container">Dogs
                                <input type="checkbox">
                                <span class="checkmark"></span>
                              </label>
                              <label class="checkbox_container">Cats
                                <input type="checkbox">
                                <span class="checkmark"></span>
                              </label>
                              <label class="checkbox_container">Fish
                                <input type="checkbox">
                                <span class="checkmark"></span>
                              </label>
                              <label class="checkbox_container">Birds
                                <input type="checkbox">
                                <span class="checkmark"></span>
                              </label>
                              <label class="checkbox_container">other
                                <input type="checkbox">
                                <span class="checkmark"></span>
                              </label>
                          </div>
                      </b-col>
                      <b-col cols="12" lg="6" class="advancedfilter_content_slider">
                          <div>
                              <h4 class="title">Price range</h4>
                          </div>
                          <div>
                              <div class="mb-3">
                                  <vueSlider v-model="slidervalue" v-bind="options"></vueSlider>
                              </div>
                              <div class="d-flex align-items-center justify-content-between">
                                <div class="priceinput mr-4">
                                    <input type="text" v-model="slidervalue[0]" class="px-5">
                                    <span>€</span>
                                </div>
                                -
                                <div class="priceinput ml-4">
                                    <input type="text" v-model="slidervalue[1]" class="px-5">
                                    <span>€</span>
                                </div>
                              </div>
                          </div>
                      </b-col>
                  </b-row>
              </b-col>
          </b-row>
          <b-row class="search_searchfield">
              <div class="search_searchfield_desktop d-flex align-items-center">
                  <img src="@/assets/images/search_icon_fat.png" alt="">
                  <span>Just start typing and hit</span>
                  <img src="@/assets/images/break.png" alt="">
                  <span>to search</span>
              </div>
              <div class="search_searchfield_mobile d-flex align-items-center">
                  <img src="@/assets/images/search_icon_fat.png" alt="">
                  <span>Type to search</span>
              </div>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';


export default {
    name: 'search',
    components: {
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
                    backgroundColor: "#cccccc"
                },
                sliderStyle: {
                    backgroundColor: '#000000'
                }
            },
            slidervalue: [8, 499]
        }
    },
    methods: {
        searchOnClick: function () {
            document.querySelector(".search").classList.toggle("closed");
            document.querySelector(".nav_search").classList.toggle("active");

            document.querySelector(".faq").classList.add("closed");
            document.querySelector(".nav_faq").classList.remove("active");
        },
        filterOnClick: function () {
            document.querySelector(".advancedfilter").classList.toggle("closed");
        }
    },
    mounted: function() {
        document.querySelector("nav .nav_search").addEventListener('click', this.searchOnClick);
        document.querySelector(".search .close_search").addEventListener('click', this.searchOnClick);
        document.querySelector(".advancedfilter_header").addEventListener('click', this.filterOnClick);
    }
}
</script>
