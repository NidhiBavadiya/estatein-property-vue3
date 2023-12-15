<script setup lang="ts">
 
</script>

<template>
  <div class="bg-primary border border-[#262626]">
     <div class="mx-36">
      <nav class=" w-full">
        <div class="flex  items-center justify-between mx-auto py-4">
          <img src="../../assets/images/compny_main_logo.svg" alt="logo" />
          <div class="md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse hidden" >
            <button class="border border-[#262626]  md:bg-black  md:px-5 md:py-2 rounded">Contact</button>
            <!-- nav-button show in responsive -->
          </div>
          <div class="relative">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-white"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          <div 
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 absolute min-w-min -left-28 md:left-0 dropdown_menu md:relative"
            id="navbar-sticky"
          >
            <ul
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  "
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded  border border-transparent hover:border-[#262626]  md:hover:bg-black  md:px-5 md:py-2  dark:text-white  dark:hover:text-white"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded border border-transparent hover:border-[#262626]  md:hover:bg-black  md:px-5 md:py-2  dark:text-white  dark:hover:text-white"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded  border border-transparent hover:border-[#262626]  md:hover:bg-black  md:px-5 md:py-2  dark:text-white  dark:hover:text-white"
                  >Properties</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded border border-transparent hover:border-[#262626]  md:hover:bg-black  md:px-5 md:py-2 dark:text-white  dark:hover:text-white"
                  >Services</a
                >
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
