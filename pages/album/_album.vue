<template>

<main>
    <h1> {{Content.title}} </h1>
    <p> {{Content.teaser}} </p>
    <article v-html="Content.text"></article>
    <img v-for="img in Content.images"
       :src="img.image.url">
</main>

</template>


<script>

import {_ContentFromStore} from '~/cms/_ContentFromStore.js';
  
export default {
  
  mixins: [_ContentFromStore],
  
  data() {
    return {
     contentType: 'album', 
    }
  },  
}
  
  
</script>


<style lang="scss">

  

</style>