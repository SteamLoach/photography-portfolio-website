
export const traverseArray = {
  
  methods: {
    
    traverseUp: function() {
      this.mxn_counter += 1;
      if (this.mxn_counter >= this.mxn_traverseArray.length) {
        this.mxn_counter = 0;
      }
    },
    
    traverseDown: function() {
      this.mxn_counter -= 1;
      if (this.mxn_counter < 0) {
        this.mxn_counter = this.mxn_traverseArray.length - 1;
      }
    }
    
  }
  
}