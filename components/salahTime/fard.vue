<template>
  <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="w-100 bg-white rounded-3 p-3 text-center time-card">
      <h3 class="mb-4">
        {{ name }}
      </h3>

      <div class="clockContainer mb-4">
        <div class="hour" :id="`hour${fard.name}`"></div>
        <div class="minute" :id="`minute${fard.name}`"></div>
        <div class="" :id="`second${fard.name}`"></div>
      </div>

      <p class="date fs-4 text-success fw-bold">
        <span>
          {{
            fard.time.slice(0, 2) > 12
              ? fard.time.slice(0, 2) - 12
              : fard.time.slice(0, 2)
          }}
        </span>
        <span>
          {{ props.fard.time.slice(2,5) }}
        </span>
        <span class="me-1">
          {{ fard.time.slice(0, 2) >= 12 ? "مساءاً" : "صباحاً" }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fard: {
    type: Object,
    required: true,
    default: null,
  },
});

const name = computed(() => {
  switch (props.fard.name) {
    case "Fajr":
      return "الفجر";
    case "Sunrise":
      return "الشروق";
    case "Dhuhr":
      return "الظهر";
    case "Asr":
      return "العصر";
    case "Sunset":
      return "الغروب";
    case "Maghrib":
      return "المغرب";
    case "Isha":
      return "العشاء";
    case "Imsak":
      return "الأمساك";
    case "Midnight":
      return "نصف الليل";
    case "Firstthird":
      return "الثلث الأول";
    case "Lastthird":
      return "الثلث الأخير";
  }
});

const hr = ref(
  props.fard.time.slice(0, 2) > 12
    ? props.fard.time.slice(0, 2) - 12
    : props.fard.time.slice(0, 2)
);
const min = ref(props.fard.time.slice(3,5));
const sec = ref(0);

const hr_rotation = ref(30 * hr.value + min.value / 2);
const min_rotation = ref(6 * min.value);
const sec_rotation = ref(6 * sec.value);

onMounted(() => {
  let hour = document.getElementById(`hour${props.fard.name}`);
  let minute = document.getElementById(`minute${props.fard.name}`);
  let second = document.getElementById(`second${props.fard.name}`);

  hour.style.transform = `rotate(${hr_rotation.value}deg)`;
  minute.style.transform = `rotate(${min_rotation.value}deg)`;
  second.style.transform = `rotate(${sec_rotation.value}deg)`;
});
</script>

<style scoped>
.time-card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition-duration: 0.3s;
}
.time-card:hover {
  transform: translateY(-8px);
}

.clockContainer {
  position: relative;
  margin: auto;
  height: 120px;
  /*to make the height and width responsive*/
  width: 120px;
  background: url(https://media.geeksforgeeks.org/wp-content/uploads/20210302161254/imgonlinecomuaCompressToSizeOmNATjUMFKw-300x300.jpg)
    no-repeat;
  /*setting our background image*/
  background-size: 100%;
}

.hour,
.minute,
.second {
  position: absolute;
  background: black;
  border-radius: 10px;
  transform-origin: bottom;
}

.hour {
  width: 1.8%;
  height: 25%;
  top: 25%;
  left: 48.85%;
  opacity: 0.8;
}

.minute {
  width: 1.6%;
  height: 30%;
  top: 19%;
  left: 48.9%;
  opacity: 0.8;
}

.second {
  width: 1%;
  height: 40%;
  top: 9%;
  left: 49.25%;
  opacity: 0.8;
}
</style>
