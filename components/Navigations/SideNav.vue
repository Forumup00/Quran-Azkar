<template>
  <div class="side-nav border-start border-dark position-fixed end-0">
    <ul class="list-unstyled p-0">
      <li class="mb-3">
        <NuxtLink
          to="/"
          class="text-decoration-none d-flex align-items-center gap-2 page"
        >
          <img src="@/assets/imgs/quran.png" alt="quran" class="w-photo" />

          <span class="fs-5 main-color">قرأن</span>
        </NuxtLink>
      </li>

      <li class="mb-3">
        <NuxtLink
          to="/hadith"
          class="text-decoration-none d-flex align-items-center gap-2 page"
        >
          <img src="@/assets/imgs/mohamed.png" alt="quran" class="w-photo" />

          <span class="fs-5 main-color">أحاديث</span>
        </NuxtLink>
      </li>

      <li class="mb-3">
        <NuxtLink
          to="/taspeh"
          class="text-decoration-none d-flex align-items-center gap-2 page"
        >
          <img src="@/assets/imgs/sep7a.jpg" alt="quran" class="w-photo" />

          <span class="fs-5 main-color">السبحة</span>
        </NuxtLink>
      </li>

      <li class="mb-3">
        <NuxtLink
          to="/time"
          class="text-decoration-none d-flex align-items-center gap-2 page"
        >
          <img src="@/assets/imgs/clock.png" alt="quran" class="w-photo" />

          <span class="fs-5 main-color">مواقيت الصلاة</span>
        </NuxtLink>
      </li>

      <li class="mb-3">
        <NuxtLink
          to="#"
          class="text-decoration-none d-flex align-items-center gap-2 page"
        >
          <img src="@/assets/imgs/doaa.jpg" alt="quran" class="w-photo" />

          <span class="fs-5 main-color">أدعية</span>
        </NuxtLink>
      </li>

      <li class="mb-3">
        <NuxtLink
          to="#"
          class="text-decoration-none d-flex align-items-center gap-2 page"
        >
          <img src="@/assets/imgs/morning.jpg" alt="quran" class="w-photo" />

          <span class="fs-5 main-color">أذكار الصباح</span>
        </NuxtLink>
      </li>

      <li class="mb-3">
        <NuxtLink
          to="#"
          class="text-decoration-none d-flex align-items-center gap-2 page"
        >
          <img src="@/assets/imgs/night.jpg" alt="quran" class="w-photo" />

          <span class="fs-5 main-color">أذكار المساء</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.side-nav {
  width: 250px;
  height: 92vh;
  background-color: #eee;
  padding: 20px;
}
.main-color {
  color: #01ac68;
}
.w-photo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.page {
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
}
.page:hover {
  background-color: #ddd;
}

@media only screen and (max-width: 500px) {
  .side-nav {
    display: none;
  }
}
</style>
