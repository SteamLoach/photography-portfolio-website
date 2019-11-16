import { toCase } from './utils.js';

const masterResolver = (contentModel, counter) => {
  
  //Target for resolved content
  let resolvedModel = {} ;
  
  //Helper function to store and extend resolved content
  const resolve = (key, content) => {
        resolvedModel[toCase.camel(key)] = content ;
        resolvedModel.componentReference = toCase.camel(contentModel.system.type) ;
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
          
          if (type === 'text' || type === 'rich_text' || type === 'url_slug') {
            resolve(key, contentModel[key].value) ; 
          }
          else if (type === 'asset') {
            
            if (contentModel[key].value.length === 1) {
              
              let asset = contentModel[key].value[0];
              let image = {
                  url: asset.url,
                  name: asset.name,
                  description: asset.description,
                }
              resolve(key, image)
            }
            else {
              resolve(key, contentModel[key].value.map(asset => {
                return {
                  url: asset.url,
                  name: asset.name,
                  description: asset.description,
                  key: (contentModel[key].value.indexOf(asset) + 1)
                } 
              })) ;
            }
  
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
}
