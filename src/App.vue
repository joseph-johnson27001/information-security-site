<template>
  <div id="app">
    <SideBar />
    <div id="main">
      <TopNav />
      <!-- This is where the routed components will appear -->
      <div class="content">
        <router-view></router-view>
        <!-- Router view goes here -->
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";
import TopNav from "./components/Navigation/TopNav.vue";

export default {
  name: "App",
  components: {
    SideBar,
    TopNav,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Assistant";
  scrollbar-width: none;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  display: none;
}

#app {
  display: flex;
  flex-direction: row;
  height: 100dvh;
  width: 100dvw;
}

#main {
  flex-grow: 1;
}

.content {
  color: #333;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
}
</style>
