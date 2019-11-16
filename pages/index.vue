<template>

  <section class="album-preview">
    
    <div class="album-cover"
         :style="coverImage">
      <div class="next-album"
           @click="traverseUp">
        <img src="~/assets/right-arrow-white.webp">
      </div>
    
      <span class="album-counter">
        {{ `${mxn_counter + 1}/${Albums.length}` }} 
      </span>
  
    </div>
    
    <div class="album-preview-card">
      <h2> {{Albums[mxn_counter].title}} </h2>
      <p> {{Albums[mxn_counter].teaser}} </p>
      <nuxt-link :to="`album/${$toCase.kebab(Albums[mxn_counter].title)}`">
        <button> View Album </button>
      </nuxt-link>   
    </div>
      
    <div class="next-album-teaser"
         :style="nextAlbumTeaser">
      <div class="next-album"
           @click="traverseUp">
        <img src="~/assets/right-arrow.webp">
      </div>
    </div>

  </section>

</template>

<script>

import { traverseArray } from '~/mixins/traverseArray.js';
  
export default {

  mixins: [traverseArray],
  
  data() {
    return {
      mxn_counter: 0,
    }
  },
  
  computed: {
    Albums: function() {
      return this.$store.state.cms.album;
    },
    coverImage: function() {
      return this.$setBackgroundImage(
        this.Albums[this.mxn_counter]
          .images[0].image.url
      );
    },
    nextAlbumTeaser: function() {
      let nextAlbum = this.mxn_counter + 1;
      if (nextAlbum >= this.Albums.length) {
        nextAlbum = 0;
      }
      return this.$setBackgroundImage(
        this.Albums[nextAlbum]
          .images[0].image.url
      );
    },
    
    mxn_traverseArray: function() {
      return this.Albums;
    }
    
  },
  
/**
  methods: {
    nextAlbum: function() {
      this.currentAlbum += 1;
      if (this.currentAlbum >= this.Albums.length) {
        this.currentAlbum = 0;
      }
    }
    **/  
  
}
  
  
  
</script>

<style lang="scss">

  .album-preview {
     
    min-height: 100vh;
    @include row(between, center);
    
    .album-cover {
      position: relative;
      @include position-from($tablet, absolute);
      @include height-scale(
        $default: 65vh,
        $on-tablet: 100%,
      );
      width: 100%;
      
      @include centered-background();
    }
    
  }
  
  .album-preview-card {
    z-index: 1;  
    @include column-scale(
      $default: 24,
      $on-tablet: 10,
      $on-laptop: 10,
      $on-desktop: 8,
    );
    
    @include content-card(medium);
    h2 {
      font-size: 2.6rem;
      font-weight: 300;
    }
    @include border-from($tablet, left);
  }
  
  .album-counter, .next-album {
    z-index: 2;
    position: absolute;
      bottom: -5%;
      @include position-from($laptop, absolute, $bottom: 0);
  }
  
  .album-counter {
    right: 0;  
    @include content-card(light);
    font-size: 1rem;
    color: $offset-font-color;
    background-color: $brand-accent;
  }
  
  .next-album {
    @include hidden-from($tablet);
    left: 0;
    display: inline-block;
    @include content-card(light);
    background-color: $brand-accent;
    &:hover {cursor: pointer;}
  }
  

  
  .next-album-teaser {
    position: relative; 
    display: inline-block;
    
    @include hidden-until($tablet);
    
    padding: 4rem;
    
    @include margin-scale(
      right,
      $default: $outer-space-medium,
    );
    
    @include centered-background();
    border: 5px solid $page-background;
    
    .next-album {
      left: -25%;
      bottom: 35%;
      display: inline-block;
      background-color: $page-background;
    }
  }
  
</style>
