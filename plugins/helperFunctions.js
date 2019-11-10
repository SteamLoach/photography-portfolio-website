import Vue from 'vue'

const setBackgroundImage = function(url) {
  return {backgroundImage: `url('${url}')` } ; 
}








Vue.prototype.$setBackgroundImage = setBackgroundImage;
