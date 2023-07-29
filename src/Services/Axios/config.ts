import axios, { InternalAxiosRequestConfig } from 'axios'
import storage from '../../Utils/storage'

const API_BASE_URL = 'http://127.0.0.1:8000/api'
const appAxios = axios.create({
  baseURL: API_BASE_URL
})

const authRequestInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const token = storage.getToken()
  config.headers.Authorization = `Bearer ${token}`

  return config
}

appAxios.interceptors.request.use(authRequestInterceptor)
appAxios.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 403) {
      // storage.clearToken()

      // window.location.reload()
    }
    return Promise.reject(error)
  }
)

enum Prefix {
  auth = 'auth'
}
enum Method {
  post = 'post',
  get = 'get',
  delete = 'delete',
  patch = 'patch'
}

export default appAxios
export { Prefix, Method }
