import Vue from 'vue'
import Vuex from 'vuex'
import frame from './frame'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    frame
  }
})

export default store