<template>
   <main class="main">
      <section-main-slider />
      <section-advantages />
      <section-catalog />
      <section-rooms-slider />
      <section-tips-slider />
   </main>
</template>

<script>
import SectionCatalog from "@/components/PageMain/SectionCatalog";
import SectionMainSlider from "@/components/PageMain/SectionMainSlider";
import SectionAdvantages from "@/components/PageMain/SectionAdvantages";
import SectionRoomsSlider from "@/components/PageMain/SectionRoomsSlider";
import SectionTipsSlider from "@/components/PageMain/SectionTipsSlider";

export default {
   name: "MainBlock",
   components: {
      SectionCatalog,
      SectionMainSlider,
      SectionAdvantages,
      SectionRoomsSlider,
      SectionTipsSlider,
   },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/constants.scss";
</style>
