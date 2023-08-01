<script setup>
import Header from "./components/Header.vue";

</script>

<template>
  <Header></Header>
  <div class="app-body" id="app-body">
    <router-view name="MainView" :key="$route"></router-view>
  </div>
</template>

<style scoped>
.app-body{
  background-color: #242424;
}
</style>

