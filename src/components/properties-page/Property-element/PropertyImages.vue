<script setup lang="ts">
import { ref, computed } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { useCounterStore } from "../../../stores/counter";

interface cardimages {
  id?: any;
  image?: any;
}
interface Props {
  cardimages: cardimages[];
}
const props = defineProps<Props>();

console.log("cardimages", props.cardimages);

const storeImages = useCounterStore();
const currentSlide = ref();

const data = computed(() => {
  return {
    currentSlide: 0 as any // Initialize with the appropriate type
  };
});

function slideTo(val: any) {
  currentSlide.value = val;
}
</script>
<template>
  <div class="bg-primary p-10 border border-darkgray rounded-lg">
    <Carousel
      id="thumbnails"
      :items-to-show="8"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
      class="mb-5"
    >
      <!-- v-for="slide in 10" :key="slide" -->
      <Slide v-for="(propertyImg, index) in props.cardimages" :key="index">
        <div class="carousel__item" @click="slideTo(index - 1)">
          <img :src="propertyImg.image" alt />
        </div>
      </Slide>
    </Carousel>

    <Carousel id="gallery" :items-to-show="3" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="propertyImg in props.cardimages" :key="propertyImg.id">
        <div class="carousel__item">
          <img :src="propertyImg.image" alt class="h-[400px] px-2" />
        </div>
      </Slide>
      <template #addons>
        <pagination />
      </template>
    </Carousel>
  </div>
</template>