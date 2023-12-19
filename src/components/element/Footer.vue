<script setup lang="ts">
import FacebookIcon from '../svg-icons/FacebookIcon.vue';
import TwitterIcon from '../svg-icons/TwitterIcon.vue';
import LinkedinIcon from '../svg-icons/LinkedinIcon.vue';
import YoutubeIcon from '../svg-icons/YoutubeIcon.vue';
</script>
<template>
    <div>
        <div class="flex justify-between container mx-auto py-36">
            <div class="w-1/4">
                <img src="../../assets/images/compny_main_logo.svg" alt="logo" class="mb-7" />
                <input type="email" placeholder="Enter Your Email" class="border border-darkgray bg-transparent p-2 pl-5 rounded-lg min-w-[290px] text-lg text-lightgray">
            </div>
            <div class="flex justify-between w-3/4">
            <div>
                <label class=" text-lightgray">Home</label>
                <ul>
                <li class="font-medium text-xl py-2.5" >Hero Section</li>
                <li class="font-medium text-xl py-2.5">Features</li>
                <li class="font-medium text-xl py-2.5">Properties</li>
                <li class="font-medium text-xl py-2.5">Testimonials</li>
                <li class="font-medium text-xl py-2.5">FAQ’s</li>
                </ul>
            </div>
            <div>
                <label class="font-medium text-xl text-lightgray">About Us</label>
                <ul>
                <li class="font-medium text-xl py-2.5">Our Story</li>
                <li class="font-medium text-xl py-2.5">Our Works</li>
                <li class="font-medium text-xl py-2.5">How It Works</li>
                <li class="font-medium text-xl py-2.5">Our Team</li>
                <li class="font-medium text-xl py-2.5">Our Clients</li>
                </ul>
            </div>
            <div>
                <label class="font-medium text-xl text-lightgray">Properties</label>
                <ul>
                <li class="font-medium text-xl py-2.5">Portfolio</li>
                <li class="font-medium text-xl py-2.5">Categories</li>
                </ul>
            </div>
            <div>
                <label class="font-medium text-xl text-lightgray">Services</label>
                <ul>
                <li class="font-medium text-xl py-2.5">Valuation Mastery</li>
                <li class="font-medium text-xl py-2.5">Strategic Marketing</li>
                <li class="font-medium text-xl py-2.5">Negotiation Wizardry</li>
                <li class="font-medium text-xl py-2.5">Closing Success</li>
                <li class="font-medium text-xl py-2.5">Property Management</li>
                </ul>
            </div>
            <div>
                <label class="font-medium text-xl text-lightgray">Contact Us</label>
                <ul>
                <li class="font-medium text-xl py-2.5">Contact Form</li>
                <li class="font-medium text-xl py-2.5">Our Offices</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="bg-primary border border-darkgray py-4">
            <div class="container mx-auto flex justify-between items-center">
                <div class="flex">
                    <p class="mr-7">@2023 Estatein. All Rights Reserved.</p>
                    <p>Terms & Conditions</p>
                </div>
                <div class="flex">
                    <button class="h-[52px] w-[52px] mx-1 rounded-full bg-black flex justify-center items-center"><FacebookIcon /></button>
                    <button class="h-[52px] w-[52px] mx-1 rounded-full bg-black flex justify-center items-center"><LinkedinIcon /></button>
                    <button class="h-[52px] w-[52px] mx-1 rounded-full bg-black flex justify-center items-center"><TwitterIcon /></button>
                    <button class="h-[52px] w-[52px] mx-1 rounded-full bg-black flex justify-center items-center"><YoutubeIcon /></button>
                </div>
            </div>
        </div>
    </div>
</template>