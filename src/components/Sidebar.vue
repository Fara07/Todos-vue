<template>
  <div class="sidebar">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="onItemClick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onItemClick(item) {
      this.$emit("item-click", item);
    },
  },
};
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #e0e0e0;
}

li:hover {
  background-color: #d0d0d0;
}
</style>
