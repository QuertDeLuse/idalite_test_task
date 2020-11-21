<template>
  <div class="cart-menu__card-wrapper">
    <div class="card__img-wrapper">
      <img
        :src="'http://front-test.idalite.com' + cartItem.photo"
        alt="product"
        class="main-img"
      />
    </div>

    <div class="card__text-wrapper">
      <p class="card__name">{{ cartItem.name }}</p>
      <h3 class="card__price">{{ cartItem.price }} ₽</h3>
      <div class="card__rating">
        <img src="@/static/img/star.png" alt="star" class="rating__img" />
        <h3 class="rating">{{ cartItem.rating }}</h3>
      </div>
    </div>
    <a  @click.prevent="deleteItem" href="#" class="card__trash-img-wrapper">
      <img src="@/static/img/trash.svg" alt="trash" class="card__trash-img" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cartItem: Object,
  },

  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  },

  methods: {
    deleteItem() {
        let newCartItems = this.cartItems.filter((item) => {
          return item.id != this.cartItem.id;
        })

        this.$store.dispatch('changeAllCartItems', newCartItems);
    }
  },
};
</script>

<style lang="scss">
.cart-menu__card-wrapper {
  display: flex;
  width: 100%;
  padding: 15px 25px;
  margin-bottom: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  .card__img-wrapper {
    width: 30%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-img {
      object-fit: cover;
      max-width: 100%;
      height: 100%;
    }
  }
  .card__text-wrapper {
    margin-left: 20px;
    width: 60%;

    .card__name {
      margin: 0px;
      font-size: 14px;
    }
    .card__price {
      margin: 0px;
      margin-top: 6px;
      font-size: 14px;
      font-weight: bold;
    }
    .card__rating {
      margin-top: 18px;
      display: flex;
      align-items: center;

      .rating__img {
      }
      .rating {
        margin: 0px;
        font-size: 10px;
        color: #f2c94c;
      }
    }
  }
  .card__trash-img-wrapper {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .card__trash-img {
      transition: all 0.3s;
    }
    &:hover {
      .card__trash-img {
        filter: brightness(0);
      }
    }
  }
}
</style>