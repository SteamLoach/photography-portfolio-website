<template>
  <main class="site-wrapper">
    
    <!--Sidebar-->
    <primary-navigation></primary-navigation>
    
    <!--Body Content-->
    <section class="body-content">
      <nuxt />
    </section>
    
  </main>
</template>

<script>

import primaryNavigation from '~/components/navigation/primary-navigation.vue'

export default {
  
  components: {
    primaryNavigation,
  }
  
}


</script>


<style lang="scss">
    
  .body-content {
    @extend %body-content-scale;
    height: 2000px;
    margin-left: auto;
    
    background: $brand-2;
  }
  
  
  
  
</style>
