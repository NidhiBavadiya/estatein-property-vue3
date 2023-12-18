<script setup lang="ts">
import PurpleButton from "../../element/PurpleButton.vue";
import BlackButton from "../../element/BlackButton.vue";
import CountCard from "../../element/CountCard.vue";

const countData = [
  {
    count: "200+",
    title: "Happy Customers"
  },
  {
    count: "10k+",
    title: "Properties For Clients"
  },
  {
    count: "16+",
    title: "Years of Experience"
  }
];
</script>

<template>
  <div class="flex bg-primary">
    <!-- information -->
    <div class="w-1/2 pl-36 pr-20 py-36 mb-5 bg-black">
      <p class="text-6xl font-semibold mb-6">
        Discover Your Dream
        <br />Property with Estatein
      </p>
      <p
        class="text-lg font-medium text-lightgray"
      >Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
      <div class="flex my-14">
        <BlackButton name="Learn More " class="mr-5" />
        <PurpleButton name="Browse Properties" />
      </div>
      <div class="flex">
        <div v-for="countval in countData" :key="countval">
          <CountCard :count="countval.count" :title="countval.title" class="m-3"/>
        </div>
      </div>
    </div>
    <!-- display image -->
    <div class="w-1/2 relative pl-36">
      <img src="/src/assets/images/main_building.svg" alt="main-img" />
      <img src="/src/assets/images/company_sign.svg" alt="sign" class="absolute top-32 -left-20" />
    </div>
  </div>
</template>
