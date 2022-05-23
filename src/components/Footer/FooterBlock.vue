<template>
   <footer class="footer">
      <div class="footer__container _container">
         <div class="footer__body">
            <div class="footer__main">
               <a href="#" class="footer__logo footer__title title">Funiro.</a>
               <div class="footer__text">
                  Worldwide furniture store since 2020. We sell over 1000+
                  branded products on our website
               </div>
               <div class="footer__contacts">
                  <a
                     href=""
                     class="footer__contacts-item footer__contacts-item_geo"
                  >
                     Sawojajar Malang, Indonesia
                  </a>
                  <a
                     href="tel:+62894563455"
                     class="footer__contacts-item footer__contacts-item_tel"
                  >
                     +6289 456 3455
                  </a>
                  <a
                     href="https://www.funiro.com"
                     targen="_blank"
                     class="footer__contacts-item"
                  >
                     www.funiro.com
                  </a>
               </div>
            </div>
            <div class="footer__menu menu">
               <footer-item-list
                  v-for="(item, i) in FOOTERLIST"
                  :key="i"
                  :menu_item="item"
               />
            </div>
            <div class="footer__subscribe subscribe">
               <div class="subscribe__title footer__title title">
                  Stay Updated
               </div>
               <form action="#" class="subscribe__form">
                  <input
                     type="text"
                     placeholder="Enter your email"
                     class="subscribe__input"
                     v-model="inputValue"
                  />
                  <button
                     type="submit"
                     class="subscribe__submitbtn"
                     @click.prevent="emailTest"
                     @keypress="enter"
                  >
                     <img src="@/assets/images/icons/Send.svg" alt="submit" />
                  </button>
               </form>
               <div class="footer__error" v-if="errorVisible">
                  Invalid email entered
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>

<script>
import FooterItemList from "@/components/Footer/FooterItemList";
import { mapGetters } from "vuex";

export default {
   name: "FooterBlock",
   components: {
      FooterItemList,
   },
   data() {
      return {
         inputValue: "",
         errorVisible: false,
      };
   },
   computed: {
      ...mapGetters(["FOOTERLIST"]),
   },
   methods: {
      emailTest() {
         if (
            !/^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,8})+$/.test(this.inputValue)
         ) {
            this.errorVisible = true;
         } else {
            this.errorVisible = false;
         }
      },
   },
};
</script>
FooterItemList

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.footer {
   margin-bottom: 40px;
   &__container {
   }
   &__body {
      display: grid;
      grid-template-columns: 250px 1fr 290px;
      border-top: 1px solid #d8d8d8;
      @include adaptiv-value("column-gap", 80, 30, 0);
      @include adaptiv-value("padding-top", 50, 20, 0);
      @include adaptiv-value("padding-bottom", 50, 20, 1);
      @media (max-width: $md1 + px) {
         grid-template-rows: auto auto;
         grid-template-columns: 1fr 290px;
      }
      @media (max-width: $md2 + px) {
         display: block;
      }
   }
   &__main {
      @media (max-width: $md1 + px) {
         grid-column: span 2;
         @include adaptiv-value("margin-bottom", 40, 0, 1);
      }
   }
   &__logo {
      display: block;
   }
   &__text {
   }
   &__contacts {
   }
   &__contacts-item {
      display: block;
      margin-top: 16px;
      padding: 2px 0;
      line-height: 150%;
      color: $darkGreyColor;
      transition: 0.3s;
      &:hover {
         color: $darkOrangeColor;
      }
      &_geo {
         background: url("@/assets/images/icons/Geo.svg") left no-repeat;
         padding-left: 28px;
      }
      &_tel {
         background: url("@/assets/images/icons/Phone.svg") left no-repeat;
         padding-left: 28px;
      }
   }
   &__menu {
      display: flex;
      flex: 1 1 auto;
      @media (max-width: $md1 + px) {
         justify-content: space-between;
         @include adaptiv-value("padding-right", 100, 0, 0);
      }
      @media (max-width: $md2 + px) {
         @include adaptiv-value("margin-bottom", 40, 20, 1);
      }
      @media (max-width: $md4 + px) {
         flex-direction: column;
      }
   }
   &__subscribe {
   }
   &__error {
      margin-top: 10px;
      color: red;
      font-family: "Gilroy Semibold";
   }
}

.subscribe {
   &__title {
   }
   &__form {
      display: flex;
      position: relative;
   }
   &__input {
      background-color: #f4f5f7;
      border: none;
      flex: 1 1 auto;
      font-size: 16px;
      line-height: 150%;
      color: #828282;
      padding-left: 12px;
   }
   &__submitbtn {
      flex: 0 0 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $orangeColor;
      margin-left: 4px;
      transition: 0.4s;
      &:hover {
         background-color: $darkOrangeColor;
      }
   }
}
</style>
