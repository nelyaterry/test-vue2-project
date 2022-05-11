<template>
  <section class="auth-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "authSection"
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
  .auth-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("../../../public/img/auth-bg.jpeg") no-repeat center;
    background-size: cover;
    min-height: calc(100vh - 90px);
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $main-wrapper-color;
      z-index: -1;
    }
  }
</style>