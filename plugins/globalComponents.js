import Vue from 'vue'

//import 
import SVGLoader from '~/components/svg-icons/SVG-Loader.vue' ;
import contentTeaser from '~/components/content/content-teaser.vue';
import contentByline from '~/components/content/content-byline.vue';
import slideGallery from '~/components/content/slide-gallery.vue';

Vue.component('svg-loader', SVGLoader) ;
Vue.component('content-teaser', contentTeaser) ;
Vue.component('content-byline', contentByline);
Vue.component('slide-gallery', slideGallery);