<template>

    <p class="content-byline">
      <span> {{author}} </span>
      <span> {{ $dateString(date) }} </span>
    </p>

</template>


<script>

export default {
  
  props: ['author', 'date'],
  
}

</script>


<style lang="scss">


    .content-byline {
      @include row(start, center);
      font-weight: 600;
      color: $shade-base;
        
      span {
        @include custom-scale(
          $default: 100%,
          $on-tablet: auto,
        );
        &:first-child {
          @include pad-from($tablet, right, $space-lighter);
          @include margin-from($tablet, right, $space-lighter);
          @include border-from($tablet, right, 2px solid $shade-base);
        }
      }    
    }


</style>