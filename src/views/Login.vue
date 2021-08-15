<template>
  <div>
    <div style="margin-top: 10px">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <div style="padding: 10px">
        <mt-button style="width: 100%" type="primary" @click="doLogin">登&nbsp;陆</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    // 登陆
    doLogin() {
      this.$http.post(`/login?username=${this.username}&password=${this.password}`).then(() => {
        this.$http.post('/user/doUpdateLoginTime').then(() => {
          sessionStorage.setItem('login', 'on')
          // 跳转主页
          this.$router.push({ path: '/wode/index', params: { id: '1' } })
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
