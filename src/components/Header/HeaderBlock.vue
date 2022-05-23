<template>
   <header class="header">
      <div class="header__wrapper">
         <div class="header__container _container">
            <div class="header__body">
               <div class="header__main">
                  <router-link :to="{ name: 'main' }">
                     <a href="" class="header__logo title">Funiro.</a>
                  </router-link>
                  <burger-menu />
                  <transition name="fade">
                     <div
                        class="header__menu menu"
                        v-if="WIDTH > 767.98 || ISBURGERMENUOPEN"
                     >
                        <nav class="menu__body">
                           <ul class="menu__list">
                              <header-menu-item-list
                                 v-for="(item, i) in MENULIST"
                                 :key="i"
                                 :menu_item="item"
                              />
                           </ul>
                        </nav>
                     </div>
                  </transition>
               </div>

               <div class="header__search search">
                  <div class="search__body">
                     <button type="button" class="search__icon">
                        <img
                           src="@/assets/images/icons/Search.svg"
                           alt="search"
                           @click="isSearchOpen = !isSearchOpen"
                        />
                     </button>
                     <form
                        action="#"
                        class="search__form"
                        :class="{ search__form_active: isSearchOpen }"
                     >
                        <button type="button" class="search__btn">
                           <img
                              src="@/assets/images/icons/Search.svg"
                              alt="search"
                           />
                        </button>
                        <input
                           type="text"
                           placeholder="search"
                           class="search__input"
                        />
                     </form>
                  </div>
               </div>

               <div class="header__icons icons">
                  <div class="icons__favorites">
                     <img
                        src="@/assets/images/icons/Favorites.svg"
                        alt="favorites"
                     />
                  </div>
                  <div class="icons__cart">
                     <span class="icons__cart-quantity">
                        {{ totalQuantity }}
                     </span>
                     <router-link :to="{ name: 'cart' }">
                        <div>
                           <img
                              src="@/assets/images/icons/Cart.svg"
                              alt="cart"
                           />
                        </div>
                     </router-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>

<script>
import HeaderMenuItemList from "@/components/Header/HeaderMenuItemList.vue";
import BurgerMenu from "@/components/Header/BurgerMenu.vue";
import { mapGetters } from "vuex";

export default {
   name: "HeaderBlock",
   components: {
      HeaderMenuItemList,
      BurgerMenu,
   },
   data() {
      return {
         isSearchOpen: false,
      };
   },
   methods: {},
   computed: {
      ...mapGetters([
         "WIDTH",
         "HEIGHT",
         "ISBURGERMENUOPEN",
         "CART",
         "MENULIST",
      ]),
      totalQuantity() {
         return this.CART.length == 0
            ? 0
            : this.CART.map((e) => e.quantity).reduce(
                 (sum, cur) => sum + cur,
                 0
              );
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.header {
   position: absolute;
   width: 100%;
   top: 0;
   left: 0;
   &__wrapper {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 50;
      background-color: $lightOrangeColor;
   }
   &__container {
      position: relative;
      @media (min-width: $md2 + px) {
         &::before {
            content: "";
            background: #f9f1e7;
            position: absolute;
            top: 0;
            width: 100vw;
            right: 376px;
            height: 100%;
         }
      }
   }
   &__logo {
      position: relative;
      z-index: 5;
      transition: all 0.4s;
      &:hover {
         background-color: $darkOrangeColor;
         color: white;
      }
   }
   &__body {
      display: flex;
      align-items: center;
      min-height: 125px;
      position: relative;
      @media (max-width: $md2 + px) {
         min-height: 85px;
      }
      @media (max-width: $md3 + px) {
         min-height: 65px;
      }
   }
   &__main {
      display: flex;
      flex: 0 0 494 / 1240 * 100%;
      align-items: center;
      @media (max-width: $md2 + px) {
         flex: 1 0 494 / 1240 * 100%;
      }
   }
   &__menu {
   }
   &__search {
      @media (min-width: $md2 + px) {
         flex: 1 1 auto;
      }
   }
   &__icons {
   }
}

.menu {
   flex: 0 1 420px;
   @media (max-width: $md3 + px) {
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: auto;
      top: 0;
      left: 0;
      background-color: #f5eadd;
      padding: 70px 15px 30px 15px;
      &:before {
         content: "";
         position: fixed;
         width: 100%;
         height: 65px;
         top: 0;
         left: 0;
         z-index: 60;
         background-color: $lightOrangeColor;
      }
   }
   &__body {
   }
   &__list {
      display: flex;
      @media (min-width: $md3+px) {
         flex-wrap: wrap;
         justify-content: space-evenly;
         list-style-type: none;
      }
   }
}

.search {
   &__body {
      @include adaptiv-value("max-width", 473, 200, 0);
   }
   &__form {
      @media (max-width: $md2 + px) {
         position: absolute;
         width: 100%;
         left: 0;
         top: -100%;
         z-index: 5;
         opacity: 0;
         visibility: hidden;
         transition: all 0.5s ease 0;
         box-shadow: 0 0 6px rgba(211, 123, 8, 0.9);
      }
      &_active {
         opacity: 1;
         top: 100%;
         visibility: visible;
      }
   }
   &__icon {
      @include adaptiv-value("margin-right", 26, 20, 0);
      position: relative;
      z-index: 5;
      @media (min-width: $md2 + px) {
         display: none;
      }
      img {
         width: 25px;
         height: 25px;
         flex: 0 0 25px;
         color: #262f56;
      }
   }
   &__btn {
      position: absolute;
      margin: 12.5px 0 0 5px;
   }
   &__input {
      color: $mainColor;
      font-size: 14px;
      height: 45px;
      padding: 0 15px 0 44px;
      border: none;
      width: 100%;
   }
}

.icons {
   display: flex;
   color: #262f56;
   position: relative;
   z-index: 5;
   &__favorites {
      cursor: pointer;
      @include adaptiv-value("margin-right", 58, 42, 0);
   }
   &__cart {
      img {
         cursor: pointer;
      }
   }
   &__cart-quantity {
      position: absolute;
      right: 27px;
      top: 2px;
      font-size: 18px;
      color: $darkOrangeColor;
   }
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>
