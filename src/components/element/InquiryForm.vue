<script setup lang="ts">
import { ref, onMounted } from "vue";
import PurpleButton from "./PurpleButton.vue";
import { useCounterStore } from "../../stores/counter";

const storeData = useCounterStore();

const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const phone = ref<string>("");
const selectProperty = ref<string>("");
const message = ref<string>("");

function sendMessage() {
  const msgVal = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    selectProperty: selectProperty.value,
    message: message.value
  };
  console.log("msg value", msgVal);
  storeData.messageData.push(msgVal);
  console.log("new array ", storeData.messageData);
  localStorage.setItem("property", JSON.stringify(storeData.messageData));
}
onMounted(() => {
  const value = localStorage.getItem("property");
  const propertyValue = JSON.parse(value);
  console.log("object", propertyValue);
});
</script>

<template>
  <div>
    <div class="flex justify-between w-full">
      <div class="grid w-1/2">
        <label for="first_name">First Name</label>
        <input
          class="border border-darkgray py-3 w-full px-5 bg-black rounded-lg"
          id="first_name"
          type="text"
          v-model="firstName"
        />
      </div>
      <div class="grid w-1/2">
        <label for="last_name">Last Name</label>
        <input
          class="border border-darkgray py-3 w-full px-5 bg-black rounded-lg"
          id="last_name"
          type="text"
          v-model="lastName"
        />
      </div>
    </div>
    <div class="flex justify-between w-full mt-4">
      <div class="grid w-1/2">
        <label for="email">Email</label>
        <input
          class="border border-darkgray py-3 w-full px-5 bg-black rounded-lg"
          id="email"
          type="text"
          v-model="email"
        />
      </div>
      <div class="grid w-1/2">
        <label for="phone">Phone</label>
        <input
          class="border border-darkgray py-3 w-full px-5 bg-black rounded-lg"
          id="phone"
          type="text"
          v-model="phone"
        />
      </div>
    </div>

    <div class="flex justify-between mt-4">
      <div class="grid w-full">
        <label for="selected_property">Selected Property</label>
        <input
          class="border border-darkgray py-3 w-full px-5 bg-black rounded-lg"
          id="selected_property"
          type="text"
          v-model="selectProperty"
        />
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

    <div class="flex justify-between mt-4 items-center">
      <div>
        <input type="checkbox" name="fgdfgdfgdf" id="checkval" />
        <label for="checkval">I agree with Terms of Use and Privacy Policy</label>
      </div>
      <PurpleButton name="Send Your Message" @click="sendMessage" />
    </div>
  </div>
</template>