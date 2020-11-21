<template>
  <div class="category-menu-wrapper">
    <h3 class="category-menu__heading">Каталог</h3>
    <ul class="categoty-list">
      <li
        v-for="category in categories"
        :key="category.id"
        class="categoty-item"
      >
        <a
          href="#"
          class="categoty-item__a"
          :class="{'categoty-item_active': activeCategory.name == category.name}"
          @click.prevent="openCategory(category)"
          >{{ category.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {   
      categoryOpened: false,
    };
  },

  // mounted() {
  //   this.$store.dispatch('setNewActiveCategory', this.categories[0].name);    
  // },

  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    activeCategory() {
      return this.$store.getters.activeCategory;
    }    
  },

  methods: {
    openCategory(category) {
      this.$store.dispatch('setNewActiveCategory', category).then(() => {
        this.$store.dispatch('fetchNewProducts');
      })
      this.$router.push("/" + category.name);

      this.$emit('categoryOpened')    
    },
  },
};
</script>

<style lang="scss">
.CategoryMenu_hide {
  left: -200px;
  opacity: 0;
}

.category-menu-wrapper {
  position: absolute;
  z-index: 100;
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