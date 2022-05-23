<template>
   <section class="advantages">
      <div class="advantages__container _container">
         <div
            class="advantages__item"
            v-for="advantage in ADVANTAGES"
            :key="advantage.id"
         >
            <div class="advantages__icon">
               <img
                  :src="
                     require('@/assets/images/advantages/' + advantage.image)
                  "
                  alt="image"
               />
            </div>
            <h4 class="advantages__title">{{ advantage.title }}</h4>
            <div class="advantages__text">{{ advantage.text }}</div>
         </div>
      </div>
   </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
   name: "SectionAdvantages",
   computed: {
      ...mapGetters(["ADVANTAGES"]),
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.advantages {
   @include adaptiv-value("padding-top", 88, 20, 1);
   @include adaptiv-value("padding-bottom", 88, 20, 1);
   &__container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
   }
   &__item {
      display: inline-grid;
      padding: 15px 0;
      grid-template: auto auto / 85px 1fr;
      @media (max-width: $md2 + px) {
         min-width: 280px;
      }
      @media (max-width: $md3 + px) {
         grid-template: auto auto / auto 1fr;
      }
   }
   &__icon {
      text-align: center;
      align-self: center;
      grid-row: span 2;
      @media (max-width: $md3 + px) {
         padding: 0 15px 0 0;
      }
   }
   &__title {
      font-size: 18px;
      font-family: "Gilroy Semibold";
      line-height: 150%;
      margin: 0 0 2px/18px * 1em 0px;
   }
   &__text {
      line-height: 150%;
      color: $grayColor;
   }
}
</style>
