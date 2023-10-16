<script setup>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
let store = useStore();
const route = useRoute();

onMounted(() => {
  store.dispatch("fetchData", route);
});
</script>

<template>
  <div
    v-for="item in store.state.data.reverse()"
    style="display: flex; align-items: center; justify-content: space-between"
  >
    <p>{{ item.name }}</p>
    <div style="display: flex; gap: 5px">
      <button
        style="cursor: pointer; background: greenyellow"
        @click="store.dispatch('editTask', item)"
      >
        Edit
      </button>
      <button
        style="cursor: pointer; background: red"
        @click="store.dispatch('deleteTask', item.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped></style>
