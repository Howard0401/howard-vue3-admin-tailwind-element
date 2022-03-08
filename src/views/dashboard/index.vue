<template>
<div class="h-full w-full min-w-full_screen min-h-full_screen bg-black" >
  <div class="w-full flex h-dash_board_header">
        <!-- Sidebar -->
    <SidebarVue/>
    <HeaderVue/>
  </div>

  <SidebarSubListVue/>


  <!--<tablerVue/>-->
  <router-view @click="isSettingOpen = false"
               class=""></router-view>
        <!-- @mousemove="isSidebarSmallIconHovered = false; resetCurSmallIconHoverIdx();" -->
        <!-- @mouseover="isSidebarSmallIconHovered = false; resetCurSmallIconHoverIdx();"> -->
        <!-- @mouseleave="isSidebarSmallIconHovered = false; resetCurSmallIconHoverIdx();" -->

  <!--<div class="h-full w-full bg-black" @click="resetCurSmallIconHoverIdx();isSidebarSmallIconHovered = false;"></div>-->


</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
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
  isSettingOpen,
} from '../../hooks/dashboard'

import HeaderVue from './header.vue';
import SidebarVue from './sidebar.vue'
import SidebarSubListVue from './sidebarSubList.vue'
// import tablerVue from './table.vue'




</script>