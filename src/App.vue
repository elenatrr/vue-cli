<template>
  <div id="app">
    <ninja-header :title="title" @changeTitle="updateTitle($event)"></ninja-header>
    <ninja-main :ninjas="ninjas"></ninja-main>
    <hr>
    <ninja-main :ninjas="ninjas"></ninja-main>
    <ninja-footer :title="title"></ninja-footer>
  </div>
</template>

<script>
import NinjaHeader from './components/NinjaHeader.vue'
import NinjaMain from './components/NinjaMain.vue'
import NinjaFooter from './components/NinjaFooter.vue'

export default {
  name: 'App',
  components: {
    'ninja-header': NinjaHeader,
    'ninja-main': NinjaMain,
    'ninja-footer': NinjaFooter
  },
  data() {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: 'Vue Ninjas'
    }
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}
</style>
