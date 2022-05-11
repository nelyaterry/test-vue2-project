<template>
  <div class="orders-item">
    <img :src="order.imgUrl" class="orders-item__img">
    <div class="orders-item__details">
      <div class="orders-item__info">
        <h2 class="orders-item__info--title">{{ order.title }}</h2>
        <p class="orders-item__info--location">{{ order.location.city }}</p>
      </div>
      <p class="orders-item__price">
        <span>UAH {{ order.price }} </span>
        за ночь
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersItem",
  props: {
    order: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
  .orders-item {
    display: flex;
    margin-bottom: 20px;
    background: $main-wrapper-color;

    &__img {
      display: block;
      width: 45%;
      height: 190px;
      object-fit: cover;
    }

    &__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;
      padding: 20px;
    }

    &__info {
      &--title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }

    &__price {
      font-size: 20px;
      font-weight: 700;
    }
  }
</style>