<template>

  <main class="albums-page">
    
    <h1>Albums</h1>
    
    <article v-if="activeAlbum"> This takes a 'content' prop with the single album object we want to display </article>
    
    <content-teaser v-else 
                    :content="Albums"
                    :contentType="'Album'">
    </content-teaser>
    
  </main>
    
</template>


<script>
    
export default {
    
  computed: {
    Albums: function() {
      return this.$store.state.cms.albums;
    },
    activeAlbum: function() {
      return this.$store.state.rendering.activeAlbum
    }
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