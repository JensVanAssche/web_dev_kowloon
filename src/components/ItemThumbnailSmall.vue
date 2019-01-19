<template>
  <div class="itemthumbnail">
    <div class="itemthumbnail-image">
        <img src="@/assets/images/cooling_mat_small.png" alt="">
        <div class="category-dots" v-if="dots == true">
            <div class="category-dots-white"></div>
            <div class="category-dots-black"></div>
            <div class="category-dots-blue"></div>
        </div>
        <router-link to="coolingmat" class="itemthumbnail-overlay">
            <img src="@/assets/images/information.png" alt="">
            <span>view details</span>
        </router-link>
    </div>
    <div class="itemthumbnail-details" v-if="details == true">
        <span>Cooling mat</span>
        <span>€ 15,49</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'itemthumbnailsmall',
    props: {
        details: Boolean,
        dots: Boolean
    }
}
</script>
