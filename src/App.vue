<template>
  <div id="app">
    <SideBar />
    <div id="main">
      <div class="content">
        <TopCard />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";
import TopCard from "./components/UI/TopCard.vue";

export default {
  name: "App",
  components: {
    SideBar,
    TopCard,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  background-color: #f4f2ee;
}

#main {
  flex-grow: 1;
  width: 100%;
}

.content {
  padding: 20px;
  width: 100%;
  height: 100%;
  color: rgb(25, 25, 25);
  overflow-y: scroll;
  box-sizing: border-box;
  border-radius: 5px;
}

.heading {
  font-family: "Assistant";
  font-size: 30px;
  font-weight: 700px;
  margin: 20px 0;
}

h2 {
  font-family: "Assistant";
  color: #333;
  font-size: 22px;
  font-weight: 400;
}

h3 {
  font-family: "Assistant";
  font-size: 20px;
  color: rgb(25, 25, 25);
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: rgb(85, 85, 85);
}
</style>
