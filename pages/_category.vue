<template>
  <div class="container">
    <div class="category-page-wrapper">
      <div v-if="loading" class="loading">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Sort />
      <div class="category-page__card-collection-wrapper">
        <div class="category-page__card-collection">
          <CardCategory
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>

      <!-- <h3>{{ $route.params.category }}</h3> -->
    </div>
  </div>
</template>

<script>
import Sort from "@/components/categoryPage/sort";
import CardCategory from "@/components/categoryPage/cardCategory";

export default {
  middleware({ store }) {
    if (store.getters.products.length == 0) {
      store.dispatch('fetchNewProducts')
    }
  },

  data() {
    return {
      loading: true,
    };
  },

  computed: {
    products() {
      return this.$store.getters.products;
    },
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },

  mounted() {
    
  },
};
</script>

<style lang="scss">
.category-page-wrapper {
  width: 89%;
  padding-left: 11%;
  position: relative;

  .category-page__card-collection-wrapper {
    padding-top: 166px;

    .category-page__card-collection {
      max-height: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      
      // overflow-y: scroll;
      // overflow-x: hidden;


    }
  }
}
</style>