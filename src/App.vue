<!-- <template>
  <div class="container">
    <Sidebar :items="sidebarItems" @item-click="onSidebarItemClick" />
    <div class="content">
      <h1>Main Content</h1>
      <p>Some main content goes here.</p>
      <p>
        {{
          selectedSidebarItem
            ? `Selected: ${selectedSidebarItem}`
            : "No item selected"
        }}
      </p>
    </div>
  </div>
</template>

<script>
import Sidebar from "../src/components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      sidebarItems: ["Item 1", "Item 2", "Item 3", "Item 4"],
      selectedSidebarItem: null,
    };
  },
  methods: {
    onSidebarItemClick(item) {
      this.selectedSidebarItem = item;
    },
  },
};
</script>

<style>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style> -->

<template>
  <div>
    <form v-on:submit.prevent="addNewTask">
      <label for="new-task"></label>
      <input v-model="newTaskText" id="new-task" placeholder="Enter task" />
      <button class="addbutton">+Add</button>
    </form>
    <TasksList v-bind:tasks="tasks" v-on:delete-task="deleteTask"></TasksList>
  </div>
</template>

<script>
import TasksList from "../src/components/TaskList.vue";

export default {
  name: "App",
  components: {
    TasksList,
  },
  data: () => ({
    newTaskText: "",
    tasks: [
      { id: 1, text: "Task 1" },
      { id: 2, text: "Task 2" },
      { id: 3, text: "Task 3" },
    ],
  }),
  methods: {
    addNewTask() {
      const { newTaskText } = this;
      if (!newTaskText) {
        return;
      }
      this.tasks.push({ id: Math.random(), text: this.newTaskText });
      this.newTaskText = null;
    },
    deleteTask(taskId) {
      const remainingTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = remainingTasks;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
}
button {
  background-color: red;
  border-radius: 10px;
  border: 10px;
}
.addbutton {
  background-color: green;
  color: white;
}
</style>
