<template>
  <div id="question-container">
    <mt-cell v-for="item in testResults" v-bind:key="item.id" :title="item.question.title" :label="'你的答案：' + item.answer">
      <span style="color: green">{{ item.question.answer }}</span>
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testResults: [],
    }
  },
  mounted() {
    this.$store.dispatch('changeBackAct', 'on')
    this.loadLiebiao()
  },
  destroyed() {
    this.$store.dispatch('changeBackAct', 'off')
  },
  methods: {
    loadLiebiao() {
      this.$http.get(`/testResult/findByBatchNumber/${this.$route.query.batchNumber}/F`).then((res) => {
        this.testResults = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
