<template>
  <div
    class="popup position-fixed w-100 d-flex justify-content-center align-items-center"
  >
    <div class="surah rounded-2 p-3 bg-white overflow-hidden">
      <div
        class="d-flex justify-content-between align-items-center border-bottom"
      >
        <h4 class="mb-0">{{ obj.name }}</h4>

        <button class="btn" @click="$emit('close')">
          <i class="fa-solid fa-xmark fs-4"></i>
        </button>
      </div>

      <div class="body overflow-auto">
        <p class="mb-0 border-bottom py-2 mb-2">
          {{ obj.name }} هى السورة رقم {{ obj.number }} فى القرأن الكريم و تحتوى
          على {{ obj.numberOfAyahs }} ايه و نزلت فى
          {{
            obj.revelationType == "Meccan" ? "مكة المكرمة" : "المدينة المنورة"
          }}
        </p>

        <div class="text-center">
          <h4 class="text-center">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</h4>

          <span v-for="(ayah, i) in obj.ayahs" :key="ayah.numberInSurah">
            <SurahAyah :ayah="ayah" :index="i" :surah="obj" />
          </span>
        </div>
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
});

const obj = ref(null);

const { data } = await useFetch(
  `https://api.alquran.cloud/v1/surah/${props.surah.number}`
);
obj.value = data.value.data;

const emit = defineEmits(["close"]);
</script>

<style scoped>
.popup {
  height: 100vh;
  top: 0;
  right: 0;
  background-color: #00000071;
  z-index: 5;
}
.surah {
  max-width: 50%;
  max-height: 90%;
}
.body {
  max-height: 80vh;
}
</style>
