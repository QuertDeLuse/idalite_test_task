<template>
  <div class="card-category-wrapper">
    <div class="card-category">
      <div class="card-category__img-wrapper">
        <img
          :src="'http://front-test.idalite.com' + product.photo"
          alt="product-img"
          class="card-category__img"
        />
      </div>

      <p class="card-category__name">{{ product.name }}</p>
      <h3 class="card-category__price">{{ product.price }} ₽</h3>

      <div class="card-category__rating">
        <img src="@/static/img/star.png" alt="star" class="rating__img" />
        <h3 class="rating__number">{{ product.rating }}</h3>
      </div>
      <a @click.prevent="addToCart" href="#" class="card-category__cart-img-wrapper">
        <img src="@/static/img/cart.png" alt="cart" class="card-category__cart-img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },

  methods: {
    addToCart() {
      this.$store.dispatch('addCartItem', this.product).then(() => {

        let idCartItems = [];

        this.cartItems.forEach( (item, key) => {
          idCartItems.push(item.id)
        });
        
       localStorage.setItem('idCartItems', idCartItems);
      });
      
    }
  },

  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  },

  mounted() {
  },
};
</script>

<style lang="scss">
.card-category-wrapper {
  box-sizing: border-box;
  display: block;
  width: 264px;
  padding: 16px;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin: 8px;

  .card-category {
    display: block;
    position: relative;

    .card-category__img-wrapper {
      display: flex;
      justify-content: center;
      height: 180px;
      .card-category__img {
        object-fit: cover;
        max-width: 100%;
        height: 100%;
      }
    }

    .card-category__name {
      margin: 0px;
      margin-top: 16px;
      font-size: 14px;
      color: #59606d;
    }
    .card-category__price {
      margin: 0px;
      margin-top: 6px;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      color: #1f1f1f;
    }

    .card-category__rating {
      position: absolute;
      top: 0px;
      left: 0px;
      display: flex;
      align-items: center;

      .rating__img {
      }
      .rating__number {
        margin: 0px;
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: #f2c94c;
      }
    }

    .card-category__cart-img-wrapper {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 0px;
      right: 0px;

      .card-category__cart-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: brightness(5);

        transition: all 0.3s;

        &:hover {
          filter: brightness(0);
        }
      }
    }
  }
}
</style>