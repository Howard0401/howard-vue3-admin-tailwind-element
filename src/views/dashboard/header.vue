<template>
      <!-- Header leftside ICON for open/close Sidebar -->
    <div @click="isHeaderOpen = !isHeaderOpen; isSidebarClicked = false; isSidebarSmallIconHovered = false;
                 resetCurSmallIconHoverIdx();isSidebarSmallIconHovered = false;" 
          class="bg-green-200 w-20"
          :class="isHeaderOpen? 'duration-200': 'translate-x-dash_board_trans duration-200'">
          <div class="flex justify-center h-dash_board_header items-center cursor-pointer ">OO</div>     
    </div>
    
    <!-- Header right side -->
    <div class="w-full flex justify-end h-dash_board_header"
                @click="resetCurSmallIconHoverIdx();isSidebarSmallIconHovered = false;">
      <div class="flex h-dash_board_header items-center mr-4">end</div> 
    </div>
</template>

<script setup lang="ts">

import {
  isHeaderOpen,
  isSidebarClicked,
  isSidebarSmallIconHovered,
  resetCurSmallIconHoverIdx,
} from '../../hooks/dashboard'


</script>