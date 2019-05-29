const state = {
    selectedLanguage : 'uk',
    availableLanguages : [
      {
        title : 'Українська',
        id : 'uk'
      },
      {
        title : 'English',
        id : 'en'
      }
    ]
  }
  
  const mutations = {
    updateSelectedLanguage(state, value){
      state.selectedLanguage = value;
    }
  }
  
  const actions = {
    updateSelectedLanguage({commit}, value){
      commit('updateSelectedLanguage', value);
    }
  }
  
  export default {
    state,
    mutations,
    actions
  }
  