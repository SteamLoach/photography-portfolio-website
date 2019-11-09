//Converts object keys to camel case
const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const masterResolver = (contentModel, counter) => {
  
  //Target for resolved content
  let resolvedModel = {} ;
  
  //Helper function to store and extend resolved content
  const resolve = (key, content) => {
        resolvedModel[toCamel(key)] = content ;
        resolvedModel.componentReference = toCamel(contentModel.system.type) ;
        (counter > 0) ? resolvedModel.key = counter : '' ; 
  } ; 
  
  //Function body
  Object.keys(contentModel).forEach(key => {
        if (key !== 'system' 
            && key !== '_raw' 
            && key !== '_config'
           ) {
          
          //let type = contentModel.elements[key].type ;
          let type = contentModel[key].type ;
          let counter = 0 ;
          
          if (type === 'text' || type === 'rich_text') {
            resolve(key, contentModel[key].value) ; 
          }
          else if (type === 'asset') {
            resolve(key, contentModel[key].value.map(asset => {
              return {
                url: asset.url,
                name: asset.name,
                description: asset.description,
                key: (contentModel[key].value.indexOf(asset) + 1)
              } 
            })) ; 
          }
          else if (type === 'multiple_choice') {
            let optionsObject = {} ; 
            contentModel[key].options.forEach(option => {
              optionsObject[option.name] = true ;
            }) ; 
            resolve(key, optionsObject) ; 
          }
          
          else if (type === 'modular_content') {
            
            resolve(key, contentModel[key].value.map(obj => {
                counter++
                return masterResolver(obj, counter) ;  
            })) ; 
          }
          else {
            console.log(`no resolver for "${type}" model "${key}"`) ;
          }        
        }
    }) ;
  
    return resolvedModel ; 

} ;




export default ({app}, inject) => {
  inject('masterResolver', masterResolver) ;
  inject('toCamel', toCamel) ;
}
