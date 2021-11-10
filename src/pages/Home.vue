<template>
    <div class="home">
        <h1>tout les articles</h1>
    </div>
</template>

<script>
import {getArticles} from '../core/api'
export default {
    name:'home',
    data(){
        return{
            articles : []
        }
        
    },

    created(){
        this.articles = getArticles()
        console.log(this.articles)
    }
}
</script>