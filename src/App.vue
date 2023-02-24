<template>
  <div>
    <h1>{{ title }}</h1>
    <ninja-name></ninja-name>
    <local-food></local-food>
  </div>
</template>

<script>
import LocalFood from './components/LocalFood.vue'

export default {
  components: {
    'local-food': LocalFood,
  },
  data() {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<style scoped>
h1 {
  color: cornflowerblue;
}
</style>
