<template>
  <div class="bg-slate-600 h-full w-full">
      <div class="h-28"></div>
      <div class="flex justify-center">
        <div class="h-login-page-block w-80 bg-gray-50 rounded-xl">
            <div class="h-6"></div>
            <!-- Login Page -->
            <div class="h-12 flex justify-center 
                        text-3xl text-gray-800">
              Login Page
            </div>

            <div class="h-8"></div>

            <!-- Admin -->
            <div class="flex justify-center">
              <div class="">
                <div class="h-6 ml-2 text-gray-600 text-sm font-medium">
                    Account
                </div>
                <input class="w-60 h-8 
                              rounded-sm pl-2
                              caret-black
                              text-blue-600
                              bg-gray-50
                              border-b-gray-600 border-b" type="text" />
                <div class="h-10"></div>
                <div class="h-6 ml-2 text-gray-600 text-sm font-medium">
                    Password
                </div>
                <div class="flex justify-center">
                  <input class="w-60 h-8 
                                caret-black
                                text-blue-600
                                rounded-sm pl-2
                                bg-gray-50
                                border-b-gray-600 border-b" type="password" />
                  <div class="-ml-10 cursor-pointer">ICON</div>
                </div>              
                
              </div>
            </div> 

            <div class="h-12"></div>

            <!-- Login btn -->
            <div class="flex justify-center">
              <button  class="h-12 w-36 bg-green-300  text-gray-600 ">
                Login
              </button>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

input:focus {
  outline: none;
}

</style>