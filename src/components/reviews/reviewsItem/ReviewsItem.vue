<template>
  <section class="reviews-item">
    <ReviewHeading
        :rating="review.rating"
        :author="review.author"
        class="reviews-item__heading"
    />
    <p class="reviews-item__content">
      {{review.content}}
    </p>
  </section>
</template>

<script>
  import ReviewHeading from "@/components/reviews/reviewsItem/ReviewHeading";
  export default {
    name: "ReviewsItem",
    components: {ReviewHeading},
    props: {
      review: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reviews-item {
    border: 1px solid white;
    padding: 20px;
    margin-bottom: 5px;


    &__heading {
      margin-bottom: 20px;
    }

    &__content {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.2188;
    }
  }
</style>