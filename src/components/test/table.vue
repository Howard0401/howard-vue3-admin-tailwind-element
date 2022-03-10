<template>
<div class="w-full h-full bg-slate-200">
    <div class="flex h-dash_board_body w-full bg-gray-600 -z-20"
        @click="resetCurSmallIconHoverIdx();isSidebarSmallIconHovered = false;"
        >
    <div class="" :class="isHeaderOpen ? `w-main_content_left_normal duration-100`:
                                `w-main_content_left_expand duration-100`"></div>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Name" prop="name" />
      // <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div :class="isHeaderOpen ? `w-40 duration-100`:`w-20 duration-100`"></div>
        <p></p>
    </div>
</div>

</template>
<script setup lang="ts">
import {
  isHeaderOpen,
  isSidebarClicked,
  isSidebarSmallIconHovered,
  resetCurSmallIconHoverIdx,
  itemList,
  tableData,
  handleDelete,
  handleEdit,
  search,
  filterTableData,
  onClickSidebar,
} from '../../hooks/dashboard'
// import * as d3 from "https://cdn.skypack.dev/d3@7";
// https://stackoverflow.com/questions/46739003/d3-vuejs-typescript-how-to-import-d3-js-library
import * as d3 from "d3";
    	const p = d3.select("body")
    		.selectAll("p");
    		
        p.text("Hello World");
        //修改段落的颜色和字体大小
        p.style("color","red")
        .style("font-size","72px");
</script>