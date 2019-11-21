export default {  
  
    openLightBox(state) {
      state.lightBox['is-active'] = true;
    },
  
    closeLightBox (state) {
      state.lightBox['is-active'] = false;
    }
    
  
}