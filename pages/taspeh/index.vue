<template>
  <div class="row mx-0 g-3">
    <TaspehZekr v-for="zekr in imgArr" :key="zekr" :zekr="zekr" />
  </div>
</template>

<script setup>
const imgArr = ref([
  "sophanAllah.png",
  "Tulisan-Arab-Alhamdulillah-2.png",
  "shadada.jpg",
  "Takbir.png",
  "ast8far.jpg",
  "strength.png",
  "forgiveness.jpg",
  "profet.png",
  "sophan.jpg",
  "allast8far.jpg",
  "ما-صحة-حديث-الله-اكبر-كبيرا-والحمد-لله-كثيرا-فضل-وحكم-قولها.png",
  "tumblr_o94uloKFon1smv61lo1_1280.gif",
  "shof_00781fb63832635.png",
  "7035ad0ef4f27a329fc41ebf8b490819.jpg",
  "tumblr_oqfc3sCMk91riqb5qo1_1280.jpg",
]);
</script>

<style scoped></style>
