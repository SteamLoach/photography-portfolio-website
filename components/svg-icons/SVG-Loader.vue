<template>

  <i>
    <component :is="iconComponent"></component>
  </i>

</template>


<script>

//Social
import facebookIcon from './social/facebook-icon.vue';
import instagramIcon from './social/instagram-icon.vue';
import pinterestIcon from './social/pinterest-icon.vue';
import twitterIcon from './social/twitter-icon.vue';
  
//General
import photoCamera from './general/photo-camera.vue';

//Utils
import closeButton from './utils/close-button.vue';
  
export default {
  
  props: ['icon'],
  
  computed: {
    iconComponent: function() {
      return this.$toCase.camel(this.icon) ; 
    }
  },
  
  components: {
    facebookIcon,
    instagramIcon,
    pinterestIcon,
    twitterIcon,
    photoCamera,
    closeButton,
  }
  
}

</script>