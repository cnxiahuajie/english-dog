<template>
  <div>
    <mt-cell style="font-weight: bold" title="排行榜">
      <span>积分</span>
    </mt-cell>

    <mt-cell v-for="(item, index) in list" v-bind:key="item.id" :title="item.userName">
      <span>{{ item.score }}</span>
      <img v-if="index == 0" slot="icon" :src="jinpaiImgUrl" width="24" height="24" />
      <img v-else-if="index == 1" slot="icon" :src="yinpaiImgUrl" width="24" height="24" />
      <img v-else-if="index == 2" slot="icon" :src="tongpaiImgUrl" width="24" height="24" />
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'mingci',
      jinpaiImgUrl: require('@/assets/img/paihangbang/jinpai.png'),
      yinpaiImgUrl: require('@/assets/img/paihangbang/yinpai.png'),
      tongpaiImgUrl: require('@/assets/img/paihangbang/tongpai.png'),
      list: [],
    }
  },
  mounted() {
    this.loadRankingByType()
  },
  methods: {
    loadRankingByType() {
      this.$http.get('/jifen/findAllBySort/desc').then((res) => {
        this.list = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
