// import axios from "axios";

export default {
   // GET_PRODUCTS_FROM_API({ commit }) {
   //    return axios("http://localhost:3000/products", {
   //       method: "GET",
   //    })
   //       .then((products) => {
   //          commit("SET_PRODUCTS_TO_STATE", products.data);
   //          return products;
   //       })
   //       .catch((error) => {
   //          console.log(error);
   //          return error;
   //       });
   // },
   ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
   },
   MAKE_BURGER_MENU_OPEN({ commit }) {
      commit('BURGER_MENU_OPEN');
   },
   MAKE_RESIZE_WIDTH({ commit }) {
      commit('RESIZE_WIDTH');
   },
   MAKE_RESIZE_HEIGHT({ commit }) {
      commit('RESIZE_HEIGHT');
   },
   DELETE_FROM_CART({ commit }, i) {
      commit('REMOVE_FROM_CART', i);
   },
   INCREMENT_CART_ITEM({ commit }, i) {
      commit('INCREMENT', i);
   },
   DECREMENT_CART_ITEM({ commit }, i) {
      commit('DECREMENT', i);
   },
};
