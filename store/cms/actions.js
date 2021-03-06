export default {

  getContentByCodename (context, options) {
    return this.$deliveryClient
      .item(options.codename)
        .depthParameter(6)
          .toPromise()
            .then(response => {
              context.commit(options.mutation, {
                output: response.item, 
                target: this.$toCase.camel(options.codename)
              }, {root: true}) ;                    
            }) ; 
  },
  
  getContentByModel (context, {splitItems = true, model = '', mutation = '', module = ''} = {}) {
    return this.$deliveryClient
      .items()
        .type(model)
          .depthParameter(6)
            .toPromise()
              .then(response => {
                if (splitItems) {
                  response.items.forEach(item => {
                    context.commit(mutation, {
                      output: item,
                      target: this.$toCase.camel(item.system.codename)
                    }, {root: true}) ; 
                  }) ;
                } else {
                    context.commit(mutation, {
                      output: response.items,
                      target: this.$toCase.camel(`${model}`),
                      asArray: true
                    }, {root: true}) ;
                }
              });
  },
}


  
