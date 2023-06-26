<template>
  <NavigationsMainNav />

  <NavigationsSideNav />

  <div class="slot">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.slot {
  margin-right: 250px !important;
  background-color: #eee;
  padding: 20px;
}

@media only screen and (max-width: 768px) {
  .slot {
    margin-right: 0 !important;
  }
}
</style>
