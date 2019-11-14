<template>    
    <v-app id="app">
        <div id="nav">
            <router-link to="/"><h1>What's in the motherfuckin' kitchen?</h1></router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </v-app>
</template>

<script>
export default {
    data(){
        return {

        };
    },
    created(){
        this.$store.dispatch('fetchApi')
    }
}
</script>

<style lang="less">
    @import "./css/main.less";
</style>