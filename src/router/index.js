import { createRouter, createWebHistory } from "vue-router";
import Boards from "../components/Boards.vue";
import ListsAdd from "../components/ListsAdd.vue";

let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      component: Boards,
      children: [
        {
          path: "/:id",
          component: ListsAdd,
        },
      ],
    },
  ],
});

export default router;
