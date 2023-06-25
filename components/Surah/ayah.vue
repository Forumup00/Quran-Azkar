<template>
  <span
    @click="tafsirIsShown = true"
    class="focus fs-4"
    v-if="surah.name === 'سُورَةُ ٱلْفَاتِحَةِ'"
    >{{ ayah.text }}</span
  >

  <span v-else class="focus fs-4" @click="tafsirIsShown = true">
    {{ index === 0 ? ayah.text.slice(39) : ayah.text }}
  </span>

  <span class="fs-5"> (({{ ayah.numberInSurah }})) </span>

  <transition name="translate">
    <SurahTafsir
      v-if="tafsirIsShown"
      @close="tafsirIsShown = false"
      :surah="surah"
      :ayah="ayah"
    />
  </transition>
</template>

<script setup>
const props = defineProps({
  ayah: {
    type: Object,
    required: true,
    default: null,
  },
  index: {
    type: Number,
    required: true,
    default: null,
  },
  surah: {
    type: Object,
    required: true,
    default: null,
  },
});

const tafsirIsShown = ref(false);
</script>

<style scoped>
.focus:hover {
  background-color: #a1c2f1d5;
  cursor: pointer;
}

.translate-enter-from {
  transform: translateY(250px);
}
.translate-enter-active {
  transition: all 0.3s ease-in-out;
}

.translate-leave-to {
  transform: translateY(250px);
}
.translate-leave-active {
  transition: all 0.3s ease;
}
</style>
