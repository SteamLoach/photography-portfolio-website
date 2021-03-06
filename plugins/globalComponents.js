import Vue from 'vue'

//import 
import SVGLoader from '~/components/svg-icons/SVG-Loader.vue' ;
import contentTeaser from '~/components/content/content-teaser.vue';
import contentByline from '~/components/content/content-byline.vue';
import slideGallery from '~/components/content/slide-gallery.vue';
import lightBox from '~/components/content/light-box.vue';
import contactForm from '~/components/forms/contact-form.vue';

Vue.component('svg-loader', SVGLoader) ;
Vue.component('content-teaser', contentTeaser) ;
Vue.component('content-byline', contentByline);
Vue.component('slide-gallery', slideGallery);
Vue.component('light-box', lightBox);
Vue.component('contact-form', contactForm);