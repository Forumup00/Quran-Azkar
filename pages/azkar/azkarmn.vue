<template>
  <div class="row mx-0 g-4">
    <div class="col-12">
      <div
        class="w-100 d-flex align-items-center justify-content-between flex-md-row flex-sm-column flex-column gap-2"
      >
        <h4 class="mb-0 text-secondary">أذكار الصباح والمساء</h4>

        <div
          class="d-flex align-items-center gap-2 flex-md-row flex-sm-column flex-column"
        >
          <p class="mb-0 fs-5 fw-bold">أستمع للأذكار</p>

          <audio id="myAudio" controls>
            <source
              src="http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_028.mp3"
              type="audio/mp3"
            />
          </audio>
        </div>
      </div>
    </div>

    <hr />

    <div
      v-if="pending"
      class="loading d-flex justify-content-center align-items-center"
    >
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <AzkarZekr v-else v-for="zekr in azkarArr" :key="zekr.ID" :zekr="zekr" />
  </div>
</template>

<script setup>
import Plyr from "plyr";

const { data, pending } = await useFetch(
  "http://www.hisnmuslim.com/api/ar/27.json"
);
const azkarArr = ref([]);
for (let zekr in data.value) {
  azkarArr.value.push(...data.value[zekr]);
}

onMounted(() => {
  const player = new Plyr(`#myAudio`);
});
</script>

<style scoped>
.loading {
  height: 73vh;
}
</style>
