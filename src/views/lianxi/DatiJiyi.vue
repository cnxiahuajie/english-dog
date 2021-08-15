<template>
  <div>
    <div>
      <mt-radio :title="currentQuestion.id + '. ' + currentQuestion.title" v-model="value" :options="currentQuestion.options"></mt-radio>
    </div>
    <div id="button-container">
      <mt-button type="default" @click="preQuestion">上一题</mt-button>
      <mt-button v-if="notLastQuestion" plain type="primary" @click="nextQuestion">下一题</mt-button>
      <mt-button v-else type="primary" @click="submit">提&nbsp;交</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notLastQuestion: true,
      currentQuestionIndex: 0,
      currentQuestion: {},
      questions: [
        {
          id: 1,
          title: '"父亲"的名词单数是？',
          options: ['Father', 'Sister', 'Women'],
        },
        {
          id: 2,
          title: '"母亲"的名词单数是？',
          options: ['Father', 'Mother', 'Women'],
        },
        {
          id: 3,
          title: '"叔叔"的名词单数是？',
          options: ['Father', 'Sister', 'Uncle'],
        },
      ],
    }
  },
  watch: {
    currentQuestionIndex(val) {
      this.currentQuestion = this.questions[val]
      if (val == this.questions.length - 1) {
        this.notLastQuestion = false
      } else {
        this.notLastQuestion = true
      }
    },
  },
  mounted() {
    this.currentQuestion = this.questions[this.currentQuestionIndex]
  },
  methods: {
    submit() {
      this.$MessageBox.alert('提交成功').then((action) => {
        if (action == 'confirm') {
          // 跳转主页
          this.$router.push({ path: '/lianxi/jieguo', params: { id: '1' } })
        }
      })
    },
    preQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex -= 1
      } else {
        this.$MessageBox('提示', '当前已经是第一题了！')
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#button-container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
