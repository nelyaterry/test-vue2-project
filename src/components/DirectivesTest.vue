<template>
<div v-if="isVisible">
  <h2>DirectivesTest</h2>
  <ul>
    <template v-for="number in numbers">
      <li v-if="number%2===1 " :key="number">
        Number {{ number }}
      </li>
    </template>
  </ul>
</div>
</template>

<script>
export default {
  name: "DirectivesTest",
  data () {
    return {
      isVisible: true,
      numbers: [1,2,3,4,5,6,7]
    }
  }
}
</script>

<style scoped>

</style>