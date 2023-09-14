import { getToken, removeToken } from '@/api/auth'
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 600000
})

service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = "Bearer " + `${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(function (response) {
  response => {
    if (response.data.item.message === 'Invalid token.Token not found') {
      removeToken()
      window.location = '/'
    }
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default service
