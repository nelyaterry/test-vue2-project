<template>
  <div class="logo">
    <img src="../../../public/img/door.svg" alt="">
    <span class="logo__text">
      <span>GO</span>
      <span class="logo__text__main-color">Home</span>
    </span>
  </div>

</template>

<script>
export default {
  name: "VLogo"
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .logo {
    display: flex;

    &__text {
      margin-left: 10px;
      font-size: 28px;
      font-weight: 800;
      line-height: 1.2189;
      color: white;

      &__main-color {
        color: $main-orange-color;
      }
    }
  }
</style>