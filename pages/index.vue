<script lang="ts" setup>
const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <div class="flex flex-row">
    <p class="font-medium text-3xl">{{ count }}</p>
    <button
      @click="increment"
      class="px-5 mx-2 rounded border-solid border-2 border-gray-500"
    >
      +
    </button>
  </div>
</template>
