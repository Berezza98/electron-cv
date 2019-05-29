const state = {
  name : "",
  surname : ""
}

const mutations = {
  updateUserObj(state, {key, value}){
    state[key] = value;
  }
}

const actions = {
  updateUserObj({commit}, obj){
    commit('updateUserObj', obj);
  }
}

export default {
  state,
  mutations,
  actions
}
