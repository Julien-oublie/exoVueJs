import Vue  from 'vue'
import News from './src/News.vue' 
import router from './routeur.js'



new Vue({
    router,
    render: (createElement) => {
        return createElement(News)
    },
}).$mount('#container')