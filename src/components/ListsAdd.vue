<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

let store = useStore();
let addTask = ref("");
let NewTask = () => {
  store.dispatch("NewTask", addTask.value);
  addTask.value = "";
};
</script>

<template>
  <div style="display: flex; align-items: center; gap: 5px">
    <input
      type="text"
      placeholder="ADD TASKS..."
      @change="(e) => (addTask = e.target.value)"
      :value="addTask"
    />
    <button style="cursor: pointer" @click="NewTask">Save</button>
  </div>
</template>

<style scoped></style>
