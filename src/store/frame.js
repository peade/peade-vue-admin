export default {
  namespaced: true,
  state: {
    navCollapse: false
  },
  mutations: {
    updateCollapse(state, payload) {
      if (payload) {
        return
      }
      state.navCollapse = !state.navCollapse
    }
  },
  actions: {},
  getters: {}
}