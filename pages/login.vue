<script lang="ts" setup>
const loginBody = reactive({
  email: '',
  name: '',
});

const loginError = ref('');
const router = useRouter();

const submit = async () => {
  if (!loginBody.email) {
    loginError.value = 'please write your email';
  } else {
    const res = await useFetch('/api/users', {
      method: 'POST',
      body: loginBody,
    });

    if (res.error.value) {
      loginError.value = res.error.value;
    } else {
      loginError.value = '';
      router.push('/profile');
    }
  }
};
</script>

<template>
  <div class="flex flex-col m-6 container">
    <div class="flex flex-col">
      <FormKit type="text" v-model="loginBody.email" placeholder="email" />
      <FormKit type="text" v-model="loginBody.name" placeholder="name" />
      <button @click="submit">submit</button>
    </div>

    <p v-if="loginError">{{ loginError }}</p>
  </div>
</template>
