<template>
  <main class="site-wrapper">
    
    <!--Sidebar-->
    <primary-navigation></primary-navigation>
    
    <!--Body Content-->
    <section class="body-content">
      <span class="navigation-toggle"
            @click="isActiveToggle('primaryNavigation')">
        <navigation-toggle :state="navState">Menu</navigation-toggle>
      </span>
      <nuxt />
    </section>
    
  </main>
</template>

<script>

import {isActive} from '~/mixins/isActive.js';
  
import primaryNavigation from '~/components/navigation/primary-navigation.vue'
import navigationToggle from '~/components/navigation/navigation-toggle.vue'

export default {
  
  mixins: [isActive],
  
  components: {
    primaryNavigation,
    navigationToggle,
  },
  
  computed: {
    navState: function() {
      return this.$store.state.utils.primaryNavigation;
    }
  },
}


</script>


<style lang="scss">
  
  .body-content {
    @extend %body-content-scale;
    margin-left: auto;
    
    .navigation-toggle {
      z-index: 10;
      position: fixed;
        right: 0;
      @include margin-scale(
        xy,
        $default: $space-lighter,
        $on-tablet: $outer-space-lightest,
      );
    }
  }
  
  h1, h2 {
    @include font-size-scale(
      $default: 1.8rem,
      $on-tablet: 2.2rem,
    );
    font-weight: 300;
  }
  h3 {font-weight: 500;}
  
  button {
    font-size: 1rem;
    color: $brand-1;
    border: $standard-border;

    &:hover {
      color: $offset-font-color;
      background-color: $brand-1;
    }
  }
  
  
  .catagory-page {
    h1 {
      @include pad-scale(
        xy,
        $default: $space-light,
        $on-tablet: $space-medium,
      );    
    }
  }
  
</style>
