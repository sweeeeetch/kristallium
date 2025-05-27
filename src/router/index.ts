import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import UpgradesView from "@/views/UpgradesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        transition: "",
      },
    },
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomeView,
      meta: {
        transition: "",
      },
    },
    {
      path: "/play",
      name: "play",
      component: () => import("../views/PlaygroundView.vue"),
      meta: {
        transition: "fade",
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        transition: "fade",
      },
    },
    {
      path: "/upgrades",
      name: "upgrades",
      component: UpgradesView,
      meta: {
        transition: "fade",
      },
    },
  ],
});

export default router;
