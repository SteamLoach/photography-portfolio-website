<template>

  <div class="lightbox-outer"
       :class="state"
       @click="isActive({target: 'lightBox', state: false})">
    
    <div class="lightbox-close"
         @click="isActive({target: 'lightBox', state: false})">
      <svg-loader :icon="'close-button'"></svg-loader>
    </div>
      
    <div class="lightbox-inner">
  
      <img :src="`${src}?w=2048`"/>
      
    </div>
  
  </div>

</template>


<script>
  
import {isActive} from '~/mixins/isActive.js';

export default {
  
  mixins: [isActive],
  
  props: ['src'],
  
  computed: {
    state: function() {
      return this.$store.state.utils.lightBox ;
    }
  },
  
  
}

</script>


<style lang="scss">

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
  
</style>