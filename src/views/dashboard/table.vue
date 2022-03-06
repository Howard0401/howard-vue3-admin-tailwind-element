<template>
    <div class="h-20 flex w-full bg-green-300 -z-20"
        @click="resetCurSmallIconHoverIdx();isSidebarSmallIconHovered = false;"
        >
    <div class="" :class="isHeaderOpen ? `w-main_content_left_normal duration-100`:
                                `w-main_content_left_expand duration-100`"></div>
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Name" prop="name" />
      <el-table-column align="right">
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
</script>