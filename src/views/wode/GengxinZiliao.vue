<template>
  <div>
    <div>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="userInfo.email"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="userInfo.phone"></mt-field>
    </div>
    <div id="button-container">
      <div style="padding: 10px">
        <mt-button style="width: 100%" plain type="primary" @click="save">保存</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: '',
        email: '',
        phonenumber: '',
      },
    }
  },
  mounted() {
    this.findMine()
  },
  methods: {
    findMine() {
      this.$http.get('/user/findMine').then((res) => {
        this.userInfo = res.data
      })
    },
    save() {
      this.$http.post('/user/doModify', this.userInfo).then(() => {
        this.$MessageBox.alert('修改成功').then((action) => {
          if (action == 'confirm') {
            this.findMine()
          }
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#button-container {
  display: flex;
  flex-direction: column;
}
</style>
