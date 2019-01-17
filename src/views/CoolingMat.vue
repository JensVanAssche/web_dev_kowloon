<template>
  <div>
    <Search></Search>
    <FAQ></FAQ>
    <Navigation></Navigation>
    <main>
      <b-container>
        <b-row>
          <b-col class="d-flex justify-content-center p-5">
            <img src="@/assets/images/kowloon_logo.png" alt="">
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            










                    <div class="card-carousel">
                        <div class="card-img">
                            <img :src="currentImage" alt="">
                            <div class="actions">
                                <span @click="prevImage" class="prev">
                                    <i class="fas fa-chevron-left"></i>
                                </span>
                                <span @click="nextImage" class="next">
                                    <i class="fas fa-chevron-right"></i>
                                </span>
                            </div>
                        </div>
                        <div class="thumbnails">
                            <div 
                                v-for="(image, index) in  images"
                                :key="image.id"
                                :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                                @click="activateImage(index)"
                            >
                                <img :src="image.thumb">
                                <span>{{ image.text }}</span>
                            </div>
                        </div>
                    </div>


















          </b-col>
          <b-col cols="6" class="mb-4">
            <div class="tags mb-2">
                <h1>K</h1>
                <span class="tag">Dogs</span>
                <span class="tag">Splash 'n Fun</span>
            </div>
            <h1 class="title">COOLING MAT</h1>
            <h3 class="title mb-4">€ 15,49</h3>
            <h4 class="title">Colors</h4>
            <h4 class="title">Description</h4>
            <p>
                Hier komt een de volledige beschrijvende tekst met een max. aantal karakters. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea clit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat consectetur.
            </p>
            <div>
                <img src="@/assets/images/icons-1.png" alt="" class="mx-2">
                <img src="@/assets/images/icons-2.png" alt="" class="mx-2">
                <img src="@/assets/images/icons-3.png" alt="" class="mx-2">
            </div>
          </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col>
                <div class="product_specifications">
                    <h4 class="title">Specifications</h4>
                    <p>DIMENSIONS</p>
                    <div class=" d-flex ">
                        <p class="mx-4"><span class="font-weight-bold">S</span> - Ø 53x18cm</p>
                        <p class="mx-4"><span class="font-weight-bold">M</span> - Ø 53x18cm</p>
                        <p class="mx-4"><span class="font-weight-bold">L</span> - Ø 53x18cm</p>
                    </div>
                    <p>TITEL</p>
                    <div class="pl-4">
                        <p><span class="font-weight-bold">S</span> - hier komt de technische tekst</p>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col>
                <h2 class="title">GERELATEERDE PRODUCTEN</h2>
                <div class="carousel">
                    <img src="@/assets/images/carousel_prev.png" class="carousel_prev" alt="">
                    <img src="@/assets/images/carousel_next.png" class="carousel_next" alt="">
                    <carousel :per-page="4" :paginationEnabled="false" :scrollPerPage="false" :navigate-to="activeSlide">
                        <slide>
                            <div class="itemthumbnail">
                                <div class="itemthumbnail-image">
                                    <img src="@/assets/images/cooling_mat_small.png" alt="">
                                    <div class="itemthumbnail-overlay">
                                        <img src="@/assets/images/information.png" alt="">
                                        <span>view details</span>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="itemthumbnail">
                                <div class="itemthumbnail-image">
                                    <img src="@/assets/images/cooling_mat_small.png" alt="">
                                    <div class="itemthumbnail-overlay">
                                        <img src="@/assets/images/information.png" alt="">
                                        <span>view details</span>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="itemthumbnail">
                                <div class="itemthumbnail-image">
                                    <img src="@/assets/images/cooling_mat_small.png" alt="">
                                    <div class="itemthumbnail-overlay">
                                        <img src="@/assets/images/information.png" alt="">
                                        <span>view details</span>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="itemthumbnail">
                                <div class="itemthumbnail-image">
                                    <img src="@/assets/images/cooling_mat_small.png" alt="">
                                    <div class="itemthumbnail-overlay">
                                        <img src="@/assets/images/information.png" alt="">
                                        <span>view details</span>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="itemthumbnail">
                                <div class="itemthumbnail-image">
                                    <img src="@/assets/images/cooling_mat_small.png" alt="">
                                    <div class="itemthumbnail-overlay">
                                        <img src="@/assets/images/information.png" alt="">
                                        <span>view details</span>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="itemthumbnail">
                                <div class="itemthumbnail-image">
                                    <img src="@/assets/images/cooling_mat_small.png" alt="">
                                    <div class="itemthumbnail-overlay">
                                        <img src="@/assets/images/information.png" alt="">
                                        <span>view details</span>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="itemthumbnail">
                                <div class="itemthumbnail-image">
                                    <img src="@/assets/images/cooling_mat_small.png" alt="">
                                    <div class="itemthumbnail-overlay">
                                        <img src="@/assets/images/information.png" alt="">
                                        <span>view details</span>
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h2 class="title">FREQUENTLY ASKED QUESTIONS</h2>
                <div class="faq-question mb-2 collapsed">
                    <div class="faq-header">
                        <p>Dit is een vraag</p>
                        <img src="@/assets/images/dropdown.png" alt="">
                    </div>
                    <div class="faq-content">
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</span>
                    </div>
                </div>
                <div class="faq-question mb-2 collapsed">
                    <div class="faq-header">
                        <p>Dit is een vraag</p>
                        <img src="@/assets/images/dropdown.png" alt="">
                    </div>
                    <div class="faq-content">
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</span>
                    </div>
                </div>
                <div class="faq-question mb-2 collapsed">
                    <div class="faq-header">
                        <p>Dit is een vraag</p>
                        <img src="@/assets/images/dropdown.png" alt="">
                    </div>
                    <div class="faq-content">
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..</span>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="newsletter my-5 px-3">
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
                <input type="button" value="OK" class="greybutton">
              </form>
            </b-col>
          </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Nav.vue';
