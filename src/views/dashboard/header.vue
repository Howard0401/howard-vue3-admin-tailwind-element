<template>
      <!-- Header leftside ICON for open/close Sidebar -->
    <div @click="isHeaderOpen = !isHeaderOpen; 
                  isSidebarClicked = false; 
                  isSidebarSmallIconHovered = false; 
                  isSettingOpen = false;
                 resetCurSmallIconHoverIdx()
                 ;isSidebarSmallIconHovered = false;" 
          class="bg-green-200 w-sidebar_open_icon"
          :class="isHeaderOpen? 'duration-200': 'translate-x-dash_board_trans duration-200'">
          <div class="flex justify-center h-dash_board_header items-center cursor-pointer ">OO</div>     
    </div>
    
    <!-- Header right side -->
    <div class="w-full flex  h-dash_board_header"
                @click="resetCurSmallIconHoverIdx();
                isSidebarSmallIconHovered = false;">
       <div class="w-full h-dash_board_header"
            @click="isSettingOpen = false"></div>
      <div  class="flex h-dash_board_header w-10 
                  items-center bg-blue-200 z-[999] cursor-pointer"
            @click="isSettingOpen = !isSettingOpen">end</div> 
    </div>
    <div class="mt-12">
    <div v-if="isSettingOpen === true" @mouseover="isSettingOpen === true" class="w-0 h-60 flex justify-end ">
      <div class="-ml-40 mr-4 mt-1 rounded w-40 h-60 bg-green-300 z-[99999]">sfdsf</div>
    </div>
    </div>
</template>

<script setup lang="ts">

import {
  isHeaderOpen,
  isSidebarClicked,
  isSidebarSmallIconHovered,
  isSettingOpen,
  resetCurSmallIconHoverIdx,
} from '../../hooks/dashboard'


</script>