import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前菜单
    currentActiveMenu: 'wode',
    // 是否显示返回上一级
    back: 'off',
    // 是否登陆
    login: 'off',
  },
  mutations: {
    changeCurrentActiveMenuMut(state, params) {
      state.currentActiveMenu = params
    },
    changeBackMut(state, params) {
      state.back = params
    },
    changeLoginMut(state, params) {
      state.login = params
    },
  },
  actions: {
    //context是一个对象，从它里面把咱们需要的commit方法解构出来
    changeCurrentActiveMenuAct(context, params) {
      let { commit } = context
      commit('changeCurrentActiveMenuMut', params)
    },
    changeBackAct(context, params) {
      let { commit } = context
      commit('changeBackMut', params)
    },
    changeLoginAct(context, params) {
      let { commit } = context
      commit('changeLoginMut', params)
    },
  },
  modules: {},
})
