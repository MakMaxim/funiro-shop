import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default createStore({
   state: {
      products: [],
      cart: [],
      isBurgerMenuOpen: false,
      width: 0,
      height: 0,
      menuList: [
         {
            title: "Products",
            list: [
               "Product 1",
               "Product 2",
               "Product 3",
               "Product 4",
               "Product 5",
               "Product 6",
            ],
         },
         {
            title: "Rooms",
            list: ["Room 1", "Room 2", "Room 3"],
         },
         {
            title: "Inspirations",
         },
      ],
      mainSlider: [
         {
            id: 1,
            title: "Bohauss",
            text: "Luxury big sofa 2-seat",
            price: "Rp 17.000.000",
            image: "1.jpg",
         },
         {
            id: 2,
            title: "Bohauss 2",
            text: "Luxury big sofa 2-seat",
            price: "Rp 17.000.000",
            image: "2.jpg",
         },
         {
            id: 3,
            title: "Bohauss 3",
            text: "Luxury big sofa 2-seat",
            price: "Rp 17.000.000",
            image: "3.jpg",
         },
      ],
      advantages: [
         {
            id: 1,
            title: "High Quality",
            text: "Crafted from top materials",
            image: "1.svg",
         },
         {
            id: 2,
            title: "Warrany Protection",
            text: "Over 2 years",
            image: "2.svg",
         },
         {
            id: 3,
            title: "Free Shipping",
            text: "Order over 150 $",
            image: "3.svg",
         },
         {
            id: 4,
            title: "24 / 7 Support",
            text: "Dedicated support",
            image: "4.svg",
         },
      ],
      roomsSlider: [
         {
            id: 1,
            number: "01",
            text: "Bed Room",
            title: "Inner Peace",
            image: "1.jpg",
         },
         {
            id: 2,
            number: "02",
            text: "Bed Room",
            title: "Inner Peace",
            image: "2.jpg",
         },
         {
            id: 3,
            number: "03",
            text: "Bed Room",
            title: "Inner Peace",
            image: "3.jpg",
         },
      ],
      tipsSlider: [
         {
            id: 1,
            title: "How to create a living room to love",
            text: "20 jan 2020",
            image: "1.jpg",
         },
         {
            id: 2,
            title: "Solution for clean look working space",
            text: "10 jan 2020",
            image: "2.jpg",
         },
         {
            id: 3,
            title: "Make your cooking activity more fun with good setup",
            text: "20 jan 2020",
            image: "3.jpg",
         },
      ],
      footerList: [
         {
            title: "Menu",
            list: [
               "Products",
               "Rooms",
               "Inspirations",
               "About Us",
               "Terms & Policy",
            ],
         },
         {
            title: "Account",
            list: ["My Account", "Checkout", "My Cart", "My catalog"],
         },
         {
            title: "Stay Connected",
            list: ["Facebook", "Instagram", "Twitter"],
         },
      ],
   },
   getters,
   mutations,
   actions,
   modules: {},
});