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
  font-family: "Exo 2", sans-serif;
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
  font-family: "Exo 2", sans-serif;
  font-size: 30px;
  font-weight: 700px;
  margin: 20px 2px;
}

h2 {
  font-family: "Exo 2", sans-serif;
  color: #333;
  font-size: 22px;
  font-weight: 400;
}

h3 {
  font-family: "Exo 2", sans-serif;
  font-size: 18px;
  margin: 5px 0;
  font-weight: 600;
  margin: 2px 0;
}

p,
ul {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin: 4px 0;
}

li {
  list-style: none;
  margin-left: -40px;
}

.card-container {
  display: grid;
  gap: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.intro-card-container {
  margin-bottom: 10px;
}

.card {
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  flex: 1;
  min-width: 280px;
}

.icon-container {
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 10px;
}

.icon-container i {
  font-size: 28px;
}
</style>
