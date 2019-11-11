<template>

  <section class="primary-navigation"
           :class="classExtensions">
  
    <a class="site-logo" href="/">
      <img :src="Settings.logo[0].url">
    </a>
    
    <ul class="nav-link-wrapper">
      <li class="menu-icon"><img :src="Content.menuIcon[0].url"></li>
      <li v-for ="navLink in Content.navLinks">
        <span @click="closeNav">
          <nuxt-link :to="navLink.route">{{ navLink.title }}</nuxt-link>
        </span>
      </li>
    </ul>
    
    <ul class="social-icon-wrapper">
      <li v-for="socialIcon in Settings.socialMediaLinks">
        <a :href="socialIcon.route">
          <svg-loader :icon="socialIcon.reference"></svg-loader>
        </a>
      </li>
    </ul>
    
  </section>

</template>

<script>

import {mapMutations} from 'vuex'; 
  
export default {
  
  computed: {
    Content: function() {
      return this.$store.state.cms.primaryNavigation;
    },
    Settings: function() {
      return this.$store.state.cms.siteSettings;
    },
    classExtensions: function() {
      return this.$store.state.navigation.primaryNavigation;
    }
  },
  
  methods: {
    ...mapMutations({
      closeNav: 'navigation/closeNav',
    })
  }
  
}

</script>


<style lang="scss">

  .primary-navigation {
    
    z-index: 10;
    //Positioning
    @include position(
      fixed,
      $left: -100%
    );
    @include position-from(
      $laptop,
      fixed,
      $left: 0
    );
    &.is-active {
      left: 0;
    }
    
    //Dimensions
    @extend %sidebar-scale;
    height: 100vh;
    overflow-y: scroll;
    
    //Margin & Padding
    @include pad-scale(
      y,
      $default: $outer-space-heavy,
    );
    
    //Theme
    @include standard-transition($props: left, $function: linear);
    background-color: $page-background;
        
    ////////////////
    ////CHILDREN////
    ////////////////
    
    //Spacing
    .site-logo {
      @include margin-scale(
        bottom, 
        $default: $outer-space-heavy
      );
    }
    
    .nav-link-wrapper,
    .social-icon-wrapper,
    {
      @include margin-scale(
        bottom,
        $default: $outer-space-medium,
      );
    }
    
    .menu-icon {margin-bottom: $space-light;}
    
    .site-logo,
    .menu-icon,
    ul a {
      padding-left: $space-heavier;
    }
    
    
    //Theme
    ul a {
      margin-bottom: $space-lighter;
      text-transform: uppercase;
      font-weight: 600;
      
      &.nuxt-link-exact-active {
        border-bottom: 2px solid $border-color;
      }
    }
        
    .svg-icon {
      width: $space-light;
      height: $space-light;
      fill: #000;
      .svg-icon-accent {fill: $page-background;}
    }
    
  }

</style>





















