<script setup lang="ts">
import PurpleButton from '../element/PurpleButton.vue';
interface propertyInfo{
    imgUrl:any,
    cardTitle?: String,
    cardDetail?: String,
    dataCount1?: String,
    dataCount2?: String,
    price?: String,    
}

interface Props {
    propertyInfo:propertyInfo
}

const props = defineProps<Props>()
</script>
<template>
    <div>
        <div class="border border-darkgray p-10 max-w-[512px] rounded-lg  mx-3">
            <img :src=" props?.propertyInfo?.imgUrl" alt="property" class="pb-7">
          <div class="card-body">
            <h4 class="mb-2 text-2xl"> {{ props?.propertyInfo?.cardTitle }}</h4>
            <p class="text-lightgray text-lg">{{ props?.propertyInfo?.cardDetail }} <a href="">Read More</a></p>
            <div class="flex my-8">
                <div class="bg-primary  border border-darkgray rounded-2xl py-2 px-3.5 w-max mr-2.5">{{props?.propertyInfo?.dataCount1}}</div>
                <div class="bg-primary  border border-darkgray rounded-2xl py-2 px-3.5 w-max mr-2.5">{{props?.propertyInfo?.dataCount2 }}</div>
                <div class="bg-primary  border border-darkgray rounded-2xl py-2 px-3.5 w-max">Villa</div>
            </div>
            <div class="flex justify-between items-center">
                <p class="text-lightgray text-lg">Price <br> <span class="text-2xl text-white"> ₹{{ props?.propertyInfo?.price }}</span></p>
                <PurpleButton name='View Property Details'/>
            </div>
          </div>
        </div>
    </div>  
</template>