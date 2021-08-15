<template>
  <div>
    <div>
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron" label="错误" value="说明文字"></mt-cell>
          <mt-cell title="Alden" label="犹豫不决" value="说明文字"></mt-cell>
          <mt-cell title="Austin" label="犹豫不决" value="说明文字"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin" label="犹豫不决" value="说明文字"></mt-cell>
          <mt-cell title="Braden" label="犹豫不决" value="说明文字"></mt-cell>
        </mt-index-section>
        <mt-index-section index="Z">
          <mt-cell title="Zack" label="犹豫不决" value="说明文字"></mt-cell>
          <mt-cell title="Zane" label="犹豫不决" value="说明文字"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
export default {
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
