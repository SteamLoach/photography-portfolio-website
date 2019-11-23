<template>

  <main class="contact-page">
  
    <contact-form :form="Form"></contact-form>
  
  </main>

</template>


<script>

export default {
  
  computed: {
    Form: function() {
      return this.$store.state.cms.contactForm ;
    }
  }
  
}

</script>


<style lang="scss">

  .contact-page {
    @include row(center, start);
    min-height: 100vh;
  }
  
</style>