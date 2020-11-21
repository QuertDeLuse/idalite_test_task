<template>
  <div class="sort-wrapper clearfix">
    <h3 class="sort-text">
      <a @click.prevent="toggleAllValues" href="#" class="sort-text__a"
        >Сортировать по: <span class="sort-text__choosen-value"></span>
        {{ filterValue }}
        <img src="@/static/img/arrow.jpg" alt="arrow" class="sort-text__choosen-value__img">
      </a>
    </h3>

    <div
      :class="{ 'values-wrapper_show': displaySortMenu }"
      class="values-wrapper"
    >
      <ul class="values-list">
        <li
          v-for="value in arrayOfFilterValue"
          :key="value.id"
          class="values-list__item"
        >
          <a @click.prevent="changeFilterValue(value)" href="#" class="item__a">
            {{ value }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterValue: "",
      arrayOfFilterValue: ["цене", "популярности"],
      displaySortMenu: false,
    };
  },

  mounted() {
    this.filterValue = this.arrayOfFilterValue[0];
  },

  computed: {
    products() {
      return this.$store.getters.products;
    }
  },

  methods: {
    toggleAllValues() {
      this.displaySortMenu = !this.displaySortMenu;
    },
    changeFilterValue(value) {
      this.filterValue = value;
      this.toggleAllValues();

      this.$store.dispatch('sortProducts', value)
    },
  },
};
</script>

<style lang="scss">
// .clearfix::after {
//   content: "";
//   clear: both;
//   display: table;
// }

.sort-wrapper {
  margin-top: 100px;
  position: absolute;
  display: inline;
  right: 0px;
  // float: right;

  .sort-text {
    display: inline;
    margin: 0px;

    .sort-text__a {
      font-weight: normal;
      font-size: 16px;
      color: #1f1f1f;
      text-decoration: none;

      .sort-text__choosen-value {
        color: #59606d;
      }

      .sort-text__choosen-value__img {
        position: relative;
        top: -2px;
      }
    }
  }

  .values-wrapper {
    display: none;
    position: absolute;
    // width: 180px;
    width: 100%;
    right: 0px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transition: all 0.3s;

    .values-list {
      list-style-type: none;
      margin: 0px;
      //   margin-left: -40px;
      padding: 8px 0px;

      .values-list__item {
        padding: 4px 12px;
        .item__a {
          display: block;
          text-align: left;

          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: #959dad;

          text-decoration: none;
        }

        transition: all 0.3s;

        &:hover {
          background-color: #f8f8f8;

          .item__a {
            color: #1f1f1f;
          }
        }
      }
    }
  }

  .values-wrapper_show {
    display: block;
  }
}
</style>