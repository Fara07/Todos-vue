<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Lists from "../components/Lists.vue";
import { useRoute } from "vue-router";

let store = useStore();
let addTask = ref("");
const route = useRoute();

let NewTask = () => {
  store.dispatch("NewTask", addTask.value, route);
  addTask.value = "";
};
</script>

<template>
  <div
    style="
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: center;
    "
  >
    <input
      type="text"
      placeholder="ADD TASKS..."
      @change="(e) => (addTask = e.target.value)"
      :value="addTask"
    />
    <button style="cursor: pointer" @click="NewTask">Save</button>
  </div>
  <div style="margin-top: 50px">
    <Lists />
  </div>
</template>

<style scoped></style>
