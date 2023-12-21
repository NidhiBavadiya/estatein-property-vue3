<script setup lang="ts">
import Navbar from "../element/Navbar.vue";
import Footer from "../element/Footer.vue";
import PropertyImages from "../properties-page/Property-element/PropertyImages.vue";
import InquiryForm from "../element/InquiryForm.vue";
import BlackButton from "../element/BlackButton.vue";
import { useCounterStore } from "../../stores/counter";
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";

const storeArray = useCounterStore();
const storeImages = useCounterStore();
const route = useRoute();
const detailvalue = ref();
const cardImages = ref();

onMounted(() => {
  detailvalue.value = storeArray.discoverPropertys.filter(
    item => item.id == route.query.id
  );

  cardImages.value = storeImages.propertyImgs.filter(
    val => val.id == route.query.id
  );
  console.log("detail", detailvalue.value);
  console.log("images ", cardImages.value);
});
</script>
<template>
  <div>
    <div v-for="detailval in detailvalue" :key="detailval">
      <div>
        <Navbar />
      </div>
      <!-- property detail -->
      <div class="container mx-auto mt-24">
        <div>
          <div class="flex justify-between items-center mb-20">
            <p class="font-semibold text-3xl">
              {{detailval.cardTitle}}
              <span
                class="ml-4 text-lg font-medium border border-darkgray rounded-lg p-4"
              >{{detailval.location}}</span>
            </p>
            <p class="text-lg font-medium text-lightgray">
              price
              <br />
              <span class="font-semibold text-2xl text-white">₹{{detailval.price}}</span>
            </p>
          </div>
          <div>
            <PropertyImages :cardimages="cardImages" />
          </div>
        </div>
      </div>
      <!-- property description -->
      <div class="container mx-auto mt-32 flex">
        <div class="bg-primary border border-darkgray rounded-lg p-14 mr-7 w-1/2">
          <p>Description</p>Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.
          <div class="border-t border-darkgray flex justify-center">
            <p class="w-[33%] m-3 border-r border-darkgray">{{ detailval.dataCount1 }}</p>
            <p class="w-[33%] m-3 border-r border-darkgray">{{ detailval.dataCount2 }}</p>
            <p class="w-[33%] m-3">Area</p>
          </div>
        </div>
        <div class="bg-primary border border-darkgray rounded-lg p-14 w-1/2">
          <p>Key Features and Amenities</p>
          <div class="bg-primary border-l border-purple-500 px-6 py-5">
            <p>Expansive oceanfront terrace for outdoor entertaining</p>
          </div>
        </div>
      </div>
      <!-- Inquiry about villa -->
      <div class="container mx-auto mt-32 flex">
        <div class="w-1/2">
          <p class="font-semibold text-5xl">
            Inquire About Seaside
            <br />Serenity Villa
          </p>
          <p class="text-lg font-medium text-lightgray">
            Interested in this property? Fill out the form below, and our real
            <br />estate experts will get back to you with more details, including
            <br />scheduling a viewing and answering any questions you may have.
          </p>
        </div>
        <div class="w-1/2 bg-primary border border-darkgray rounded-lg p-14">
          <InquiryForm />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>