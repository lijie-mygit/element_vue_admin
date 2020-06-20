import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout.vue'
import * as AuthAction from '../api/token.js'
Vue.use(VueRouter)

const routes = [
    /* 首页 */
    {
        path: '/',
        name: '首页',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/home',
            component: () =>
                import ('../views/Home.vue'),
            name: '数据图表'
        }]
    },
    /* 关于 */
    {
        path: '/about',
        name: '关于我们',
        component: Layout,
        redirect: '/home',
        children: [{
            path: '/about',
            component: () =>
                import ('../views/About.vue'),
            name: "简介"
        }]
    },
    /* 富文本编辑 */
    {
        path: '/tinymce',
        name: '富文本编辑',
        component: Layout,
        redirect: '/tinymce',
        children: [{
            path: '/tinymce',
            component: () =>
                import ('../views/tinymce.vue'),
            name: "富文本"
        }]
    },
    /* 登录页面 */
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

/* 全局路由守卫 */
// router.beforeEach((to, from, next) => {
//     console.log(to)
//     if (to.fullPath == "/login") {
//         if (AuthAction.getToken()) {
//             next({
//                 path: '/Home'
//             })
//         } else {
//             next();
//         }
//     } else {
//         if (AuthAction.getToken()) { //判断本地是否存在access_token
//             next()
//         } else {
//             next({
//                 path: '/login'
//             })
//         }
//     }
//     // return next()
// })

/* 解决侧边栏路由重复点击报错 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router