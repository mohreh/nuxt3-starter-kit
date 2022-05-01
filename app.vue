<script lang="ts" setup>
const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>
