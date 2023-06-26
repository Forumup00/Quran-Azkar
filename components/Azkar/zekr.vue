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

        <audio id="myAudio" controls class="bg-secondary p-1 rounded-pill">
          <source :src="zekr.AUDIO" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  zekr: {
    type: Object,
    required: true,
    default: null,
  },
});
const counter = ref(props.zekr.REPEAT);
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  audio {
    width: 90%;
  }
}
</style>
