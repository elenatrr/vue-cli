<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <li :key="ninja" v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ron']
    }
  }
}
</script>

<style scoped>
h1 {
  color: darksalmon;
}
</style>
