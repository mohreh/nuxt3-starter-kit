<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
});
// I like use middleware but they are fucked up, full of errors that i dont understand how to work with them
const route = useRoute();
const { data: me } = await useFetch(
  `/api/users/me?token=${route.params.token}`,
);
</script>

<template>
  <div>
    {{ me }}
  </div>
</template>
