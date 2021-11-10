<template>
    <div class="news">
        <nav class="menu">
            <router-link class="underline" to="/">Home</router-link>
            <router-link class="" to="/about">About</router-link>
        </nav>
        <router-view></router-view>
    </div>
    
</template>



<script>
export default {
    name:'AppNews',
    data(){
        return{

        }
    }
}
</script>