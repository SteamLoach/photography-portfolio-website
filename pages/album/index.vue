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


</style>