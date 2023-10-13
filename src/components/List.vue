<template>
  <div>
    <h1>Todo List</h1>
    <button class="btn btn-primary mb-3" @click="showModal = true">
      Add Task
    </button>

    <!-- Modal for adding and editing tasks -->
    <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ editMode ? "Edit Task" : "Add Task" }}
            </h5>
            <button type="button" class="close" @click="showModal = false">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              class="form-control mb-2"
              v-model="task"
              placeholder="Enter task"
            />
            <button
              class="btn btn-primary"
              @click="editMode ? editTask() : addTask()"
            >
              {{ editMode ? "Edit" : "Add" }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
        {{ todo.task }}
        <button
          class="btn btn-danger btn-sm float-right ml-2"
          @click="deleteTask(index)"
        >
          Delete
        </button>
        <button
          class="btn btn-primary btn-sm float-right"
          @click="editTaskModal(index)"
        >
          Edit
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
new Vue({
  el: "#app",
  data: {
    todos: [],
    task: "",
    editIndex: null,
    editMode: false,
    showModal: false,
  },
  methods: {
    addTask() {
      if (this.task) {
        this.todos.push({ task: this.task });
        this.task = "";
        this.showModal = false;
      }
    },
    deleteTask(index) {
      this.todos.splice(index, 1);
    },
    editTaskModal(index) {
      this.editIndex = index;
      this.task = this.todos[index].task;
      this.editMode = true;
      this.showModal = true;
    },
    editTask() {
      if (this.task) {
        this.todos[this.editIndex].task = this.task;
        this.task = "";
        this.editMode = false;
        this.showModal = false;
      }
    },
  },
});
</script>
