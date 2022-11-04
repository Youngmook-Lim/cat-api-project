import Vue from "vue";
import VueRouter from "vue-router";
import ContentView from "../components/ContentView.vue";
import DetailView from "@/components/DetailView.vue";
import PhotosView from "@/components/PhotosView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "contentView",
    component: ContentView,
    children: [
      {
        name: "detail",
        path: "detail/:idx",
        component: DetailView,
        props: true,
      },
      {
        name: "photos",
        path: "photos/:breed",
        component: PhotosView,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
