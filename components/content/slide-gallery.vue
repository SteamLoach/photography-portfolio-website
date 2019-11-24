<template>

  <section class="slide-gallery">
  
  <light-box :src="images[mxn_counter].image.url"></light-box>
    
    <div class="image-aperture">
      <div class="image-strip"
           :style="stripPosition"
           @click="isActive({target: 'lightBox', state: true})">
        <div v-for="item in images"
             :style="$setBackgroundImage(item.image.url)"
             class="image-slide"></div>
      </div>
    </div>
    
    <div class="slide-controls">
      <div class="previous-image"
            @click="traverseDown">
        <img src="~/assets/left-arrow.webp">
      </div>

      <div class="next-image"
            @click="traverseUp">
        <img src="~/assets/right-arrow-white.webp">
      </div>
    </div>
  
  </section>
  

</template>


<script>

import {isActive} from '~/mixins/isActive.js';
import { traverseArray } from '~/mixins/traverseArray.js';
  
export default {
  
  mixins: [isActive, traverseArray],
  
  props: ['images'],
  
  data() {
    return {
      mxn_counter: 0,
    }
  },
  
  computed: {
    
    mxn_traverseArray: function() {
      return this.images;
    },
    
    stripPosition: function() {
      return `left: -${this.mxn_counter * 100}%`
    }
  },
  
}


</script>


<style lang="scss">
  
  .slide-gallery {
    position: relative;
    @include height-scale(
      $default: 70vh,
      $on-tablet: 80vh,
      $on-laptop: 65vh,
      $on-desktop: 80vh,
    );
    @include column-scale(
      $default: 24,
      $on-desktop: 12,
    );
    @include margin-scale(
      bottom,
      $default: $outer-space-medium,
    );
  }
  
  .image-aperture {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  .image-strip {
    height: 100%;
    @include container(start,center);
    flex-wrap: nowrap;
    width: 100%;
    @include standard-transition(
      $duration: 0.8s,
      $function: ease-out,
    );
    &:hover {cursor: pointer;}
  }
  
  .image-slide {
    height: 100%;
    min-width: 100%;
    max-width: 100%;
    @include centered-background();
  }
  
  .slide-controls {
    @include position-until($desktop, absolute, $bottom: -2rem,)
        @include x-center-absolute-until($desktop);
    @include position-from($desktop, absolute, $bottom: 0, $right: 0);
    @media screen and (min-width: $desktop) {
      transform: translate(50%, 0);
    }
    @include wrapper(center, center);
    flex-wrap: nowrap;
    @include under-shadow-until($desktop);
  }
  
  .next-image,
  .previous-image {
    z-index: 1;
    height: 4rem;
    width: 4rem;
    @include wrapper(center, center);
    &:hover {cursor: pointer;} 
  }
  
  .next-image {background-color: $brand-accent;}
  .previous-image {background-color: $page-background;}

  
</style>