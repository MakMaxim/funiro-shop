export default {
   SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
   },
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
      state.cart.splice(i, 1);
   },
   INCREMENT(state, i) {
      state.cart[i].quantity++;
   },
   DECREMENT(state, i) {
      if (state.cart[i].quantity > 1) {
         state.cart[i].quantity--;
      }
   },
};
