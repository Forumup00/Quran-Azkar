<template>
  <div class="border-bottom border-dark py-4">
    <p class="mb-0 fs-4">[{{ hadith.number }}] {{ hadith.arab }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  hadith: {
    type: Object,
    required: true,
    default: null,
  },
});
</script>

<style scoped></style>
