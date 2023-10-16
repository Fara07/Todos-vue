import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { store } from "./store";

import Antd from "ant-design-vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd).mount("#app");
