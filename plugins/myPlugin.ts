export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      fetchAhadith: async () => {
        const { data } = await useFetch(
          `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${1}&limit=300`
        );
        return data.value;
      },
    },
  };
});
