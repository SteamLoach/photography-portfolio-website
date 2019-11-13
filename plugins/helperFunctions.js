import Vue from 'vue'

//String Conversion
const toKebab = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2')
               .replace(/[\s_]+/g, '-')
               .toLowerCase();
}


const setBackgroundImage = function(url) {
  return {backgroundImage: `url('${url}')` } ; 
}








Vue.prototype.$setBackgroundImage = setBackgroundImage;
Vue.prototype.$toKebab = toKebab;


export {
  toKebab,
}
