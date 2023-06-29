import axios from "axios";
import { useStore } from "~/store/store";

export default defineNuxtPlugin((nuxtApp) => {
  const store = useStore();
  return {
    provide: {
      fetchAhadith: async () => {
        const { data } = await useFetch(
          `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${1}&limit=300`
        );
        return data.value;
      },
      getLatLong: async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position: any) {
          store.setLatLong(position.coords.latitude, position.coords.longitude);
        }
      },
    },
  };
});
