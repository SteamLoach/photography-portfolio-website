<template>

  <main class="catagory-page">
    
    <h1>Albums</h1>
        
    <content-teaser :Content="Albums"
                    :contentType="'album'"></content-teaser>
    
  </main>
    
</template>


<script>
  
export default {
    
  computed: {
    Albums: function() {
      return this.$store.state.cms.album;
    },
  },  
}

</script>


<style lang="scss">

  .albums-page {
    
    h1 {
      @include pad-scale(
        xy,
        $default: $space-light,
        $on-tablet: $space-medium,
      );    
    }
    
  }

</style>