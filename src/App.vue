<script setup>
import Lists from "@/components/Lists.vue";
import ListsAdd from "@/components/ListsAdd.vue";
</script>

<template>
  <div style="display: flex; align-items: center; justify-content: center">
    <div>
      <ListsAdd/>
      <Lists/>
    </div>
  </div>

<!--  <router-view></router-view>-->
</template>

<style scoped></style>