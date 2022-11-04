<template>
  <div class="header p-2 pt-4">
    <h1 @click="moveToHome">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  props: {
    msg: String,
  },
  methods: {
    moveToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.header {
  color: white;
  background-color: #1d1e2c;
}

h1 {
  cursor: pointer;
}
</style>
