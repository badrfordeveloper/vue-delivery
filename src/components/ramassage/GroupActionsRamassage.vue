<script setup>
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  isShowItem: {
    type: Boolean,
    required: true,
  },
})


const emit = defineEmits([
  'update:isShowItem',
  'fetchItems',
  'resetSelectedRows',
])


let defaultItem = {
  frais_ramasseur: '',
  ramasseur_id: '',
}

const ramasseurs = await $api('/api/ramasseurs').then(response => response.data)

const itemData = ref(structuredClone(toRaw(defaultItem)))

const loadingItem = ref(false)
const ramassages_ids = ref()


watch(
  () => props.items,
  newItems => {
    // Map the items to their IDs
    ramassages_ids.value = newItems.map(item => item.id)
  },
  { 
    immediate: true, // Run immediately on component mount
    deep: true,      // Not needed for array replacement, but good for deep changes
  },
)

const onReset = () => {
  emit('update:isShowItem', false)
  emit('fetchItems')
  emit('resetSelectedRows')
  itemData.value = structuredClone(toRaw(defaultItem))
}

const isActionGestionnaire = can('gestionnaire', 'action')


const loadingUpdate = ref(false)

const parametrerGroupColis = async () => {
  loadingUpdate.value = true
  await $api({
    method: "POST",
    url: "/api/parametrerGroupRamassage",
    data: {
      ids: ramassages_ids.value,
      ramasseur_id: itemData.value.ramasseur_id,
      frais_ramasseur: itemData.value.frais_ramasseur,
    },
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
        onReset()
      }
      loadingUpdate.value = false
    })
    .catch(error => {
      loadingUpdate.value = false
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)
      }else{
        toast.error("something wrong")
      }
    })
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
   
    :model-value="props.isShowItem"
    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />


    <!-- 👉 Billing Address -->
    <AppCardActions
      title="Affectation des Ramassages"
      style="overflow: scroll;max-height: 90vh;"
      :loading="loadingItem"
      no-actions
    >
      <VCard>
        <VCardText v-if="isActionGestionnaire">
          <VRow>  
            <VCol
              md="6"
              cols="12"
            >
              <AppSelect
                v-model="itemData.ramasseur_id"
                placeholder="Ramasseurs"
                label="Ramasseurs"
                :items="ramasseurs"
                clearable
                clear-icon="tabler-x"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="itemData.frais_ramasseur"
                :rules="[requiredValidator]"
                label="Frais de ramasseur"
                type="number"
                placeholder="Frais de ramasseur"
              />
            </VCol>
          </VRow>

          <VRow>
            <!-- 👉 Form Actions -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-center gap-4"
            >
              <VBtn
                :loading="loadingUpdate"
                @click="parametrerGroupColis"
              >
                Envoyer 
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </appcardactions>
  </VDialog>
</template>

<style scoped>
.parms-btn {
  z-index: 2;
}
</style>


