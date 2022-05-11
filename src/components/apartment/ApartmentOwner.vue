<template>
  <section class="apartment-owner">
    <h2 class="apartment-owner__title">
      Информация о владельце:
    </h2>
    <ul class="apartment-owner__info">
      <li class="apartment-owner__info--item">
        {{owner.name}}
      </li>
      <li class="apartment-owner__info--item">
        <span>tel: </span>
<!--        :href="`tel:${owner.phone.split('-').join('')}`"-->
        <a :href="normalizePhoneHref" class="apartment-owner__info--link apartment-owner__info--link-phone">
          {{owner.phone}}
        </a>
      </li>
      <li class="apartment-owner__info--item-last">
        <span>e-mail: </span>
        <a :href="`mailto:${owner.email}`" class="apartment-owner__info--link apartment-owner__info--link-email">
          {{owner.email}}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ApartmentOwner",
  props: {
    owner: {
      type: Object,
      required: true,
    }
  },
  computed: {
    normalizePhoneHref() {
      return `tel:${this.owner.phone.split('-').join('')}`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";
  .apartment-owner {
    padding: 20px;
    background-color: $main-wrapper-color;

    &__title {
      font-size: 20px;
      font-weight: 700;
      line-height: 1.219;
      margin-bottom: 20px;
    }

    &__info {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.1875;

      &--link {
        color: white;
      }

      &--item {
        margin-bottom: 10px;
      }
    }
  }

</style>