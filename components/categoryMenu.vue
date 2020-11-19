<template>
  <div class="category-menu-wrapper">
    <h3 class="category-menu__heading">Каталог</h3>
    <ul class="categoty-list">
      <li class="categoty-item">
        <a href="#" class="categoty-item__a categoty-item_active">Рюкзаки</a>
      </li>
      <li class="categoty-item">
        <a href="#" class="categoty-item__a">Футболки</a>
      </li>
      <li class="categoty-item">
        <a href="#" class="categoty-item__a">Рубашки</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.category-menu-wrapper {
  position: absolute;
  top: 100px;
  // left: 100px;

  .category-menu__heading {
    font-weight: bold;
    font-size: 32px;
    margin: 0;
  }

  .categoty-list {
    list-style-type: none;
    margin-top: 24px;
    margin-left: -40px;

    .categoty-item {
      margin-top: 16px;

      .categoty-item__a {
        color: #959dad;
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
          color: #59606d;
        }
      }

      .categoty-item_active {
        color: #1f1f1f;
        text-decoration: underline;
      }
    }
  }
}
</style>