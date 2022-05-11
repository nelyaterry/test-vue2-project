<template>
    <main class="my-orders-page">
      <VMainTitle class="my-orders-page__title">Заказы</VMainTitle>
      <OrdersList :items="orders" />
    </main>
</template>

<script>
import VMainTitle from '@/components/VMainTitle';
import OrdersList from '@/components/my-orders/OrdersList';
import {getOrders} from '@/services/order.service';

export default {
  name: "MyOrders",
  components: {OrdersList, VMainTitle},
  data() {
    return {
      orders: [],
    }
  },
  async created() {
    try {
      const {data} = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: 'error',
        title: 'Ooops!',
        text: error.message,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-orders-page {
    padding: 60px 0;
    max-width: 730px;
    margin: 0 auto;
    flex-grow: 1;

    &__title {
      margin-bottom: 20px;
    }
  }
</style>