<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
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