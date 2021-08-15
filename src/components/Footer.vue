<template>
  <div>
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="xuexi">
        <img slot="icon" :src="xuexi.current" />
        练习
      </mt-tab-item>
      <mt-tab-item id="shilianchang">
        <img slot="icon" :src="shilianchang.current" />
        试炼
      </mt-tab-item>
      <mt-tab-item id="paihangbang">
        <img slot="icon" :src="paihangbang.current" />
        排行榜
      </mt-tab-item>
      <mt-tab-item id="wode">
        <img slot="icon" :src="user.current" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$store.state.currentActiveMenu,
      user: {
        current: require('@/assets/img/index/user-active.png'),
        unselect: require('@/assets/img/index/user.png'),
        selected: require('@/assets/img/index/user-active.png'),
      },
      paihangbang: {
        current: require('@/assets/img/index/paihangbang.png'),
        unselect: require('@/assets/img/index/paihangbang.png'),
        selected: require('@/assets/img/index/paihangbang-active.png'),
      },
      shilianchang: {
        current: require('@/assets/img/index/shilianchang.png'),
        unselect: require('@/assets/img/index/shilianchang.png'),
        selected: require('@/assets/img/index/shilianchang-active.png'),
      },
      xuexi: {
        current: require('@/assets/img/index/xuexi.png'),
        unselect: require('@/assets/img/index/xuexi.png'),
        selected: require('@/assets/img/index/xuexi-active.png'),
      },
    }
  },
  watch: {
    active(val) {
      this.selectedTab(val)
    },
    '$store.state.currentActiveMenu': function (newVal) {
      alert(newVal)
      this.active = newVal
    },
  },
  methods: {
    selectedTab(val) {
      if (val == 'xuexi') {
        // 跳转主页
        this.$router.push({ path: '/lianxi/index', params: { id: '1' } })
        this.xuexi.current = this.xuexi.selected
      } else {
        this.xuexi.current = this.xuexi.unselect
      }
      if (val == 'shilianchang') {
        // 跳转主页
        this.$router.push({ path: '/shilian/index', params: { id: '1' } })
        this.shilianchang.current = this.shilianchang.selected
      } else {
        this.shilianchang.current = this.shilianchang.unselect
      }
      if (val == 'paihangbang') {
        // 跳转主页
        this.$router.push({ path: '/paihangbang/index', params: { id: '1' } })
        this.paihangbang.current = this.paihangbang.selected
      } else {
        this.paihangbang.current = this.paihangbang.unselect
      }
      if (val == 'wode') {
        // 跳转主页
        this.$router.push({ path: '/wode/index', params: { id: '1' } })
        this.user.current = this.user.selected
      } else {
        this.user.current = this.user.unselect
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
