<template>
  <div>
    <mt-cell style="font-weight: bold" :title="myInfo.username" to="/wode/gengxin-ziliao" is-link>
      <span style="font-weight: 100; font-size: 14px">更新资料</span>
    </mt-cell>
    <div style="margin-top: 10px">
      <h1 style="font-size: 16px; margin-left: 10px; margin-bottom: 10px; font-weight: 500">我的生涯</h1>
      <mt-cell title="总练习时长">
        <span>{{ myInfo.careerInfo.learnDuration }}</span
        >&nbsp;小时
      </mt-cell>
      <mt-cell title="总试炼次数">
        <span>{{ myInfo.careerInfo.testCount }}</span
        >&nbsp;次
      </mt-cell>
      <mt-cell title="及格率">
        <span>{{ myInfo.careerInfo.passRate }}</span
        >%
      </mt-cell>
    </div>
    <div style="margin-top: 10px">
      <mt-cell title="关于" to="/wode/guanyu" is-link @click="toGuanyu"> </mt-cell>
    </div>
    <div style="padding: 10px">
      <mt-button style="width: 100%" plain type="danger" @click="logout">退出登陆</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo: require('@/assets/img/yingyulogo.png'),
      myInfo: {
        username: '',
        careerInfo: {
          learnDuration: 0,
          testCount: 0,
          passRate: 0,
        },
      },
    }
  },
  mounted() {
    this.getMine()
    this.getMyCareer()
  },
  methods: {
    getMine() {
      this.$http.get('/user/findMine').then((res) => {
        this.myInfo.username = res.data.username
      })
    },
    getMyCareer() {
      this.$http.get('/career/findMine').then((res) => {
        this.myInfo.careerInfo = res.data
      })
    },
    logout() {
      this.$http.get('/logout').then(() => {
        sessionStorage.setItem('isLogin', false)
      })
    },
    toGuanyu() {
      // 跳转主页
      this.$router.push({ path: '/wode/guanyu', params: { id: '1' } })
    },
  },
}
</script>

<style lang="scss" scoped></style>
