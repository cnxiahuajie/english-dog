import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import http from '@/api/config'

Vue.use(Mint)
Vue.prototype.$MessageBox = MessageBox
Vue.prototype.$Toast = Toast
Vue.prototype.$Indicator = Indicator
Vue.prototype.$http = http

router.beforeEach((to, from, next) => {
  let login = sessionStorage.getItem('login')
  store.commit('changeLoginMut', login)

  let urls = ['/wode/gengxin-ziliao', '/wode/guanyu']

  // 登陆跳转
  if (login == 'on' || to.path == '/login') {
    next()
  } else {
    next('/login')
  }

  // 是否显示返回按钮
  if (urls.indexOf(to.path) >= 0) {
    store.commit('changeBackMut', 'on')
  } else {
    store.commit('changeBackMut', 'off')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
