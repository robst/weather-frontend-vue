import Vue from 'vue'
import Vuex from 'vuex'
import * as temperature from '@/store/modules/temperature.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    temperature
  }
})
