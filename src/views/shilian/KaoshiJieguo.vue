<template>
  <div>
    <div>
      <div>
        <Header :backable="false" :title="'试炼结果'"></Header>
      </div>
    </div>
    <div>
      <mt-cell title="正确">
        <mt-spinner v-if="loadingParams.successLoading" color="green" :type="spinnerType"></mt-spinner>
        <span v-else style="color: green">17</span>
      </mt-cell>
      <mt-cell title="错误">
        <mt-spinner v-if="loadingParams.failedLoading" color="red" :type="spinnerType"></mt-spinner>
        <span v-else style="color: red">17</span>
      </mt-cell>
      <mt-cell title="犹豫不决">
        <mt-spinner v-if="loadingParams.indecisionLoading" color="#ffcc00" :type="spinnerType"></mt-spinner>
        <span v-else style="color: #ffcc00">17</span>
      </mt-cell>
      <mt-cell title="综合得分" value="30">
        <mt-spinner v-if="loadingParams.scoreLoading" color="#3366ff" :type="spinnerType"></mt-spinner>
        <span v-else style="color: #3366ff">17</span>
      </mt-cell>
    </div>
    <div id="button-container">
      <div style="padding: 10px">
        <mt-button style="width: 100%" plain type="default" @click="goCuotiLiebiao">查看错题集</mt-button>
      </div>
      <div style="padding: 10px">
        <mt-button style="width: 100%" plain type="primary" @click="backToIndex">返回首页</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: { Header },
  data() {
    return {
      spinnerType: 0,
      loadingParams: {
        successLoading: true,
        failedLoading: true,
        indecisionLoading: true,
        scoreLoading: true,
      },
    }
  },
  mounted() {},
  methods: {
    goCuotiLiebiao() {
      // 跳转主页
      this.$router.push({ path: '/cuoti-liebiao', params: { id: '1' } })
    },
    backToIndex() {
      // 跳转主页
      this.$router.push({ path: '/index', params: { id: '1' } })
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
