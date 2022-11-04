<template>
  <div>
    <h2 class="mb-3">{{ catData[0].breeds[0].name }}의 사진모음</h2>
    <div class="container text-center">
      <div class="row row-cols-3">
        <div class="col" v-for="cat in catData" :key="cat.id">
          <img class="img-fluid mb-3" :src="cat.url" :alt="cat.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      API_KEY:
        "live_Sg1bFlOA8xFv2UNUnejFusKtGS0TI77zxsNMvVOthi406eOsiuNE21GUQ5yCyfAN",
      catData: [],
    };
  },
  created() {
    console.log(this.breed);
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=15&breed_ids=${this.breed}`,
      {
        headers: {
          "x-api-key": this.API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.catData = data;
      });
  },
  props: {
    breed: String,
  },
};
</script>

<style></style>
