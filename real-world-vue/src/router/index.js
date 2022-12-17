import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import EventLayout from "../views/event/Layout.vue";
import NotFound from "../views/NotFoundView.vue";
import NetworkError from "../views/NetworkError.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: "/event/:id",
      name: "EventLayout",
      component: EventLayout,
      props: true,
      children: [
        {
          path: "",
          name: "EventDetails",
          component: EventDetails,
        },
        {
          path: "register",
          name: "EventRegister",
          component: EventRegister,
        },
        {
          path: "edit",
          name: "EventEdit",
          component: EventEdit,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/404/:resource",
      name: "EventNotFound",
      component: NotFound,
      props: true
    },
    {
      path: "/network-error",
      name: "NetworkError",
      component: NetworkError
    },
    {
      path: "/about-us",
      name: "AboutView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/about",
      redirect: { name: "AboutView" }
    }
  ],
});

export default router;
