<script setup lang="ts">
import Navbar from "../element/Navbar.vue";
import HomeMainInfo from "./home-elements/HomeMainInfo.vue";
import CompanyInfoCard from "../element/CompanyInfoCard.vue";
import PropertiesDetail from "./home-elements/PropertiesDetail.vue";
import ClientReview from "./home-elements/ClientReview.vue";
import ClientQuestions from "./home-elements/ClientQuestions.vue";

const companyInfoCards = [
  { title: "Find Your Dream Home", imgUrl: "/assets/images/shop_icon.svg" },
  { title: "Unlock Property Value", imgUrl: "/assets/images/camera_icon.svg" },
  {
    title: "Effortless Property Management",
    imgUrl: "/assets/images/building_icon.svg"
  },
  {
    title: "Smart Investments, Informed Decisions",
    imgUrl: "/assets/images/sun_icon.svg"
  }
];
</script>

<template>
  <div>
    <!-- header more info -->
    <div class="flex justify-center py-4 bg-header-img text-lg">
      <p class="mr-6">✨ Discover Your Dream Property with Estatein</p>
      <a class="underline">Learn More</a>
    </div>
    <!-- navbar -->
    <div>
      <Navbar />
    </div>
    <!-- display main info  -->
    <div>
      <HomeMainInfo />
    </div>
    <!-- company card -->
    <div class="flex justify-center">
      <div v-for="companyInfoCard  in companyInfoCards" :key="companyInfoCard">
        <CompanyInfoCard :companyInfo="companyInfoCard" />
      </div>
    </div>
    <!-- Featured Properties -->
    <div class="container mx-auto mt-36">
      <PropertiesDetail />
    </div>
    <!-- What Our Clients Say -->
    <div class="container mx-auto mt-36">
      <ClientReview />
    </div>
    <!-- <div>
      <ClientQuestions />
    </div> -->
  </div>
</template>
