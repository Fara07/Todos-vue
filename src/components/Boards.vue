<script setup>
import { ref } from "vue";
import {
  FolderOpenOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import axios from "axios";

import { reactive } from "vue";
const formState = reactive({
  title: "",
  remember: true,
});

const selectedKeys = ref(["3"]);
const collapsed = ref(false);

const boardData = ref(null);

let fetchBoardData = async () => {
  try {
    const response = await axios.get("http://localhost:3004/boards");
    boardData.value = response.data;
  } catch (error) {
    alert(error);
  }
};

const onFinish = (values) => {
  axios.post("http://localhost:3004/boards", {
    title: values.title,
  });
  formState.title = "";
  fetchBoardData();
};

fetchBoardData();
</script>

<template>
  <a-layout style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        v-for="(item, index) in boardData"
        :key="index"
      >
        <a-menu-item :key="index">
          <FolderOpenOutlined />
          <span
            ><router-link :to="`/${item.id}`" :style="{ margin: '0 10px' }">{{
              item.title
            }}</router-link></span
          >
        </a-menu-item>
      </a-menu>
      <a-form
        :model="formState"
        @finish="onFinish"
        style="margin: 10px"
        v-if="collapsed === false"
      >
        <a-form-item
          name="title"
          :rules="[{ required: true, message: 'Text not found!' }]"
          has-feedback
        >
          <a-input v-model:value="formState.title" />
        </a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%"
          >Submit</a-button
        >
      </a-form>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
          style="padding: 10px; margin-inline-start: 20px; font-size: 20px"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
          style="padding: 10px; margin-inline-start: 20px; font-size: 20px"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
