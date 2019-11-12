import axios from 'axios';
import { CMSConfig } from './cms.config.js';

//args:
//projectId
//type or codename
//target


export const CMS_Routes = function(model, component) {
  return axios.get(`${CMSConfig.ProjectSource}/${CMSConfig.ProjectID}/items?system.type=${model}`)
    .then((res) => {
      return res.items.map((item) => {
        return `${component}/${item.system.codename}`;
      })
    })
}

export const CMS_StoreContent = {
  computed: {
    Content: function() {
      return this.$store.state.cms[this.$toCamel(this.contentType)]
        .find(item => {
        return item.codename === this.$route.params[this.contentType] ;
      });
    }  
  } 
}