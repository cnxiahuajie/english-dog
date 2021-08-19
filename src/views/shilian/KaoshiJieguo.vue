<template>
  <div id="content-container">
    <div class="content">
      <label class="score">
        {{ score.score }}
      </label>
      <span class="tips-buhege" v-if="score.score <= 50"> 真菜 </span>
      <span class="tips-hege" v-else-if="score.score <= 70"> 合格 </span>
      <span class="tips-hege" v-else-if="score.score <= 90"> 优秀 </span>
      <span class="tips-hege" v-else> 牛逼 </span>
    </div>
    <div class="button-container">
      <div>
        <mt-button style="width: 100%" plain type="danger" @click="goCuotiLiebiao">查看错题集</mt-button>
      </div>
      <div>
        <mt-button style="width: 100%" plain type="primary" @click="backToIndex">返回首页</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: {},
    }
  },
  mounted() {
    this.loadScore()
  },
  methods: {
    loadScore() {
      this.$http.get(`/score/findByBatchNumber/${this.$route.query.batchNumber}`).then((res) => {
        this.score = res.data
      })
    },
    goCuotiLiebiao() {
      // 跳转主页
      this.$router.push({ path: '/shilian/cuoti-liebiao', query: { batchNumber: this.$route.query.batchNumber } })
    },
    backToIndex() {
      // 跳转主页
      this.$router.push({ path: '/shilian/index', params: { id: '1' } })
    },
  },
}
</script>

<style lang="scss" scoped>
#content-container {
  width: calc(100vw);
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: calc(50vw);
    height: calc(50vw);
    border-radius: 50%;
    border: 4px dotted #26a2ff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .score {
      color: #26a2ff;
      font-size: 4em;
      font-weight: bold;
    }

    .tips-hege {
      padding: 2px 1em;
      background-color: #26a2ff;
      color: white;
    }

    .tips-buhege {
      padding: 2px 1em;
      background-color: red;
      color: white;
    }
  }

  .button-container {
    width: calc(50vw);

    div {
      padding: 10px 0px;
    }
  }
}
</style>
