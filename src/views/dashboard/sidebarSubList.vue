<template>
  <div class="ml-1 w-40 z-40 fixed">
    <div :style="`height: ${1 + 2.5*computedCurSmallIconHoverIdx}rem; width:10rem;`" 
          class="w-40"></div>
    <div >
      <div v-for="(n,idx) in ['1','2','3','4']" :kzey="idx" 
          class="small-icon-hover-list relative  ml-16   h-12 p-0.5 pb-0.5  w-32 bg-blue-400 "
          :class="[isSidebarSmallIconHovered ? `hover:delay-300 ease-in-out`:`hidden`,]">
            <div class="flex justify-start items-center cursor-pointer 
                      hover:bg-slate-300 
                        hover:delay-200
                        hover:opacity-50
                        hover:shadow-lg
                        ease-in-out
                        h-10">
                {{ n }}
            </div>
      </div>
    </div>
 </div>
</template>

<script setup> 
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


</script>