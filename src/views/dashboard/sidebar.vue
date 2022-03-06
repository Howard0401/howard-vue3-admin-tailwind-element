<template>
    <div class="h-screen bg-yellow-200 w-sidbar block "
       :class="isHeaderOpen ? 'duration-300 ease-in-out':'duration-100 translate-x-dash_board_trans'">
      <div class="dashboard-logo h-dash_board_header border-b border-black mt-4">
        <div class="h-dash_board_header items-center">AAA</div> 
      </div>

      <div v-for="(n, i) in tableData" :key="i">
          <!-- sidebar list -->
          <div :class="isSidebarClicked ? '':''"
                class="border-black border-b border-x h-sidbar_dropdown_list w-80">
              <div class="flex">
                <div class="flex justify-center items-center
                            w-16 ml-1 h-sidbar_dropdown_list ">item logo
                </div>
                <div class="flex justify-center items-center 
                            w-48 h-sidbar_dropdown_list">
                            item1
                </div>
                <div v-if="isHeaderOpen" 
                      class="flex justify-center items-center  
                            w-16 h-sidbar_dropdown_list cursor-pointer z-20" 
                      @click="onClickSidebar()"
                      :class="isHeaderOpen ? `` : `hidden` " >xxx
                </div>
                <div v-if="isHeaderOpen === false">
                <!-- @mouseenter="isSidebarSmallIconHovered = false;isCurSmallIconHoverIdx = i; isSidebarSmallIconHovered = true;"
                @mousemove="isSidebarSmallIconHovered = true; isCurSmallIconHoverIdx = i;" -->
                    <div class="flex justify-center items-center  
                            w-16 h-full cursor-pointer
                            hover:delay-200
                            hover:opacity-50
                            hover:shadow-lg
                            ease-in-out"
                            @click="resetCurSmallIconHoverIdx(); 
                            isCurSmallIconHoverIdx = i; 
                            isSidebarSmallIconHovered = true;">
                        smlogo
                    </div>
                </div>
              </div>
          </div>

          <!-- sidebar items -->
          <div class="w-sidbar" :class="isSidebarClicked ? 'duration-[90ms] bg-green-100 h-12' : 
                                                      'duration-100 h-0 text-yellow-200 text-[0px]'">
            <div class="flex justify-start items-center
                        ml-1 h-12
                        cursor-pointer">
                subprop
            </div>
          </div>
          <div class="w-sidbar" :class="isSidebarClicked ? 'duration-[90ms] bg-green-100 h-12' : 
                                                      'duration-100 h-0 text-yellow-200 text-[0px]'">
            <div class="flex justify-start items-center
                        ml-4 h-12
                        cursor-pointer">
                subprop
            </div>
          </div>
          <div class="w-sidbar" :class="isSidebarClicked ? 'duration-[90ms] bg-green-100 h-12' : 
                                                      'duration-100 h-0 text-yellow-200 text-[0px]'">
            <div class="flex justify-start items-center
                        ml-4 h-12
                        cursor-pointer">
                subprop
            </div>
          </div>
      </div>    
    </div>
</template>

<script setup>
import {
  isHeaderOpen,
  isSidebarClicked,
  isSidebarSmallIconHovered,
  isCurSmallIconHoverIdx,
  resetCurSmallIconHoverIdx,
  hoveSidebarrSmallIcon,
  computedCurSmallIconHoverIdx,
  // getCurSmallIconHoverIdx,
  onClickSidebar,
  tableData,
} from '../../hooks/dashboard'

</script>