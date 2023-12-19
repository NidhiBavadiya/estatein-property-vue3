<script setup lang="ts">
import ClientForm from '@/components/element/ClientForm.vue';

</script>
<template>
    <div>
        <div class="mr-40 mb-20">
            <img src="../../../assets/images/multi_star_icon.svg" alt="star" />
            <p class="text-5xl mb-5">Let's Make it Happen</p>
            <p
            class="text-lg text-lightgray"
            >Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.</p>
        </div>
        <div class="my-20">
            <ClientForm />
        </div>
    </div>
</template>