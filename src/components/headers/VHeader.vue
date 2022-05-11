<template>
  <header class="header">
    <VContainer>
      <div class="header__container">
        <router-link :to="{name: 'homepage'}">
          <VLogo/>
        </router-link>
        <AccountActions v-if="isLoggedIn"/>
        <AuthActions v-else/>
      </div>
    </VContainer>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';
import VContainer from "@/components/shared/VContainer";
import VLogo from "@/components/shared/VLogo";
import AuthActions from "@/components/headers/AuthActions";
import AccountActions from '@/components/headers/AccountActions';
export default {
  name: "VHeader",
  components: {AccountActions, AuthActions, VLogo, VContainer},
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
  .header {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    padding: 16px 0;
    background-color: $main-dark-color;
    min-height: 60px;
    z-index: 10;

    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>