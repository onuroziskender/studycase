
<script setup>

import RecursiveCategoryControl from "../components/RecursiveCategoryControl.vue";
let auth = false;

</script>


<template>
  <div class="home-page-loggedIn" v-if="auth === false">
      <RecursiveCategoryControl />
  </div>

  <div class="home-page-default" v-else>
    You are not logged in...
  </div>
</template>

<style lang="scss" scoped>
.home-page-default{
  display: flex;
  justify-content: center;
  margin: auto;
  background-color: #1c1c1c;
}
.home-page-loggedIn {
  display: flex;
  justify-content: center;
  margin: auto;
  background-color: #cccccc;
}

.category-container {
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
}
RecursiveCategoryControl {
  margin-right: 10px;
}
</style>