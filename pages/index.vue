<template>

  <section class="album-preview">
    
    <div class="album-cover"
         :style="coverImage">
      <div class="next-album"
           @click="nextAlbum">
        <img src="~/assets/right-arrow-white.webp">
      </div>
    
      <span class="album-counter">
        {{ `${currentAlbum + 1}/${Albums.length}` }} 
      </span>
  
    </div>
    
    <div class="album-preview-card">
      <h2> {{Albums[currentAlbum].title}} </h2>
      <p> {{Albums[currentAlbum].teaser}} </p>
      <button> View Album </button>
    </div>
      
    <div class="next-album-teaser"
         :style="nextAlbumTeaser">
      <div class="next-album"
           @click="nextAlbum">
        <img src="~/assets/right-arrow.webp">
      </div>
    </div>

  </section>

</template>

<script>


export default {

  data() {
    return {
      currentAlbum: 0,
    }
  },
  
  computed: {
    Albums: function() {
      return this.$store.state.cms.albums;
    },
    coverImage: function() {
      return this.$setBackgroundImage(
        this.Albums[this.currentAlbum]
          .images[0].image[0].url
      );
    },
    nextAlbumTeaser: function() {
      let nextAlbum = this.currentAlbum + 1;
      if (nextAlbum >= this.Albums.length) {
        nextAlbum = 0;
      }
      return this.$setBackgroundImage(
        this.Albums[nextAlbum]
          .images[0].image[0].url
      );
    }
    
  },
  
  methods: {
    nextAlbum: function() {
      this.currentAlbum += 1;
      if (this.currentAlbum >= this.Albums.length) 
        this.currentAlbum = 0;
    }
  }
  
  
  
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
    p {padding-bottom: $space-medium;}
    @include border-from($tablet, left);
  }
  
  .album-counter {
    position: absolute;
      bottom: 0;
      right: 0;  
    @include content-card(light);
    font-size: 1rem;
    color: $offset-font-color;
    background-color: $brand-accent;
  }
  
  .next-album {
    @include hidden-from($tablet);
    position: absolute;
      bottom: 0;
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
