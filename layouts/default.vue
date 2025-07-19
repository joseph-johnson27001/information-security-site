<template>
  <div class="layout">
    <aside class="sidebar">
      <div
        v-for="item in sidebarItems"
        :key="item.route"
        class="sidebar-item"
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
const sidebarItems = [
  { icon: "fa-home", label: "Home", route: "/" },
  { icon: "fa-book", label: "Education", route: "/education" },
  { icon: "fa-pen-nib", label: "Exam", route: "/exam" },
  { icon: "fa-cog", label: "Settings", route: "/settings" },
  { icon: "fa-info-circle", label: "About", route: "/about" },
];
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  font-family: sans-serif;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
}

.sidebar {
  width: 70px;
  background-color: #180600;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 30px;
}

.sidebar-item {
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.sidebar-item:hover {
  opacity: 0.8;
}

.label {
  margin-top: 4px;
}

.content {
  flex: 1;
  background-color: white;
  padding: 20px;
  overflow-y: auto;
}
</style>
