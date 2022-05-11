<template>
  <div class="wrapper-input">
    <input
        v-on="listeners"
        v-bind="$attrs"
        :value="value"
        :autocomplete="autocomplete"
        class="base-input"
        :class="isError && 'base-input--error'"
        :placeholder="placeholder"
    >
    <span v-if="isError" class="base-input__error">
      {{error}}
    </span>
  </div>
</template>
<script>
export default {
  name: "VInput",
  inject: {
    form: {
      default: null
    }
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "Not valid"
    }

  },
  data () {
    return {
      // isValid: true,
      // error: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', e.target.value)
      }
    }
  },
  methods: {
    reset() {
      this.$emit("input", "")
    }
  },
  mounted() {
  },
  beforeDestroy() {
  },
  // watch: {
  //   value() {
  //     this.validate()
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables.scss";

  .wrapper-input {
    position: relative;
    display: inline-flex;
  }

  .base-input {
    min-height: 42px;
    width: 100%;
    border: 2px solid $main-orange-color;
    font-size: 18px;
    outline: none;
    padding: 8px 15px;

    &::placeholder {
      color: $black-color ;
    }

    &--error {
      border: 3px solid red;
    }

    &__error {
      position: absolute;
      top: 110%;
      right: 0;
      width: 100%;
      font-size: 13px;
      color: red;
      line-height: 1.3;
    }
  }

</style>