import Search from '@/components/Search.vue';
import FAQ from '@/components/FAQ.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'coolingmat',
  data: function() {
    return {
      email: "",
      activeSlide: 0,
      carouselLength: 7,
      images: [
        {
            id: '1',
            big: 'cooling_mat_big.png',
            thumb: 'cooling_mat_big.png',
            text: 'woordje tekst'
        },
        {
            id: '2',
            big: 'cooling_mat_small.png',
            thumb: 'cooling_mat_small.png',
            text: 'woordje tekst'
        },
        {
            id: '3',
            big: 'cooling_mat_big.png',
            thumb: 'cooling_mat_big.png',
            text: 'woordje tekst'
        }
    ],
    activeImage: 0
    }
  },
  components: {
    Navigation,
    Search,
    FAQ,
    Carousel,
    Slide
  },
  methods: {
    faqOnClick: function () {
      document.querySelector(".faq-question").classList.toggle("collapsed");
    },
    carouselPrev: function () {
        if (this.activeSlide > 0) {
            this.activeSlide -= 1;
        }
    },
    carouselNext: function () {
        if (this.activeSlide < this.carouselLength - 4) {
            this.activeSlide += 1;
        }
    },
    nextImage() {
        var active = this.activeImage + 1;
        if(active >= this.images.length) {
            active = 0;
        }
        this.activateImage(active);
    },
    prevImage() {
        var active = this.activeImage - 1;
        if(active < 0) {
            active = this.images.length - 1;
        }
        this.activateImage(active);
    },
    activateImage(imageIndex) {
        this.activeImage = imageIndex;
    }
  },
  mounted: function() {
    document.querySelector(".faq-header").addEventListener('click', this.faqOnClick);
    document.querySelector(".carousel_prev").addEventListener('click', this.carouselPrev);
    document.querySelector(".carousel_next").addEventListener('click', this.carouselNext);
  },
  computed: {
    currentImage() {
        return this.images[this.activeImage].big;
    }
  }
}
</script>
