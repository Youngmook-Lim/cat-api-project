<template>
  <div class="content container">
    <h4 class="my-4">
      아래의 버튼을 클릭하여 당신의 운명의 고양이를 만나보세요!
    </h4>
    <!-- <router-link
      :to="{
        name: 'detail',
        params: { idx: randomNumber },
      }"
      :disabled="disabled"
      class="mb-4 btn btn-outline-dark"
      @click.native="getRandomNumber"
    >
      클릭
    </router-link> -->
    <a class="mb-4 btn btn-outline-dark" @click="getRandomNumber"
      >새로운 고양이 보기</a
    >
    <!-- <DetailView :idx="randomNumber" /> -->
    <router-view />
  </div>
</template>

<script>
// import DetailView from "@/components/DetailView.vue";
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
    // DetailView,
  },
  created() {
    this.$on("getCatDataSize", (data) => {
      console.log(data);
      return this.setRandomNumber(data);
    });
  },
  methods: {
    setRandomNumber(data) {
      console.log(data);
      this.catDataSize = data;
      if (this.disabled === true) {
        this.disabled = false;
      }
      this.getRandomNumber();
    },
    getRandomNumber() {
      console.log(this.catDataSize);
      this.randomNumber = Math.floor(Math.random() * this.catDataSize);
      console.log(this.randomNumber);
      this.$router.push({
        name: "detail",
        params: { idx: this.randomNumber },
      });
    },
  },
};
</script>

<style></style>
