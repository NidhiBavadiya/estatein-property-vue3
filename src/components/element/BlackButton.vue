<script setup lang="ts">

const props = defineProps({
  name: String
})


</script>

<template>
  <div>
    <button class="border border-darkgray  md:bg-black  text-white px-5 py-3 rounded-xl whitespace-nowrap">{{ name }}</button>
  </div>
</template>