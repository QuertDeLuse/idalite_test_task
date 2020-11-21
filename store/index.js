export const state = () => ({
    cartItems: [],
    products: [],

    categories: [],
    activeCategory: '',
});

export const mutations = {
    updateCartItems(state, newCartItem) {
        state.cartItems.push(newCartItem);
    },
    updateCartItemsAll(state, newCartItems) {
        state.cartItems = newCartItems;
    },
    updateCartItemsFromCookies(state, cartItemsFromCookies) {
        state.cartItems = cartItemsFromCookies;
    },


    updateActiveCategory(state, newActiveCategory) {
        state.activeCategory = newActiveCategory;
    },
    updateCategories(state, newCategories) {
        state.categories = newCategories;
    },

    updateProducts(state, newProducts) {
        state.products = newProducts
    },

};

export const actions = {
    async addCartItem({ commit }, newCartItem) {
        commit('updateCartItems', newCartItem);
    },
    async getCartItemFromCookies({ commit }, cartItemsFromCookies) {
        commit('updateCartItemsFromCookies', cartItemsFromCookies);
    },
    async changeAllCartItems({ commit }, newCartItems) {
        commit('updateCartItemsAll', newCartItems)
    },  


    async fetchNewCategories({ commit }) {
        await this.$axios.$get('http://front-test.idalite.com/api/product-category').then((newCategories) => {
            commit('updateCategories', newCategories);
            commit('updateActiveCategory', newCategories[0]);
        })
    },
    async setNewActiveCategory({ commit }, newCategoty) {
        commit('updateActiveCategory', newCategoty);
    },


    async fetchNewProducts({ commit, getters }) {
        await this.$axios.$get('http://front-test.idalite.com/api/product?category=' + getters.activeCategory.id).then( (newProducts) => {
            // console.log(newProducts)
            commit('updateProducts', newProducts);
        })              
    }
};

export const getters = {
    cartItems: s => s.cartItems,
    categories: s => s.categories,
    activeCategory: s => s.activeCategory,
    products: s => s.products,
};
