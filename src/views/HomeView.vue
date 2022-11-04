<template>
  <div class="home">
    <HeaderView msg="내 운명의 고양이 찾기" />
    <ContentView />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderView from "@/components/HeaderView.vue";
import ContentView from "@/components/ContentView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
    ContentView,
  },
};
</script>
