<template>

  <section class="slide-gallery">
  
    <!-- Slide Gallery -->
    <div class="image-aperture">
      <div class="image-strip"
           :style="stripPosition"
           @click="isActive({target: 'lightBox', state: true})">
        <div v-for="item in images"
             :style="$setBackgroundImage(`${item.image.url}?w=2048&q=50`)"
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
    
    <!-- Lightbox -->
    <div class="lightbox-outer"
       :class="lightboxState">
    
    <div class="lightbox-close"
         @click="isActive({target: 'lightBox', state: false})">
      <svg-loader :icon="'close-button'"></svg-loader>
    </div>
      
    <div class="lightbox-inner">
      <img :src="`${mxn_traverseArray[mxn_counter].image.url}?q=40&w=1248`"/>
    </div>
      
    <div class="lightbox-next" 
         @click="traverseUp">
      <span>&#8250;</span>
    </div>
    <div class="lightbox-previous" 
         @click="traverseDown">
      <span>&#8249;</span>
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
    },
    lightboxState: function() {
      return this.$store.state.utils.lightBox ;
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
  
  
  ////Lightbox
  
  .lightbox-outer {
    z-index: 999;
    overflow: hidden;
    position: fixed;
    opacity: 0; 
      top: 0;
      left: 0;
    height: 0%;
    width: 0%;
    background-color: rgba($brand-1, 0.9);
    @include standard-transition();
    
    &.is-active {
      display: block;
      opacity: 1;
      height: 100%;
      width: 100%;
      @include pad-scale(
      xy,
      $default: $space-lighter,
      $on-phablet: $space-light,
      $on-laptop: $space-medium,
      $on-desktop: $space-heaviest,
    );
    }
  }
  
  .lightbox-close {
    z-index: 999;
    position: absolute;
      top: $space-light;
      left: $space-light;
    @include height-scale(
      $default: 2rem,
    );
    @include custom-scale(
      $default: 2rem,
    );
    &:hover {cursor: pointer;}
    .svg-icon {
      fill: $page-background;
    }
  }
  
  .lightbox-inner {
    @include wrapper(center, center);
    height: 100%;
    width: 100%;
    img {
      border-radius: $border-radius;
    }
  }
  
  .lightbox-next,
  .lightbox-previous {
    z-index: 5;
    position: absolute;
    padding: $space-lighter;
    @include font-size-scale(
      $default: 4rem,
      $on-tablet: 6rem,
      $on-laptop: 8rem,
    );
    &:hover{cursor: pointer}
  }
  
  .lightbox-next {
    right: 0;
    @include y-center-absolute();
  }
  .lightbox-previous {
    left: 0;
    @include y-center-absolute();
  }

  
</style>