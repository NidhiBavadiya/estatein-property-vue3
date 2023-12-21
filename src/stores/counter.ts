import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const propertyData=ref<any[]>([]);
  const messageData=ref<any[]>([]);
  
  const discoverPropertys = ref([
    {
      id:1,
      imgUrl: "/assets/images/property_icon1.svg",
      cardTitle: "Seaside Serenity Villa",
      cardDetail:
        "Wake up to the soothing melody of waves. This beachfront villa offers...",
      price: "30,50,000",
      location: "Ahmadabad",
      buildYear: "2022",
      dataCount1: "4-Bedroom",
      dataCount2: "3-Bathroom"
    },
    {
      id:2,
      imgUrl: "/assets/images/property_icon2.svg",
      cardTitle: "Metropolitan Haven",
      cardDetail:
        "Immerse yourself in the energy of the city. This modern apartment in the heart...",
      price: "25,50,000",
      location: "surat",
      buildYear: "2020",
      dataCount1: "4-Bedroom",
      dataCount2: "3-Bathroom"
    },
    {
      id:3,
      imgUrl: "/assets/images/property_icon3.svg",
      cardTitle: "Rustic Retreat Cottage",
      cardDetail:
        "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
      price: "35,50,000",
      location: "gandhinager",
      buildYear: "2023",
      dataCount1: "4-Bedroom",
      dataCount2: "3-Bathroom"
    }
  ]);

  const propertyImgs = [{id:'1', image:'/assets/images/sea-side-img.svg'},
                        {id:'1', image:'/assets/images/sea-side-img1.svg'},
                        {id:'1', image:'/assets/images/sea-side-img2.svg'},
                        {id:'1', image:'/assets/images/sea-side-img3.svg'},
                        {id:'1', image:'/assets/images/sea-side-img4.svg'},
                        {id:'1', image:'/assets/images/sea-side-img5.svg'},
                        {id:'1', image:'/assets/images/sea-side-img6.svg'},
                        {id:'1', image:'/assets/images/sea-side-img7.svg'},
                        {id:'1', image:'/assets/images/sea-side-img8.svg'},

                        {id:'2', image:'/assets/images/property_icon2.svg'},

                        {id:'3', image:'/assets/images/property_icon3.svg'},                  
]

const propertyDeatils=[
  {id:1, imgUrl:'/assets/images/property_icon1.svg',cardTitle:'Seaside Serenity Villa',cardDetail:'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',dataCount1:'4-Bedroom',dataCount2:'3-Bathroom',price:'15,50,000'},
  {id:2, imgUrl:'/assets/images/property_icon2.svg',cardTitle:'Metropolitan Haven',cardDetail:'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',dataCount1:'2-Bedroom',dataCount2:'2-Bathroom',price:'15,50,000'},
  {id:3, imgUrl:'/assets/images/property_icon3.svg',cardTitle:'Rustic Retreat Cottage',cardDetail:'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',dataCount1:'3-Bedroom',dataCount2:'3-Bathroom',price:'15,50,000'},
]

  return { propertyData ,discoverPropertys ,messageData , propertyImgs ,propertyDeatils}
})
