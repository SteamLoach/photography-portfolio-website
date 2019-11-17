import Vue from 'vue'

//Case Converters
export const toCase = {
  camel: (str) => {
        return str.replace(/([-_][a-z])/ig, ($1) => {
            return $1.toUpperCase()
                .replace('-', '')
                .replace('_', '');
        });
    },
  kebab: (str) => {
        return str && str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');
    },
  snake: (str) => {
        return str && str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
    },
}


const setBackgroundImage = function(url) {
  return {backgroundImage: `url('${url}')` } ; 
}

const dateString = function(str) {
  return new Date(str).toDateString();
}


//Component Only
Vue.prototype.$setBackgroundImage = setBackgroundImage;
Vue.prototype.$dateString = dateString;

//Context Injection
export default ({app}, inject) => {
  inject('toCase', toCase);
}