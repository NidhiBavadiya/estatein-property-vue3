<script setup lang="ts">
import BlackButton from '../../element/BlackButton.vue';
import PropertiesCard from '../../element/PropertiesCard.vue';

const propertyDeatils=[
    {imgUrl:'/assets/images/property_icon1.svg',cardTitle:'Seaside Serenity Villa',cardDetail:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',dataCount1:'4-Bedroom',dataCount2:'3-Bathroom',price:'15,50,000'},
    {imgUrl:'/assets/images/property_icon2.svg',cardTitle:'Metropolitan Haven',cardDetail:'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',dataCount1:'2-Bedroom',dataCount2:'2-Bathroom',price:'15,50,000'},
    {imgUrl:'/assets/images/property_icon3.svg',cardTitle:'Rustic Retreat Cottage',cardDetail:'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',dataCount1:'3-Bedroom',dataCount2:'3-Bathroom',price:'15,50,000'},
    ]
</script>
<template>
    <div>
        <div class="flex justify-between">
            <div class=" mr-40">
                <img src="../../../assets/images/multi_star_icon.svg" alt="">
                <p class="text-5xl mb-5">Featured Properties</p>
                <p class="text-lg text-lightgray" >Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
            </div>
            <BlackButton name="View All Properties" />
        </div>
        <div class="flex mt-20">
            <div v-for="propertyDeatil in propertyDeatils" :key="propertyDeatil">
                <PropertiesCard :propertyInfo="propertyDeatil" />
            </div>
        </div>
    </div>
</template>