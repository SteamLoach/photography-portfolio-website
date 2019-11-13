<template>

<article>
    <h1> {{Content.title}} </h1>
    <p> {{Content.teaser}} </p>
    <p> {{Content.text}} </p>
    <img v-for="img in Content.images"
       :src="img.image[0].url">
</article>

</template>


<script>

import {_ContentFromStore} from '~/cms/_ContentFromStore.js';
  
export default {
  
  mixins: [_ContentFromStore],
  
  data() {
    return {
     contentType: 'albums', 
    }
  },  
}
  
  
</script>


<style lang="scss">

  

</style>