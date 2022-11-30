import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import NotFound from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
    },
    {
      path: "/event/:id",
      name: "EventDetails",
      component: EventDetails,
      props: true,
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/about",
      name: "AboutView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
