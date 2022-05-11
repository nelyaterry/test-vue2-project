<template>
  <div class="review-heading">
    <ReviewAvatar class="review-heading__avatar"/>
    <div class="review-heading__container">
      <span class="review-heading__container--name">
        {{author}}
      </span>
      <StarRating :rating="rating"/>
    </div>
  </div>
</template>

<script>
  import StarRating from "@/components/StarRating";
  import ReviewAvatar from "@/components/reviews/reviewsItem/ReviewAvatar";
  export default {
    name: "ReviewHeading",
    components: {ReviewAvatar, StarRating},
    props: {
      author: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .review-heading {
    display: flex;
    align-items: center;

    &__avatar {
      margin-right: 20px;
    }

    &__container {
      display: flex;
      flex-direction: column;

      &--name {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.2189;
        margin-bottom: 2px;
      }
    }
  }
</style>