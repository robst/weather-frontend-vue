import TemperatureService from '@/services/TemperatureService.js'

export const namespaced = true

export const state = {
  temperature: {}
}

export const mutations = {
  SET_TEMPERATURE(state, temperature) {
    state.temperature = temperature
  }
}

export const actions = {
  fetchTemperature({ commit }, city) {
    return TemperatureService.getTemperature(city).then(response => {
      commit('SET_TEMPERATURE', response.data)

      return response.data
    })
  }
}

