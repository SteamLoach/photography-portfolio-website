export default {
  
//Set individual page content 
  resolveToStore(state, content) {
    
    state[`${content.target}_Blob`] = content.output ;
    
    if (content.asArray) {
      state[content.target] = content.output.map(item => {
        let resolvedItem = this.$masterResolver(item);
        resolvedItem.key = content.output.indexOf(item) + 1;
        resolvedItem.codename = item.system.codename ;
        return resolvedItem ;
      })
    } else {
      state[content.target] = this.$masterResolver(content.output) ;
    }
     
  },
    
}

