import {mapMutations} from 'vuex'; 

export const isActive = {
  
  methods: {
    ...mapMutations({
      isActive: 'utils/isActive',
      isActiveToggle: 'utils/isActiveToggle'
    })
  }  
}