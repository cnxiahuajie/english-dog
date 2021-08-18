<template>
  <div>
    <mt-radio :title="currentQuestionIndex + 1 + '. ' + currentQuestion.title" v-model="currentAnswer" :options="currentQuestion.options" @change="doAnswer">
    </mt-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      isLastQuestion: false,
      currentQuestionIndex: 0,
      currentQuestion: {
        options: [],
      },
      currentAnswer: '',
    }
  },
  mounted() {
    this.loadQuestions()
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
      this.nextQuestion()
    },
    loadQuestion(index) {
      this.currentQuestion = this.questions[index]
      this.currentQuestion.options = [this.currentQuestion.optionA, this.currentQuestion.optionB, this.currentQuestion.optionC, this.currentQuestion.optionD]
    },
    loadQuestions() {
      this.$http.get('/question/find50Questions/O').then((res) => {
        res.data.forEach((item) => {
          this.questions.push(item)
        })
        this.loadQuestion(this.currentQuestionIndex)
      })
    },
    submit() {
      this.$Indicator.open('评分中，请稍后......')
      let answers = JSON.parse(sessionStorage.getItem('answers'))
      this.$http.post('/question/doQuestions', answers).then((res) => {
        this.$Indicator.close()
        this.$router.push({ path: '/shilian/jieguo', query: { batchNumber: res.data } })
      })
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1
        this.isLastQuestion = false
        this.loadQuestion(this.currentQuestionIndex)
      } else {
        this.isLastQuestion = true
        this.submit()
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
