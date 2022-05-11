<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "authFormContainer"
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
  .auth-container {
    padding: 30px;
    max-width: 400px;
    background-color: $second-dark-color;
    width: 100%;
  }

</style>