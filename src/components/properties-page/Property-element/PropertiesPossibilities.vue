<script setup lang="ts">
import PropertiesCard from "../../element/PropertiesCard.vue";
import { ref } from "vue";
import PurpleButton from "../../element/PurpleButton.vue";
import { watch, computed } from "vue";
const searchData = ref<any>("");
const discoverPropertys = ref([
  {
    imgUrl: "/assets/images/property_icon1.svg",
    cardTitle: "Seaside Serenity Villa",
    cardDetail:
      "Wake up to the soothing melody of waves. This beachfront villa offers...",
    price: "30,50,000",
    location: "Ahmadabad",
    buildYear: "2022",
    dataCount1:'4-Bedroom',
    dataCount2:'3-Bathroom'
  },
  {
    imgUrl: "/assets/images/property_icon2.svg",
    cardTitle: "Metropolitan Haven",
    cardDetail:
      "Immerse yourself in the energy of the city. This modern apartment in the heart...",
    price: "25,50,000",
    location: "surat",
    buildYear: "2020",
    dataCount1:'4-Bedroom',
    dataCount2:'3-Bathroom'
  },
  {
    imgUrl: "/assets/images/property_icon3.svg",
    cardTitle: "Rustic Retreat Cottage",
    cardDetail:
      "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
    price: "35,50,000",
    location: "gandhinager",
    buildYear: "2023",
    dataCount1:'4-Bedroom',
    dataCount2:'3-Bathroom'
  }
]);
const locationVals = ref([{city:"Ahmadabad", value:'Ahmadabad'}, {city:"surat", value:'surat'},{city:"gandhinager", value:'gandhinager'}]);
const pricingRanges = ref(["30,50,000", "25,50,000", "35,50,000"]);
const buildYears = ref(["2023", "2020", "2022", "2019"]);

const location = ref('')
const priceRange = ref('')
const buildYear = ref('')


const locationChange = computed(() => {
  const result = discoverPropertys.value.filter(item =>
     item.location.includes(location.value) && item.cardTitle.includes(searchData.value) && item.buildYear.includes(buildYear.value) && item.price.includes(priceRange.value)
  );
  return result;
})

</script>
<template>
  <div>
    <div class="bg-secondary">
      <div class="container mx-auto py-36 relative mb-40">
        <p class="font-semibold text-5xl mb-3.5">Find Your Dream Property</p>
        <p
          class="font-medium text-lightgray text-lg"
        >Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey</p>
        <div class="absolute -bottom-9 left-40 w-3/4 bg-secondary m-2 rounded-lg">
          <div class="bg-black rounded-lg m-2 ml-3 w-[98%] px-5 py-3 flex justify-between">
            <input type="text" class="py-3 w-1/2 px-5 bg-black rounded-lg" v-model="searchData" />
            <PurpleButton name="Find Property" @click="searchFun" />
          </div>
        </div>
      </div>
    </div>

    <!-- filter -->
    <div class="container mx-auto">
      <div class="mb-40 flex justify-evenly">


        <select
          id="location_value"
          class="w-[250px] py-3 px-5 bg-black rounded-lg border border-darkgray"
          v-model="location"
        >
          <option :value="locationVal.value" v-for="locationVal in locationVals" :key="locationVal">{{ locationVal.city }}</option>
        </select>

        <select
          id="pricing_range"
          class="w-[250px] py-3 px-5 bg-black rounded-lg border border-darkgray"
          v-model="priceRange"
        >
          <option :value="pricingRange" v-for="pricingRange in pricingRanges" :key="pricingRange">{{ pricingRange }}</option>
        </select>

        <select
          id="build_year"
          class="w-[250px] py-3 px-5 bg-black rounded-lg border border-darkgray"
          v-model="buildYear"
        >
          <option :value="buildYear" v-for="buildYear in buildYears" :key="buildYear">{{ buildYear }}</option>
        </select>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="mr-40 mb-20">
        <img src="../../../assets/images/multi_star_icon.svg" alt="star" />
        <p class="text-5xl mb-5">Discover a World of Possibilities</p>
        <p
          class="text-lg text-lightgray"
        >Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home</p>
      </div>
      <div class="flex">
        <div v-for="discoverProperty in locationChange" :key="discoverProperty.cardTitle">
          <PropertiesCard :propertyInfo="discoverProperty" />
        </div>
      </div>
    </div>
  </div>
</template>