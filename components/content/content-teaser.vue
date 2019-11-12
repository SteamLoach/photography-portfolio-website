<template>

  <section class="content-teaser-wrapper">
  
    <article v-for="item in content"
             class="content-teaser">
      <div class="content-cover-image"
           :style="$setBackgroundImage(item.images[0].image[0].url)"></div>
      
      <div class="content-description">
        <h2> {{ item.title }} </h2>
        <p> {{ item.teaser }} </p>
        <button> See More </button>
      </div>
        
    </article>
  
  </section>

</template>


<script>

  
export default {
  
  props: ['content', 'contentType'],
  
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
    
    
    border-left: 2px solid #000;
    
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
  }

</style>





















