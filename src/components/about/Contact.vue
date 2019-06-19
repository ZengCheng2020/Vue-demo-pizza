<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">13207136428</p>
    </div>
    <router-link :to="{name:'personNameLink'}">
      <p>姓名</p>
    </router-link>
    <router-link :to="{name:'personNumberLink'}">
      <p>扣扣</p>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
