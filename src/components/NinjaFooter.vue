<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      copyright: 'Copyright 2023 Vue Ninjas'
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #222;
  padding: 6px;
}
p {
  color: aquamarine;
  text-align: center;
}
</style>
