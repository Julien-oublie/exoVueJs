<template>
    <div class="singleNews">
        <h1>single page {{ $route.params.id}}</h1>
    </div>
    
</template>


<script>
import { getArticlesById } from '../core/api'
export default {
    name:'singleNews',
    created(){
        getArticlesById(this.$route.params.id)
    }
}
</script>