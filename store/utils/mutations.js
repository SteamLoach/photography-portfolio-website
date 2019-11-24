export default {  
    
    isActive(state, dir) {
      state[dir.target]['is-active'] = dir.state;
    },
  
    isActiveToggle(state, target) {
      state[target]['is-active'] = !state[target]['is-active'] ;
    }
  
}