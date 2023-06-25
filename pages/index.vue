<template>
  <div>
    <h4 class="text-secondary px-2 mb-3">قرأن</h4>

    <div class="row g-3 mx-0">
      <Surah v-for="surah in quran" :key="surah.number" :surah="surah" />
    </div>
  </div>
</template>

<script setup>
const quran = ref([]);
const { data } = await useFetch(`https://api.alquran.cloud/v1/surah`);
quran.value = data.value.data;
</script>

<style scoped></style>
