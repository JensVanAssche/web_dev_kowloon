<template>
  <div>
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
          <b-row>
              
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

export default {
  name: 'dogarticles',
  data: function() {
    return {
      
    }
  },
  components: {
    Navigation,
    Search,
    FAQ
  },
  methods: {
    
  }
}
</script>
