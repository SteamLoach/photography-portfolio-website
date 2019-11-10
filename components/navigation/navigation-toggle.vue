<template>
  
    <div class="nav-toggle-wrapper">
      <div class="nav-toggle"
           :class="state"></div>
    </div>

</template>



<script>
  
export default {
  
  props:['state'],
  
}
</script>



<style lang="scss">
  
  .nav-toggle-wrapper {
    
    %burger-bar {
    background-color: #000;
    height: 5px;
    width: 50px;
    border-radius: 15px;
    transition-property: background-color, transform;
    transition-duration: $transition-duration;
    transition-timing-function: ease;
  }
  
    @include hidden-from($laptop);
    display: inline-block;
    text-align: left;
    z-index: 1;
    overflow: visible;
    padding: 15px 10px 35px 10px;
    margin-left: auto;
    
    &:hover {
      cursor: pointer;
    }
    
  .nav-toggle {
    @extend %burger-bar;
    position: relative;
    
    &:before, &:after {
      @extend %burger-bar;
      display: inline-block;
      content: "";
      position: absolute;
      transition-delay: inherit;
 
    }
    &:before {
      top: 10px
    }
    &:after {
      top: 20px
    }
  }
    
  .nav-toggle.is-active { 
    transform: translate(0px, 10px) rotate(-135deg);
    
    &:before {
      transform: scale(0) translate(0px, -20px) rotate(-270deg);
    }
    &:after {
      transform: translate(0px, -20px) rotate(270deg);
    }
  }
}
</style>