<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/sss">数据输出页</RouterLink>
      </nav>

  <RouterView />
</template>


