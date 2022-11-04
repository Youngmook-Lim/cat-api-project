<template>
  <div class="container detail">
    <h2>{{ curCat.name }}</h2>
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="cat-image col">
          <img class="img-thumbnail" :src="curCat.image.url" alt="cat" />
        </div>
        <div class="cat-info col">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">묘종</th>
                <th>{{ curCat.name }}</th>
              </tr>
              <tr>
                <th scope="row">원산지</th>
                <th>{{ curCat.origin }}</th>
              </tr>
              <tr>
                <th scope="row">수명</th>
                <th>{{ curCat.life_span }}년</th>
              </tr>

              <tr>
                <th scope="row">애교</th>
                <td>{{ getStars(curCat.affection_level) }}</td>
              </tr>
              <tr>
                <th scope="row">그루밍 실력</th>
                <th>{{ getStars(curCat.grooming) }}</th>
              </tr>
              <tr>
                <th scope="row">친화력</th>
                <th>{{ getStars(curCat.stranger_friendly) }}</th>
              </tr>
              <tr>
                <th scope="row">지능</th>
                <th>{{ getStars(curCat.intelligence) }}</th>
              </tr>
              <!-- <tr>
                <th scope="row">건강이슈</th>
                <th>{{ getStars(curCat.health_issues) }}</th>
              </tr> -->
              <tr>
                <th scope="row">털갈이</th>
                <th>{{ getStars(curCat.shedding_level) }}</th>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-around">
            <router-link
              :to="{
                name: 'photos',
                params: { breed: curCat.id },
              }"
              class="btn btn-outline-info"
              >사진 더보기</router-link
            >
            <!-- <button class="btn btn-outline-warning">찜하기</button> -->
          </div>
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
      curCat: "",
    };
  },
  props: {
    idx: Number,
  },
  created() {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": this.API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.catData = data;
      })
      .then(() => this.sendCatDataSize());
  },
  methods: {
    sendCatDataSize() {
      console.log(this.catData.length);
      this.$parent.$emit("getCatDataSize", this.catData.length);
    },
    getStars(n) {
      const str = "⭐".repeat(n);
      console.log(str);
      return str;
    },
  },
  watch: {
    idx(val) {
      return (this.curCat = this.catData[val]);
    },
  },
};
</script>

<style></style>
