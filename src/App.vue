<template>
   <div class="wrapper">
      <header-block></header-block>
      <div class="router">
         <router-view></router-view>
      </div>
      <footer-block></footer-block>
   </div>
</template>

<script>
import HeaderBlock from "@/components/Header/HeaderBlock";
import FooterBlock from "@/components/Footer/FooterBlock";

import { mapActions } from "vuex";

export default {
   components: {
      HeaderBlock,
      FooterBlock,
   },
   created() {
      window.addEventListener("resize", this.handleResize);
   },
   mounted() {
      setInterval(() => {
         this.ibg();
      }, 200);
      this.handleResize();
   },
   unmounted() {
      window.removeEventListener("resize", this.handleResize);
   },
   // computed: {
   //    ...mapGetters(["WIDTH", "HEIGHT"]),
   // },
   methods: {
      ...mapActions(["MAKE_RESIZE_WIDTH", "MAKE_RESIZE_HEIGHT"]),
      handleResize() {
         this.MAKE_RESIZE_WIDTH();
         this.MAKE_RESIZE_HEIGHT();
      },
      ibg() {
         let ibg = document.querySelectorAll(".ibg");
         for (let i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector("img")) {
               ibg[i].style.backgroundImage =
                  "url(" +
                  ibg[i].querySelector("img").getAttribute("src") +
                  ")";
            }
         }
      },
   },
};
</script>

<style lang="scss">
@import "@/assets/styles/reset";
@import "@/assets/styles/constants.scss";

.router {
   flex: 1 1 auto;
   margin-top: 125px;
   @media (max-width: $md2 + px) {
      margin-top: 85px;
   }
   @media (max-width: $md3 + px) {
      margin-top: 65px;
   }
}
</style>
