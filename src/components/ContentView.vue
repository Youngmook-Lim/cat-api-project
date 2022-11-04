<template>
  <div class="content container">
    <h4 class="my-4">
      아래의 버튼을 클릭하여 당신의 운명의 고양이를 만나보세요!
    </h4>
    <button
      :disabled="disabled"
      class="mb-4 btn btn-outline-dark"
      @click="getRandomNumber"
    >
      클릭
    </button>
    <DetailView @getCatDataSize="setRandomNumber" :idx="randomNumber" />
    <router-view></router-view>
  </div>
</template>

<script>
import DetailView from "@/components/DetailView.vue";
export default {
  name: "ContentView",
  data() {
    return {
      randomNumber: -1,
      catDataSize: 0,
      disabled: true,
    };
  },
  components: {
    DetailView,
  },
  methods: {
    setRandomNumber(data) {
      console.log(data);
      this.catDataSize = data;
      if (this.disabled === true) {
        this.disabled = false;
      }
    },
    getRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * this.catDataSize);
    },
  },
};
</script>

<style></style>
