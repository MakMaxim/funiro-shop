<template>
   <section class="tips">
      <div class="tips__container _container">
         <h2 class="tips__title">Tips & Tricks</h2>
         <div class="tips__slider slider-tips">
            <swiper
               class="slider-tips__body"
               :observer="true"
               :observeParents="true"
               :slidesPerView="3"
               :spaceBetween="32"
               :watchOverflow="true"
               :loop="true"
               :speed="800"
               :pagination="{
                  el: '.slider-tips__dotts',
                  clickable: true,
               }"
               :navigation="{
                  nextEl: '.slider-tips .slider-arrow_next',
                  prevEl: '.slider-tips .slider-arrow_prev',
               }"
               :modules="modules"
               :breakpoints="{
                  '320': {
                     slidesPerView: 1.1,
                     spaceBetween: 15,
                  },
                  '768': {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  '992': {
                     slidesPerView: 3,
                     spaceBetween: 32,
                  },
               }"
            >
               <swiper-slide
                  v-for="tipsSlider in TIPSSLIDER"
                  :key="tipsSlider.id"
               >
                  <div class="slider-tips__slide">
                     <a class="slider-tips__image ibg">
                        <img
                           :src="
                              require('@/assets/images/tips/' +
                                 tipsSlider.image)
                           "
                           alt="Image"
                        />
                     </a>
                     <div class="slider-tips__content">
                        <a class="slider-tips__title">
                           {{ tipsSlider.title }}
                        </a>
                        <div class="slider-tips__text">
                           {{ tipsSlider.text }}
                        </div>
                     </div>
                  </div>
               </swiper-slide>
            </swiper>

            <div class="slider-tips__dotts"></div>
            <div class="slider-tips__arrows slider-arrows">
               <button type="button" class="slider-arrow slider-arrow_prev">
                  <img
                     src="@/assets/images/icons/Arrow-slider-white.svg"
                     alt="arrow_prev"
                  />
               </button>
               <button type="button" class="slider-arrow slider-arrow_next">
                  <img
                     src="@/assets/images/icons/Arrow-slider-white.svg"
                     alt="arrow_next"
                  />
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import { mapGetters } from "vuex";

export default {
   name: "SectionTipsSlider",
   components: {
      Swiper,
      SwiperSlide,
   },
   computed: {
      ...mapGetters(["TIPSSLIDER"]),
   },
   setup() {
      return {
         modules: [Pagination, Navigation],
      };
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.tips {
   @include adaptiv-value("padding-top", 44, 30, 1);
   @include adaptiv-value("padding-bottom", 44, 30, 1);
   &__container {
   }
   &__title {
      text-align: center;
   }
   &__slider {
   }
}

.slider-tips {
   position: relative;
   &__body {
      overflow: hidden;
      @include adaptiv-value("margin-left", -32, -15, 1);
      @include adaptiv-value("margin-right", -32, -15, 1);
      @include adaptiv-value("padding", 32, 15, 1);
   }
   &__slide {
      display: flex;
      flex-direction: column;
      transition: 0.3s;
      &:hover {
         box-shadow: 0 0 32px rgba(97, 97, 97, 0.2);
      }
   }
   &__image {
      padding: 0 0 251/391 * 100% 0;
      cursor: pointer;
   }
   &__content {
      display: flex;
      flex-direction: column;
      padding: 15px;
      flex: 1 1 auto;
      align-items: flex-start;
   }
   &__title {
      flex: 1 1 auto;
      font-family: "Gilroy Semibold";
      color: inherit;
      line-height: 120%;
      @include adaptiv-value("font-size", 24, 18, 1);
      transition: 0.3s;
      cursor: pointer;
      &:not(:last-child) {
         margin: 0 0 8px/24px * 1em 0;
      }
      &:hover {
         color: $darkOrangeColor;
      }
   }
   &__text {
      color: $grayColor;
      font-size: 14px;
      line-height: 150%;
   }
   &__dotts {
      @include adaptiv-value("padding-top", 8, 0, 1);
      justify-content: center;
   }
   &__arrows {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: calc(100% - 48px);
      left: 24px;
      z-index: 5;
      justify-content: space-between;
      @media (min-width: $md1 + px) {
         width: calc(100% + 48px);
         left: -24px;
      }
      @media (max-width: $md3 + px) {
         display: none;
      }
   }
}

.slider-arrow {
   border-radius: 50%;
   height: 48px;
   background-color: $orangeColor;
   transition: 0.3s;
   &:hover {
      background-color: $darkOrangeColor;
   }
}
</style>
