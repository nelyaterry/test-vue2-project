<template>
  <VContainer>
    <main class="apartment-page">
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentMainInfo
            :apartment="apartment"
            class="apartment-page__content--main-info"/>
        <div class="apartment-page__additional-info">
          <ApartmentOwner
              :owner="apartment.owner"
              class="apartment-page__content--owner"/>
          <ReviewsBar :reviews="reviews"/>
        </div>
      </div>
    </main>
  </VContainer>
</template>

<script>
  import reviews from "@/components/reviews/reviews.json"
  import {getApartmentById} from "@/services/apartment.service";

  import VContainer from "@/components/shared/VContainer";
  import ApartmentMainInfo from "@/components/apartment/ApartmentMainInfo";
  import ApartmentOwner from "@/components/apartment/ApartmentOwner";
  import ReviewsBar from "@/components/reviews/ReviewsBar";

  export default {
    name: "ApartmentPage",
    components: {
      ReviewsBar,
      ApartmentOwner,
      ApartmentMainInfo,
      VContainer},
    data () {
      return {
        apartment: null,
        reviews
      }
    },
    mounted () {
      console.log(this.apartment);
      console.log(this.$router);
      console.log(this.$route);
    },
    async created() {
      try {
        const {id} = this.$route.params
        const {data} = await getApartmentById(id);
        this.apartment = data

      } catch (error) {
        console.error(error)
      }

    }
  }
</script>

<style  lang="scss" scoped>
  .apartment-page {
    padding: 60px 0;

    &__content {
      display: flex;
      align-items: start;

      &--main-info {
        margin-right: 20px;
      }

      &--owner {
        width: 100%;
        margin-bottom: 20px;
      }
    }

    &__additional-info {
      max-width: 350px;
    }
  }
</style>