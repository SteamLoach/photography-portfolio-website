export default {  
  
  //Primary Navigation Handheld State
  toggleNav(state) {
    state.primaryNavigation['is-active'] = !state.primaryNavigation['is-active'];
  },
    
  closeNav(state) {
    state.primaryNavigation['is-active'] = false ; 
  },
    
  
}