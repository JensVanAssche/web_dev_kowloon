<template>
  <div>
    <Search></Search>
    <FAQ></FAQ>
    <Navigation></Navigation>
    <main>
      <HeaderCarousel></HeaderCarousel>
      <div class="content">
        <b-container>
          <b-row>
            <b-col>
              <div class="tags">
                <h1>K</h1>
                <div class="tag">
                    <div class="tag-arrow"></div>
                    <div class="tag-body">
                        <div class="tag-color-pink"></div>
                        <span>Dogs</span>
                    </div>
                </div>
                <div class="tag">
                    <div class="tag-arrow"></div>
                    <div class="tag-body">
                        <span>Splash 'n Fun</span>
                    </div>
                </div>
              </div>
              <h1 class="title mb-4">DOG ARTICLES.</h1>
            </b-col>
          </b-row>
          <b-row class="article_filter">
              <b-col cols="12" class="article_filter_header d-flex align-items-center mb-3" @click="filterOnClick">
                  <h2 class="title mb-0 mr-3">Filter</h2>
                  <img src="@/assets/images/dropdown.png" alt="">
              </b-col>
              <b-col cols="12" class="article_filter_content closed">
                  <div class="ml-0 ml-sm-5">
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
                            <b-col cols="12" md="6" class="my-3">
                                <vueSlider v-model="slidervalue" v-bind="options"></vueSlider>  
                            </b-col>
                            <b-col cols="12" md="6" class="d-flex align-items-center">
                                <div class="priceinput mr-4">
                                    <input type="text" v-model="slidervalue[0]">
                                    <span>€</span>
                                </div>
                                -
                                <div class="priceinput ml-4">
                                    <input type="text" v-model="slidervalue[1]">
                                    <span>€</span>
                                </div>
                            </b-col>
                          </b-row>
                      </div>
                  </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col cols="12" class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                  <SelectDropdown></SelectDropdown>
                  <div class="my-2">
                    <span><span class="text-grey">Dog items: </span><span class="font-weight-bold">5 of 56</span></span>
                  </div>
              </b-col>
          </b-row>
          <b-row no-gutters>
              <b-col cols="12" md="6">
                  <b-row no-gutters>
                      <b-col cols="12" sm="6" md="6">
                        <ItemThumbnailSmall :details="true" :dots="true"></ItemThumbnailSmall>
                      </b-col>
                      <b-col cols="12" sm="6" md="6">
                        <ItemThumbnailSmall :details="true" :dots="true"></ItemThumbnailSmall>
                      </b-col>
                      <b-col cols="12" sm="6" md="6" class="d-md-none">
                        <ItemThumbnailMultiple></ItemThumbnailMultiple>
                      </b-col>
                      <b-col cols="12" sm="6" md="6">
                        <ItemThumbnailSmall :details="true" :dots="true"></ItemThumbnailSmall>
                      </b-col>
                      <b-col cols="12" sm="6" md="6" class="d-md-none">
                        <ItemThumbnailSmall :details="true" :dots="true"></ItemThumbnailSmall>
                      </b-col>
                      <b-col cols="12" sm="6" md="6">
                        <ItemThumbnailMultiple></ItemThumbnailMultiple>
                      </b-col>
                  </b-row>
              </b-col>
              <b-col cols="6" class="d-none d-md-block">
                  <b-row>
                      <b-col cols="12">
                        <ItemThumbnailBig></ItemThumbnailBig>
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
import HeaderCarousel from '@/components/HeaderCarousel.vue';
import ItemThumbnailSmall from '@/components/ItemThumbnailSmall.vue';
import ItemThumbnailMultiple from '@/components/ItemThumbnailMultiple.vue';
import ItemThumbnailBig from '@/components/ItemThumbnailBig.vue';
import SelectDropdown from '@/components/SelectDropdown.vue';

export default {
  name: 'dogarticles',
  components: {
    Navigation,
    Search,
    FAQ,
    vueSlider,
    HeaderCarousel,
    ItemThumbnailSmall,
    ItemThumbnailMultiple,
    ItemThumbnailBig,
    SelectDropdown
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
        slidervalue: [8, 499],
        selectOption: "Sort by relevance"
    }
  },
  methods: {
    filterOnClick: function () {
        document.querySelector(".article_filter_header").classList.toggle("opened");
        document.querySelector(".article_filter_content").classList.toggle("closed");
    }
  }
}
</script>
