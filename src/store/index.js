import Vue from 'vue'
import Vuex from 'vuex'

import { mediaGetters } from './getters'
import { mediaMutations } from './mutations'
import { mediaActions } from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    showAnimation: false,
    thisMedia: {},
    favorite: [],
    mediaList: []
  },
  getters: Object.assign({}, mediaGetters),
  mutations: Object.assign({}, mediaMutations),
  actions: Object.assign({}, mediaActions)
})