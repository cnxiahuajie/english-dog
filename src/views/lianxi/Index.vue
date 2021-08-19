<template>
  <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    <li v-for="item in list" v-bind:key="item.id">
      <p>{{ item.title }}</p>
      <p>{{ item.answer }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      doTitle: '练习',
      list: [],
      loading: false,
      page: {
        content: null,
        empty: false,
        first: true,
        last: false,
        number: -1,
        numberOfElements: 10,
        totalElements: 0,
        totalPages: 0,
      },
    }
  },
  mounted() {
    let that = this
    this.timer = setInterval(function () {
      that.sendLaern()
    }, 60000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    sendLaern() {
      this.$http.post('/career/doUpdateLearnDuration')
    },
    loadMore() {
      if (this.page.last == false && this.loading == false) {
        this.loading = true

        this.$http.get(`/question/findByPage/${this.page.number + 1}/${this.page.numberOfElements}`).then((res) => {
          if (res.status == 200) {
            this.page = res.data

            this.page.content.forEach((element) => {
              this.list.push(element)
            })

            this.loading = false
          }
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  li {
    width: 100%;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;

    p {
      width: 100%;
    }

    :first-child {
      font-weight: bold;
      padding: 5px;
    }

    :last-child {
      letter-spacing: 0.1em;
      padding: 5px;
    }
  }
}
</style>
