<template>
  <ul>
    <li v-for="task in tasks" v-bind:key="task.id">
      {{ task.text }}
      <button v-on:click="$emit('delete-task', task.id)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TaskList",
  props: ["tasks"],
};
</script>

<style>
ul,
li {
  text-decoration: none;
  list-style: none;
  padding: 0;
}
</style>
