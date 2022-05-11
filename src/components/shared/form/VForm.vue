<template>
  <form v-on="$listeners" class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "VForm",
  provide() {
    return {
      form: this
    }
  },
  data(){
    return {
      inputs: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>