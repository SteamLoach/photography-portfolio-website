<template>

<main class="blog-post">
    
    <div class="cover-image"
         :style="$setBackgroundImage(Content.coverImage.url)">
    </div>
    <content-byline
                    :author="Content.author"
                    :date="Content.publishDate">
    </content-byline>
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
    
    .content-byline {
      @include pad-scale(
        left,
        $default: $space-lighter,
        $on-lrg-mobile: $space-light,
        $on-tablet: $space-medium,
      );
      margin-bottom: $outer-space-lightest;
    }
  }
  
  .cover-image {
    @include height-scale(
      $default: 55vh,
      $on-tablet: 50vh,
      $on-laptop: 60vh
    );
    width: 100%;
    @include margin-scale(
      bottom,
      $default: $outer-space-lighter,
    );
    @include centered-background();
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
    font-size: 0.8rem;
    
    img {
      border-radius: $border-radius;
      @include under-shadow();
    }
  }
  

</style>



















