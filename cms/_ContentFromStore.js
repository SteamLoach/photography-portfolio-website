import axios from 'axios';
import { CMSConfig } from './cms.config.js';

//args:
//projectId
//type or codename
//target

//export const CMS_Routes = function(model) {}

export const _ContentFromStore = {
  computed: {
    Content: function() {
            
      return this.$store.state.cms[this.$toCase.camel(this.contentType)]
        .find(item => {        
        return item.codename === this.$route.params[this.contentType] || item.codename === this.$toCase.snake(this.$route.params[this.contentType])
      });
    }  
  } 
}