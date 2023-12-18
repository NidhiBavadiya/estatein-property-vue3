<script setup lang="ts">
import RightSideArrow from "../svg-icons/RightSideArrow.vue"
 interface  companyInfo {
    title?:string
    imgUrl?:string
 }
 interface  Props {
    companyInfo : companyInfo,
 }
    const props = defineProps<Props>()

</script>
<template>
    <div class="mt-5 w-[400px] text-center">
        <div class="bg-primary border border-darkgray rounded-lg py-5 px-10 mx-2.5 relative">
            <RightSideArrow class="absolute right-2 top-2.5 w-[34px] h-[34px]" />
            <img :src="props.companyInfo.imgUrl" alt="" class="mx-auto">
            <p class="pt-5">{{ props?.companyInfo?.title }}</p>
        </div>
    </div>
</template>
