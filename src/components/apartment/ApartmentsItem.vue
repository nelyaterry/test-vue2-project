<template>
  <div class="apartments-item" >
      <div class="apartments-item__inner">
        <img :src="imgSrc" class="apartments-item__image" alt="">
        <div class="apartments-item__content">
          <p class="apartments-item__description">
            {{description}}
          </p>
          <div class="apartments-item__rating">
            <StarRating :rating="rating"/>
          </div>
          <div class="apartments-item__price">UAH {{price}}</div>
          <router-link
              :to="{name: 'apartment', params: { id }}"
              class="apartments-item__link">
          </router-link>
        </div>
      </div>

  </div>
</template>

<script>
import StarRating from "@/components/StarRating";
export default {
  name: "ApartmentsItem",
  components: {StarRating},
  props: {
    id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.apartments-item {
  position: relative;
  width: calc(33.33% - 30px);
  padding: 0;
  margin-bottom: 30px;
  margin-left: 30px;
  &__inner {
    position: relative;
  }
  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: $second-dark-color;
    //min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }
  &__rating {
    margin-bottom: 20px;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>