import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import Roomchat from './modules/roomchat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Roomchat
  },
  state: {
    name: 'Dimas Prayoga'
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [createPersistedState({ path: ['Auth.user'], storage: window.sessionStorage })]
})
