<template>
  <div id="app">
    <ninja-header></ninja-header>
    <ninja-main></ninja-main>
    <ninja-footer></ninja-footer>
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
