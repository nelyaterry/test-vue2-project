<template>
  <select v-on="listeners" class="base-select">
    <option
        v-for="item in formattedItems"
        :value="item.value"
        :key="item.value"
        :selected="item.selected"
    >
      {{item.label}}
    </option>
  </select>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      };
    },
    formattedItems() {
      return this.items.map(item => {
           return (typeof item !== "object" ?
               { value: item, label: item } : item)
      })
    }
  },

}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables.scss";
  .base-select {
    min-height: 40px;
    border: 2px solid $main-orange-color;
    font-size: 18px;
    outline: none;
    padding: 8px 15px;
    cursor: pointer;
    display: inline-block;
  }
</style>