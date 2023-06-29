export default defineNuxtRouteMiddleware((to, from) => {
  const { $getLatLong } = useNuxtApp();
  $getLatLong();
});
