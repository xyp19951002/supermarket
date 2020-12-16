import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "/class",
        component: () => import("../views/class.vue")
      },
      {
        path: "/cart",
        component: () => import("../views/cart.vue"),
        meta: { requireLog: true }
      },
      {
        path: "/mine",
        component: () => import("../views/mine.vue"),
        meta: { requireLog: true }
      }
    ]
  },
  {
    path: "/detail/:id",
    props: true,
    component: () => import("../views/detail.vue")
  },
  {
    path: "/login",
    component: () => import("../views/login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 身份验证，判断是否需要登陆，是否登陆成功
router.beforeEach((to, from, next) => {
  if (to.meta.requireLog) {
    if (sessionStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
