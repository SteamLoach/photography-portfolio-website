<template>

  <section class="content-teaser-wrapper">
  
    <article v-for="item in Content"
             class="content-teaser">
      <div class="content-cover-image"
           :style="$setBackgroundImage(item.images[0].image[0].url)"></div>
      
      <div class="content-description">
        <h2> {{ item.title }} </h2>
        <p> {{ item.teaser }} </p>
        <nuxt-link :to="`${item.componentReference}s/${item.codename}`">
          <button class="content-cta">View {{item.componentReference}}</button>
        </nuxt-link> 
      </div>
        
    </article>
  
  </section>

</template>


<script>

  
export default {
  
  props: ['Content'],
  
}
  
</script>


<style lang="scss">
  
  .content-teaser {
  
    @include pad-scale(
      x,
      $default: $space-lighter,
      $on-tablet: $space-heavy,
    );
    padding-top: $space-medium;
    
    @include margin-scale(
      bottom,
      $default: $outer-space-medium,
      $on-tablet: $outer-space-heavy,
    );
    
    @include margin-until($laptop, left, $space-lightest);
    
    
    border-left: $standard-border;
    
    .content-cover-image {
      @include height-scale(
        $default: 45vh,
        $on-tablet: 40vh,
      );
      width: 100%;
      @include centered-background();
    }
    
    .content-description {
      padding: $space-medium;
      h2 {padding-bottom: $space-lighter;}
      p {
        max-width: 768px;
        padding-bottom: $space-light;}
      }
    
    .content-cta {
      text-transform: capitalize;
    }
  }

</style>





















