import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const latitude = ref(null);
  const longitude = ref(null);

  const setLatLong = (lat, long) => {
    latitude.value = lat;
    longitude.value = long;
    console.log(latitude.value, longitude.value);
  };
  return {
    latitude,
    longitude,
    setLatLong,
  };
});
