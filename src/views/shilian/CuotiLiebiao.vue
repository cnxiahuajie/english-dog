<template>
  <div>
    <div>
      <Header :backable="true" :title="'错题集'"></Header>
    </div>
    <div>
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron" value="说明文字"></mt-cell>
          <mt-cell title="Alden" value="说明文字"></mt-cell>
          <mt-cell title="Austin" value="说明文字"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin" value="说明文字"></mt-cell>
          <mt-cell title="Braden" value="说明文字"></mt-cell>
        </mt-index-section>
        <mt-index-section index="Z">
          <mt-cell title="Zack" value="说明文字"></mt-cell>
          <mt-cell title="Zane" value="说明文字"></mt-cell>
        </mt-index-section>
      </mt-index-list>
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
  methods: {},
}
</script>

<style lang="scss" scoped>
#button-container {
  display: flex;
  flex-direction: column;
}
</style>
