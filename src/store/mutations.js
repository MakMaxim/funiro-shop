export default {
   // SET_PRODUCTS_TO_STATE(state, products) {
   //    state.products = products;
   // },
   SET_CART(state, product) {
      let isProductExists = false;
      if (state.cart.length) {
         state.cart.map(function (item) {
            if (item.id === product.id) {
               isProductExists = true;
               item.quantity++;
            }
         });
         if (!isProductExists) {
            state.cart.push(product);
            product.quantity++;
         }
      } else {
         state.cart.push(product);
         product.quantity++;
      }
   },
   BURGER_MENU_OPEN(state) {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
   },
   RESIZE_WIDTH(state) {
      state.width = window.innerWidth;
   },
   RESIZE_HEIGHT(state) {
      state.height = window.innerHeight;
   },
   REMOVE_FROM_CART(state, i) {
      let ind = state.cart
         .map((elem, index) => (elem.id === i ? index : ''))
         .filter((el) => el !== '');
      state.cart[ind].quantity = 0;
      state.cart.splice(ind, 1);
   },
   INCREMENT(state, i) {
      state.cart.map(function (item) {
         if (item.id === i) {
            item.quantity++;
         }
      });
   },
   DECREMENT(state, i) {
      state.cart.map(function (item) {
         if (item.id === i && item.quantity > 1) {
            item.quantity--;
         }
      });
   },
};
