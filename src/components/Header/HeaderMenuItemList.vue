<template>
   <li
      class="menu__item"
      @mouseleave="(isMenuListVisible = false), (isRotate = false)"
   >
      <div class="menu__name-item">
         <a href="" class="menu__link">{{ menu_item.title }}</a>
         <button
            class="menu__btn"
            :class="{ menu__btnrotate: isRotate }"
            v-show="menu_item.list"
         >
            <img
               src="@/assets/images/icons/Arrow-down.svg"
               alt="Arrow-down"
               @mousemove="(isMenuListVisible = true), (isRotate = true)"
            />
         </button>
      </div>
      <transition-group name="list">
         <ul class="menu__sub-list" v-if="isMenuListVisible">
            <li
               class="menu__sub-item"
               v-for="(elem, i) in menu_item.list"
               :key="i"
            >
               <a href="#" class="menu__sub-link">
                  {{ elem }}
               </a>
            </li>
         </ul>
      </transition-group>
   </li>
</template>

<script>
export default {
   name: "HeaderMenuItemList",
   props: {
      menu_item: {
         type: Object,
         required: true,
      },
   },
   data() {
      return {
         isMenuListVisible: false,
         isRotate: false,
      };
   },
   methods: {
      menuListVisible() {
         this.isMenuListVisible = !this.isMenuListVisible;
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.menu {
   &__item {
   }
   &__name-item {
   }
   &__btn {
      transition: all 0.4s ease 0s;
   }
   &__btnrotate {
      transition: all 0.4s ease 0s;
      transform: rotate(180deg);
   }
   &__item {
      margin: 5px 3px;
   }
   &__link {
      font-family: "Gilroy Medium";
      line-height: 150%;
      color: inherit;
      position: relative;
      transition: 0.3s;
      &:hover {
         color: $darkOrangeColor;
      }
   }
   &__sub-list {
      position: absolute;
      background: linear-gradient($lightOrangeColor, $orangeColor);
      padding: 10px 5px 5px;
      z-index: 2;
   }
   &__sub-item {
      padding: 5px 0;
   }
   &__sub-link {
      &:hover {
         text-decoration: underline;
      }
   }
}

.list-item {
   display: inline-block;
   margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
   transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateY(30px);
}
</style>
