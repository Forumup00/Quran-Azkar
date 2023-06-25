<template>
  <div class="col-lg-3 col-md-6 col-sm-12">
    <div
      class="w-100 p-3 rounded-2 surah bg-light c-pointer"
      @click="isOpen = true"
    >
      <div class="d-flex justify-content-between align-items-center mb-3">
        <button
          class="btn border-0"
          title="fav"
          @click="$event.stopPropagation()"
        >
          <i class="fa-solid fa-heart fs-5"></i>
        </button>

        <p
          class="d-flex justify-content-center align-items-center mb-0 p-2 number rounded-circle"
        >
          {{ surah.number }}
        </p>
      </div>

      <h5 class="mb-0">{{ surah.name }}</h5>

      <h5 class="mb-0" style="direction: ltr">{{ surah.englishName }}</h5>
    </div>

    <SurahModalSurah v-if="isOpen" @close="isOpen = false" :surah="surah" />
  </div>
</template>

<script setup>
const props = defineProps({
  surah: {
    type: Object,
    required: true,
    default: null,
  },
});
const isOpen = ref(false);
</script>

<style scoped>
.surah:hover {
  background-color: #ddd !important;
}
.number {
  background-color: #01ac68;
  color: white;
  width: 30px;
  height: 30px;
}
.c-pointer {
  cursor: pointer;
}
</style>
