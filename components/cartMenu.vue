<template>
  <div class="cart-menu-wrapper">
    <div class="cart-menu">
      <h3 class="cart-menu__heading">Корзина</h3>
      <a @click="hideCartMenu" href="#" class="cart-menu__close-btn"></a>

      <div v-if="cartItems.length <= 0" class="cart-menu_empty">
        <h3 class="cart-menu_empty__heading">
          Пока что вы ничего не добавили в корзину.
        </h3>
        <a
          @click.prevent="hideCartMenu"
          href="#"
          class="cart-menu_empty__back-btn"
        >
          Перейти к выбору
        </a>
      </div>

      <div v-if="cartItems.length > 0" class="cart-menu_full">
        <p class="cart-menu__sub-heading">Товары в корзине</p>

        <div class="cart-menu__card-collection-wrapper">
          <CardCartMenu
            v-for="cartItem in cartItems"
            :key="cartItem.id"
            :cartItem="cartItem"
          />
        </div>

        <form action="" class="cart-menu__form">
          <h3 class="form__heading">Оформить заказ</h3>
          <div class="form__input-group">
            <input
              name="name"
              placeholder="Ваше имя"
              type="text"
              class="form__input"
              required
            />
            <input
              name="phone"
              placeholder="Телефон"
              type="text"
              class="form__input"
              required
            />
            <input
              name="address"
              placeholder="Адрес"
              type="text"
              class="form__input"
              required
            />
          </div>

          <button type="submit" class="form__btn">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CardCartMenu from "@/components/cardCartMenu";

export default {
  props: {
    cartMenuShow: Boolean,
  },

  data() {
    return {
      items: ["q", "w", "e"],
    };
  },

  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },

  methods: {
    hideCartMenu() {
      this.$emit("hideCartMenu", !this.cartMenuShow);
    },
  },
};
</script>

<style lang="scss">
.cart-menu-wrapper {
  position: absolute;
  z-index: 2;
  top: 0px;
  right: 0px;
  width: 460px;
  height: 100vh;
  border-radius: 8px 0px 0px 8px;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  background-color: #fff;

  overflow-y: scroll;
  overflow-x: hidden;

  .cart-menu {
    position: relative;
    padding: 52px 48px;

    .cart-menu__heading {
      margin: 0px;
      display: inline;
      font-size: 32px;
      font-weight: bold;
    }
    .cart-menu__close-btn {
      display: block;
      position: relative;
      top: 0px;
      float: right;
      right: 0px;
      width: 25px;
      height: 25px;

      &::before,
      &::after {
        top: 20px;
        // left: 0px;
        content: "";
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: #000;
      }

      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }

    .cart-menu_empty {
      width: 100%;

      .cart-menu_empty__heading {
        margin: 0px;
        margin-top: 24px;
        font-size: 22px;
        color: #000;
        font-weight: normal;
      }
      .cart-menu_empty__back-btn {
        margin-top: 24px;
        display: block;
        width: 100%;
        text-align: center;
        color: #fff;
        text-decoration: none;
        background: #1f1f1f;
        border-radius: 8px;
        padding: 15px;
        transition: all 0.3s;

        &:hover {
          background-color: #59606d;
        }
      }
    }

    .cart-menu_full {
      .cart-menu__sub-heading {
        margin: 0px;
        margin-top: 24px;
        font-size: 18px;
        color: #59606d;
      }

      .cart-menu__card-collection-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 16px;
      }

      .cart-menu__form {       
        margin-top: 32px;

        .form__heading {
          color: #59606d;
          font-size: 18px;
          margin: 0px;
          font-weight: normal;
        }
        .form__input-group {
          width: 100%;
          .form__input {
            box-sizing: border-box;
            display: block;
            font-size: 16px;
            padding: 15px;
            border-radius: 8px;
            color: #000;
            background-color: #f8f8f8;
            border: none;
            margin-top: 16px;
            width: 100%;

            &::placeholder {
              color: #959dad;
            }
          }
        }

        .form__btn {
          margin-top: 16px;
          padding: 15px;
          width: 100%;
          border-radius: 8px;
          background-color: #1f1f1f;
          color: #fff;
          font-size: 16px;
          border: none;
          outline: none;
          transition: all 0.3s;
          cursor: pointer;

          &:hover {
            background-color: #59606d;
          }
        }
      }
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>