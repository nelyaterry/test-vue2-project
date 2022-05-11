<template>
  <div id='app'>
    <VNotifications/>
    <VHeader />
        <router-view></router-view>
    <VFooter />
  </div>
</template>


<script>
import VFooter from "@/components/VFooter";
import VHeader from "@/components/headers/VHeader";
import VNotifications from "@/components/notifications/VNotifications";

export default {
  name: 'App',
  components: {
    VNotifications,
    VHeader,
    VFooter,
  },
  mounted() {
    console.log(this.$store.getters["auth/isLoggedIn"])
  },
}
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
