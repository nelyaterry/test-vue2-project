<template>
  <VContainer class="main-container">
    <main class="main-page" >
      <ApartmentFilterForm
          @submit="filter"
      />
      <p v-if="!filteredApartments.length" style="width: 1110px">Ничего не найдено</p>
      <ApartmentList v-else :items="filteredApartments">
        <template #title>
          <VMainTitle class="main-container__title">
            Подборка согласно выбора
          </VMainTitle>
        </template>
        <template #apartment="{apartment}">
          <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :description = "apartment.descr"
              :rating = "apartment.rating"
              :price = "apartment.price"
              :imgSrc = "apartment.imgUrl"
          />
        </template>
      </ApartmentList>
    </main>
  </VContainer>
</template>

<script>
import {getAllApartments} from "@/services/apartment.service";
import VContainer from "@/components/shared/VContainer";
import ApartmentFilterForm from "@/components/apartment/ApartmentFilterForm";
import ApartmentList from "@/components/apartment/ApartmentList";
import VMainTitle from "@/components/VMainTitle";
import ApartmentsItem from "@/components/apartment/ApartmentsItem";


export default {
  name: "HomePage",
  components: {
    ApartmentsItem,
    VMainTitle,
    ApartmentList,
    ApartmentFilterForm,
    VContainer,
  },
  data () {
    return {
      apartments: [],
      filters: {
        city: "",
        price: ""
      }
    }
  },
  computed: {
    filteredApartments() {
      return this.filteredByPrice(this.filteredByCityName(this.apartments));
    }
  },
  methods: {
    filter ({city, price}) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filteredByCityName (apartments) {
      return (!this.filters.city ?
          apartments :
          apartments.filter(apartment => (
              apartment.location.city === this.filters.city
          )))
    },
    filteredByPrice (apartments) {
      return  (!this.filters.price ?
          apartments :
          apartments.filter(apartment => (
              apartment.price >= this.filters.price
          )))
    }
  },
  async created() {
    try {
      const {data} = await getAllApartments();
      this.apartments = data;
    } catch(error) {
      console.error(error)
    }
  }

}
</script>

<style lang="scss" scoped>
  //.main-page {
  //  min-height: calc(100vh - 90px);
  //}
  .main-container {
    padding: 60px 0;
    &__title {
      margin-bottom: 20px;
    }
  }
</style>