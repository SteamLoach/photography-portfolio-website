<template>

  <h1>I'm the {{ $route.params[contentType] }} album!</h1>

</template>


<script>

import {CMS_StoreContent} from '~/cms/cmsRoutes.js';
  
export default {
  
  mixins: [CMS_StoreContent],
  
  data() {
    return {
     contentType: 'albums', 
    }
  },  
}
  
  
</script>


<style lang="scss">

  

</style>