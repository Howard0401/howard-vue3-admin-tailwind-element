<template>
<div class="bg-slate-200 h-full w-full">
  <div class="w-full flex h-dash_board_header">
        <!-- Sidebar -->
    <sidebarVue/>
    <headerVue/>
  </div>

  <sidebarSubListVue/>
  <tablerVue/>
        <!-- @mousemove="isSidebarSmallIconHovered = false; resetCurSmallIconHoverIdx();" -->
        <!-- @mouseover="isSidebarSmallIconHovered = false; resetCurSmallIconHoverIdx();"> -->
        <!-- @mouseleave="isSidebarSmallIconHovered = false; resetCurSmallIconHoverIdx();" -->

  <div class="h-full w-full bg-black" @click="resetCurSmallIconHoverIdx();isSidebarSmallIconHovered = false;"></div>


  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  isHeaderOpen,isSidebarClicked,
  isSidebarSmallIconHovered,
  isCurSmallIconHoverIdx,
  resetCurSmallIconHoverIdx,
  hoveSidebarrSmallIcon,
  computedCurSmallIconHoverIdx,
  // getCurSmallIconHoverIdx,
  onClickSidebar,
  tableData,
} from '../../hooks/dashboard'

import headerVue from './header.vue';
import sidebarVue from './sidebar.vue'
import sidebarSubListVue from './sidebarSubList.vue'
import tablerVue from './table.vue'




</script>