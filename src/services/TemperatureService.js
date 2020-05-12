import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:8000/temperature`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 1000
})

export default {
  getTemperature(city) {
    const querystring = require('querystring');

    return apiClient.post('/by_city', querystring.stringify({ city: city }))
  }
}
