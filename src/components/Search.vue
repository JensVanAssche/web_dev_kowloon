<template>
  <div class="search closed">
      <b-container>
          <b-row class="advancedfilter closed">
              <b-col class="advancedfilter_header" cols="12">
                <h1>Advanced filter</h1>
                <img src="@/assets/images/dropdown.png" alt="">
              </b-col>
              <b-col class="advancedfilter_content" cols="12">
                  <b-row>
                      <b-col class="advancedfilter_content_category">
                          <div>
                              <h2>Category</h2>
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
                      <b-col>
                          <div>
                              <h2>Price range</h2>
                          </div>
                          <div>
                              
                          </div>
                      </b-col>
                  </b-row>
              </b-col>
          </b-row>
          <b-row class="search_searchfield">
              <div class="d-flex align-items-center">
                  <img src="@/assets/images/search_icon_fat.png" alt="">
                  <span>Just start typing and hit</span>
                  <img src="@/assets/images/break.png" alt="">
                  <span>to search</span>
              </div>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'search',
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
        document.querySelector(".advancedfilter_header").addEventListener('click', this.filterOnClick);
    }
}
</script>
