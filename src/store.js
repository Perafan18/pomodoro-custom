import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentContext: {},
    currentTime: ''
  },

  mutations: {
    setCurrentContext (state, payload) {
      state.currentContext = payload.currentContext
    },

    setCurrentTime (state, payload) {
      state.currentTime = payload.currentTime
    }
  }
})

export default store
