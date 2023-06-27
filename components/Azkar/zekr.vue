<template>
  <div class="col-12">
    <div class="w-100 bg-white rounded-3 p-3">
      <h5>
        {{ zekr.ARABIC_TEXT }}
      </h5>

      <div class="text-start">
        <button
          class="btn btn-success px-4 py-0 mt-1"
          @click="counter !== 0 && counter--"
        >
          {{ counter }}
        </button>
      </div>

      <div
        class="d-flex align-items-center gap-2 flex-md-row flex-sm-column flex-column"
      >
        <p class="mb-0 fs-5 fw-bold">أستمع</p>

        <audio :id="`player${zekr.ID}`" controls>
          <source :src="audio" type="audio/mp3" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup>
import Plyr from "plyr";

const props = defineProps({
  zekr: {
    type: Object,
    required: true,
    default: null,
  },
});
const counter = ref(props.zekr.REPEAT);
const audioZekr = ref(props.zekr.AUDIO);

const audio = computed(() => {
  return audioZekr.value.slice(0, 4) == "http"
    ? `https${audioZekr.value.slice(4)}`
    : `${audioZekr.value}`;
});

onMounted(() => {
  const player = new Plyr(`#player${props.zekr.ID}`);
});
</script>

<style scoped>
@media only screen and (max-width: 768px) {
}
</style>
