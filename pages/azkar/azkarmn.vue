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

          <audio id="myAudio" controls class="bg-secondary p-1 rounded-pill">
            <source
              src="http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_028.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>

    <hr />

    <AzkarZekr v-for="zekr in azkarArr" :key="zekr.ID" :zekr="zekr" />
  </div>
</template>

<script setup>
const { data } = await useFetch("http://www.hisnmuslim.com/api/ar/27.json");
const azkarArr = ref([]);
for (let zekr in data.value) {
  azkarArr.value.push(...data.value[zekr]);
}
console.log(azkarArr.value);
</script>

<style scoped></style>
