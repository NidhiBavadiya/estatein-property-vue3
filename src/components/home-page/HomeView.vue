<script setup lang="ts">
import Navbar from '../element/Navbar.vue';
import HomeMainInfo from './home-elements/HomeMainInfo.vue'
 
</script>

<template>
  <div>
    <!-- header more info -->
    <div class="flex justify-center py-4 bg-header-img text-lg">
      <p class="mr-6 ">✨ Discover Your Dream Property with Estatein</p>
      <a href="" class="underline">Learn More</a>
    </div>
    <!-- navbar -->
    <div>
        <Navbar/>
    </div>
    <!-- display main info  -->
    <div>
      <HomeMainInfo />
    </div>
  </div>
</template>
