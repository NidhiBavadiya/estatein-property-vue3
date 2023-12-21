<script setup lang="ts">
import BlackButton from "../../element/BlackButton.vue";
import PropertiesCard from "../../element/PropertiesCard.vue";
import { useCounterStore } from "../../../stores/counter";
import { useRouter } from "vue-router";

const storeDeatils = useCounterStore();
const router = useRouter();

function propertydetail(id: any) {
  router.push({ path: "/properties/properties-details", query: { id: id } });
}
function viewProperty() {
  router.push("/properties");
}
</script>
<template>
  <div>
    <div class="flex justify-between">
      <div class="mr-40">
        <img src="../../../assets/images/multi_star_icon.svg" alt />
        <p class="text-5xl mb-5">Featured Properties</p>
        <p
          class="text-lg text-lightgray"
        >Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
      </div>
      <BlackButton name="View All Properties" @click="viewProperty" />
    </div>
    <div class="flex mt-20">
      <div v-for="propertyDeatil in storeDeatils.propertyDeatils" :key="propertyDeatil">
        <PropertiesCard :propertyInfo="propertyDeatil" @viewDetail="propertydetail" />
      </div>
    </div>
  </div>
</template>