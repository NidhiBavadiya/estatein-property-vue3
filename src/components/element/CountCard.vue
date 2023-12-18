<script setup lang="ts">

const props = defineProps({
    count: String,
    title:String
})

</script>

<template>
  <div>
    <div class=" w-[239px] bg-primary border border-darkgray py-4 px-6 rounded-xl min-w-[239px]">
        <p class="text-4xl font-bold"> {{ count }}</p>
        <p class="text-lg font-medium text-lightgray">{{title}}</p>
    </div>
  </div>
</template>