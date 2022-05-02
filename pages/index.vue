<script lang="ts" setup>
const { error, data: allUsers, refresh } = await useFetch('/api/users');

setTimeout(refresh, 1000);
</script>

<template>
  <div class="flex flex-col m-6 items-center">
    <p v-if="error">{{ error }}</p>
    <div v-else>{{ allUsers }}</div>
  </div>
</template>

<style lang="postcss" scoped>
li {
  @apply mx-2 px-2 text-blue-700;
}
</style>
