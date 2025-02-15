<script setup>
import Histories from '@/components/global/histories.vue'
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  item: {
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

watch(
  () => props.item, 
  newVal => {

    itemData.value = { ...newVal } 
  }, { immediate: true }, // Trigger the watcher immediately
)

const onReset = () => {
  emit('update:isShowItem', false)
  emit('fetchItems')
  itemData.value = structuredClone(toRaw(defaultItem))
}

const loadingRamasseur = ref(false)
const isActionGestionnaire = can('gestionnaire', 'action')

const updateRamasseur = async  => {
  loadingRamasseur.value = true
  $api({
    method: "POST",
    url: "/api/updateRamasseur",
    data: {
      id: itemData.value.id,
      ramasseur_id: itemData.value.ramasseur_id,
    },
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
      }
      loadingRamasseur.value = false
    })
    .catch(error => {
      loadingRamasseur.value = false
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)
      }else{
        toast.error("something wrong")
      }
    })
}




const currentTab = ref('Actions')

const tabsData = [
  'Actions',
  'Historique',
]
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
    <VCard title="Billing Address">
      <VCardText>
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
                  <p
                    v-if="isActionGestionnaire && ['EN_ATTENTE','EN_COURS_RAMASSAGE','REPORTE'].includes(itemData.statut)"
                    class="text-body-1 mb-2"
                  >
                    <VRow class="ma-0">
                      <VCol
                        class="pa-0"
                        cols="9"
                        md="7"
                      >
                        <AppSelect
                          v-model="itemData.ramasseur_id"
                          placeholder="Ramasseurs"
                          :items="ramasseurs"
                          clearable
                          clear-icon="tabler-x"
                        />
                      </VCol>
                      <VCol
                        class="pa-0 "
                        cols="3"
                      >
                        <VBtn
                          :loading="loadingRamasseur"
                          class="ms-1"
                          rounded
                          icon="tabler-send-2"
                          color="secondary"
                          @click="updateRamasseur"
                        />
                      </VCol>
                    </VRow>
                  </p>
                  <p
                    v-else
                    class="text-body-1 mb-2"
                  >
                    {{ itemData.ramasseur }} 
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
        >
          <VTab
            v-for="(tab, index) in tabsData"
            :key="index"
          >
            {{ tab }}
          </VTab>
        </VTabs>
        <VWindow
          v-model="currentTab"
          class="mt-3"
        >
          <VWindowItem>
            <Actions
              :id="itemData.id"
              :current-statut="itemData.statut"
            />
          </VWindowItem>

          <VWindowItem>
            <Histories :histories="itemData.histories" />
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </VDialog>
</template>


