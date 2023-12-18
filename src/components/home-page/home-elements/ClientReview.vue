<script setup lang="ts">
import BlackButton from "../../element/BlackButton.vue";

const clientReviews = [
  {
    clientTitle: "Exceptional Service!",
    clientReview:
      "Our experience with Estatein was outstanding. Their teams dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    imgUrl: "/assets/images/user_profile.svg",
    clientName: "Wade Warren",
    clientCity: "USA, California"
  },
  {
    clientTitle: "Efficient and Reliable",
    clientReview:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldnt be happier with the results.",
    imgUrl: "/assets/images/user_profile1.svg",
    clientName: "Emelie Thomson",
    clientCity: "USA, Florida"
  },
  {
    clientTitle: "Trusted Advisors",
    clientReview:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    imgUrl: "/assets/images/user_profile2.svg",
    clientName: "John Mans",
    clientCity: "USA, Nevada"
  }
];
</script>
<template>
  <div>
    <div>
      <div class="flex justify-between">
        <div class="mr-40">
          <img src="../../../assets/images/multi_star_icon.svg" alt=" " />
          <p class="text-5xl mb-5">What Our Clients Say</p>
          <p
            class="text-lg text-lightgray"
          >Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
        </div>
        <BlackButton name="View All Testimonials" />
      </div>
      <div class="flex mt-20">
        <div v-for="clientReview in clientReviews" :key="clientReview.clientTitle">
          <div class="border border-darkgray p-14 max-w-[512px] rounded-lg mx-3">
            <div class="flex">
              <div
                class="w-[44px] h-[44px] rounded-full bg-primary border border-darkgray flex justify-center items-center m-1"
                v-for="i in 5"
                :key="i"
              >
                <img src="../../../assets/images/star.svg" alt="star">
              </div>
            </div>
            <div class="card-body mt-10">
              <p class="text-2xl font-semibold mb-3.5">{{ clientReview.clientTitle }}</p>
              <p class="text-lg font-medium">{{clientReview.clientReview }}</p>
              <div class="flex mt-10">
                <img
                  :src=" clientReview.imgUrl "
                  alt="client"
                  class="h-[60px] w-[60px] rounded-full mr-3"
                />
                <div>
                  <p class="font-medium text-xl">{{ clientReview.clientName }}</p>
                  <p class="font-medium text-lg text-lightgray">{{ clientReview.clientCity }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>