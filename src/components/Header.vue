<template>
  <div>
    <mt-header :fixed="isFixed" :title="title">
      <router-link v-show="this.$store.state.back == 'on'" :to="backUrl" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '土豆炖英语',
    },
    backUrl: {
      type: String,
      default: '/index',
    },
    isFixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss"></style>
