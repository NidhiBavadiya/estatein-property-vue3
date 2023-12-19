<script setup lang="ts">
import BlackButton from "../../element/BlackButton.vue";

const clientQuestions = [
  {
    Question: "How do I search for properties on Estatein?",
    Answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria."
  },
  {
    Question: "What documents do I need to sell my property through Estatein?",
    Answer:
      "Find out about the necessary documentation for listing your property with us."
  },
  {
    Question: "How can I contact an Estatein agent?",
    Answer:
      "Discover the different ways you can get in touch with our experienced agents."
  }
];
</script>
<template>
  <div>
    <div class="flex justify-between">
      <div class="mr-40">
        <img src="../../../assets/images/multi_star_icon.svg" alt=" " />
        <p class="text-5xl mb-5">Frequently Asked Questions</p>
        <p
          class="text-lg text-lightgray"
        >Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
      </div>
      <BlackButton name="View All FAQ’s" />
    </div>
    <div class="flex">
      <div v-for="clientQuestion in clientQuestions" :key="clientQuestion">
        <div class="border border-darkgray p-14 max-w-[512px] rounded-lg mx-3">
          <h4 class="text-2xl font-semibold mb-7">{{ clientQuestion.Question }}</h4>
          <p class="text-lg text-lightgray font-medium mb-7">{{ clientQuestion.Answer }}</p>
          <BlackButton name="Read More" />
        </div>
      </div>
    </div>
  </div>
</template>