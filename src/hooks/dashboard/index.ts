import { computed, ref, toRefs } from "vue"

export const isHeaderOpen = ref(true)
export const isSettingOpen = ref(true)
export const isSidebarClicked = ref(false)
export const isSidebarSmallIconHovered = ref(false)
export const isCurSmallIconHoverIdx = ref(0)
export const computedCurSmallIconHoverIdx = computed(() => {
  return isCurSmallIconHoverIdx.value
})
export const resetCurSmallIconHoverIdx = () => {
  isCurSmallIconHoverIdx.value = -999
}

export const hoveSidebarrSmallIcon = () =>  {
  isSidebarSmallIconHovered.value = true;
}

// export const computedCurSmallIconHoverIdx = computed(() => {
//   return 
// })

export const onClickSidebar = ():void => {
  console.log("onClickSidebar()",)
  isSidebarClicked.value = !isSidebarClicked.value
}


export const itemList = [
  {
    prop: "prop1",
  },
  {
    prop: "prop2",
  },
  {
    prop: "prop3",
  }
]

export interface User {
  date: string
  name: string
  address: string 
}

export const search = ref('')
export const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

export const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}

export const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

export const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    itemList: itemList,
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
    itemList: itemList,
  }, 
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
    itemList: itemList,
  }, 
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
    itemList: itemList,
  }, 
  
]