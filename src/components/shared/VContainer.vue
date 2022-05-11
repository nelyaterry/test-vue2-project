<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VContainer",

}
</script>

<style scoped>
  .container {
    max-width: 1110px;
    margin: 0 auto;
    flex-grow: 1;
  }
</style>