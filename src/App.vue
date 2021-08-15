<template>
  <div id="app">
    <Header :title="'土豆炒英语'" :isFixed="true"></Header>
    <router-view style="padding-top: 40px; padding-bottom: 55px" />
    <Footer v-show="this.$store.state.login == 'on'"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { Header, Footer },
}
</script>

<style lang="scss"></style>
