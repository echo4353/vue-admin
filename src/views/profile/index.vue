<template>
  <div>
    个人中心
    {{ obj.user.name }}
  </div>
</template>

<script setup>
import {} from 'vue'
const obj = {
  user: {
    name: 'hahhah',
    age: 13
  }
}
</script>

<style lang="scss" scoped></style>
