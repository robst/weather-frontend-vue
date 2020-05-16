import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:8000/temperature`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 1000
})

export default {
  getTemperature(city) {

    return apiClient.get('/by_city', {
      params: {
        city: city
      }
    })
  }
}
