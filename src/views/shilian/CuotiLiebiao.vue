<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.loadLiebiao()
  },
  methods: {
    loadLiebiao() {
      alert(this.$route.query.batchNumber)
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
