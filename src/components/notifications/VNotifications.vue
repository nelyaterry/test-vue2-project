<template>
  <notifications/>
</template>

<script>
export default {
  name: "VNotifications"
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
  ::v-deep .vue-notification {
    padding: 10px;
    margin: 20px;
    color: #ffffff;
    background: #44A4FC;
    border-left: 5px solid #187FE7;
    font-family: inherit;

  .notification-title {
    font-size: 16px;
    line-height: 1.3;
  }

  .notification-content {
    font-size: 14px;
    margin-top: 5px;
  }

  &.warn {
     background: #ffb648;
     border-left-color: #f48a06;
   }

  &.error {
     background: $main-orange-color;
     border-left-color: #B82E24;
   }

  &.success {
     background: #68CD86;
     border-left-color: #42A85F;
   }
  }
</style>