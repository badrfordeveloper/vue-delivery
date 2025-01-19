<script setup>
const headers = [
  {
    title: 'Role',
    key: 'name',
  },
  {
    title: 'guard_name',
    key: 'guard_name',
  },
  {
    title: 'actions',
    key: 'actions',
  },
]

const selectedStatus = ref()

const selectedRows = ref([])
const isAddRoleDialogVisible = ref(false)
const isEditRoleDialogVisible = ref(false)
const roleLoading = ref(false)

const rolePermissions = ref({
  name: '',
  permissions: [],
})

const editPermission = value => {
  rolePermissions.value = {
    name: value.name,
    permissions: value.permissions.map(permission => permission.name),
  }
  isEditRoleDialogVisible.value = true

}

const status = ref([
  {
    title: 'web',
    value: 'web',
  },
  {
    title: 'guard',
    value: 'guard',
  },
])


// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}



const {
  data: productsData, error, statusCode, isFetching,
  execute: fetchProducts,
} = await useApi(createUrl('/api/roles', {
  query: {
    guard_name: selectedStatus,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}),  
)


// Handle response
/* if (!error.value) {
  console.log('Request successful:', response)
  productsData.value = data.value
  responseMessage.value = 'Data fetched successfully!'
} else {
  console.error('Error during request:', error.value)
  responseMessage.vslue =
      error.value.response?.status === 401
        ? 'Unauthorized! Please log in again.'
        : 'An error occurred. Please try again.'
}
console.log(error.value)
console.log(isFetching.value)
console.log(statusCode.value) */



const products = computed(() => productsData.value.items)
const totalProduct = computed(() => productsData.value.total)

const resolveStatus = statusMsg => {
  if (statusMsg === 'web')
    return {
      text: 'web',
      color: 'success',
    }
  if (statusMsg === 'guard')
    return {
      text: 'guard',
      color: 'warning',
    }

}
</script>

<template>
  <div>
    <!-- 👉 products -->
    <VCard
      title="Filters"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppSelect
              v-model="selectedStatus"
              placeholder="Status"
              :items="status"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <div class="d-flex flex-wrap gap-4 ma-6">
        <VSpacer />
        <div class="d-flex gap-4 flex-wrap align-center">
          <AppSelect
            v-model="itemsPerPage"
            :items="[5, 10, 20, 25, 50]"
          />

          <VBtn
            color="primary"
            prepend-icon="tabler-plus"
            @click="isAddRoleDialogVisible = true"
          >
            Ajouter Role
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:model-value="selectedRows"
        v-model:page="page"
        :loading="isFetching"
        :headers="headers"
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- status -->
        <template #item.guard_name="{ item }">
          <VChip
            v-bind="resolveStatus(item.guard_name)"
            density="default"
            label
            size="small"
          />
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="editPermission(item)">
            <VIcon icon="tabler-edit" />
          </IconBtn>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalProduct"
          />
        </template>
      </VDataTableServer>
    </VCard>
  </div>
  <AddEditRoleDialog v-model:is-dialog-visible="isAddRoleDialogVisible" />

  <AddEditRoleDialog
    v-model:is-dialog-visible="isEditRoleDialogVisible"
    v-model:role-permissions="rolePermissions"
  />
</template>
