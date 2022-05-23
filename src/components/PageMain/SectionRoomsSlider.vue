<template>
   <section class="rooms">
      <div class="rooms__container _container">
         <div class="rooms__body">
            <h2 class="rooms__title">50+ Beautiful rooms inspiration</h2>
            <div class="rooms__text">
               Our designer already made a lot of beautiful prototipe of rooms
               that inspire you
            </div>
            <a href="" class="rooms__button btn" @click.prevent="">
               Explore More
            </a>
         </div>

         <div class="rooms__slider slider-rooms">
            <swiper
               class="slider-rooms__body"
               :observer="true"
               :observeParents="true"
               :slidesPerView="auto"
               :spaceBetween="24"
               :watchOverflow="true"
               :preloadImages="false"
               :parallax="true"
               :loop="true"
               :speed="800"
               :loopAdditionalSlides="5"
               :pagination="{
                  el: '.slider-rooms__dotts',
                  clickable: true,
               }"
               :navigation="{
                  nextEl: '.slider-rooms .slider-arrow_next',
                  prevEl: '.slider-rooms .slider-arrow_prev',
               }"
               :modules="modules"
            >
               <swiper-slide
                  v-for="roomsSlider in ROOMSSLIDER"
                  :key="roomsSlider.id"
               >
                  <div class="slider-rooms__slide">
                     <div class="slider-rooms__image ibg">
                        <img
                           :src="
                              require('@/assets/images/rooms/' +
                                 roomsSlider.image)
                           "
                           alt="Image"
                        />
                     </div>
                     <a
                        href="#"
                        class="slider-rooms__info"
                        data-swiper-parallax-opacity="0"
                        data-swiper-parallax-y="-100%"
                     >
                        <div class="slider-rooms__content">
                           <div class="slider-rooms__label label">
                              <div class="label__number">
                                 {{ roomsSlider.number }}
                              </div>
                              <div class="label__line"></div>
                              <div class="label__text">
                                 {{ roomsSlider.text }}
                              </div>
                           </div>
                           <div class="slider-rooms__title">
                              {{ roomsSlider.title }}
                           </div>
                        </div>
                        <div class="slider-rooms__arrow btn">
                           <img
                              src="@/assets/images/icons/Arrow-white.svg"
                              alt="arrow"
                           />
                        </div>
                     </a>
                  </div>
               </swiper-slide>
            </swiper>

            <div class="slider-rooms__arrows slider-arrows">
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
            <div class="slider-rooms__dotts"></div>
         </div>
      </div>
   </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import { Pagination, Navigation, Parallax } from "swiper";
import { mapGetters } from "vuex";

export default {
   name: "SectionRoomsSlider",
   components: {
      Swiper,
      SwiperSlide,
   },
   computed: {
      ...mapGetters(["ROOMSSLIDER"]),
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

.rooms {
   background-color: $lightOrangeColor;
   @include adaptiv-value("padding-top", 44, 30, 1);
   @include adaptiv-value("padding-bottom", 44, 30, 1);
   &__container {
      @media (min-width: $md2 + px) {
         display: flex;
      }
   }
   &__body {
      flex: 0 0 465/1240 * 100%;
      position: relative;
      z-index: 5;
      align-self: center;
      @media (min-width: $md2 + px) {
         @include adaptiv-value("padding-right", 80, 30, 1);
      }
      @media (max-width: $md2 + px) {
         margin-bottom: 30px;
      }
   }
   &__title {
      &:not(:last-child) {
         margin: 0 0 8px/40px * 1em 0;
      }
   }
   &__text {
      font-family: "Gilroy Medium";
      line-height: 150%;
      color: $darkGreyColor;
      &:not(:last-child) {
         margin: 0 0 24px/16px * 1em 0;
      }
   }
   &__button {
      min-width: 180px;
      min-height: 48px;
   }
   &__slider {
      min-width: 0;
      align-self: flex-start;
   }
}

.swiper-slide-active {
   .slider-rooms__image {
      height: 100%;
   }
}

.slider-rooms {
   position: relative;
   &__body {
      overflow: visible;
      position: relative;
      width: 372px;
      @media (min-width: $md2 + px) {
         &::before {
            content: "";
            background-color: $lightOrangeColor;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            z-index: 2;
            transform: translate(-100%, 0px);
         }
      }
      @media (max-width: $md4 + px) {
         width: 100%;
      }
   }
   &__slide {
      position: relative;
      overflow: hidden;
      @include adaptiv-value("height", 585, 400, 1);
   }
   &__image {
      transition: 0.4s;
      height: 100%;
      @media (min-width: $md3 + px) {
         height: 83%;
      }
   }
   &__content {
      display: flex;
      flex-direction: column;
      color: inherit;
      max-width: 240px;
      background-color: #f1f1f1;
      @include adaptiv-value("padding", 32, 15, 1);
   }
   &__info {
      position: absolute;
      @include adaptiv-value("left", 24, 15, 1);
      @include adaptiv-value("bottom", 24, 15, 1);
      display: flex;
   }
   &__label {
      display: flex;
   }
   &__title {
      font-family: "Gilroy Semibold";
      font-size: 28px;
      line-height: 120%;
   }
   &__arrow {
      align-self: end;
      width: 18px;
      height: 48px;
   }
   &__arrows {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: calc(100% + 48px);
      left: -24px;
      z-index: 5;
      justify-content: space-between;
      @media (max-width: $md2 + px) {
         width: calc(100% - 48px);
         left: 24px;
      }
   }
   &__dotts {
      position: absolute;
      bottom: 30px;
      width: 100%;
      left: 396px;
      z-index: 5;
      @media (max-width: $md2 + px) {
         position: absolute;
         bottom: 30px;
         width: 100%;
         @include adaptiv-value("left", 770, 480, 1);
         z-index: 5;
      }
      @media (max-width: $md3 + px) {
         justify-content: center;
         padding-top: 15px;
      }
   }
}

.label {
   display: grid;
   color: $darkGreyColor;
   gap: 8px;
   align-items: center;
   justify-content: start;
   grid-template-columns: auto 27px auto;
   font-family: "Gilroy Medium";
   line-height: 150%;
   &:not(:last-child) {
      margin: 0 0 8px 0;
   }
   &__number {
   }
   &__line {
      height: 1px;
      background-color: $darkGreyColor;
   }
   &__text {
   }
}
</style>
