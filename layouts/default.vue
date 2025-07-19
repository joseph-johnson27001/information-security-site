<template>
  <div class="layout">
    <aside class="sidebar">
      <img src="/dashboard-logo.png" alt="Logo" class="logo" />
      <div
        v-for="item in sidebarItems"
        :key="item.route"
        :class="['sidebar-item', { active: isActive(item.route) }]"
        @click="$router.push(item.route)"
      >
        <i :class="['fas', item.icon]"></i>
        <div class="label">{{ item.label }}</div>
      </div>
    </aside>

    <!-- Main content -->
    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (path) => route.path === path;

const sidebarItems = [
  { icon: "fa-home", label: "Home", route: "/" },
  { icon: "fa-book", label: "Education", route: "/education" },
  { icon: "fa-pen-nib", label: "Exam", route: "/exam" },
  { icon: "fa-info-circle", label: "About", route: "/about" },
  { icon: "fa-cog", label: "Settings", route: "/settings" },
];
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}

.sidebar {
  width: 70px;
  background-color: #223038;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 35px;
  font-family: "Assistant", system-ui, sans-serif;
}

.sidebar-item {
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
  color: #d3d3d2;
}

.sidebar-item i {
  font-size: 18px;
  margin-bottom: 7px;
}

.sidebar-item.active {
  color: #fff;
}

.logo {
  width: 45px;
  height: 45px;
  object-fit: contain;
  margin-bottom: -10px;
}

.label {
  margin-top: 4px;
}

.content {
  flex: 1;
  background-color: #fff;
  padding: 20px;
}
</style>
