<script lang="ts" setup>
const { error, data: allUsers, refresh } = await useFetch('/api/users');

const loginBody = reactive({
  email: '',
  name: '',
});
const loginError = ref('');

const submit = async () => {
  const res = await useFetch('/api/users', {
    method: 'POST',
    body: loginBody,
  });

  if (res.error.value) {
    loginError.value = res.error.value;
  }
  refresh();
};
</script>

<template>
  <div class="flex flex-col m-6 items-center">
    <div class="flex flex-col">
      <FormKit type="text" v-model="loginBody.email" placeholder="email" />
      <FormKit type="text" v-model="loginBody.name" placeholder="name" />
      <button @click="submit">submit</button>
      <p v-if="error">{{ error }}</p>
    </div>

    <p v-if="error">{{ error }}</p>
    <div v-else>{{ allUsers }}</div>
  </div>
</template>

<style lang="postcss" scoped>
li {
  @apply mx-2 px-2 text-blue-700;
}
</style>
