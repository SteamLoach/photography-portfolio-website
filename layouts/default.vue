<template>
  <main class="site-wrapper">
    
    <!--Sidebar-->
    <primary-navigation></primary-navigation>
    
    <!--Body Content-->
    <section class="body-content">
      <span class="navigation-toggle"
            @click="toggleNav">
        <navigation-toggle :state="navState">Menu</navigation-toggle>
      </span>
      <nuxt />
    </section>
    
  </main>
</template>

<script>

import {mapMutations} from 'vuex'; 
  
import primaryNavigation from '~/components/navigation/primary-navigation.vue'
import navigationToggle from '~/components/navigation/navigation-toggle.vue'

export default {
  
  components: {
    primaryNavigation,
    navigationToggle,
  },
  
  computed: {
    navState: function() {
      return this.$store.state.navigation.primaryNavigation;
    }
  },
  
  methods: {
    ...mapMutations({
      toggleNav: 'navigation/toggleNav'
    })
  } 
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
  
  h2 {
    @include font-size-scale(
      $default: 1.8rem,
      $on-tablet: 2.2rem,
    );
    font-weight: 300;
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
