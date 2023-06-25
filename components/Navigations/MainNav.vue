<template>
  <nav
    class="container-fluid position-sticky sticky-top py-2 bg-white main-nav"
    :class="isDrop && 'box-shadow'"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div
        class="logo-container d-flex justify-content-center align-items-center rounded-circle"
      >
        <img src="../../assets/imgs/6628329.jpg" class="logo rounded-circle" />
      </div>

      <div>
        <img src="../../assets/imgs/mosque.png" class="logo" />
      </div>
    </div>
  </nav>
</template>

<script setup>
const mainColor = ref(false);

const isDrop = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (scrollY > 0) {
      isDrop.value = true;
    } else {
      isDrop.value = false;
    }
  });
});
</script>

<style scoped>
.main-nav {
  z-index: 4;
}
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
.logo-container {
  width: 50px;
  height: 50px;
  background-color: #01ac68;
}
.logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
</style>
