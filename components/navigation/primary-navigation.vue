<template>

  <section class="primary-navigation"
           :class="classExtensions">
  
    <a class="site-logo" href="/">
      <svg-loader :icon="'photo-camera'"></svg-loader>
    </a>
    
    <ul class="nav-link-wrapper">
      <li class="menu-icon"><img :src="Content.menuIcon.url"></li>
      <li v-for ="navLink in Content.navLinks">
        <span @click="isActive({target: 'primaryNavigation', state: false})">
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

import {isActive} from '~/mixins/isActive.js';
  
export default {
  
  mixins: [isActive],
  
  computed: {
    Content: function() {
      return this.$store.state.cms.primaryNavigation;
    },
    Settings: function() {
      return this.$store.state.cms.siteSettings;
    },
    classExtensions: function() {
      return this.$store.state.utils.primaryNavigation;
    },
        
  },
  
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
      .svg-icon {
        height: 4rem;
        width: 4rem;
        fill: $brand-1;
        .svg-icon-accent {fill: $brand-accent;}
      }
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
        border-bottom: $standard-border;
      }
    }
        
    .svg-icon {
      width: $space-light;
      height: $space-light;
      fill: $brand-1;
      .svg-icon-accent {fill: $page-background;}
    }
    
  }

</style>





















