import Vue from 'vue'
import VueRouter from 'vue-router'
import Home  from './src/pages/Home.vue'
import About  from './src/pages/About.vue'
import single from './src/pages/Single.vue'


Vue.use(VueRouter)


const routes = [{
    path:'/',
    component:Home,
},{
    path: '/about',
    component: About
},{
    path:'/single/:id',
    component:single,
},
]


const router = new VueRouter({
    mode:'history',
    routes
});


export default router