export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie('access_token');

  if (token) {
    to.params = {
      token: token.value,
    };
  }

  return true;
});
