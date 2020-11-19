<template>
  <div class="cart-menu__card-wrapper">
    <div class="card__img-wrapper">
      <img src="@/static/img/default.jpg" alt="product" class="main-img" />
    </div>

    <div class="card__text-wrapper">
      <p class="card__name">Рюкзак Louis Vuitton Discovery</p>
      <h3 class="card__price">150 000 ₽</h3>
      <div class="card__rating">
        <img src="@/static/img/star.png" alt="star" class="rating__img" />
        <h3 class="rating">4.5</h3>
      </div>
    </div>
    <a href="#" class="card__trash-img-wrapper">
      <img src="@/static/img/trash.svg" alt="trash" class="card__trash-img" />
    </a>
  </div>
</template>

<script>
export default {};
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
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-img {
    }
  }
  .card__text-wrapper {
    margin-left: 20px;
    width: 170px;

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