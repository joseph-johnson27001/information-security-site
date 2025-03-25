<template>
  <div id="app">
    <SideBar />
    <div id="main">
      <TopNav />

      <div class="content-container">
        <div class="content">
          <router-view></router-view>
        </div>
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
  width: 100%;
}

#main {
  flex-grow: 1;
  width: 100%;
}

.content-container {
  font-family: Epilogue, "TT Norms Pro", sans-serif;
  width: 100%;
  height: 100%;
  color: rgb(25, 25, 25);
  padding: 15px;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: whitesmoke;
}

.content {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}

.heading {
  font-family: "Assistant";
  color: rgb(255, 87, 34);
  font-size: 30px;
  font-weight: 700px;
}

p {
  font-size: 16px;
  color: rgb(85, 85, 85);
}
</style>
