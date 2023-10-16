<script setup>
import ListsAdd from "./components/ListsAdd.vue";
import Lists from "./components/Lists.vue";
</script>

<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    "
  >
    <div>
      <ListsAdd />
      <Lists />
    </div>
  </div>
</template>

<style scoped></style>
