import { createStore } from "vuex";
import axios from "axios";

export let store = createStore({
  state: { data: [], isLoading: false, isError: false },
  actions: {
    async fetchData(context) {
      context.state.isLoading = true;

      try {
        let response = await axios.get("http://localhost:3004/data");
        context.state.data = response.data;
      } catch (error) {
        alert(error);
      } finally {
        context.state.isLoading = false;
      }
    },

    async NewTask(context, action) {
      await axios.post("http://localhost:3004/data", {
        name: action,
      });

      context.dispatch("fetchData");
    },

    async deleteTask(context, action) {
      await axios.delete(`http://localhost:3004/data/${action}`);

      context.dispatch("fetchData");
    },

    async editTask(context, action) {
      let value = prompt("");

      if (value === null) return;
      console.log(value);

      await axios.put(`http://localhost:3004/data/${action.id}`, {
        ...action,
        name: value,
      });

      context.dispatch("fetchData");
    },
  },
});
