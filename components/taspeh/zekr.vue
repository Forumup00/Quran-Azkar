<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div
      class="zekr w-100 bg-white rounded-3 p-2 d-flex justify-content-center align-items-center flex-column position-relative"
    >
      <button
        class="btn border-0 position-absolute top-0 end-0"
        @click="counter = 0"
      >
        <img
          src="@/assets/imgs/reloading.png"
          alt="reloading"
          class="reload rounded-circle"
        />
      </button>

      <img :src="props.zekr" alt="allahAkbar" class="word mb-2" />

      <button
        class="btn btn-success border-0 rounded-5 d-flex justify-content-center align-items-center counter fs-4"
        @click="counter++"
      >
        {{ counter }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  zekr: {
    type: String,
    required: true,
    default: null,
  },
});
const counter = ref(0);
</script>

<style scoped>
.word {
  width: 80%;
  height: 200px;
  object-fit: contain;
}
.counter {
  width: 50%;
  height: 50px;
}
.reload {
  width: 30px;
  height: 30px;
  object-fit: cover;
}
</style>
