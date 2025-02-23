<script setup>
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  id: {
    type: Object,
    required: false,
  },
  isShowItem: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isShowItem',
  'fetchItems',
])


let defaultItem = {
  id: '',
  nom_vendeur: '',
  tel_vendeur: '',
  frais_ramasseur: '',
  tel_ramasseur: '',
  tarif_id: '',
  adresse: '',
  ramasseur: '',
  ramasseur_id: '',
  statut: '',
  vendeur: '',
  nombre_colis: '',
  colis: [],
  histories: [],
}

const ramasseurs = await $api('/api/ramasseurs').then(response => response.data)

const itemData = ref(structuredClone(toRaw(defaultItem)))

const loadingItem = ref(false)


const getItemData = async id => {
  loadingItem.value = true
  await $api("/api/ramassage/"+id)
    .then(async response => {
      if (response.status === 200) {
        itemData.value = response.data
      }

      loadingItem.value = false
    })
    .catch(error => {
      loadingItem.value = false
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)
      }else{
        toast.error("something wrong")
      }
    })
}

watch(
  () => props.id, 
  newVal => {

    getItemData(newVal)
  }, { immediate: true }, // Trigger the watcher immediately
)

const onReset = () => {
  emit('update:isShowItem', false)
  emit('fetchItems')
  itemData.value = structuredClone(toRaw(defaultItem))
}

const loadingUpdate = ref(false)
const isActionGestionnaire = can('gestionnaire', 'action')
const isActionLivreur = can('livreur', 'action')

const parametrerRamassage = async  => {
  loadingUpdate.value = true
  $api({
    method: "POST",
    url: "/api/parametrerRamassage",
    data: {
      id: itemData.value.id,
      ramasseur_id: itemData.value.ramasseur_id,
      frais_ramasseur: itemData.value.frais_ramasseur,
    },
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
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




const currentTab = ref('Actions')

const tabsData = [
/*   'Actions',
  'Historique', */
  "tabler-adjustments-share",
  "tabler-logs",
]

const showParams = ref(false)


const colisHeaders = [
  { title: 'code', key: 'code' },
  { title: 'destination', key: 'destination' },
]
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    :model-value="props.isShowItem"
    scrollable
    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />


    <!-- 👉 Billing Address -->
    <AppCardActions
      title="Details Ramassage"
      :loading="loadingItem"
      no-actions
    >
      <VCard>
        <VCardText v-show="!showParams">
          <div
            v-if="isActionGestionnaire"
            class="text-end position-absolute right-0"
          >
            <VBtn
              icon
              class="rounded-0"
              @click="showParams = true"
            >
              <VIcon
                size="22"
                icon="tabler-settings"
              />
            </VBtn>
          </div>

          <VRow>
            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Code :
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.code }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Ramasseur :
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.ramasseur }} 
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Tel Ramasseur:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.tel_ramasseur }}
                    </p>
                  </td>
                </tr>
                <tr v-if="isActionLivreur">
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Frais de ramassage:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.frais_ramasseur }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Destination :
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.destination }} 
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Statut:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      <VChip
                        v-bind="statutInfos(itemData.statut)"
                        density="default"
                        label
                        size="small"
                      />
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>

            <VCol
              cols="12"
              lg="6"
            >
              <VTable class="billing-address-table">
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Vendeur:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.vendeur }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Tel Vendeur:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.tel_vendeur }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 class="text-h6 text-no-wrap mb-2">
                      Colis:
                    </h6>
                  </td>
                  <td>
                    <p class="text-body-1 mb-2">
                      {{ itemData.nombre_colis }}
                    </p>
                  </td>
                </tr>
              </VTable>
            </VCol>
          </VRow>

          <VTabs
            v-model="currentTab"
            grow
            class="disable-tab-transition"
            stacked
          >
            <VTab
              v-for="(tab, index) in tabsData"
              :key="index"
            >
              <VIcon
                size="40"
                :icon="tab"
              />
            </VTab>
          </VTabs>
          <VWindow
            v-model="currentTab"
            class="mt-3"
          >
            <VWindowItem>
              <ActionsRamassage
                :id="itemData.id"
                :current-statut="itemData.statut"
                :item="itemData"
              />
            </VWindowItem>

            <VWindowItem>
              <Histories :histories="itemData.histories" />
            </VWindowItem>
          </VWindow>


          <VDivider
            color="white"
            thickness="1"
            opacity="0.2"
            class="my-6"
          />

          <VDataTable
            :headers="colisHeaders"
            :items="itemData.colis"
            :items-per-page="5"
          />
        </VCardText>
        <VCardText
          v-show="showParams"
          v-if="isActionGestionnaire"
        >
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
                label="Frais de ramassage"
                type="number"
                placeholder="Frais de ramassage"
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
                color="secondary"
                @click="showParams = false"
              >
                retour 
              </VBtn>
              <VBtn
                :loading="loadingUpdate"
                @click="parametrerRamassage"
              >
                Envoyer 
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </AppCardActions>
  </VDialog>
</template>

<style lang="scss" scoped>
.v-card {
  max-height: 80vh;
  overflow-y: auto;
}
</style>


