import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const propertyData=ref<any[]>([]);
    
  return { propertyData }
})
