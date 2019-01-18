<template>
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
</template>

<script>
export default {
    name: 'itemthumbnailmultiple'
}
</script>
