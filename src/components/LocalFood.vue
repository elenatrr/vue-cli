<template>
  <ul>
    <li :key="dish" v-for="dish in dishes">{{ dish }}</li>
  </ul>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dishes: ['Spaghetti', 'Pizza', 'Ravioli']
    }
  }
}
</script>

<style>

</style>
