<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script lang="ts">
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copyright: 'Copyright 2023'
    }
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
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
