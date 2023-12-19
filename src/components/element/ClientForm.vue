<script setup lang="ts">
import { ref } from "vue";

import { useCounterStore } from "../../stores/counter";

const storeValue = useCounterStore();

const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const phone = ref<string>();
const location = ref<string>("");
const propertyType = ref<string>("");
const bathroomCount = ref<string>();
const bedroomsCount = ref<string>();
const budget = ref<string>("");
const contact = ref<string>();
const emailContact = ref<string>("");
const message = ref<string>("");

function AddValue() {
  const newValue = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    location: location.value,
    propertyType: propertyType.value,
    bathroomCount: bathroomCount.value,
    bedroomsCount: bedroomsCount.value,
    budget: budget.value,
    contact: contact.value,
    emailContact: emailContact.value,
    message: message.value
  };
  storeValue.propertyData.push(newValue);
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  phone.value = "";
  location.value = "";
  propertyType.value = "";
  bathroomCount.value = "";
  bedroomsCount.value = "";
  budget.value = "";
  contact.value = "";
  emailContact.value = "";
  message.value = "";
}
</script>
<template>
  <div class="border border-darkgray p-24 rounded-lg">
    <div class="flex justify-between w-full">
      <div class="grid w-1/4">
        <label for="first_name">First Name</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="first_name"
          type="text"
          v-model="firstName"
        />
      </div>
      <div class="grid w-1/4">
        <label for="last_name">Last Name</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="last_name"
          type="text"
          v-model="lastName"
        />
      </div>
      <div class="grid w-1/4">
        <label for="email">Email</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="email"
          type="text"
          v-model="email"
        />
      </div>
      <div class="grid w-1/4">
        <label for="phone">Phone</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="phone"
          type="text"
          v-model="phone"
        />
      </div>
    </div>

    <div class="flex justify-between mt-4">
      <div class="grid w-1/4">
        <label for="location">Preferred Location</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="location"
          type="text"
          v-model="location"
        />
      </div>
      <div class="grid w-1/4">
        <label for="property_type">Property Type</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="property_type"
          type="text"
          v-model="propertyType"
        />
      </div>
      <div class="grid w-1/4">
        <label for="bathrooms">No. of Bathrooms</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="bathrooms"
          type="text"
          v-model="bathroomCount"
        />
      </div>
      <div class="grid w-1/4">
        <label for="bedrooms">No. of Bedrooms</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="bedrooms"
          type="text"
          v-model="bedroomsCount"
        />
      </div>
    </div>

    <div class="flex justify-between mt-4">
      <div class="grid w-1/2">
        <label for="budget">Budget</label>
        <input
          class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
          id="budget"
          type="text"
          v-model="budget"
        />
      </div>
      <div class="grid w-1/2">
        <label for="contact">Preferred Contact Method</label>
        <div class="flex w-full">
          <input
            class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
            id="contact"
            type="text"
            v-model="contact"
          />
          <input
            class="border border-darkgray py-3 w-3/4 px-5 bg-black rounded-lg"
            id="contact"
            type="text"
            v-model="emailContact"
          />
        </div>
      </div>
    </div>
    <div class="grid w-full mt-4">
      <label for="message">Message</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        v-model="message"
        class="border border-darkgray py-3 px-5 bg-black rounded-lg"
      ></textarea>
    </div>
    <button
      class="bg-purple text-white px-5 py-3 rounded-xl whitespace-nowrap mt-4"
      @click="AddValue"
    >add</button>
  </div>
</template>