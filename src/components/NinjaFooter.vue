<template>
  <footer>
    <p>{{ copyright }} {{ footerTitle }}</p>
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
      copyright: 'Copyright 2023',
      footerTitle: this.title
    }
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.footerTitle = data;
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
