<template>

<h1> {{Content.title}} for {{Content.route}} </h1>

</template>


<script>

import {_ContentFromStore} from '~/cms/_ContentFromStore.js';
  
export default {
  
  mixins: [_ContentFromStore],
  
  data() {
    return {
     contentType: 'nav_links', 
    }
  },  
}
  
  
</script>


<style lang="scss">

  

</style>