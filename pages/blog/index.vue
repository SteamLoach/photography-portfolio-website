<template>

  <main class="catagory-page">
    
    <h1>Blog</h1>
        
    <content-teaser :Content="blogPosts"
                    :contentType="'blog'"></content-teaser>
    
  </main>
    
</template>


<script>
  
export default {
    
  computed: {
    blogPosts: function() {
      return this.$store.state.cms.blog;
    },
  },  
}

</script>


<style lang="scss">


</style>