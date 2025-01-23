<script setup>
import { can } from '@layouts/plugins/casl'

definePage({
  meta: {
    action: 'list',
    subject: 'role',
  },
})

const headers = [
  {
    title: 'Role',
    key: 'name',
    sortable: false,
  },
  {
    title: 'actions',
    key: 'actions',
    sortable: false,
  },
]

const searchName = ref()

const isAddRoleDialogVisible = ref(false)
const isEditRoleDialogVisible = ref(false)
const roleLoading = ref(false)

const rolePermissions = ref({
  name: '',
  permissions: [],
})

const editPermission = value => {
  rolePermissions.value = { ...value }
  isEditRoleDialogVisible.value = true
}




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
  data: rolesData, error, statusCode, isFetching,
  execute: fetchRoles,
} = await useApi(createUrl('/api/roles', {
  query: {
    name: searchName,
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
  rolesData.value = data.value
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



const roles = computed(() => rolesData.value.items)
const totalRoles = computed(() => rolesData.value.total)

</script>

<template>
  <div>
    <!-- 👉 roles -->
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
          <AppTextField
            v-model="searchName"
            placeholder="Recherche role"
            style="inline-size: 15.625rem;"
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
          v-if="can('create','role')"
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
        :items="roles"
        :items-length="totalRoles"
        class="text-no-wrap"
        @update:options="updateOptions"
      >


        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn  v-if="can('update','role')"  @click="editPermission(item)">
            <VIcon icon="tabler-edit" />
          </IconBtn>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalRoles"
          />
        </template>
      </VDataTableServer>
    </VCard>
  </div>
  <AddEditRoleDialog
    v-model:is-dialog-visible="isAddRoleDialogVisible"
    @fetch-roles="fetchRoles"
  />

  <AddEditRoleDialog
    v-model:is-dialog-visible="isEditRoleDialogVisible"
    v-model:role-permissions="rolePermissions"
    @fetch-roles="fetchRoles"
  />
</template>
