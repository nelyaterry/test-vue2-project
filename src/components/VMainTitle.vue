<template>
  <h1 class="main-title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "VMainTitle",
}
</script>

<style lang="scss" scoped>
  .main-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.219;
  }
</style>