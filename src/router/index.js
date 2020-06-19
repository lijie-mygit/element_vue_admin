import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout.vue'

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

export default router