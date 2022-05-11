<template>
    <button v-on="$listeners" :type='type' :class="{btn: true, 'btn--outlined': outlined}">
      <CircleLoader  v-if="loading" class="btn__loader"/>
      <span class="btn__content" :class="contentStyle">
      <slot></slot>
    </span>
    </button>
</template>

<script>
import CircleLoader from "@/components/loaders/CircleLoader";
export default {
  name: 'VButton',
  components: {CircleLoader},
  props: {
    type: {
      type: String,
      default: "button"
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    contentStyle() {
      return {
        "btn__content--hidden" : this.loading,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    position: relative;
    display: inline-block;
    font-size: 18px;
    background-color: #FF662D;
    color: #fff;
    cursor: pointer;
    min-width: 200px;
    padding: 11px;
    border: 1px solid transparent;

    &:hover {
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    }

    &--outlined {
      background-color: transparent;
      border: 1px solid #FF662D;
      color: #FF662D;
    }

    &__content {
      &--hidden {
        opacity: 0;
      }
    }

    &__loader {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
</style>