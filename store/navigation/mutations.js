export default {  
  
  //Primary Navigation Handheld State
  toggleNav(state) {
    state.primaryNavigation['is-active'] = !state.primaryNavigation['is-active'];
  },
    
  closeNav(state) {
    console.log("Benis") ;
    state.primaryNavigation['is-active'] = false ; 
  },
    
  
}