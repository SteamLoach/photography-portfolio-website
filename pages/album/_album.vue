<template>

<main class="album-page">
  
  <slide-gallery :images="Content.images"></slide-gallery>
  
  <section class="album-content-right">
  
    <article class="album-info">
      
      <h1> {{Content.title}} </h1>
      
      <div class="info-line">
        <h3>Author:</h3><p>{{Content.author}}</p>
      </div>
      
      <div class="info-line">
        <h3>Date:</h3><p>{{$dateString(Content.publishDate)}}</p>
      </div>
        
      <div class="info-line tag-wrapper">
        <h3>Tags:</h3>
          <div>
            <span v-for="tag in Content.tags.split(', ')"
                  class="tag">
              {{ tag }}
            </span>
          </div>
      </div>
        
      <p class="album-teaser"> {{Content.teaser}} </p>
      
    </article>
        
  </section>
  
  <section v-html="Content.text"
             class="album-description"></section>
  
</main>

</template>


<script>

import {_ContentFromStore} from '~/cms/_ContentFromStore.js';
  
export default {
  
  mixins: [_ContentFromStore],
  
  data() {
    return {
     contentType: 'album', 
    }
  },  
  
  computed: {
    
    Tags: function() {
      return this.Content.images[0].tags.split(", ");
    }
    
  }
}
  
  
</script>


<style lang="scss">

  .album-page {
    @include row(start, start);
    @include pad-scale(
      top,
      $on-desktop: $space-heavy,
    );
    border-left: $standard-border;
    h3 {font-weight: 300;}
  }
    
  .album-content-right {
    @include column-scale(
      $default: 24,
      $on-desktop: 12,
    );
    
    .album-info {
      @include column-scale(
        $default: 24,
        $on-desktop: 20,
      );
      
      h1,
      .info-line {
        padding-bottom: $space-medium;
      } 
      .info-line {
        h3 {width: 100px;}
        h3, p {display: inline-block;}
      }
      
      .tag-wrapper {
        @include wrapper(start, center);
        flex-wrap: nowrap;
        h3 {margin-bottom: $space-lightest;}
        div {
          display: inline-block;
        }
      }
      
      .tag {
        display: inline-block;
        margin-right: $space-lightest;
        margin-bottom: $space-lightest;
        padding: $space-lighter;
        color: $brand-1;
        font-size: 0.6rem;
        text-align: center;
        border: 1px solid $brand-1;
        border-radius: 5px;
        
        &:hover {
          color: $offset-font-color;
          background-color: $brand-1;
        }
      }
      
      .album-teaser {font-size: 0.8rem;}
    }
  }
  
  .album-content-right .album-info,
  .album-description {
    @include pad-scale(
      xy,
      $default: $space-medium,
      $on-tablet: $space-heavy,
    );
  }
  
  .album-description {
    width: 100%;
    max-width: 1024px;
    @extend %standard-flow;
    font-size: 0.8rem;
    img {
      @include x-margin(auto);
      max-width: 75%;
      @include under-shadow();
      border-radius: $border-radius;
    }
  }

</style>