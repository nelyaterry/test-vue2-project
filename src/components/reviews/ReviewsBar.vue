<template>
  <section class="reviews-bar">
    <div class="reviews-bar__heading">
      <h2 class="reviews-bar__heading--title">
        Суммарный рейтинг
      </h2>
      <div class="reviews-bar__heading--rating">
        <span>{{amountOfReviews}} {{normalizeText}}</span>
        <StarRating :rating="totalRating"/>
      </div>
    </div>
    <div class="reviews-bar__list">
      <ReviewsItem
          v-for="review in currentReviews"
          :key="review.id"
          :review="review"
          class="reviews-bar__list--item"
      />
    </div>
    <VButton
        class="reviews-bar__btn"
        @click="toggleReviews"
    >
      {{buttonText}}
    </VButton>
  </section>
</template>

<script>
import ReviewsItem from "@/components/reviews/reviewsItem/ReviewsItem";
import VButton from "@/components/VButton";
import StarRating from "@/components/StarRating";
export default {
  name: "ReviewsBar",
  components: {StarRating, VButton, ReviewsItem},
  props: {
    reviews: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      reviewsLimit: 2
    }
  },
  computed: {
    amountOfReviews() {
      return this.reviews.length
    },
    totalRating() {
      return this.reviews.reduce((total, review) =>{ return total + review.rating}, 0)/this.amountOfReviews
    },
    normalizeText() {
      const length = this.reviews.length
      if (length === 1) { return "отзыв" }
      else if (length > 1 && length < 5) { return "отзывa" }
      else {return "отзывов"}
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit)
    },
    buttonText() {
      return this.reviewsLimit === this.amountOfReviews ? "Свернуть" : "Читать еще...";
    },
  },
  methods: {
    toggleReviews() {
      this.reviewsLimit = this.reviewsLimit === this.amountOfReviews
          ? 2
          : this.amountOfReviews;
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
  .reviews-bar {
    background-color: $main-wrapper-color;


    &__heading {
      width: 100%;
      padding: 20px;
      background-color: $main-wrapper-color;

      &--title {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.219;
        margin-bottom: 7px;
      }

      &--rating {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

    }

    &__list {
      padding: 10px;

      &--item {
        padding: 10px 10px 10px 20px;
      }
    }

    &__btn {
      width: 100%;
      background-color: $main-wrapper-color;
     }
  }
</style>