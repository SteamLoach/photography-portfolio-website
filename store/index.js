export const state = () => ({
  
  reference: 'rootState',
  debug: true,
  
})


export const actions = {
  
  async nuxtServerInit ({dispatch}) {
    
    await dispatch('cms/getContentByCodename', {
      codename: 'primary_navigation',
      mutation: 'cms/resolveToStore',
      module: 'cms',
    });
    await dispatch('cms/getContentByCodename', {
      codename: 'site_settings',
      mutation: 'cms/resolveToStore',
      module: 'cms',
    });
    await dispatch('cms/getContentByModel', {
      model: 'album',
      mutation: 'cms/resolveToStore',
      module: 'cms',
      splitItems: false
    });
    await dispatch('cms/getContentByModel', {
      model: 'blog',
      mutation: 'cms/resolveToStore',
      module: 'cms',
      splitItems: false
    });
    await dispatch('cms/getContentByCodename', {
      codename: 'contact_form',
      mutation: 'cms/resolveToStore',
      module: 'cms',
    });
    
  },
}


























