<template>
  <div id="app">
    <SideBar />
    <div id="main">
      <!-- <TopNav /> -->
      <TopCard />

      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";
// import TopNav from "./components/Navigation/TopNav.vue";
import TopCard from "./components/UI/TopCard.vue";

export default {
  name: "App",
  components: {
    SideBar,
    // TopNav,
    TopCard,
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
  background-color: #f8f7fa;
}

#main {
  flex-grow: 1;
  width: 100%;

  padding: 20px;
  margin-bottom: 75px;
}

.content {
  font-family: "Inter";
  width: 100%;
  height: 100%;
  color: rgb(25, 25, 25);
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-top: 20px;
}

.heading {
  font-family: "Inter";
  color: rgb(255, 87, 34);
  font-size: 30px;
  font-weight: 700px;
}

p {
  font-size: 16px;
  color: rgb(85, 85, 85);
}
</style>
