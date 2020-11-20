export const state = () => ({
    cartItems: [],
    products: [],

    categories: [],
    activeCategory: '',
});

export const mutations = {
    updateCartItems(state, newCartItems) {
        state.cartItems.push(newCartItems);
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
    async addCartItem({ commit }, newCartItems) {
        commit('updateCartItems', newCartItems);
    },
    async getCartItemFromCookies({ commit }, cartItemsFromCookies) {
        commit('updateCartItemsFromCookies', cartItemsFromCookies);
    },


    async fetchNewCategories({ commit }) {
        await this.$axios.$get('http://front-test.idalite.com/api/product-category').then((newCategories) => {
            commit('updateCategories', newCategories);
            commit('updateActiveCategory', 1);
        })

    },
    async setNewActiveCategory({ commit }, newCategoty) {
        commit('updateActiveCategory', newCategoty);
    },


    async fetchNewProducts({ commit, getters }) {
        console.log( getters.activeCategory.id)
        await this.$axios.$get('http://front-test.idalite.com/api/product?category=' + getters.activeCategory.id).then( (newProducts) => {
            console.log(newProducts)
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
