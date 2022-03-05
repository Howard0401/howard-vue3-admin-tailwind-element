<template>
<div class="bg-slate-200 h-full w-full">
  <div class="w-full flex h-dash_board_header">

    <!-- Sidebar -->
    <div class="h-screen bg-yellow-200 w-sidbar block "
       :class="isHeaderOpen ? 'duration-300':'duration-100 translate-x-dash_board_trans'">
      <div class="dashboard-logo h-dash_board_header border-b border-black">AAA</div>

      <!-- sidebar list -->
      <div :class="isSidebarClicked ? '':''"
            class="border-black border-b border-x h-sidbar_dropdown_list w-80">
          <div class="flex">
            <div class="h-sidbar_dropdown_list w-60">item1</div>
            <div class="h-sidbar_dropdown_list w-20 
                        flex justify-center
                        cursor-pointer bg-slate-400" @click="onClickSidebar()"
                 :class="isHeaderOpen ? `` : `hidden` " >xxx</div>
          </div>
      </div>

      <!-- sidebar items -->
      <div class="w-sidbar" :class="isSidebarClicked ? 'duration-[90ms] bg-green-100 h-12' : 
                                                  'duration-100 h-0 text-yellow-200 text-[0px]'">
        <div class="flex justify-start items-center
                    ml-4 h-12">
            subprop
        </div>
      </div>
      <div class="w-sidbar" :class="isSidebarClicked ? 'duration-[90ms] bg-green-100 h-12' : 
                                                  'duration-100 h-0 text-yellow-200 text-[0px]'">
        <div class="flex justify-start items-center
                    ml-4 h-12">
            subprop
        </div>
      </div>
      <div class="w-sidbar" :class="isSidebarClicked ? 'duration-[90ms] bg-green-100 h-12' : 
                                                  'duration-100 h-0 text-yellow-200 text-[0px]'">
        <div class="flex justify-start items-center
                    ml-4 h-12">
            subprop
        </div>
      </div>
    </div>

    <!-- Header leftside ICON for open/close Sidebar -->
    <div @click="isHeaderOpen = !isHeaderOpen" 
          class="bg-green-200 w-20"
          :class="isHeaderOpen? 'duration-200': 'translate-x-dash_board_trans duration-200'">
          <div class="flex justify-center h-dash_board_header items-center cursor-pointer ">OO</div>     
    </div>

    <!-- Header right side -->
    <div class="w-full flex justify-end h-dash_board_header">
      <div class="flex h-dash_board_header items-center mr-4">end</div> 
    </div>

    
  </div>

 
  <div class="h-20 flex w-full bg-green-300">
    <div class="-z-10" :class="isHeaderOpen ? `w-main_content_left_normal duration-100`:
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
  


  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const isHeaderOpen = ref(true)
const isSidebarClicked = ref(true)
const onClickSidebar = () => {
  isSidebarClicked.value = !isSidebarClicked.value
}


interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>