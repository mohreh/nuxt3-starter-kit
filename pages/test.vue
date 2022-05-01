<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const count = ref(0);

const re = reactive({
  count,
  name: '',
});
const increment = () => count.value++;

const { x, y } = useMouse();
</script>

<template>
  <div class="flex flex-col m-6">
    <div class="flex flex-row">
      <p class="font-medium">{{ count }}</p>
      <button
        @click="increment"
        class="px-4 mx-2 border-2 border-gray-300 rounded"
      >
        <Icon icon="akar-icons:plus" />
      </button>
    </div>

    <FormKit
      type="text"
      placeholder="name"
      v-model="re.name"
      input-class="border-2 border-gray-300 rounded px-2 my-2"
    />

    {{ re }}
    <p>mouse position: {{ x }} and {{ y }}</p>
  </div>
</template>
