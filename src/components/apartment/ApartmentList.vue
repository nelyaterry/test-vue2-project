<template>
    <div>
      <slot name="title"></slot>
      <div class="apartment-list">
        <template v-for="apartment in items">
          <slot name="apartment" :apartment="apartment"></slot>
        </template>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ApartmentList",
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
}
</script>

<style lang="scss" scoped>
.apartment-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  //margin-right: -15px;
}
</style>