<template>
  <div class="row mx-0 g-4">
    <div class="col-12">
      <h4 class="w-100 text-secondary mb-0">مواقيت الصلاة</h4>
    </div>

    <div class="col-12">
      <div
        class="w-100 d-flex align-items-center gap-2 mb-3 flex-md-row flex-sm-column flex-column"
      >
        <h5 class="text-secondary mb-0">تاريخ اليوم الهجري :</h5>

        <p class="mb-0 fs-5 d-flex align-items-center gap-2">
          <span class="dayName text-danger">
            {{ data.data.date.hijri.weekday.ar }}
          </span>

          <span class="day">
            : {{ +data.data.date.hijri.day.toString() + 1 }}
          </span>

          <span class="month">
            {{ data.data.date.hijri.month.ar }}
          </span>

          <span class="year"> {{ data.data.date.hijri.year }} هـ</span>
        </p>
      </div>

      <div
        class="w-100 d-flex align-items-center gap-2 flex-md-row flex-sm-column flex-column"
      >
        <h5 class="text-secondary mb-0">تاريخ اليوم الميلادي :</h5>

        <p class="mb-0 fs-5 d-flex align-items-center gap-2">
          <span class="dayName text-danger">
            {{ data.data.date.hijri.weekday.ar }}
          </span>

          <span class="day"> : {{ data.data.date.gregorian.date }} مـ </span>
        </p>
      </div>
    </div>

    <div class="col-12">
      <div class="w-100 text-center">
        <p class="mb-0 fs-3 fw-bold">الساعة الأن :</p>

        <p class="mb-0 fs-3 border border rounded-3">
          <span>
            {{ secsNow }}
          </span>
          <span> : {{ minsNow }} </span>
          <span> : {{ hoursNow > 12 ? hoursNow - 12 : hoursNow }} </span>
          <span> : {{ hoursNow > 12 ? "مساءاً" : "صباحاً" }} </span>
        </p>
      </div>
    </div>

    <SalahTimeFard v-for="fard in timeArr" :key="fard.name" :fard="fard" />
  </div>
</template>

<script setup>
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

const { data, pending } = await useFetch(
  `https://api.aladhan.com/v1/timingsByCity/${day}-${
    month.toString().length === 1 ? `0${month}` : month
  }-${year}?city=cairo&country=egypt&method=5`
);

const timing = ref(data.value.data.timings);

const timeArr = ref([]);

const timeFunc = () => {
  for (let time in timing.value) {
    let obj = {
      name: time,
      time: timing.value[time],
    };
    timeArr.value.push(obj);
  }
};
timeFunc();

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

async function showPosition(position) {
  // console.log("Latitude: " + position.coords.latitude);
  // console.log("Longitude: " + position.coords.longitude);
  const { data } = await useFetch(
    `https://dev.virtualearth.net/REST/v1/Locations/${position.coords.latitude},${position.coords.longitude}?o=json&key=AiFdCItK77X69sIoxqOAq7ZS4hEMp6xlV8EkZM_N0xr-AFLEvyiHKL382FqTUto6`
  );
  console.log(toRaw(data.value.resourceSets[0].resources[0]));

  console.log(
    toRaw(data.value.resourceSets[0].resources[0].address.adminDistrict)
  );

  console.log(
    toRaw(data.value.resourceSets[0].resources[0].address.countryRegion)
  );

  console.log(
    toRaw(data.value.resourceSets[0].resources[0].address.formattedAddress)
  );
}

const hoursNow = ref(null);
const minsNow = ref(null);
const secsNow = ref(null);
onMounted(() => {
  setInterval(() => {
    hoursNow.value = new Date().getHours();
    minsNow.value = new Date().getMinutes();
    secsNow.value = new Date().getSeconds();
  }, 1000);
});
</script>

<style scoped></style>
