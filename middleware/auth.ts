export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie('access_token');

  const user: User = await $fetch(`/api/users/me?token=${token.value}`);
  if (user.email) {
    return true;
  }
  return false;
});
