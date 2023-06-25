<template>
  <div class="tafsir-pop w-100 py-3 px-5 position-fixed start-0 overflow-auto">
    <div>
      <div
        class="d-flex justify-content-between align-items-center border-bottom"
      >
        <p class="mb-0 fs-4 text-white">التفسير</p>

        <button class="btn border mb-3" @click="$emit('close')">
          <i class="fa-solid fa-xmark text-white"></i>
        </button>
      </div>

      <div
        v-if="pending"
        class="d-flex justify-content-center align-items-center loading"
      >
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else class="text-white">
        <p class="border-bottom py-2 fs-5 mb-0">
          {{ ayaWanted[0]?.arabic_text }}
          (({{ ayah?.numberInSurah }}))
        </p>
        <p class="fs-5 py-2 mb-0">
          {{ ayaWanted[0]?.translation }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  surah: {
    type: Object,
    required: true,
    default: null,
  },
  ayah: {
    type: Object,
    required: true,
    default: null,
  },
});
const ayaWanted = ref("");

const arr = ref([]);

const { data, pending } = await useFetch(
  `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${props.surah.number}`
);

arr.value = data.value.result;

ayaWanted.value = arr.value.filter((ayah) => {
  return ayah.aya == props.ayah.numberInSurah;
});

const emits = defineEmits(["close"]);
</script>

<style scoped>
.tafsir-pop {
  background-color: #222;
  z-index: 100;
  height: 250px;
  bottom: 0;
}
.loading {
  height: 180px;
}
</style>
