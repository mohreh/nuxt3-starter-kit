<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const { x, y } = useMouse();

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
      <Icon icon="akar-icons:plus" />
      <!-- <PlusIcon class="h-5 w-5" /> -->
    </button>
    <p>pos: {{ x }} and {{ y }}</p>
    <FormKit type="text" />
  </div>
</template>
