<template>

<main class="blog-post">
    
    <div class="cover-image"
         :style="$setBackgroundImage(Content.coverImage.url)">
      <div class="title-wrapper">
        <h1> {{Content.title}} </h1>
      </div>
    </div>
    
    <article v-html="Content.text"
             class="post-body"></article>
</main>

</template>


<script>

import {_ContentFromStore} from '~/cms/_ContentFromStore.js';
  
export default {
  
  mixins: [_ContentFromStore],
  
  data() {
    return {
     contentType: 'blog', 
    }
  },  
}
  
  
</script>


<style lang="scss">
  
  .blog-post {
    @include row(start, center);
    @include border-from($tablet, left, $standard-border);
  }
  
  .cover-image {
    @include height-scale(
      $default: 55vh,
      $on-tablet: 50vh,
      $on-laptop: 55vh
    );
    width: 100%;
    @include margin-scale(
      bottom,
      $default: $outer-space-lighter,
    );
    @include centered-background();
    
    .title-wrapper {
      height: 100%;
      @include row(center, center);

      text-align: center;
      background-image: linear-gradient(rgba($brand-1,0),rgba($brand-1,0.8), rgba($brand-1,0));
      
      h1 {
        width: 90%;
        @include font-size-scale(
          $default: 1.6rem,
          $on-tablet: 2.6rem,
          $on-laptop: 3.2rem
          );
        color: $offset-font-color;
      } 
    }
      
  }
  
  .post-body {
    max-width: 1024px;
    @include pad-scale(
      x,
      $default: $space-lighter,
      $on-lrg-mobile: $space-light,
      $on-tablet: $space-medium,
    );
    @extend %standard-flow;
    
    img {
      @include column-scale(
        $default: 22,
        $on-laptop: 18,
      );
      @include x-margin(auto);
      border-radius: $border-radius;
      @include under-shadow();
    }
  }

</style>



















