import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router";

import NProgress from 'nprogress'

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../layout/index.vue"),
    },
    {
        path: "/login",
        name: "login",
        meta: {
            title: '登录'
        },
        component: () => import("../views/login.vue"),
    },
]

//设置标题
document.title = 'admin'

const router = createRouter({
    history: createWebHistory(),
    routes
});
/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
    NProgress.start()
    document.title = to.meta.title as string
})

router.afterEach(() => {
    NProgress.done()
})

export default router