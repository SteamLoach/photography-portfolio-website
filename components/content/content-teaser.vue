<template>

  <section class="content-teaser-wrapper">
  
    <article v-for="item in Content"
             class="content-teaser">
      
      <div class="content-teaser-inner">
      
        <div v-if="item.images"
             class="content-cover-image"
             :style="$setBackgroundImage(item.images[0].image.url)">
        </div>

        <div v-else
             class="content-cover-image"
             :style="$setBackgroundImage(item.coverImage.url)">
        </div>

        <div class="content-description">
          <h2> {{ item.title }} </h2>
          <content-byline 
                          :author="item.author" 
                          :date="item.publishDate">
        </content-byline>
          <p> {{ item.teaser }} </p>
          <nuxt-link :to="`${contentType}/${$toCase.kebab(item.codename)}`">
            <button class="content-cta">View {{contentType}}</button>
          </nuxt-link> 
        </div>
        
      </div>
        
    </article>
  
  </section>

</template>


<script>

  
export default {
  
  props: ['Content', 'contentType'],
      
}
  
</script>


<style lang="scss">
  
  .content-teaser {
    @include row(center, center);
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
    
    .content-teaser-inner {
      @include column-scale(
        $default: 24,
        $on-desktop: 20
      );
    }
    
    .content-cover-image {
      @include height-scale(
        $default: 45vh,
        $on-tablet: 40vh,
      );
      width: 100%;
      @include centered-background();
    }
    
    .content-description {  
      @include content-card(light);
      font-size: 1rem;
    }
    

    
    .content-cta {
      text-transform: capitalize;
    }
  }

</style>





















