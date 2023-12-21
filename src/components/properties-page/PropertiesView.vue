<script setup lang="ts">
import Navbar from "../element/Navbar.vue";
import Footer from "../element/Footer.vue";
import PropertiesPossibilities from "./Property-element/PropertiesPossibilities.vue";
import ClientDetailForm from "./Property-element/ClientDetailForm.vue";
import ExploreProperty from "../element/ExploreProperty.vue";
</script>
<template>
  <div>
    <!-- navbar -->
    <div>
      <Navbar />
    </div>
    <!-- Properties card -->
    <div>
      <PropertiesPossibilities />
    </div>
    <!-- client detail form -->
    <div class="container mx-auto mt-20">
      <ClientDetailForm />
    </div>
    <div>
      <ExploreProperty />
    </div>
    <!-- footer -->
    <div>
      <Footer />
    </div>
  </div>
</template>