<script setup>
import { VForm } from 'vuetify/components/VForm'

const props = defineProps({
  rolePermissions: {
    type: Object,
    required: false,
    default: () => ({
      name: '',
      permissions: [],
    }),
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'update:rolePermissions',
  'fetchRoles',
])



const permissions = await $api('/api/permissions').then(response => response.data)





const role = ref('')
const method = ref('POST')
const refPermissionForm = ref()
const selectedPermissions =  ref([])


watch(
  () => props.rolePermissions, // Watch props.rolePermissions
  newVal => {
    if (newVal && (newVal.permissions?.length || newVal.name != "") ) {
      method.value="PUT"
      role.value = newVal.name
      selectedPermissions.value = newVal.permissions.map(permission => permission.name)
    }else{
      method.value="POST"
    }
  },
  { immediate: true }, // Ensure the watcher runs on mount
)


const onSubmit = async () => {
  const { valid } = await refPermissionForm.value.validate()
  if (valid) {
    let url = "/api/roles"
    if (method.value == "PUT") {
      url = "/api/roles/" + props.rolePermissions.id
    }
    $api({
      method: method.value,
      url,
      data: {
        name: role.value,
        permissions: selectedPermissions.value,
      },
    })
      .then(async response => {
        if (response.status === 200) {
          toast.success(response.data)
          emit('fetchRoles')
          emit('update:isDialogVisible', false)
          refPermissionForm.value?.reset()
        }
      }).catch(error => {
        // Check if there are validation errors
        if (error.response && error.response.status === 422) {
          // Laravel validation errors are typically in the `data.errors` object
          const errors = error.response.data.errors

          // Loop through the errors and show each in a toast
          for (let field in errors) {
            toast.error(`${field}: ${errors[field].join(', ')}`)
          }
        }
      })
  

  }
}

const onReset = () => {
  emit('update:isDialogVisible', false)
  refPermissionForm.value?.reset()
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    :model-value="props.isDialogVisible"
    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          {{ props.rolePermissions.name ? 'Edit' : 'Add New' }} Role
        </h4>
        <p class="text-body-1 text-center mb-6">
          Set Role Permissions
        </p>

        <!-- 👉 Form -->
        <VForm ref="refPermissionForm">
          <!-- 👉 Role name -->
          <AppTextField
            v-model="role"
            :rules="[requiredValidator]"
            label="Role Name"
            placeholder="Enter Role Name"
          />

          <h5 class="text-h5 my-6">
            Role Permissions
          </h5>

          <!-- 👉 Role Permissions -->

          <VTable class="permission-table text-no-wrap mb-6">
            <!-- 👉 Other permission loop -->
            <template
              v-for="permission in permissions"
              :key="permission.subject"
            >
              <tr>
                <td>
                  <h6 class="text-h6">
                    {{ permission.subject }}
                  </h6>
                </td>
                <template
                  v-for="action in permission.actions"
                  :key="action.value"
                >
                  <td>
                    <div class="d-flex justify-end">
                      <VCheckbox
                        v-model="selectedPermissions"
                        :value="action.value"
                        :label="action.label"
                      />  
                    </div>
                  </td>
                </template>
              </tr>
            </template>
          </VTable>

          <!-- 👉 Actions button -->
          <div class="d-flex align-center justify-center gap-4">
            <VBtn @click="onSubmit">
              Submit
            </VBtn>

            <VBtn
              color="secondary"
              variant="tonal"
              @click="onReset"
            >
              Cancel
            </VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.permission-table {
  td {
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 0.5rem;

    .v-checkbox {
      min-inline-size: 4.75rem;
    }

    &:not(:first-child) {
      padding-inline: 0.5rem;
    }

    .v-label {
      white-space: nowrap;
    }
  }
}
</style>
