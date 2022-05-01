<script lang="ts" setup>
// const { error, data: allUsers, refresh } = await useFetch('/api/users');
const {
  error,
  data: allUsers,
  refresh,
} = await useAsyncData('/api/users', () => $fetch('/api/users'));

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
  <div class="flex flex-row m-6 items-center">
    <h4 class="font-bold text-lg">pages:</h4>
    <ul class="flex flex-row">
      <li>
        <nuxt-link to="/test">test</nuxt-link>
      </li>
      <li>
        <div class="flex flex-row">
          <FormKit type="text" v-model="loginBody.email" placeholder="email" />
          <FormKit type="text" v-model="loginBody.name" placeholder="name" />
          <button @click="submit">submit</button>
          <p v-if="error">{{ error }}</p>
        </div>
      </li>
    </ul>

    <p v-if="error">{{ error }}</p>
    <div v-else>{{ allUsers }}</div>
  </div>
</template>

<style lang="postcss" scoped>
li {
  @apply mx-2 px-2 text-blue-700;
}
</style>
