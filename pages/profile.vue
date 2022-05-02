<script lang="ts" setup>
// definePageMeta({
//  middleware: 'auth',
// });
// I like use middleware but they are fucked up, full of errors that i dont understand how to work with them

const router = useRouter();
let pending = true;
let me = ref({} as UserLogin);

onBeforeMount(async () => {
  me.value = await $fetch('/api/users/me');

  pending = false;
  if (!me.value.email) {
    router.push('/login');
  }
});
</script>

<template>
  <div v-if="!pending">
    <h1>{{ me.email }}</h1>
  </div>
  <div v-else-if="me.email">{{ me }}</div>
</template>
