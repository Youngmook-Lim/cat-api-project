<template>
  <div id="app">
    <HeaderView msg="내 운명의 고양이 찾기" />
    <router-view />
  </div>
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #1d1e2c;
}

nav a.router-link-exact-active {
  color: #f7ebec;
}
</style>
