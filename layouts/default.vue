<template>
  <div>
    <div class="navbar-wrapper">
      <div class="container">
        <div class="navbar">
          <CategoryMenu />
          <div class="menu-btn-wrapper">
            <a class="menu-btn">
              <span class="menu-btn__span"></span>
              <span class="menu-btn__span"></span>
              <span class="menu-btn__span"></span>
            </a>
          </div>
          <div class="logo-wrapper">
            <h3 class="logo">TestList</h3>
          </div>
          <a href="#" class="cart-wrapper">
            <img class="cart" src="@/static/img/cart.png" alt="cart" />
            <div class="item-indicator-wrapper">
              <h3 class="item-indicator">3</h3>
            </div>
          </a>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
import CategoryMenu from "@/components/categoryMenu";

export default {};
</script>

<style lang="scss">
body {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;

  height: 100vh;

  font-family: "PT Sans", sans-serif;
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.navbar-wrapper {
  width: 100%;

  background-color: #fff;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 4px 16px 0px rgba(#000000, 0.05);

  .navbar {
    position: relative;
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu-btn-wrapper {
      display: none;

      .menu-btn {
        width: 16px;

        .menu-btn__spa {
          content: '';
          width: 100%;
          height: 2px;
          background-color: #959dad;          
        }

        transition: all 0.3s;
      }

      &:hover {
        .menu-btn__spa {        
          background-color: #59606d;
        }
      }
      @media screen and (max-width: 1024px) {
        display: block;
      }
    }

    .logo-wrapper {
      .logo {
        font-weight: bold;
        font-size: 22px;
        margin: 0px;
      }
    }

    .cart-wrapper {
      cursor: pointer;
      position: relative;

      .cart {
      }

      .item-indicator-wrapper {
        position: absolute;
        top: 0px;
        right: 0px;

        width: 12px;
        height: 12px;
        background-color: #959dad;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        .item-indicator {
          color: #fff;
          font-size: 8px;
        }
      }
    }
  }
}
</style>