<template>
  <div class="header p-2">
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
  color: #2c3e50;
  background-color: #42b983;
}
</style>
