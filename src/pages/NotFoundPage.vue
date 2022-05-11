<template>
  <VContainer>
    <section class="error">
      <h1 class="error__title">
        404 - Page Not Found
      </h1>
    </section>
  </VContainer>
</template>

<script>
import VContainer from "@/components/shared/VContainer";
export default {
  name: "NotFoundPage",
  components: {VContainer}
}
</script>

<style lang="scss" scoped>
  .error {
    &__title {
      font-size: 40px;
      font-weight: 700;
      text-align: center;
    }
  }
</style>