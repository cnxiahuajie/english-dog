import axios from 'axios'
import router from '@/router/index'

// 创建一个axios实例
const service = axios.create({
  timeout: 3000,
  baseURL: '/api',
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log(err)
  }
)

service.interceptors.response.use(
  (response) => {
    let res = {}

    let responseData = response.data

    res.status = responseData.code
    res.msg = responseData.msg
    if (responseData.data) {
      res.data = JSON.parse(responseData.data)
    }

    if (res.status == 4001) {
      sessionStorage.setItem('login', 'off')
      router.push({ path: '/login', params: { id: '1' } })
      return Promise.reject(res)
    } else if (res.status == 4003) {
      sessionStorage.setItem('login', 'off')
      // 跳转主页
      router.push({ path: '/login', params: { id: '1' } })
      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  (err) => {
    console.log(err)
    return Promise.reject(err)
  }
)

export default service
