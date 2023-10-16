<script setup>
import {ref} from "vue";

let openDraw = ref(false);

</script>

<template>
  <div>
    <button style="cursor: pointer" @click="() => openDraw(true)">Open</button>
  </div>

  <div style="background: aqua">
    salom
  </div>
</template>

<style scoped></style>