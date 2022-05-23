<template>
   <section class="main-slider">
      <div class="main-slider__wrapper">
         <div class="main-slider__container _container">
            <div class="main-slider__body">
               <div class="main-slider__content content">
                  <div class="content__title">
                     High-Quality Furniture Just For You
                  </div>
                  <div class="content__text">
                     Our furniture is made from selected and best quality
                     materials that are suitable for your dream home
                  </div>
                  <a href="" class="content__button btn" @click.prevent=""
                     >Shop Now</a
                  >
               </div>
               <div class="main-slider__slider slider-main">
                  <div class="slider-main__controls controls-slider-main">
                     <div class="controls-slider-main__dotts"></div>
                     <div class="controls-slider-main__arrows slider-arrows">
                        <button
                           type="button"
                           class="slider-arrow slider-arrow_prev"
                        >
                           <img
                              src="@/assets/images/icons/Arrow-slider-white.svg"
                              alt="arrow_prev"
                           />
                        </button>
                        <button
                           type="button"
                           class="slider-arrow slider-arrow_next"
                        >
                           <img
                              src="@/assets/images/icons/Arrow-slider-white.svg"
                              alt="arrow_next"
                           />
                        </button>
                     </div>
                  </div>

                  <swiper
                     class="slider-main__body"
                     :slidesPerView="1"
                     :spaceBetween="32"
                     :parallax="true"
                     :loop="true"
                     :speed="800"
                     :loopAdditionalSlides="5"
                     :pagination="{
                        el: '.controls-slider-main__dotts',
                        clickable: true,
                     }"
                     :navigation="{
                        nextEl: '.slider-main .slider-arrow_next',
                        prevEl: '.slider-main .slider-arrow_prev',
                     }"
                     :modules="modules"
                  >
                     <swiper-slide
                        v-for="mainSlider in MAINSLIDER"
                        :key="mainSlider.id"
                     >
                        <div class="slider-main__slide">
                           <div class="slider-main__image ibg">
                              <img
                                 :src="
                                    require('@/assets/images/main-slider/' +
                                       mainSlider.image)
                                 "
                                 alt="Image"
                              />
                           </div>
                           <a
                              href="#"
                              data-swiper-parallax-opacity="0"
                              data-swiper-parallax-x="-100%"
                              class="slider-main__content"
                           >
                              <div class="slider-main__title">
                                 {{ mainSlider.title }}
                              </div>
                              <div class="slider-main__text">
                                 {{ mainSlider.text }}
                              </div>
                              <div class="slider-main__price">
                                 {{ mainSlider.price }}
                              </div>
                           </a>
                        </div>
                     </swiper-slide>
                  </swiper>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { mapGetters } from "vuex";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";
// import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Pagination, Navigation, Parallax } from "swiper";

export default {
   name: "SectionMainSlider",
   components: {
      Swiper,
      SwiperSlide,
   },
   computed: {
      ...mapGetters(["MAINSLIDER"]),
   },
   setup() {
      return {
         modules: [Pagination, Navigation, Parallax],
      };
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.main-slider {
   &__wrapper {
      background-color: $lightOrangeColor;
   }
   &__container {
      padding-top: 16px;
      @media (max-width: $md2 + px) {
         padding-top: 12px;
      }
      @media (max-width: $md3 + px) {
         padding-top: 8px;
      }
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
   &__body {
      position: relative;
      z-index: 2;
      @media (min-width: $md2 + px) {
         display: flex;
      }
   }
   &__content {
      flex: 1 0 494 / 1240 * 100%;
      align-self: flex-start;
      @include adaptiv-value("margin-bottom", 80, 15, 1);
      @media (max-width: $md2 + px) {
         margin: 0px -15px;
      }
   }
   &__slider {
      flex: 1 1 auto;
      min-width: 0;
      align-self: flex-end;
      @media (min-width: $md2 + px) {
         padding-left: 32px;
      }
   }
}

.content {
   position: relative;
   z-index: 5;
   padding-left: 15px;
   padding-right: 15px;
   background: rgba(255, 255, 255, 0.72);
   @include adaptiv-value("padding-top", 60, 5, 1);
   @include adaptiv-value("padding-bottom", 60, 5, 1);
   @media (min-width: $md2 + px) {
      @include adaptiv-value("padding", 60, 1, 1);
   }
   &__title {
      @include adaptiv-value("font-size", 56, 24, 1);
      font-family: "Gilroy Bold";
      line-height: 120%;
      &:not(:last-child) {
         margin: 0 0 16px/56px * 1em 0;
      }
   }
   &__text {
      @include adaptiv-value("font-size", 20, 16, 1);
      font-family: "Gilroy Medium";
      line-height: 150%;
      color: $grayColor;
      &:not(:last-child) {
         margin: 0 0 48px/20px * 1em 0;
      }
   }
   &__button {
      @include adaptiv-value("min-height", 78, 45, 1);
      @include adaptiv-value("font-size", 20, 16, 1);
      width: 100%;
   }
}

.slider-main {
   @media (min-width: $md2 + px) {
      align-items: stretch;
   }
   &__controls {
      margin: 0 0 20px 0;
   }
   &__body {
      overflow: visible;
      @media (min-width: $md2 + px) {
         @include adaptiv-value("width", 934, 290, 1);
         transform: translate(-23.55%);
      }
      @media (max-width: $md2 + px) {
         margin: 0px -15px;
      }
   }
   &__slide {
   }
   &__image {
      padding: 0 0 59.1% 0;
   }
   &__content {
      min-width: 295px;
      max-height: 350px;
      overflow: auto;
      color: inherit;
      display: flex;
      flex-direction: column;
      @include adaptiv-value("padding", 24, 15, 1);
      background: rgba(255, 255, 255, 0.9);
      @media (min-width: $md3 + px) {
         position: absolute;
         min-width: 350px;
         @include adaptiv-value("right", 40, 0, 1);
         @include adaptiv-value("bottom", 40, 0, 1);
      }
   }
   &__title {
      @include adaptiv-value("font-size", 28, 22, 1);
      font-family: "Gilroy Semibold";
      line-height: 120%;
      &:not(:last-child) {
         margin: 0 0 4px/28px * 1em 0;
      }
   }
   &__text {
      line-height: 150%;
      color: $grayColor;
      &:not(:last-child) {
         margin: 0 0 8px/16px * 1em 0;
      }
   }
   &__price {
      font-family: "Gilroy Semibold";
      background: url("@/assets/images/icons/Arrow-slider-black.svg") right
         no-repeat;
      line-height: 150%;
      @include adaptiv-value("font-size", 20, 16, 1);
   }
}

.controls-slider-main {
   display: flex;
   align-items: center;
   &__dotts {
      flex: 1 1 auto;
   }
   &__arrows {
   }
}
</style>
