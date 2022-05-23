<template>
   <article class="catalog__item catalog-item">
      <a href="#" class="catalog-item__image ibg">
         <img
            :src="require('@/assets/images/products/' + product_item.image)"
            alt="image"
         />
      </a>
      <div class="catalog-item__body">
         <div class="catalog-item__content">
            <h3 class="catalog-item__title">{{ product_item.title }}</h3>
            <div class="catalog-item__text">{{ product_item.text }}</div>
         </div>
         <div class="catalog-item__prices">
            <div class="catalog-item__price">Rp {{ product_item.price }}</div>
            <div
               class="catalog-item__price catalog-item__price_old"
               v-if="product_item.priceOld"
            >
               Rp {{ product_item.priceOld }}
            </div>
         </div>
         <div class="catalog-item__actions">
            <a
               href="#"
               class="catalog-item__addbtn btn"
               @click.prevent="addToCart"
            >
               Add to cart
            </a>
            <a class="catalog-item__likebtn btn">
               <img src="@/assets/images/icons/Like.svg" alt="like" />
               <div href="">Like</div>
            </a>
         </div>
      </div>
   </article>
</template>

<script>
export default {
   name: "CatalogItem",
   props: {
      product_item: {
         type: Object,
         required: true,
      },
   },
   methods: {
      addToCart() {
         this.$emit("addToCart", this.product_item);
      },
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.catalog-item {
   display: flex;
   flex-direction: column;
   background-color: #f4f5f7;
   &__image {
      padding: 0px 0px 301px/285px * 100% 0px;
   }
   &__body {
      padding: 16px 16px 30px 16px;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
   }
   &__content {
      flex: 1 1 auto;
   }
   &__title {
      font-family: "Gilroy Semibold";
      font-size: 24px;
      line-height: 120%;
      color: $mainColor;
      margin-bottom: 8px;
   }
   &__text {
      font-family: "Gilroy Medium";
      line-height: 150%;
      color: $grayColor;
      margin-bottom: 8px;
   }
   &__prices {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      justify-content: space-between;
   }
   &__price {
      font-family: "Gilroy Semibold";
      font-size: 20px;
      line-height: 150%;
      color: $mainColor;
      &_old {
         font-family: "Gilroy Regular";
         font-size: 16px;
         color: #b0b0b0;
         margin-left: 16px;
         text-decoration: line-through;
      }
   }
   &__actions {
      display: flex;
   }
   &__addbtn {
      flex: 1 1 50%;
      color: white;
      padding: 10px 0;
      background-color: $orangeColor;
      transition: 0.4s;
      &:hover {
         background-color: $darkOrangeColor;
      }
   }
   &__likebtn {
      flex: 1 1 50%;
      justify-content: space-around;
      color: white;
      padding: 10px 0;
      margin-left: 30px;
      background-color: $orangeColor;
      transition: 0.4s;
      &:hover {
         background-color: $darkOrangeColor;
      }
   }
}
</style>
