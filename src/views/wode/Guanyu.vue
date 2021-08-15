<template>
  <div id="big-container">
    <div class="items"><img slot="icon" :src="yingyulogo" width="128" height="128" /></div>
    <div style="padding: 10px">
      <h1 style="font-weight: bold">鸣谢（排名不分先后）</h1>
    </div>
    <div class="items">
      <p>土豆</p>
      <p>英语</p>
      <p>锅</p>
      <p>铲子</p>
      <p>碗</p>
      <p>大米</p>
      <p>筷子</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yingyulogo: require('@/assets/img/yingyulogo.png'),
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
#big-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .items {
    p {
      margin-top: 10px;
    }
  }
}
</style>
