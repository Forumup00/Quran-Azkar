<template>
  <h4 class="text-secondary px-2 mb-0">أحاديث</h4>

  <div class="mb-3">
    <Hadith v-for="hadith in hadithArr" :key="hadith.number" :hadith="hadith" />
  </div>

  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" @click="changePage(currentPage - 1)">
        <a class="page-link" href="#">السابق</a>
      </li>

      <li
        class="page-item"
        v-for="page in paginationPage"
        :key="page"
        @click="changePage(page)"
      >
        <a
          class="page-link"
          :class="page === currentPage && 'bg-success text-white'"
          href="#"
        >
          {{ page }}
        </a>
      </li>

      <li class="page-item" @click="changePage(currentPage + 1)">
        <a class="page-link" href="#">التالى</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const { $fetchAhadith } = useNuxtApp();
const book = await $fetchAhadith();

const hadithArr = ref(book.items);
const paginationPage = ref(book.pagination.pages);

const currentPage = ref(1);

const AHadith = async (page) => {
  const { data } = await useFetch(
    `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${page}&limit=300`
  );
  hadithArr.value = data.value.items;
  paginationPage.value = data.value.pagination.pages;
  currentPage.value = page;
};

const changePage = (page) => {
  if (page < 1) {
    page = 1;
  }
  AHadith(page);
};
</script>

<style scoped></style>
