<template>
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
</template>

<script>
export default {
    name: ''
}
</script>
