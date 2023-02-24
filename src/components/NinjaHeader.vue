<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeTitle() {
      this.title = "Vue Wizards"
    }
  }
}
</script>

<style scoped>
header {
  background-color:aquamarine;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
