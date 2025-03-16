<script setup>
import { can } from '@layouts/plugins/casl'
import { format, parseISO } from 'date-fns'

const props = defineProps({
  id: {
    type: Object,
    required: false,

  },

})

const emit = defineEmits([
  'update:isShowItem',
  'fetchItems',
])

definePage({
  meta: {
    action: 'show',
    subject: 'factureLivreur',
  },
})

const route = useRoute()
let defaultItem = {
  id: '',
  nom_vendeur: '',
  tel_vendeur: '',
  tarif_id: '',
  commentaire_vendeur: '',
  code_ramassage: '',
  frais_livreur: '',
  adresse: '',
  livreur: '',
  livreur_id: '',
  tel_livreur: '',
  statut: '',
  vendeur: '',
  created_at: '',
  colisHistories: [],
}

const livreurs = await $api('/api/ramasseurs').then(response => response.data)

const itemData = ref(structuredClone(toRaw(defaultItem)))

const loadingItem = ref(false)

const getItemData = async () => {
  loadingItem.value = true
  await $api("/api/factureLivreur/"+route.params.id)
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

getItemData()







const isActionGestionnaire = can('gestionnaire', 'action')





const currentTab = ref('Actions')
const currentTabTABLE = ref('COLIS')

const tabsData = [
  "tabler-adjustments-share",
  "tabler-logs",
]

const resolveDate= oldDate => {
  if(oldDate == "")
    return oldDate
  const newDate = parseISO(oldDate) // Parse the ISO string
  
  return format(newDate, 'yyyy-MM-dd') // Format the date
}

const printFacture= () => {
  window.print()
}

const loadingUpdate = ref(false)

const parametrerColis = async () => {
  loadingUpdate.value = true
  await $api({
    method: "POST",
    url: "/api/parametrerColis",
    data: {
      id: itemData.value.id,
      livreur_id: itemData.value.livreur_id,
      frais_livreur: itemData.value.frais_livreur,
    },
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
        getItemData(itemData.value.id)
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


const headersColis = [
  { title: 'Code', key: 'code', sortable: false  },
  { title: 'Statut', key: 'statut', sortable: false },
  { title: 'frais', key: 'frais_livreur', sortable: false },
  { title: 'Montant', key: 'montant', sortable: false },
]

const headersRamassages = [
  { title: 'Code', key: 'code', sortable: false  },
  { title: 'Statut', key: 'statut', sortable: false },
  { title: 'frais', key: 'frais_ramasseur', sortable: false },
]

const headersRetours = [
  { title: 'Code', key: 'code', sortable: false  },
  { title: 'Statut', key: 'statut', sortable: false },
  { title: 'frais', key: 'frais_ramasseur', sortable: false },
]
</script>

<template>
  <AppCardActions
   
    :loading="loadingItem"
    no-actions
  >
    <VRow class="row-print">
      <VCol
        cols="10"
        class="col-print"
      >
        <VCard>
          <VCardText class="print-area">
            <VRow>
              <VCol cols="12">
                <VCard title="Informations Facture">
                  <VCardText>
                    <VRow>
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Code : <span class="text-body-1 mb-2">
                            {{ itemData.code }}
                          </span>
                        </h6>
                      </VCol>
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Livreur : <span class="text-body-1 mb-2">
                            {{ itemData.livreur }} 
                          </span>
                        </h6>
                      </VCol>
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Tel Livreur  : <span class="text-body-1 mb-2">
                            {{ itemData.tel_livreur }}
                          </span>
                        </h6>
                      </VCol> 
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Statut : <span class="text-body-1 mb-2">
                            <VChip
                              v-bind="statutInfos(itemData.statut)"
                              density="default"
                              label
                              size="small"
                            />
                          </span>
                        </h6>
                      </VCol> 
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Date : <span class="text-body-1 mb-2">
                            {{ resolveDate(itemData.created_at ) }}
                          </span>
                        </h6>
                      </VCol>
                    </VRow>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="12"
                lg="6"
              >
                <VCard title="Nombres">
                  <VCardText>
                    <VTable class="billing-address-table">
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre Total : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_total }}
                          </p>
                        </td>
                      </tr> 
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis livrés : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_livre }}
                          </p>
                        </td>
                      </tr> 
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis livrés partiellement : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_livre_partiellement }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis refusés : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_refuse }}
                          </p>
                        </td>
                      </tr> 
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis annulés : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_annule }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des ramassages : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_ramassage }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des retours :
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_retour }}
                          </p>
                        </td>
                      </tr>
                    </VTable>
                  </VCardText>
                </VCard>
              </VCol>

              <VCol
                cols="12"
                lg="6"
              >
                <VCard title="Montants">
                  <VCardText>
                    <VTable class="billing-address-table">
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Mantant facturé : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.montant_facture }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Mantant encaissé : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.montant_encaisse }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais Total: 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_total }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais des colis : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_colis }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais de ramassage : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_ramassage }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais de retour : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_retour }}
                          </p>
                        </td>
                      </tr>
                    </VTable>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </VCardText>
          <!-- actions and history -->
          <VCardText class="d-print-none">
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
                <ActionsLivreurFacture
                  :id="itemData.id"
                  :current-statut="itemData.statut"
                  @get-item-data="getItemData(itemData.id)"
                />
              </VWindowItem>

              <VWindowItem>
                <Histories :histories="itemData.histories" />
              </VWindowItem>
            </VWindow>
          </VCardText>
          <!-- TABLES COLIS RAMMASAGES RETOURS  -->
          <VCardText class="d-print-none">
            <VTabs
              v-model="currentTabTABLE"
              grow
              class="disable-tab-transition"
              stacked
            >
              <VTab>
                Colis
              </VTab>
              <VTab>
                ramassages
              </VTab>
              <VTab>
                retours
              </VTab>
            </VTabs>
            <VWindow
              v-model="currentTabTABLE"
              class="mt-3"
            >
              <VWindowItem>
                <VDataTable
                  :headers="headersColis"
                  :items="itemData.colis_livreur"
                  :items-per-page="10"
                >
                  <template #item.statut="{ item }">
                    <VChip
                      v-bind="statutInfos(item.statut)"
                      density="default"
                      label
                      size="small"
                    />
                    <span v-if="item.statut_retour"> -
                      <VChip
                        v-bind="statutInfos(item.statut_retour)"
                        density="default"
                        label
                        size="small"
                      />
                    </span>
                  </template>
                  <template #item.frais_livreur="{ item }">
                    <span v-if="item.statut == 'REFUSE'">
                      {{ item.frais_livreur /2 }}
                    </span>
                    <span v-else>
                      {{ item.frais_livreur }}
                    </span>
                  </template>
                </VDataTable>
              </VWindowItem>

              <VWindowItem>
                <VDataTable
                  :headers="headersRamassages"
                  :items="itemData.ramassages_livreur"
                  :items-per-page="10"
                >
                  <template #item.statut="{ item }">
                    <VChip
                      v-bind="statutInfos(item.statut)"
                      density="default"
                      label
                      size="small"
                    />
                  </template>
                </VDataTable>
              </VWindowItem> 
              <VWindowItem>
                <VDataTable
                  :headers="headersRetours"
                  :items="itemData.retours_livreur"
                  :items-per-page="10"
                >
                  <template #item.statut="{ item }">
                    <VChip
                      v-bind="statutInfos(item.statut)"
                      density="default"
                      label
                      size="small"
                    />
                  </template>
                </VDataTable>
              </VWindowItem>
            </VWindow>
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="2"
        class="d-print-none"
      >
        <VCard>
          <VCardText>
            <VBtn
              color="info"
              class="w-100"
              @click="printFacture"
            >
              Print
            </VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </appcardactions>
</template>

<style>
.row-print {
  width: 100%;
}

@media print {
  .row-print {
    display: block;
  }

  .col-print {
    max-width: 100%;
  }

  .v-col-12 {
    padding: 6px;
  }

  @page {
    margin: 0;
    size: a4;

    /* Each page is exactly 100mm */
  }

  body * {
    visibility: hidden;
  }

  /* Ensure print content fits exactly into a page */
  .print-content {
    display: block;
    overflow: hidden;
    width: 100mm;
    height: 100mm; /* Fixes size */
    page-break-before: always; /* Ensures each section starts on a new page */
  }

  .print-area * {
    visibility: visible;
  }

  .layout-page-content {
    padding: 0;
  }

  .v-card-item {
    padding: 0;
  }

  .v-card-content .v-card-item {
    padding: 24px;
  }
}
</style>


