<template>
  <div class="header">
    <carousel :per-page="1" :autoplay="true" :loop="true" :autoplayHoverPause="false" :autoplayTimeout="5000">
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
    <div class="carousel-progession">
        <div class="carousel-progession-bar"></div>
        <div class="carousel-progession-progress active"></div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'headercarousel',
    methods: {
        carouselClick: function () {
            document.querySelector(".carousel-progession-progress").classList.remove("active");
            setTimeout(function(){ document.querySelector(".carousel-progession-progress").classList.add("active"); }, 1);
        }
    },
    mounted: function() {
        document.querySelector(".VueCarousel-pagination").addEventListener('click', this.carouselClick);
    }
}
</script>
