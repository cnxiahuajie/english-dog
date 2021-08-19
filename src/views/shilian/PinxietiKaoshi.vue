<template>
  <div>
    <!-- <mt-radio :title="currentQuestionIndex + 1 + '. ' + currentQuestion.title" v-model="currentAnswer" :options="currentQuestion.options" @change="doAnswer">
    </mt-radio> -->
    <mt-cell :title="currentQuestionIndex + 1 + '. ' + currentQuestion.title"></mt-cell>
    <mt-field placeholder="请在此处拼写" v-model="currentAnswer"></mt-field>
    <div style="padding: 10px">
      <mt-button style="width: 100%" v-if="hasNextQuestion == '1'" type="primary" @click="nextQuestion">下一题</mt-button>
      <mt-button style="width: 100%" v-else plain type="primary" @click="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasNextQuestion: '1',
      questions: [],
      currentQuestionIndex: 0,
      currentQuestion: {
        options: [],
      },
      currentAnswer: '',
    }
  },
  watch: {
    currentQuestionIndex(newVal) {
      if (newVal == this.questions.length - 1) {
        this.hasNextQuestion = '0'
      }
    },
  },
  mounted() {
    this.loadQuestions()
  },
  beforeDestroy() {
    sessionStorage.setItem('answers', JSON.stringify([]))
  },
  methods: {
    doAnswer() {
      let answers = sessionStorage.getItem('answers')
      if (null == answers) {
        answers = []
      } else {
        answers = JSON.parse(answers)
      }
      answers.push({
        id: this.currentQuestion.id,
        answer: this.currentAnswer,
      })
      sessionStorage.setItem('answers', JSON.stringify(answers))
    },
    loadQuestion(index) {
      this.currentQuestion = this.questions[index]
      this.currentQuestion.options = [this.currentQuestion.optionA, this.currentQuestion.optionB, this.currentQuestion.optionC, this.currentQuestion.optionD]
      this.currentAnswer = this.currentQuestion.answer
    },
    loadQuestions() {
      this.$http.get('/question/find50Questions/W').then((res) => {
        res.data.forEach((item) => {
          this.questions.push(item)
        })
        this.loadQuestion(this.currentQuestionIndex)
      })
    },
    submit() {
      this.doAnswer()
      this.$Indicator.open('评分中，请稍后......')
      let answers = JSON.parse(sessionStorage.getItem('answers'))
      this.$http.post('/question/doQuestions', answers).then((res) => {
        this.$Indicator.close()
        this.$router.push({ path: '/shilian/jieguo', query: { batchNumber: res.data } })
      })
    },
    nextQuestion() {
      this.doAnswer()
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1
        this.loadQuestion(this.currentQuestionIndex)
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
