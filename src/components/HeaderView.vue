<template>
  <div class="header p-2 pt-4">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  props: {
    msg: String,
  },
};
</script>

<style>
.header {
  color: white;
  background-color: #1d1e2c;
}
</style>
