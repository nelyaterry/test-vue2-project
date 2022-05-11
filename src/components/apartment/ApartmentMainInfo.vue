<template>
  <article class="apartment-main-info">
    <div class="apartment-main-info__heading" >
      <VMainTitle class="apartment-main-info__heading--title">
        {{apartment.title}}
      </VMainTitle>
      <StarRating :rating="apartment.rating"/>
    </div>
    <div class="apartment-main-info__box">
      <img :src="apartment.imgUrl" :alt="apartment.title" class="apartment-main-info__box--img" >
    </div>
    <p class="apartment-main-info__description">{{apartment.descr}}</p>
    <VButton
        class="apartment-main-info__btn"
        @click="handleApartmentsBooking"
    >Забронировать</VButton>
  </article>
</template>

<script>
import VMainTitle from "@/components/VMainTitle";
import StarRating from "@/components/StarRating";
import VButton from '@/components/VButton';
import {bookApartment} from '@/services/order.service';

export default {
  name: "ApartmentMainInfo",
  components: {VButton, StarRating, VMainTitle},
  props: {
    apartment: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      isLoading: false,
    }
  },
  methods: {
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      }
      try {
        this.isLoading = true
        await bookApartment(body)
        this.$notify({
          type: 'success',
          title: 'Заказ добавлен',
        })
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Error',
          text: error.message
        })
      } finally {
        this.isLoading = false
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  .apartment-main-info {
    &__heading {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &--title {
        margin-right: 20px;
      }
    }
    &__box {
      position: relative;
      overflow: hidden;
      margin-bottom: 30px;
      //max-width: 730px;
      //max-height: 410px;
      &--img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
    &__description {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.2188;
      margin-bottom: 20px;
    }
    &__btn {
      margin: auto;
    }
  }
</style>