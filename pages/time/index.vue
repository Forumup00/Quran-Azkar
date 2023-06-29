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
            {{ timing.data[day - 1].date.hijri.weekday.ar }}
          </span>

          <span class="day">
            : {{ +timing.data[day - 1].date.hijri.day.toString() + 1 }}
          </span>

          <span class="month">
            {{ timing.data[day - 1].date.hijri.month.ar }}
          </span>

          <span class="year">
            {{ timing.data[day - 1].date.hijri.year }} هـ
          </span>
        </p>
      </div>

      <div
        class="w-100 d-flex align-items-center gap-2 flex-md-row flex-sm-column flex-column"
      >
        <h5 class="text-secondary mb-0">تاريخ اليوم الميلادي :</h5>

        <p class="mb-0 fs-5 d-flex align-items-center gap-2">
          <span class="dayName text-danger">
            {{ timing.data[day - 1].date.hijri.weekday.ar }}
          </span>

          <span class="day">
            : {{ timing.data[day - 1].date.gregorian.date }} مـ
          </span>
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

    <div class="col-12">
      <div class="w-100">
        <h5
          class="text-center mb-0 d-flex justify-content-center align-items-center text-muted gap-1 flex-md-row flex-sm-column flex-column"
        >
          <span v-if="translatedAddress.length">
            حسب التوقيت المحلى لـ {{ translatedAddress }}</span
          >
        </h5>
      </div>
    </div>

    <SalahTimeFard v-for="fard in timeArr" :key="fard.name" :fard="fard" />
  </div>
</template>

<script setup>
import axios from "axios";
import { useStore } from "~/store/store";

const store = useStore();

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

const timing = ref([]);

const timeArr = ref([]);

const country = ref("");
const district = ref("");
const district2 = ref("");
const fullAddress = ref("مدينة القاهرة ، مصر");

const translatedAddress = ref("");

const translateFullAddress = async () => {
  await axios
    .get(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${fullAddress.value}`
    )
    .then((res) => {
      translatedAddress.value = res.data[0][0][0];
    })
    .catch((error) => console.error(error));
};

if (store.latitude && store.longitude) {
  await axios
    .get(
      `https://dev.virtualearth.net/REST/v1/Locations/${store.latitude},${store.longitude}?o=json&key=AiFdCItK77X69sIoxqOAq7ZS4hEMp6xlV8EkZM_N0xr-AFLEvyiHKL382FqTUto6`
    )
    .then((res) => {
      country.value =
        res.data.resourceSets[0].resources[0].address.countryRegion;

      district.value =
        res.data.resourceSets[0].resources[0].address.adminDistrict;

      district2.value =
        res.data.resourceSets[0].resources[0].address.adminDistrict2;

      fullAddress.value =
        res.data.resourceSets[0].resources[0].address.formattedAddress;
    })
    .catch((error) => console.error(error));

  translateFullAddress();

  await axios
    .get(
      `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${store.latitude}&longitude=${store.longitude}&method=5`
    )
    .then((res) => {
      timing.value = res.data;
      console.log(timing.value.data[day - 1].date);

      for (let time in res.data.data[day - 1].timings) {
        let obj = {
          name: time,
          time: res.data.data[day - 1].timings[time],
        };
        timeArr.value.push(obj);
      }
    })
    .catch((error) => console.error(error));
} else {
  await axios
    .get(
      `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=30.033333&longitude=31.233334&method=5`
    )
    .then((res) => {
      for (let time in res.data.data[day - 1].timings) {
        let obj = {
          name: time,
          time: res.data.data[day - 1].timings[time],
        };
        timeArr.value.push(obj);
      }
    })
    .catch((error) => console.error(error));

  translateFullAddress();

  console.log("555");
}

const hoursNow = ref(null);
const minsNow = ref(null);
const secsNow = ref(null);

const getTimeNow = () => {
  hoursNow.value = new Date().getHours();
  minsNow.value = new Date().getMinutes();
  secsNow.value = new Date().getSeconds();
};
getTimeNow();

onMounted(() => {
  setInterval(() => {
    getTimeNow();
  }, 1000);
});
</script>

<style scoped></style>
