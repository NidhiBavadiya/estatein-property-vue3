<script setup lang="ts">

const props = defineProps({
  name: String
})


</script>

<template>
  <div>
    <button class="border border-[#262626]  md:bg-black  text-white px-5 py-3 rounded-xl">{{ name }}</button>
  </div>
</template>