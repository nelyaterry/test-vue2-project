<template>
  <form class="form" @submit.prevent="handleSubmit">
    <VSelect
        :items="cities"
        v-model="city"
        class="form__select"
    ></VSelect>

    <VInput
        type="number"
        v-model="price"
        placeholder="Цена, от"
        error-message="Не должно быть пустим"
        :rules="rules"
    />

    <VButton
        type="submit"
        class="form__submit"
    >
      Подбор жилья
    </VButton>
  </form>
</template>

<script>
import VSelect from "@/components/shared/VSelect";
import VInput from "@/components/shared/VInput";
import VButton from "@/components/VButton";
import {isRequired, charLimit} from "@/utils/validationRules";

export default {
  name: "ApartmentFilterForm",
  components: {
    VButton,
    VInput,
    VSelect
  },
  data () {
    return {
      city: "",
      price: "",
    }
  },
  methods: {
    handleSubmit () {
      this.$emit("submit", {city: this.city, price: this.price})
    }
  },
  computed: {
     cities () {
       return [
         {value: "", label: "Город", selected: true},
         "Kyiv",
         "Lutsk",
         "Mariupol",
         "Lviv",
         "Poltava",
         "Zhytomyr",
         "Kharkiv",
         "Dnipro"]
     },
     rules () {
       return [isRequired, charLimit(10)]
     }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    display: flex;
    margin-bottom: 30px;

    &__select {
      margin-right: 30px;
    }
    &__submit {
      margin-left: auto;
    }
  }
</style>