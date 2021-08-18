import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
  // 练习
  {
    path: '/lianxi/index',
    component: () => import('@/views/lianxi/Index.vue'),
  },
  // 练习-答题记忆
  {
    path: '/lianxi/dati-jiyi/:type',
    component: () => import('@/views/lianxi/DatiJiyi.vue'),
  },
  // 练习-答题拼写
  {
    path: '/lianxi/dati-pinxie/:type',
    component: () => import('@/views/lianxi/DatiPinxie.vue'),
  },
  // 练习-结果
  {
    path: '/lianxi/jieguo',
    component: () => import('@/views/lianxi/Jieguo.vue'),
  },
  // 练习-报告
  {
    path: '/lianxi/baogao',
    component: () => import('@/views/lianxi/Baogao.vue'),
  },
  // 试炼
  {
    path: '/shilian/index',
    component: () => import('@/views/shilian/Index.vue'),
  },
  // 试炼-选择题考试
  {
    path: '/shilian/xuanzeti',
    component: () => import('@/views/shilian/XuanzetiKaoshi.vue'),
  },
  // 试炼-考试结果
  {
    path: '/shilian/jieguo',
    component: () => import('@/views/shilian/KaoshiJieguo.vue'),
  },
  // 试炼-错题列表
  {
    path: '/shilian/cuoti-liebiao',
    component: () => import('@/views/shilian/CuotiLiebiao.vue'),
  },
  // 排行榜
  {
    path: '/paihangbang/index',
    component: () => import('@/views/paihangbang/Index.vue'),
  },
  // 我的
  {
    path: '/wode/index',
    component: () => import('@/views/wode/Index.vue'),
  },
  // 更新资料
  {
    path: '/wode/gengxin-ziliao',
    component: () => import('@/views/wode/GengxinZiliao'),
  },
  // 关于
  {
    path: '/wode/guanyu',
    component: () => import('@/views/wode/Guanyu.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
